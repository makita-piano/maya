$(function(){
    $(document).on('click','.menu-trigger',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
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
    $(document).on('click','.menu-item',function(){
        $('.menu-trigger').removeClass('active');
        $('.menu-text').text("menu");
        $('.menu-container .menu').slideUp('1500');
        $('#home').css('z-index',9999);	
    })
});

