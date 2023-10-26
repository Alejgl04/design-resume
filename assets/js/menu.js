
document.addEventListener("DOMContentLoaded", (event ) => {

  let buttonMenu = document.querySelector(".layout__menu-toggle");
  let iconBar = document.querySelector(".layout__menu-toggle .fa-bars");
  let iconMark = document.querySelector(".layout__menu-toggle .fa-xmark");
  let asideDOM = document.querySelector(".layout__aside");

  buttonMenu.addEventListener('click', () => {

    let visible = document.querySelector('.layout__aside--visible');

    if ( !visible ) {
      asideDOM.classList.add('layout__aside--visible');
      iconBar.style.opacity  = 0;
      iconMark.style.opacity = 1;
    }
    else {
      asideDOM.classList.remove('layout__aside--visible');
      iconBar.style.opacity  = 1;
      iconMark.style.opacity = 0;
    }

  });

});