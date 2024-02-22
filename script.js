let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let hieght = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + hieght) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .slider', { origin: 'top' });
ScrollReveal().reveal('.home-content h1, .about-img, .card', { origin: 'left' });
ScrollReveal().reveal('.home-img, .services-container, .skills-box, .contact form, .skills-container a', { origin: 'bottom' });
/*==================== scroll reveal ====================

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const slideWidth = slides[0].clientWidth;
  let index = 0;

  function nextSlide() {
    index++;
    if (index === slides.length) {
      index = 0;
    }
    updateSlider();
  }

  function updateSlider() {
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
*/

/*==================== typed js ====================*/

var modal1 = document.getElementById("myModal1");
var btn = document.getElementById("learn-more-btn");
var span = document.getElementsByClassName("close")[0];
function openModal1() {
  modal1.style.display = "block";
}
function closeModal1() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

var modal2 = document.getElementById("myModal2");
var span = document.getElementsByClassName("close")[0];
function openModal2() {
  modal2.style.display = "block";
}
function closeModal2() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal2.style.display = "none";
  }
}

var modal3 = document.getElementById("myModal3");
var span = document.getElementsByClassName("close")[0];
function openModal3() {
  modal3.style.display = "block";
}
function closeModal3() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal3.style.display = "none";
  }
}
