 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(TextPlugin)
  const title = document.querySelector('.home-title');
  // gsap code here!
  gsap.to(".home-title", {
    duration: 2,
  })
 });
