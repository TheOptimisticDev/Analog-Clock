let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let dateElem = document.getElementById('date');
let timeElem = document.getElementById('time');
let timezoneElem = document.getElementById('timezone');

function displayTime() {
  try {
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    // Display date, time, and timezone
    dateElem.innerText = `Date: ${date.toLocaleDateString()}`;
    timeElem.innerText = `Time: ${date.toLocaleTimeString()}`;
    timezoneElem.innerText = `Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
  } catch (error) {
    console.error('Error in displayTime:', error);
  }
}

// Initial call to displayTime and then update every second
displayTime();
setInterval(displayTime, 1000);

