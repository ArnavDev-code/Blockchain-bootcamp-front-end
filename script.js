document.addEventListener("DOMContentLoaded", function () {
  // Countdown Timer 
  const eventDate = new Date("December 15, 2024 10:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft < 0) {
      document.getElementById("countdown-timer").innerHTML = "<h3>Event Started!</h3>";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

    // Countdown Alert (1 Hour Left)
    if (timeLeft <= 3600000 && timeLeft > 0) {
      alert("The event is starting in less than an hour! Get ready!");
    }
  }

  const countdownInterval = setInterval(updateCountdown, 1000);

  // Form Handling
  document.getElementById("registration-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for registering!");
  });

  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
  });

  // Slider Functionality (Automatic Transition + Manual Navigation)
  let index = 0;
  const slides = document.querySelectorAll('.slider-item');
  const dots = document.querySelectorAll('.dot');
  
  // Show the first slide by default
  slides[index].style.display = "block";
  dots[index].classList.add("active");
  
  // Next Slide Function
  function nextSlide() {
    slides[index].style.display = "none";
    dots[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].style.display = "block";
    dots[index].classList.add("active");
  }

  // Previous Slide Function
  function prevSlide() {
    slides[index].style.display = "none";
    dots[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].style.display = "block";
    dots[index].classList.add("active");
  }

  // Automatic Slide Transition every 1.5 seconds
  setInterval(nextSlide, 1500);

  // Button event listeners for navigation
  document.querySelector('.next-btn').addEventListener('click', nextSlide);
  document.querySelector('.prev-btn').addEventListener('click', prevSlide);

  // Dot navigation event listeners
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      slides[index].style.display = "none";
      dots[index].classList.remove("active");
      index = idx;
      slides[index].style.display = "block";
      dots[index].classList.add("active");
    });
  });

  // Scroll Progress Bar
  const progressBar = document.querySelector('.scroll-progress-bar');
  window.addEventListener('scroll', function () {
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / docHeight) * 100;
    progressBar.style.width = scrollPercentage + "%";
  });

  // Smooth Scrolling for Anchor Links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Responsive Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });

  // Hover Effects for Buttons and Interactive Elements
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.classList.add('hovered');
    });
    button.addEventListener('mouseleave', () => {
      button.classList.remove('hovered');
    });
  });

});

