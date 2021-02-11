const transition_el = document.querySelector(".transition");
const inputUser = document.getElementById("user");

function transitionContainer() {
  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 100);
}
