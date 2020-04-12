"user strict";

fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let booklist = "";
        data.forEach(function(book, i) {
            booklist += `
              <tr>
                <th scope="row">${i+1}.</th>
                <td>${book.isbn}</td>
                <td>${book.title}</td>
                <td>${new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(book.overdueFee)}</td>
                <td>${book.publisher}</td>
                <td>${book.datePublished}</td>
              
              </tr>
            `;
        });
        document.querySelector("#body").innerHTML = booklist;
    })