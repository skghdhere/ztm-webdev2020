const nav = document.querySelector(".nav");

nav.addEventListener("click", () => {
  window.location.href = "https://skghdhere.github.io/ztm-webdev2020/";
});

// Go to top button
var btn = document.querySelector("#button");

window.onscroll = function () {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    btn.className = "show";
  } else btn.className = "";
};

btn.addEventListener("click", () => scrollTo(0, 0));
