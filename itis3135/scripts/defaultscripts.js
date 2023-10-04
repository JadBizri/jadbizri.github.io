
//function that gets current time
function getDayTime() {

    //to hold days of the week
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //to hold months of the year
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //initialize date values using Date() functions
    const now = new Date();
    const day = now.getDay();
    const dayNum = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    //12-hour format
    let amOrPm = "AM";
    if (hours >= 12) {
        hours -= 12;
        amOrPm = "PM";
    }
    //format single digit minutes to 2 fixed places
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    //add to html
    const dateContainer = document.getElementById("dateContainer");
    const dateText = document.createElement("h3");
    dateText.textContent = `It is currently ${hours}:${minutes} ${amOrPm} on ${weekDays[day]}, ${months[month]} ${dayNum}, ${year}.`;
    dateContainer.appendChild(dateText);
}

const greetingForm = document.getElementById("greeting-form");

// Add an event listener for the form's submit event
greetingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const feeling = document.getElementById("feeling").value;

    const greetingText = document.createElement("h3");
    greetingText.textContent = `Jobless Bullfrog welcomes you, ${name}! We're glad you are doing ${feeling}!`;
    const greeting = document.getElementById("greeting");
    greeting.innerHTML = ''; // Clear previous content
    greeting.appendChild(greetingText);
});

//function call
getDayTime();
