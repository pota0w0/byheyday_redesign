//popup
$(document).ready(function(){
    $('.popup').slideUp(0);
    $('.popup').slideDown('slow');

    function setCookie(name, value, expiredays) {  
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };

    $('.popup a').click(function(){
        var chk = $('#chkBox').prop('checked');

        if(chk){ 
            setCookie('maindiv','done',1);
        }

        $('.popup').slideUp('slow');
    });

    cookiedata = document.cookie;
    if(cookiedata. indexOf('maindiv=done') < 0 ){ 
        $('.popup').css('display','block'); 
    }else{ 
        $('.popup').css('display','none'); 
    }
});

//gnb
$(document).ready(function(){
    $(window).resize(function(){
        var w = $(window).innerWidth();
        
        if(w >= 1024){
            $('.panelbtn a').removeClass('on');
            $('.panelbtn').removeClass('on');
            $('.gnb').removeClass('on');
            $('.blackbg').removeClass('on');
            $('.gnb .subnav').slideUp(0);
            
            pcGnb();
        }else{
            $('.gnb .topnav01, .gnb .topnav02').off('mouseenter');
            $('.gnb .topnav01, .gnb .topnav02').off('focus');
            $('.gnb > ul > li').off('mouseleave');
            $('.gnb .subnav').css('height','auto');
            
            
            
            mtGnb();
        }
    });
    
    $(window).trigger('resize');
    
    $('.panelbtn a ,.blackbg').click(function(){
        $('.panelbtn a').toggleClass('on');
        $('.blackbg').toggleClass('on');
        $('.panelbtn').toggleClass('on');
        $('.gnb').toggleClass('on');
        
        $('.gnb .subnav').stop().slideUp(0);
    });
    
    function mtGnb(){
        $('.gnb .topnav').off('click');
        $('.gnb .topnav').click(function(){
            var is = $(this).next().is(':hidden');
            
            if(is){
                $('.gnb .topnav').removeClass('on');
                $('.gnb .subnav').slideUp(0);
                
                $(this).addClass('on');
                $(this).next().slideDown('fast');
                
            }else{
                $('.gnb .topnav').removeClass('on');
                $('.gnb .subnav').slideUp(0);
                
            }
            
        });
    }
    
    function pcGnb(){
        $('.gnb .topnav01').mouseenter(function(){
            $(this).addClass('on');
            
            $('.gnb .sub01, .subnavbg').stop().slideDown('fast');
            
            $(this).parent().mouseleave(function(){
                $('.gnb .topnav01').removeClass('on');
                $('.gnb .sub01, .subnavbg').stop().slideUp('fast');
            });
        });
        $('.gnb .topnav02').mouseenter(function(){
            $(this).addClass('on');
            $('.gnb .sub02, .subnavbg').stop().slideDown('fast');
            
            $(this).parent().mouseleave(function(){
                $('.gnb .topnav02').removeClass('on');
                $('.gnb .sub02, .subnavbg').stop().slideUp('fast');
            });
        });
        
        $('.gnb .topnav01').focus(function(){
            $('.gnb .sub01, .subnavbg').stop().slideDown('fast');
        
            $('.gnb .topnav01').removeClass('on');
            $(this).addClass('on');
        });
        $('.gnb .topnav02').focus(function(){
            $('.gnb .sub02, .subnavbg').stop().slideDown('fast');
        
            $('.gnb .topnav02').removeClass('on');
            $(this).addClass('on');
        });
        
        $('.gnb .sub01 li:last a').keydown(function(e){
            if(e.keyCode==9){ 
                if(!e.shiftKey){ 
                    $('.gnb .sub01, .subnavbg').stop().slideUp('fast');
                    $('.gnb .topnav01').removeClass('on');
                }
            } 
        });
        $('.gnb .sub02 li:last a').keydown(function(e){
            if(e.keyCode==9){ 
                if(!e.shiftKey){ 
                    $('.gnb .sub02, .subnavbg').stop().slideUp('fast');
                    $('.gnb .topnav02').removeClass('on');
                }
            } 
        });
        $('.gnb .subnav li:last-child a').focus(function(){
            $('.gnb .topnav').removeClass('on');
            $(this).parents('.subnav').prev().addClass('on');
        });
        $('.gnb .topnav').keydown(function(e){
            if(e.keyCode==9){ 
                if(e.shiftKey){ 
                    $('.gnb .subnav, .subnavbg').stop().slideUp('fast');
                    $('.gnb .topnav').removeClass('on');
                }
            }
        });
    }
});