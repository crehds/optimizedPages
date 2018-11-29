const ipad = window.matchMedia('screen and (max-width: 767px)');
const menu = document.querySelector('.menú');
const burguerButton = document.querySelector('#burguer-menu');
console.log(burguerButton);
ipad.addListener(validation);//Método propio de un ipad

// Función para agregar y ocultar el menú
function validation(event) {
  if (event.matches) {
    burguerButton.addEventListener('click', hideShow);
  } else {
    burguerButton.removeEventListener('click', hideShow);
  }
}

validation(ipad);

// Función para agregar y remover el escuchador de eventos
function hideShow() {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
  }
}
