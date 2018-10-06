document.addEventListener('DOMContentLoaded', slideShow);

const api = 'AIzaSyBghJmzrFiYYr4ClicgFYHvN4ubVsnJxuE';

 function slideShow() {
    var elems = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(elems, {
        fullWidth: false,
        duration: 400,
        noWrap: false,
        indicators: true,
        numVisible: 2
      });
  }
pauseSlide();
function pauseSlide() {
    const elem = document.querySelector('.carousel')
    const slide = setInterval(() => {
        var instance = M.Carousel.getInstance(elem);
        instance.next();
}, 8000)
elem.addEventListener('mousedown', () => {
    clearInterval(slide);
})
elem.addEventListener('mouseup', () => {
    pauseSlide();
})
}

window.onscroll = () => {myFunction()};

const navbar = document.querySelector('nav');
const sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  

  let map;
  let marker;
  function initMap() {
      const loc = {lat: 30.403844, lng: -86.878235};
    map = new google.maps.Map(document.querySelector('.maps'), {
      center: loc,
      zoom: 15
    });

     marker = new google.maps.Marker({
        position: loc,
        map: map,
        title: 'Hello World!'
      });
  }


