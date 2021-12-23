const WRAPPER_HTML = document.querySelector(".wrapper").innerHTML;

function handleClick() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML =
    WRAPPER_HTML + "<span class='error'>Please provide a valid email</span>";
  const input = document.querySelector(".input");
  input.classList.add("input--error");
}
