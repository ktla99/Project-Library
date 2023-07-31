let myLibrary = [];

    function Book(name, pages, read) {
        let book = Object.create(Book.prototype)
        this.name = name
        this.pages = pages
        this.read = read

        return book
    }

    function addBookToLibrary() {

        for (let key in Book) {
            console.log()
        }
    }


window.onload = function() {
    document.getElementById('text').style.display = 'none';
    document.getElementById('pages').style.display = 'none';
    document.getElementById('checkboxOne').style.display = 'none';
    document.getElementById('checkboxTwo').style.display = 'none';
    document.getElementById('titleOfBook').style.display = 'none';
    document.getElementById('numberOfPages').style.display = 'none';
    document.getElementsByClassName('numberOfPages')[0].style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const bookButton = document.getElementById("bookButton");
    bookButton.addEventListener('click', ()=> {
        document.getElementById('bookButton').style.display = 'none';
        document.getElementById('text').style.display = ''
        document.getElementById('pages').style.display = '';
        document.getElementById('checkboxOne').style.display = '';
        document.getElementById('checkboxTwo').style.display = '';
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