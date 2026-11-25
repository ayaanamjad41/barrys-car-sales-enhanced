// Pre-select the car on the enquiry form when arriving from a car's enquiry link
var carSelect = document.getElementById("car");

if (carSelect) {
    var params = new URLSearchParams(window.location.search);
    var requestedCar = params.get("car");

    if (requestedCar) {
        for (var i = 0; i < carSelect.options.length; i++) {
            if (carSelect.options[i].text === requestedCar) {
                carSelect.selectedIndex = i;
                break;
            }
        }
    }
}

// Show a confirmation message when the form is submitted
var enquiryForm = document.getElementById("enquiry-form");
var formStatus = document.getElementById("form-status");

if (enquiryForm && formStatus) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        formStatus.textContent = "Thank you, " + name + ". Your enquiry has been sent. We aim to respond within two working days.";
        formStatus.className = "confirmation";
        enquiryForm.reset();
        formStatus.focus();
    });
}