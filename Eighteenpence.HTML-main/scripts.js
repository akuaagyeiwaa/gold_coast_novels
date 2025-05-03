document.querySelectorAll('.personal-name').forEach(function(element) {
    element.addEventListener('click', function() {
        alert('This is a personal name: ' + this.innerText);
    });
});

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'personal-name'
    var personalNames = document.querySelectorAll('.personal-name');

    // Loop through each element and add a click event listener
    personalNames.forEach(function(name) {
        name.addEventListener('click', function() {
            alert('This is a personal name: ' + this.textContent);
        });
    });
});

