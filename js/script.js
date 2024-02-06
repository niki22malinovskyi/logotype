const clickMenu = document.querySelector(".menu-btn");
const menuList = document.querySelector(".header-bottom__wrap__menu-search");

clickMenu.addEventListener("click", () => {
  clickMenu.classList.toggle("active");
  menuList.classList.toggle("active");
  document.body.classList.toggle("fix");
});

const bannerBtn = document.querySelector(".banner__menu-btn");
const bannerMenu = document.querySelector(".banner__inner__menu");

bannerBtn.addEventListener("click", () => {
  if (bannerMenu.classList.contains("active")) {
    bannerMenu.classList.remove("active");
    bannerMenu.style.maxHeight = 0;
  } else {
    bannerMenu.classList.add("active");
    bannerMenu.style.maxHeight = bannerMenu.scrollHeight + "px";
  }
});

// Radial bar

let circulStartValue = 0,
  circulEndValue = 6.4,
  speed = 50;

function setProgress(percent) {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 10) * circumference;

  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.strokeDasharray = `${circumference}, ${circumference}`;
  progressBar.style.strokeDashoffset = offset;
}

setProgress(circulEndValue);

let progressCircul = setInterval(() => {
  circulStartValue += 0.1;
  const progressText = document.querySelector(".progress-text");
  progressText.textContent = `${circulStartValue.toFixed(1)}`;

  if (circulStartValue.toFixed(1) === circulEndValue.toFixed(1)) {
    clearInterval(progressCircul);
  }
}, speed);

// Linear Bar

function setProgressLinear(number) {
  const progressBar = document.querySelector(".banner__progress-linear-bar");
  progressBar.style.width = number + "%";
}

setProgressLinear(70);

// Light/Dark theme

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      document.getElementById('slider').checked = true;
  } else {
      setTheme('theme-light');
    document.getElementById('slider').checked = false;
  }
})();
