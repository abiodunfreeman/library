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

function checkReadStatus () { //used in getInputs 
    const readStatus = document.getElementById('read-status').checked;
    if (readStatus === true)  return true;
    if (readStatus === false) return false; 
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
    let checkVal;
        if (book.readStatus === 'finished')  {
        checkVal  = 'checked'
        } else if (book.readStatus === 'not qiuite done') {
            checkVal = '';
        };
        const i = myLibrary.length;
    li.innerHTML = `<h2>${book.title}</h2>
                    <h3>${book.author}</h3>
                    <p>${book.pages}<p>
                    <p>${book.readStatus}<p>
                    <label for='read-status-card-${i}'>Finished?</label>
                    <input id ='read-status-card-${i}'name='read-status-card' type='checkbox' ${checkVal}>
                    </br>
                    <button class='delete'>delete</button>`

    ul.appendChild(li);
}
form.addEventListener('submit', (e) => { //event listener for add book form
    e.preventDefault(); // prevents form submission

    getInputs();

    pushToPage();
    
    //form.reset();
})

ul.addEventListener('click', (e) => { //button action on li's
    
     if (e.target.className === 'delete') { //delete button
        const li = e.target.parentNode.parentNode;
        ul.removeChild(li);
    }
})

ul.addEventListener('change', (e) => {
    console.log(e.target)
})

form.addEventListener('click', (e) => {
    console.log(e.target.checked);
})