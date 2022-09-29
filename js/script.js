// prendo tutte le classi dropdowns dal documento
let dropdowns = document.querySelectorAll('.dropdown');

// imposto un loop per tutti gli elementi dropdown
dropdowns.forEach(dropdown => {
    let select = dropdown.querySelector('.select');
    let caret = dropdown.querySelector('.caret');
    let menu = dropdown.querySelector('.menu');
    let options = dropdown.querySelectorAll('.menu li');
    let selected = dropdown.querySelector('.selected');
})

// imposto un evento al click per selezionare gli elementi

select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
})