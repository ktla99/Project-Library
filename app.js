const text = document.getElementById('text');
const pages = document.getElementById('pages');
const checkboxOne = document.getElementById('checkboxOne');
const checkboxTwo = document.getElementById('checkboxTwo');
const titleOfBook =  document.getElementById('titleOfBook');
const numberOfPages = document.getElementById('numberOfPages');
const readQuestion = document.getElementById('readQuestion');
const notReadQuestion = document.getElementById('notReadQuestion');
const bookSubmit = document.getElementById('bookSubmit');
const bookButton = document.getElementById("bookButton");
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

window.onload = function() {
    text.style.display = 'none';
    pages.style.display = 'none';
    checkboxOne.style.display = 'none';
    checkboxTwo.style.display = 'none';
    titleOfBook.style.display = 'none';
    numberOfPages.style.display = 'none';
    readQuestion.style.display = 'none';
    notReadQuestion.style.display = 'none';
    bookSubmit.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    bookButton.addEventListener('click', ()=> {
        bookButton.style.display = 'none';
        text.style.display = '';
        pages.style.display = '';
        checkboxOne.style.display = '';
        checkboxTwo.style.display = '';
        titleOfBook.style.display = '';
        numberOfPages.style.display = '';
        readQuestion.style.display = '';
        notReadQuestion.style.display = '';
        bookSubmit.style.display = '';
    });
});


let myLibrary = [];

function Book(name, pages) {
    this.name = name;
    this.pages = pages;
}

function Warriors(name, pages, read) {
    Book.call(this, name, pages);

    this.read = read;
}

function TCoC(name, pages, notRead) {
    Book.call(this, name, pages);

    this.notRead = notRead;
}

Object.setPrototypeOf(Warriors.prototype, Book.prototype);
Object.setPrototypeOf(TCoC.prototype, Book.prototype);


let inputForm = document.getElementById("inputForm");
inputForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        if (text.value == "") {
            alert("Ensure that you input a value in both fields!");
        } else {
            alert("This form has been successfully submitted!");
            console.log(`The book added is ${text.value}`);
        text.value = "";
    }
});


/*

function addBookToLibrary() {}
updateLibrary();

removeBook();






    const title = "Warriors"
    const author = "Erin Hunter"
    const pages = "288";
    const read = "have read"

    const personOne = {
        title: "The Call of Cthulu and Other Weird Stories",
        author: "H.P. Lovecraft",
        pages: "420",
        read: "have not read"
    }

    const personTwo = {
        title: "Warriors",
        author: "Erin Hunter",
        pages: "288",
        read: "have read"
    }

    function printPerson(person) {
        console.log(person.title)
    }

    printPerson(personTwo);
    

    function Person(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages 
        this.read = read 
        this.info = function() {
            console.log(title, author, pages, read)
        }
    }

    const warriors = new Person('"Warriors, by', ' Erin Hunter,', ' 288 pages,', ' have read already"')

    warriors.info()

    console.log(warriors.info());
    */