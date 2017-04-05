$(document).ready(function() {
    $("a.fancyimage").fancybox({
        padding:0
    });


    $(function() {
        var $page = $('html, body');
        $('a[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 1000);
            return false;
        });
    });
}); 