// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) { // Metric conditions
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    } else if (temp <= 50 && windSpeed > 3) { // Imperial conditions
        return 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
    } else {
        return "N/A";
    }
}

// Set the current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Weather values
const temp = 30; // Temperature in °C
const windSpeed = 10; // Wind speed in km/h

// Display wind chill
const windChill = calculateWindChill(temp, windSpeed);
document.getElementById('wind-chill').textContent = windChill;

// Add weather icon for large view (emoticon or equivalent)
document.getElementById('weather-icon').innerHTML = "⛅"; // Example of weather emoticon
