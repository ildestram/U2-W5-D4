let items = document.getElementById('items');

function bold() {
    let itemsSelected = document.getElementsByClassName('item-b');

    for(let item of itemsSelected) {
        item.classList.add('bold');
    }
}

function italics() {
    let itemsSelected = document.getElementsByClassName('item-c');

    for(let item of itemsSelected) {
        item.classList.add('italics');
    }
}

function getInputText(eventObject) {
    if(eventObject.key !== 'Enter') {
        return;
    }

    let input = document.getElementById('input-text');
    if (input.value !== '') {
        items.innerHTML += `<div class="item" onclick="selectItem(event)">${input.value}</div>`;
        input.value = '';
    } else {
        alert("E' impossibile che non hai più esami da sostenere")
        input.style.borderColor = 'black';
    }

}

// let buttonEnter = document.getElementsByClassName('btn')
// utente scrive l'esame e clicca invio
// function enter() {
//     let buttonEnter = document.getElementsByClassName('btn');

//     for (let item of buttonEnter) {
//         item.classList.add('btn');
//     }

// }
let buttonEnter = document.getElementsByClassName('btn');
let buttonInput = document.getElementById('input-text');
function enter() {
    if(buttonInput.value == ''){
        buttonEnter.eventObject('click');
    }
}



