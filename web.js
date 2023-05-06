const navBar = document.querySelector(".nav");
const scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    navBar.style.opacity = 1;
    navBar.style.visibility = 'visible';
  } else {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
        navBar.style.opacity = 0;
        navBar.style.visibility = 'hidden';
    }
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
} // nav bar disappear and appear functions

const bg = document.querySelector(".backgroundImg");

window.addEventListener("scroll", function(){ 
    bg.style.backgroundPositionX = -(window.pageYOffset / 8) + "px";
});// moving main img on scroll event


const games = document.querySelector('.games');

games.addEventListener('mouseenter', () => {
  games.classList.add('hover');
});

games.addEventListener('mouseleave', () => {
  games.classList.remove('hover');
});








// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       console.log(entry);
//       if (entry.isIntersecting) {
//         entry.target.classList.add("slide 2s linear");
//       }
//     });
//   });
  
//   const animationEls = document.querySelectorAll(".creature3");
//   animationEls.forEach((el) => observer.observe(el));
//   לשאול בתגבור ביום שני 










  



























// scrollableElement.addEventListener('wheel', checkScrollDirection);

// function checkScrollDirection(event) {
//   if (event.deltaY < 0) {
//     navBar.style.opacity = 1;
//     navBar.style.visibility = 'visible';
//   } else {
//     const scrollPosition = window.scrollY;
//     if (scrollPosition > 530) {
//       navBar.style.opacity = 0;
//       navBar.style.visibility = 'hidden';
//     }
//   }
// }







