let myLibrary = [];
let addBook   = document.querySelector('button')
const form    = document.getElementById('addBookForm')
const ul      = document.querySelector('ul');

function createBook( title, author, pages, readStatus) {
    this.title  = title;
    this.author = author;
    this.pages  = pages; 
    
    if (readStatus === true) {
        this.readStatus = 'finished'
    } else if (readStatus === false ) {
        this.readStatus = 'not qiuite done'
    } else {
        this.readStatus = 'what the fuck :) '
    }
}

function addBookToLibrary ( title, author, pages, readStatus) {

    const newBook = new createBook( title, author, pages, readStatus)

    myLibrary.push(newBook)
}

addBookToLibrary('Parable of the Sower', 'Octavia E. Brown', '321', true);



form.addEventListener('submit', (e) => {
    e.preventDefault();

    getInputs();

    pushToPage();
   
    console.log(e.target.parentNode)
})

form.addEventListener('change', (e) => {
    console.log(e.target.id);
    if (e.target.id === 'finished') console.log('true');

    
})

function checkReadStatus () {
    const notRead = document.querySelector('#not-finished');
    const didRead = document.querySelector('#finished');
    if (notRead.checked === true) return false;
    if (didRead.checked === true) return true;
}
function getInputs () { //gets inputs from fields, adds to myLibrary
    const title      = document.getElementById('title').value;
    const author     = document.getElementById('author').value;
    const pages      = document.getElementById('pages').value;
    const readStatus = checkReadStatus();
    addBookToLibrary(title, author, pages, readStatus)

}

function pushToPage () { //pushes last array object in myLibrary
    const li = document.createElement('li');
    const book = myLibrary.at(-1);
    li.innerHTML = `<h2>${book.title}</h2>
                    <h3>${book.author}</h3>
                    <p>${book.pages}<p>
                    <p>${book.readStatus}<p>
                    <button>delete</button>
    `
    ul.appendChild(li);
}