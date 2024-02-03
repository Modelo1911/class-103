function celToFahr(){
    let temperature = prompt("Enter your temperature:");
    let fahrenheit = (temperature * 9/5) + 32; 
    document.getElementById("temp").innerHTML=fahrenheit
}

function convertTemperature() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let scale = document.getElementById('scale').value;

    if (scale === "C") {
      temperature = (temperature * 9/5) + 32;
      document.getElementById("result").innerHTML = `${temperature.toFixed(2)} Fahrenheit`;
    } else if (scale === "F") {
      temperature = (temperature - 32) * 5/9;
      document.getElementById("result").innerHTML = `${temperature.toFixed(2)} Celsius`;
    } else {
      document.getElementById("result").innerHTML = `Invalid scale. Please select "C" for Celsius or "F" for Fahrenheit.`;
    }
  }

  function convertTemperatureRange() {
    let startTemperature = parseFloat(document.getElementById("startTemperature").value);
    let endTemperature = parseFloat(document.getElementById("endTemperature").value);
    let temperatureScale = document.getElementById("temperatureScale").value;

    document.getElementById("result").innerHTML = "";

    for (let temperature = startTemperature; temperature <= endTemperature; temperature++) {
      if (temperatureScale.toUpperCase() === "C") {
        let fahrenheit = (temperature * 9/5) + 32;
        document.getElementById("result").innerHTML += `<p>${temperature} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit</p>`;
      } else if (temperatureScale.toUpperCase() === "F") {
        let celsius = (temperature - 32) * 5/9;
        document.getElementById("result").innerHTML += `<p>${temperature} Fahrenheit is ${celsius.toFixed(2)} Celsius</p>`;
      } else {
        document.getElementById("result").innerHTML = '<p>Invalid scale. Please use "C" for Celsius or "F" for Fahrenheit.</p>';
        return;
      }
    }
  }