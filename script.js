let inputTitle = document.createElement('input');
inputTitle.type = 'text';
inputTitle.placeholder = 'Title';
let inputAuthor = document.createElement('input');
inputAuthor.type = 'text';
inputAuthor.placeholder = 'Author';
let inputPages = document.createElement('input');
inputPages.type = 'text';
inputPages.placeholder = 'Number of Pages';

let inputRead = document.createElement('input');
inputRead.type = 'checkbox';
inputRead.classList.add('checkbox')
let readLabel = document.createElement('label');
readLabel.innerHTML = 'Have you completed this book?  ';

let submit = document.createElement('input');
submit.classList.add('sub')
submit.type = 'submit';


let bookCont = document.querySelector('.bookcontainer');
let myLibrary = [];
let i = 0; // Book Counter

function Book(title,author,pages,read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return title + ',' + author + ',' + pages;
    }
}

let inputs = document.querySelector('#addInputs')
function addBook()
{
    inputs.appendChild(inputTitle);
    inputs.appendChild(inputAuthor);
    inputs.appendChild(inputPages);
    inputs.appendChild(readLabel);
    inputs.appendChild(inputRead);
    inputs.appendChild(submit);
}

function submitClick()
{
    if(inputTitle.value == '' || inputAuthor.value == '' || inputPages.value == '') return;


    let book  = new Book(inputTitle.value,inputAuthor.value,inputPages.value,inputRead.checked);
    myLibrary.push(book);
    
    inputs.innerHTML = '';
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    inputRead.value = '';
    inputRead.checked = false;

    values = myLibrary[i].info().split(',');
    
    bookDisp = document.createElement('div');
    bookDisp.classList.add('book');
    bookDisp.setAttribute('id',`${ i }`)
    values.forEach(value => {
        bookDisp.innerHTML += `${ value } <br> <br>`
    });

    rmvBtn = document.createElement('button');
    rmvBtn.classList.add('inbkbtn')
    rmvBtn.innerHTML = 'Remove Book';

    readBtn = document.createElement('button');
    readBtn.classList.add('inbkbtn')

    let inbkbtndiv = document.createElement('div');
    inbkbtndiv.classList.add('inbkbtndiv')

    if(book.read)
    {
        readBtn.innerHTML = 'Read';
        readBtn.style.backgroundColor = '#90EF90'
    } 
    else
    {
        readBtn.innerHTML = 'Not Read';
        readBtn.style.backgroundColor = '#FA6B84'
    }
    readBtn.addEventListener('click', readStatus);

    rmvBtn.addEventListener('click', rmvBook);


    bookDisp.appendChild(inbkbtndiv);
    bookCont.appendChild(bookDisp);
    inbkbtndiv.appendChild(readBtn);
    inbkbtndiv.appendChild(rmvBtn);
    i++;

}

function rmvBook(e)
{
    myLibrary.splice(e.target.parentElement.parentElement.id,1);
    
    e.target.parentElement.parentElement.remove();
    e.target.parentElement.innerHTML = '';
    i--;
}

function readStatus(e)
{
    if(e.target.innerHTML == 'Read')
    {
        e.target.innerHTML = 'Not Read';
        e.target.style.backgroundColor = '#FA6B84'
    }
    else
    {
        e.target.innerHTML = 'Read';
        e.target.style.backgroundColor = '#90EF90'
    }    
}

submit.addEventListener('click', submitClick);

addBtn = document.querySelector('#add');
addBtn.addEventListener('click', addBook);

