const myLibrary = [];
let library = document.getElementById('folder');
let text = document.getElementById('text');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let titleOfBook =  document.getElementById('titleOfBook');
let numberOfPages = document.getElementById('numberOfPages');
let readQuestion = document.getElementById('readQuestion');
let notReadQuestion = document.getElementById('notReadQuestion');
let bookSubmit = document.getElementById('bookSubmit');
let bookButton = document.getElementById("bookButton");
let inputThing = document.getElementById('inputForm');
let checkBoxOne = document.getElementById("checkboxOne");
let checkBoxTwo = document.getElementById("checkboxTwo");

window.onload = function() {
    library.style.display = 'none';
    inputThing.style.display = 'none';
    bookButtonLoad();
}

function bookButtonLoad() {
    bookButton.addEventListener('click', ()=> {
        bookButton.style.display = 'none';
        library.style.display = 'none';
        inputThing.style.display = '';
        text.textContent = 'yo';
        author.textContent = 'yo';
        pages.textContent = 'yo';
        checkBoxOne.checked = '';
        checkBoxTwo.checked = '';
    });
};

let inputForm = document.getElementById("inputForm");
let input = inputForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        if (text.value == "" || author.value == "" || pages.value == "") {
            console.log("Ensure that you input a value in all three fields!");
            alert("Ensure that you input a value in all three fields!");
        } else {
            alert("This form has been successfully submitted!");
            console.log(`The book title added is ${text.value}, written by ${author.value} and has ${pages.value} pages.`);
        addBookToLibrary();
    }
});

function boxChecked() {
    if(checkBoxOne.checked === true && checkBoxTwo.checked === false) {
        console.log("You have read this book!");
        checkBoxTwo.required = false;
        checkBoxTwo.checked = false;
        return true
    } else if (checkBoxOne.checked == false && checkBoxTwo.checked === true) {
        console.log("You have not read this book yet!");
        checkBoxOne.required = false;
        checkBoxOne.checked = false;
        return false;
    } else if (checkBoxOne.checked === false && checkBoxTwo.checked === false) {
        alert("Please check one of the boxes!");
        checkBoxOne.required = false;
        checkBoxTwo.required = false;
    } else {
        alert("You can only click on one of the checkboxes!");
        checkBoxOne.checked = "";
        checkBoxTwo.checked = "";
    }
};

function reset() {
    inputThing.style.display = 'none';
    library.style.display = "";
    bookButton.style.display = "";
    bookButtonLoad();
}


function addBookToLibrary() {
    let nameAndPage = document.createElement("p");
    nameAndPage.id = text.value;
    nameAndPage.textContent = [text.value, author.value, pages.value];
    library.append(nameAndPage);
    let readAnswer = document.createElement("p");
    if(checkBoxOne.checked === true) {
        readAnswer.textContent = "Read";
        nameAndPage.appendChild(readAnswer);
        deleteButton(text.value);
        reset();
    } else {
        readAnswer.textContent = "Not Read";
        nameAndPage.appendChild(readAnswer);
        deleteButton();
        reset();
    }                               
};

function deleteButton(id) {
    let removeBook = document.createElement('button');
    let bookElement = document.getElementById(id);
    removeBook.innerHTML = "Remove Book";
    library.appendChild(removeBook);
    removeBook.addEventListener('click', ()=> {
        removeBook.style.display = 'none';
        library.removeChild(bookElement);
    });
};





/*

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