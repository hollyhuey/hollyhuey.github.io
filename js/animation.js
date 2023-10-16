// write typing text
window.onload = function() {
  // https://github.com/mattboldt/typed.js/
  new Typed('#typing-text', {
    strings: ["COMMUNICATE WITH OTHERS?", "LEARN ABOUT THE WORLD?", "IMPROVE OUR ENVIRONMENTS?"],
    // strings: ["COMMUNICATE?", "LEARN?", "^500DRIVE CHANGE?"],
    typeSpeed: 60,
    backDelay: 1500,
    fadeOut: false,
    backSpeed: 30,
    smartBackspace: true,
    loop: true,
    showCursor: false
  });

  // mouseover to switch headshots
  $('#headshot').hover(function() {
    $(this).attr('src', 'assets/photos/headshot-sketch2.png');
  }, function() {
    $(this).attr('src', 'assets/photos/headshot.png');
  });

}; // close window onload

// function menuOnClick() {
//   document.getElementById("menu-bar").classList.toggle("change");
//   document.getElementById("hamburger").classList.toggle("change");
//   document.getElementById("menu-bg").classList.toggle("change-bg");
// }