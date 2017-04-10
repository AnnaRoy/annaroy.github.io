(function () {

    "use strict";
    var toggles = document.querySelectorAll(".navbar-btn");
    var elem = document.querySelector(".navbar-right");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
            (elem.classList.contains("active") === true) ? elem.classList.remove("active") : elem.classList.add("active");
        });
    }

})();
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('.menu').addClass('stickytop');
        }
        else {
            $('.menu').removeClass('stickytop');
        }
    });
});
$(function () {
    var $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});