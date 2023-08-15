let myLibrary = [];
const library = document.getElementById('library');
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
const inputThing = document.getElementById('inputForm');


const windowLoad = window.onload = function() {
    library.style.display = 'none';
    inputThing.style.display = 'none';
}

const buttonLoad = document.addEventListener('DOMContentLoaded', () => {
    bookButton.addEventListener('click', ()=> {
        bookButton.style.display = 'none';
        inputThing.style.display = '';
    });
});

function boxChecked() {
    let checkBoxOne = document.getElementById("checkboxOne");
    let checkboxTwo = document.getElementById("checkboxTwo");
    if(checkBoxOne.checked == true && checkboxTwo.checked == false) {
        console.log("You have read this book!");
        checkboxTwo.required = false;
        checkboxTwo.checked = false;
    } else if (checkBoxOne.checked == false && checkboxTwo.checked == true) {
        console.log("You have not read this book yet!")
        checkboxOne.required = false;
        checkboxOne.checked = false;
    } else {
        alert("You can only click on one of the checkboxes!");
        checkBoxOne === "";
        checkboxTwo === "";
    }
};

/*
function Book(name, pages, read) {
    this.name = text.value;
    this.pages = pages.value;
    this.read = readOrNotRead().value;
     li = library.innerHTML;
    library.innerHTML = [text.value, pages.value];
    
}
*/

function reset() {
    text.style.display = 'none';
    pages.style.display = 'none';
    checkboxOne.style.display = 'none';
    checkboxTwo.style.display = 'none';
    titleOfBook.style.display = 'none';
    numberOfPages.style.display = 'none';
    readQuestion.style.display = 'none';
    notReadQuestion.style.display = 'none';
    bookSubmit.style.display = 'none';
    library.style.display = ""
}

function addBookToLibrary() {
    let 
};                               

let inputForm = document.getElementById("inputForm");
const input = inputForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        if (text.value == "" || pages.value == "" && (boxChecked())) {
            alert("Ensure that you input a value in both fields!");
        } else {
            alert("This form has been successfully submitted!");
            console.log(`The book title added is ${text.value} and has ${pages.value} pages.`);
        reset();
        addBookToLibrary();
    }
});





/*


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