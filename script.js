const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

const stickyNav = function (entries) {
  const entry = entries[0];
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add("nav__sticky");
  } else nav.classList.remove("nav__sticky");
};

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
navObserver.observe(header);
