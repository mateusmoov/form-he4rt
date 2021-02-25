const transition_el = document.querySelector(".transition");
const transition_heart = document.querySelector(".transition-heart");
const transition_register = document.querySelector(".transition-form");
const transition_heartStroke = document.querySelector(
  ".transition-heartStroke"
);

function transitionContainer() {
  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 100);
}

function transitionHeart() {
  setTimeout(() => {
    transition_heart.classList.remove("is-active");
  }, 100);
}

function transitionRegister() {
  setTimeout(() => {
    transition_register.classList.remove("is-active");
  }, 100);
}

function transitionHeartStroke() {
  setTimeout(() => {
    transition_heartStroke.classList.remove("is-active");
  }, 100);
}

window.onload = () => {
  const transition_page = document.querySelector(".transition-page");
  const anchors = document.querySelectorAll("a");

  setTimeout(() => {
    transition_page.classList.remove("is-active");
  }, 500);

  anchors.forEach((anchor) =>
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;
      console.log(target);
      transition_page.classList.add("is-active");

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    })
  );
};
