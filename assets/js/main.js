$(function(){

    $(window).scroll(function(){
        let info = $(this).scrollTop()
        console.log(info)
        if (info>=40) {
            // $('#navbar').removeClass('py-4','shadow-sm')
            $('#navbar')
				.removeClass('navbarTransparent')
				.addClass('navbarColored shadow-lg');
            // $('#logo-navbar').css('height','30px');
            // $('#logo-navbar').css('opacity','0');
            // $('#corp-name').css('opacity','1');
        }

        if (info<40) {
            // $('#navbar').addClass('py-4','shadow-sm')
            $('#navbar')
				.addClass('navbarTransparent')
				.removeClass('navbarColored shadow-lg');
            // $('#logo-navbar').css('height','50px');
            // $('#logo-navbar').css('opacity','1');
            // $('#corp-name').css('opacity','0');
        }
    })
})