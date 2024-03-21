let input = document.querySelector("div input");
let progress = document.querySelector("div .progress");
let counter = document.querySelector("div .counter");
let maxLength = input.getAttribute("maxlength");
counter.innerHTML = maxLength;
input.oninput = ( ) => {
  counter.innerHTML = maxLength - input.value.length;
  progress.style.width = `${input.value.length / maxLength * 100}%`
  if (counter.innerHTML == 0) {
    counter.classList.add("zero");
    progress.classList.add("full");
  } else {
    counter.classList.remove("zero");
    progress.classList.remove("full");
  }
}