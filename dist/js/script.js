$(document).ready(function () {
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
            if ($(this).scrollTop() >= 1) {
                $('.header-wrap').addClass('stickytop');
            }
            else {
                $('.header-wrap').removeClass('stickytop');
            }
        });
    });
    $('.slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 4000,
        slidesToShow: 1,
        cssEase: 'linear'

    });
    $(".plan-button-basic").hover(function () {
        $(".plan-button-basic, .plan-basic ").toggleClass("color");
    });
    $(".plan-button-pro").hover(function () {
        $(".plan-button-pro, .plan-pro ").toggleClass("color");
    });
    $(".plan-button-prem").hover(function () {
        $(".plan-button-prem, .plan-prem ").toggleClass("color");
    });
});

		