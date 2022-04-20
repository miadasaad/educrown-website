$(document).ready(function () {
    // change color of any link when click
    $('.navbar a').click(function () {
        $('.navbar a').removeClass('active');
        $(this).addClass('active')
    })

    // toggle
    
    
        $('.toggle').click(function () {
            $('.toggler').slideToggle();
        })
    
    // change background of navbar
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $(".navbar").css("background", "black");
        }
        else {
            $(".navbar").css("background", "transparent");
        }
    })
})


// const myTimeout = setTimeout(myGreeting);
// function myGreeting() {
//   $('.spinning').show()
// }
// setTimeout(function(){
//  clearTimeout(myTimeout);
//  $('.spinning').hide()
// },4000)
