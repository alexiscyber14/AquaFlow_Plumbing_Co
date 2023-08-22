
window.scrollTo(0,1)

const headerMenu =()=>{
  const menuBar = document.querySelector('.fa-bars');
  const menuUl = document.querySelector('.links')
  const closeMenu = document.querySelector('.fa-times')
  closeMenu.style.display='none';
  menuBar.addEventListener('click',function(){
      console.log("am here")
      menuUl.style.transition = 'left 0.5s ease';
      menuUl.style.left = '0%';
      menuBar.style.display='none';
      closeMenu.style.display='block'
  })
  closeMenu.addEventListener('click', function(){
      menuUl.style.transition = 'left 0.5s ease';
      menuUl.style.left = '-85%';
      closeMenu.style.display='none';
      menuBar.style.display='block';
  })
  }
headerMenu();

(function(){
// Select the header element
const header = document.querySelector('.sticky-header');
const icob = document.querySelector('.fa-bars');
const icot = document.querySelector('.fa-times');
const aim = document.querySelector('.aim');
console.log(icob)

// Listen for the scroll event
window.addEventListener('scroll', () => {
  // Determine the scroll position
  const scrollPosition = window.scrollY;

  // Set a threshold value to determine when to change the background color
  const threshold = 100;

  // Check if the scroll position has passed the threshold
  if (scrollPosition > threshold) {
    header.style.backgroundColor = 'white';
    icob.style.color = 'rgb(2, 97, 119)';
    aim.style.color= 'rgb(2, 97, 119)';
    icot.style.color = 'rgb(2, 97, 119)';

  } else {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    icob.style.color='white';
    icot.style.color='white';
    aim.style.color='white';
  }
});
})();

//slidr of content js
(function() {
const rightSlider =()=>{
  var callBtns = document.querySelectorAll('.side-call');
  var contentContainer = document.querySelector('.slide-in');
  var contentInside = document.querySelectorAll('.content');
  const menuUl = document.querySelector('.links');
  const closeMenu = document.querySelector('.fa-times');
  const menuBar = document.querySelector('.fa-bars');
  const closeSlideIn = document.querySelector('.close-slide-in');
  callBtns.forEach((btn, index) => {
    btn.addEventListener('click', function () {
      contentContainer.style.transition = 'left 0.5s ease';
      contentContainer.style.left = '0%';
      contentInside[index].style.display= 'flex';
      menuUl.style.transition = 'left 0.5s ease';
      menuUl.style.left = '-85%';
      menuBar.style.display='block';
      closeMenu.style.display='none';
    });
    closeSlideIn.addEventListener('click', function(){
    contentContainer.style.left='100%';
    setTimeout(() => {
      contentInside[index].style.display= 'none';
    }, 1000);
});
});
};
rightSlider();
})();



(function() {
  const viewMore =()=>{
    var callBtns = document.querySelectorAll('.viewMore');
    var contentContainer = document.querySelector('.slide-in');
    var contentInside = document.querySelectorAll('.content');
    const menuUl = document.querySelector('.links');
    const closeMenu = document.querySelector('.fa-times');
    const menuBar = document.querySelector('.fa-bars');
    const closeSlideIn = document.querySelector('.close-slide-in');
    callBtns.forEach((btn, index) => {
      btn.addEventListener('click', function () {
        contentContainer.style.transition = 'left 0.5s ease';
        contentContainer.style.left = '0%';
        contentInside[index].style.display= 'flex';
        menuUl.style.transition = 'left 0.5s ease';
        menuUl.style.left = '-85%';
        menuBar.style.display='block';
        closeMenu.style.display='none';
      });
      closeSlideIn.addEventListener('click', function(){
      contentContainer.style.left='100%';
      setTimeout(() => {
        contentInside[index].style.display= 'none';
      }, 1000);
  });
  });
  };
  viewMore();
  })();


  (function() {
    const footer =()=>{
      var callBtns = document.querySelectorAll('.ft-a');
      var contentContainer = document.querySelector('.slide-in');
      var contentInside = document.querySelectorAll('.content');
      const menuUl = document.querySelector('.links');
      const closeMenu = document.querySelector('.fa-times');
      const menuBar = document.querySelector('.fa-bars');
      const closeSlideIn = document.querySelector('.close-slide-in');
      callBtns.forEach((btn, index) => {
        btn.addEventListener('click', function () {
          contentContainer.style.transition = 'left 0.5s ease';
          contentContainer.style.left = '0%';
          contentInside[index].style.display= 'flex';
          menuUl.style.transition = 'left 0.5s ease';
          menuUl.style.left = '-85%';
          menuBar.style.display='block';
          closeMenu.style.display='none';
        });
        closeSlideIn.addEventListener('click', function(){
        contentContainer.style.left='100%';
        setTimeout(() => {
          contentInside[index].style.display= 'none';
        }, 1000);
    });
    });
    };
    footer();
    })();
// initializing a JavaScript object









(function() {
  const projects = () => {
    const slider = document.querySelector('.slidert');
    const prevBtn = document.getElementById('prevBtna');
    const nextBtn = document.getElementById('nextBtna');
    const scrollAmount =360; // Change this value to adjust the scroll amount in pixels

    function scrollToLeft() {
      slider.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }

    function scrollToRight() {
      slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }

    // Click event listeners for the buttons
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', scrollToLeft);
      nextBtn.addEventListener('click', scrollToRight);
    }
  };

  projects();
})();

