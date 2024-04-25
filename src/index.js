function currentTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("dddd Do MMMM YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("dddd Do MMMM YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("dddd Do MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}

function changeCity(event) {
  let city = event.target.value;
  if (city === "current") {
    city = moment.tz.guess();
  }
  let cityName = city.replace("_", " ").split("/")[1];
  let cityTimeZone = moment().tz(city);

  let citySelect = document.querySelector("#city");
  citySelect.innerHTML = `<div class="city">
          <div>
            <h2>${cityName} 🌎</h2>
            <div class="date">${cityTimeZone.format("dddd Do MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTimeZone.format(
            "HH:mm:ss"
          )} <small>${cityTimeZone.format("A")}</small>
        </div>
        </div>
        <a href="/">Return to Cities</a>`;
}

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", changeCity);

currentTime();
setInterval(currentTime, 1000);
