document.addEventListener( 'DOMContentLoaded', function() {

        console.log( 'Script loaded!' );
        handleFloatingLabel();
        handleQualityRange();
        handleDropdownButton();
    });

function handleQualityRange() {
    let input = document.querySelector('.js-quality-input');
    input.addEventListener('input', handleInputChange);
}

function handleInputChange(e) {
    let input = document.querySelector('.js-quality-input');
    let holder = document.querySelector('.js-range-holder');
    let value = e.target.value;

    holder.dataset.value = value;

    let x = input.offsetWidth/input.max * holder.dataset.value;
    holder.style.marginLeft = x-8 +"px";

    console.log(holder.dataset.value);
}

function handleFloatingLabel() {
    // let label = document.querySelector('.js-floating-label');
    let input = document.querySelector('.js-name-input');

    input.addEventListener('blur', handleInputBlur);

}

function handleInputBlur(e) {
    // console.log(e.target.value);

    //Indien de input niet meer leeg is, dan voegen we de class 'is-floating' toe
    if (e.target.value != '') {
        e.target.classList.add('is-floating');
    }
    else {
        e.target.classList.remove('is-floating');
    }
}

function togglePassword() {
    var passwordInput = document.querySelector(".js-password-input");

    let svgshow = document.querySelector(".c-password-toggle__symbol--show");
    let svghide = document.querySelector(".c-password-toggle__symbol--hide");

    svgshow.classList.toggle("c-password-toggle__symbol--show")
    svgshow.classList.toggle("c-password-toggle__symbol--hide")

    svghide.classList.toggle("c-password-toggle__symbol--show")
    svghide.classList.toggle("c-password-toggle__symbol--hide")

    if (passwordInput.type === "password") {
        passwordInput.type = "text";

    } else {
        passwordInput.type = "password";
    }
}

function handleDropdownButton() {
  // de input zelf, de holder en de value
  let dropdowns = document.querySelectorAll(".c-dropdown__input");

  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', dropdownClicked);
  }
}

function dropdownClicked(e) {
  e.preventDefault();
  e.target.classList.toggle("js-dropdown-input");
}
