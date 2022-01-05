function myFunction() {
    var x = document.getElementById("mynavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function submitDonation() {

    if (window.confirm("Are you sure the information entered is correct?")) {
        alert("Thanks for donating, Every RM counts")
    } else {
        alert("Pls make sure to enter a valid information")
    }
}