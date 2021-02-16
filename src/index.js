const transition_el = document.querySelector(".transition");
const transition_heart = document.querySelector(".transition-heart");

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
