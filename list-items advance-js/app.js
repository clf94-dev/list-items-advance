const mainList = document.querySelector('ul');
var listItems = document.querySelectorAll('li');
const inputItem = document.querySelector('input');


inputItem.addEventListener('keypress', function() {
    if (event.keyCode === 13) {
        addNewItem();

    }
})

function addNewItem() {
    var newItem = document.createElement('li');
    newItem.textContent = inputItem.value;


    newItem.addEventListener('click', myList);
    mainList.appendChild(newItem);
    console.log(listItems);
    inputItem.value = "";
}
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', myList)
}

function myList() {
    var temp = this.classList.toggle('red');
    if (temp) {
        let span = document.createElement('span');
        span.textContent = '       X';
        span.addEventListener('click', function() {
            this.parentElement.remove();
        })
        this.appendChild(span);
    } else {
        this.querySelector('span')[0].remove();
    }
}