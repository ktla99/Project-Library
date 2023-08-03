let myLibrary = [];

    function Book() {
        constructor() {}
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


