$(function(){
    window.onload = function(){
        $('[id^="load"]').each(function(){
            $(this).load($(this)[0].id.substring(4,100) + ".html");
        });
    }
    $(document).on('click','.menu-trigger',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.overlay').removeClass('open');
            $('.menu-text').text("menu");
            $('.menu-container .menu').slideUp('1500');
            $('#home').css('z-index',9999);
        } else {
            $(this).addClass('active');
            $('.menu-text').text("close");
            $('.menu-container .menu').slideDown('1500');
            $('#home').css('z-index',0);
        }
    });
    $('.overlay').on('click',function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $('.menu-trigger').removeClass('active');
            $('main').removeClass('open');
            $('header').removeClass('open');
            $('.nav-right').removeClass('open');
        }
    });
});


