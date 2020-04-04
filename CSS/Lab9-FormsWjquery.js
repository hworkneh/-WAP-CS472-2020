"use strict";


//JQUERY way

$("#form1").submit(function(event) {
    event.preventDefault();
    console.log("Entered inputs:");
    console.log("email=" + $("#exampleInputEmail1").val());
    console.log("password=" + $("#exampleInputPassword1").val());
    console.log("Url=" + $("#url").val());
    console.log("Checked=" + $("#exampleCheck1").prop("checked"));
});



//JQUERY way

$("#form2").submit(function(event) {
    event.preventDefault();
    $("#enteredValue").html(
        "Entered Values:<br>" +
        "Product Number=" + $("#productNumber").val() + "<br>" +
        "Product Name=" + $("#name").val() + "<br>" +
        "Unit Price=" + $("#unitPrice").val() + "<br>" +
        "Quantity=" + $("#quantity").val() + "<br>" +
        "Supplier=" + $("#supplier").val() + "<br>" +
        "Date Supplied=" + $("#dateSupplied").val() + "<br>");
});