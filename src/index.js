
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

