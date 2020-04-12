const newBookForm = document.getElementById("#BookForm");
const newIsbn = document.querySelector("#isbn");
const newTitle = document.querySelector("#title");
const newOverdueFee = document.querySelector("#overdueFee");
const newPublisher = document.querySelector("#publisher");
const newDatePublished = document.querySelector("#datePublished");
const alertMessageBox = document.getElementById("alertMessageBox");

BookForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const isbn = newIsbn.value;
    const title = newTitle.value;
    const overdueFee = parseFloat(newOverdueFee.value);
    const publisher = newPublisher.value;
    const datePublished = newDatePublished.value;

    const BookData = {
        "isbn": isbn,
        "title": title,
        "overdueFee": overdueFee,
        "publisher": publisher,
        "datePublished": datePublished
    };
    fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
        method: "post",
        body: JSON.stringify(BookData),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(response) {
        return response.json();
    }).then(function(jsonResponseData) {
        console.log(jsonResponseData);
        newIsbn.value = "";
        newTitle.value = "";
        newOverdueFee.value = "0.00";
        newPublisher.value = "";
        newDatePublished.value = "";
        newTitle.focus();
        alertMessageBox.style.display = "inline-block";
    })
});