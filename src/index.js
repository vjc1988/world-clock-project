function currentTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("dddd Do MMMM YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}

function changeCity(event) {
  let city = event.target.value;
  let cityName = city.replace("_", " ").split("/")[1];
  let cityTimeZone = moment().tz(city);

  let citySelect = document.querySelector("#city");
  citySelect.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTimeZone.format("dddd Do MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTimeZone.format(
            "HH:mm:ss"
          )} <small>${cityTimeZone.format("A")}</small>
        </div>`;
}

currentTime();
setInterval(currentTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", changeCity);
