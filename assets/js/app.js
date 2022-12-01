// Scroll Header
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 1) {
        $("#navbar, .totop-btn").addClass("scrolled");
    } else {
        $("#navbar, .totop-btn").removeClass("scrolled");
    }
});

// Open menu
$(".open-navbar").on("click", function(el){
    el.preventDefault();
    $("#navbar .nav").toggleClass("opened");
});

// Navbar scroll function
const offset = 45;
$("[data-nav]").on("click", function (el) {
    el.preventDefault();

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = document.getElementById($(this).data('nav')).getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});

// AOS init
AOS.init({once: true,});

let audio = document.getElementById("audio");
// play/pause function
$(".audio-control").on('click', function (el) {
    el.preventDefault();
    if (audio.paused) {
        audio.play();
        audio.volume = 0.5;
        $(this).find('.ri').removeClass('ri-volume-off').addClass('ri-volume-high');
    } else {
        audio.pause();
        $(this).find('.ri').removeClass('ri-volume-high').addClass('ri-volume-off');
    }
});

// Modal Popup
let video;
var mPopup = new bootstrap.Modal(document.getElementById('mPopup'));
$("[data-video]").on("click", function(el){
    el.preventDefault();
    // Set video src
    $("#mPopup").find("video").prop("src", $(this).data("video"));
    // Create instance
    video = document.getElementById("video");
    // Show popup
    mPopup.show();
    
});

$("#mPopup").on("shown.bs.modal", function(){
    // Mute audio
    audio.pause();
    // Play video after popup
    video.play();
});

$("#mPopup").on("hide.bs.modal", function(){
    video.pause();
    $("#mPopup").find("video").prop("src", "");
    video = null;
});