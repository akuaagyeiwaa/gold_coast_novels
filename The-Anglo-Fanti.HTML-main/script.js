// Select the element containing the geocodes
const locationElement = document.querySelector('.location');

// Retrieve the latitude and longitude values from the data attributes
const latitude = locationElement.getAttribute('data-latitude');
const longitude = locationElement.getAttribute('data-longitude');

// Log the latitude and longitude to the console (or use them as needed)
console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

// Example: You can use the geocodes to initialize a map or perform other tasks
function initMap() {
    // This function is just a placeholder for whatever you'd like to do with the geocodes.
    // You might use them to center a map, fetch data, etc.
    console.log(`Initializing map at Latitude: ${latitude}, Longitude: ${longitude}`);
}

// Call the function to demonstrate usage
initMap();
/ Example: Display the latitude and longitude in an alert box
alert(`Elmina, Ghana is located at Latitude: ${latitude}, Longitude: ${longitude}`);

