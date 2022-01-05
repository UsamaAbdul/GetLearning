function validateForm() {
    let fname = document.forms["questionnaire"]["fname"].value;
    let age = document.forms["questionnaire"]["age"].value;
    let phone = document.forms["questionnaire"]["phone"].value;
    let email = document.forms["questionnaire"]["email"].value;
    if (fname == "") {
        alert("Full name must be filled out");
    } 
    else if (age == "") {
        alert("Age must be filled out");
    }
    else if (phone == "") {
        alert("Phone must be filled out");
    }
    else if (email == "") {
        alert("Email must be filled out")
    }
    else {
        alert("Form submitted successfully!");
    }
}

function myFunction() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}