let myLibrary = [];

    function Book() {
        constructor()
    }

    function addBookToLibrary() {
        const libraryButton = document.getElementById("bookSubmit");
        libraryButton.addEventListener('click', ()=> {
            const newLibraryBook = document.body.appendChild(document.createElement("p"));
            document.body.appendChild(p);
        })
    };

function Error() {
    
}




window.onload = function() {
    document.getElementById('text').style.display = 'none';
    document.getElementById('pages').style.display = 'none';
    document.getElementById('checkboxOne').style.display = 'none';
    document.getElementById('checkboxTwo').style.display = 'none';
    document.getElementById('titleOfBook').style.display = 'none';
    document.getElementById('numberOfPages').style.display = 'none';
    document.getElementById('readQuestion').style.display = 'none';
    document.getElementById('notReadQuestion').style.display = 'none';
    document.getElementById('bookSubmit').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const bookButton = document.getElementById("bookButton");
    bookButton.addEventListener('click', ()=> {
        document.getElementById('bookButton').style.display = 'none';
        document.getElementById('text').style.display = ''
        document.getElementById('pages').style.display = '';
        document.getElementById('checkboxOne').style.display = '';
        document.getElementById('checkboxTwo').style.display = '';
        document.getElementById('titleOfBook').style.display = '';
        document.getElementById('numberOfPages').style.display = '';
        document.getElementById('readQuestion').style.display = '';
        document.getElementById('notReadQuestion').style.display = '';
        document.getElementById('bookSubmit').style.display = '';
    });
});



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