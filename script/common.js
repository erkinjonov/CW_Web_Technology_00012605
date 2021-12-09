"use strict";
var preloader = document.querySelector(".preloader"),
    headerCont = document.querySelector(".header-content");
preloader && (headerCont.style.display = "none", document.body.classList.add("loaded_hiding"), window.setTimeout(function() { body.classList.add("loaded"), body.classList.remove("loaded_hiding"), headerCont.style.display = "flex" }, 2e3));
var links = document.querySelectorAll(".allHeader-nav__list_link"),
    work = document.querySelector("#work"),
    about = document.querySelector("#about"),
    process = document.querySelector("#process"),
    contact = document.querySelector("#contact");
if (work && links[1].classList.add("active"), about) {
    links[2].classList.add("active"),
        function goCount() {
            for (var a = document.querySelectorAll(".green-panel__content_card_number"), b = [], c = function(c) {
                    var d = a[c].getAttribute("data-number"),
                        e = 20;
                    b[c] = setInterval(function() {+a[c].innerHTML < d ? (a[c].innerHTML++, e += 5) : clearInterval(b[c]) }, e)
                }, d = 0; d < a.length; d++) c(d)
        }()
}
process && links[3].classList.add("active"), contact && links[4].classList.add("active");
var indexList = document.querySelector(".index-nav__list"),
    burger = document.querySelector(".index-nav__burger"),
    bar = document.querySelector(".index-nav__list-bar"),
    body = document.querySelector("body");
burger && burger.addEventListener("click", function() { burger.classList.toggle("active"), burger.classList.contains("active") ? (bar.style = "right:0;", body.style = "overflow:hidden;") : (bar.style = "right:-100%;", body.style = "overflow:auto;") });
var barr = document.querySelectorAll(".skills-bar__left_bar"),
    progressBar = document.querySelectorAll(".skills-bar__left_bar_bar div"),
    progressText = document.querySelectorAll(".skills-bar__left_bar_text span");
if (barr) {
    var goBars = function() { for (var a, b = 0; b < barr.length; b++) a = barr[b].getAttribute("data-bar"), progressText[b].innerHTML = a, progressBar[b].style = "width:".concat(a, "%;") };
    window.addEventListener("scroll", function() { 650 <= window.pageYOffset && goBars() })
}
var count = document.querySelectorAll(".green-panel__content_card_number");
if (count) {
    var _goCount = function() {
        for (var a = [], b = function(b) {
                var c = count[b].getAttribute("data-number"),
                    d = 20;
                a[b] = setInterval(function() {+count[b].innerHTML < c ? (count[b].innerHTML++, d += 5) : clearInterval(a[b]) }, d)
            }, c = 0; c < count.length; c++) b(c)
    };
    window.addEventListener("scroll", function() { 1250 <= window.pageYOffset && _goCount() })
}
var mySwiper = document.querySelector(".index-slider");
if (mySwiper) var swiper = new Swiper(".swiper-container", { grabCursor: !0, loop: !0, pagination: { el: ".swiper-pagination", dynamicBullets: !0, clickable: !0 }, keyboard: { enabled: !0 }, autoplay: { delay: 3e3, disableOnInteraction: !1 } });
var swiper = new Swiper(".process-slider", { loop: !0, keyboard: { enabled: !0 }, grabCursor: !0, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, pagination: { el: ".swiper-pagination", clickable: !0 } }),
    section = document.querySelector(".process-main"),
    processPrev = document.querySelector(".process-slider__navigations_prev"),
    processNext = document.querySelector(".process-slider__navigations_next");
section && (window.matchMedia("(min-width: 481px)").matches ? (processPrev.innerHTML = "previous project", processNext.innerHTML = "next project") : (processPrev.innerHTML = "", processNext.innerHTML = "")), new WOW().init();