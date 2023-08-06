let myLibrary = [];
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


let inputForm = document.getElementById("inputForm");
inputForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        if (text.value == "" || pages.value == "") {
            alert("Ensure that you input a value in both fields!");
        } else {
            alert("This form has been successfully submitted!");
            console.log(`The book title added is ${text.value} and has ${pages.value} pages.`);
        myLibrary.push(e);
        text.value = "";
        pages.value = "";
    }
});


function boxChecked() {
    let checkBoxOne = document.getElementById("checkboxOne");
    let checkboxTwo = document.getElementById("checkboxTwo");
    if(checkBoxOne.checked == true && checkboxTwo.checked == false) {
        console.log("You have read this book!")
    } else if (checkBoxOne.checked == false && checkboxTwo.checked == true) {
        console.log("You have not read this book yet!")
    } else if (checkBoxOne.checked == true && checkboxTwo.checked == true) {
        alert("You can only click on one of the checkboxes!")
    } else {
        alert("Please only click on one of the checkboxes!")
        checkBoxOne === false;
        checkboxTwo === false;
    }
};


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