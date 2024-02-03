function celToFahr(){
    let temperature = prompt("Enter your temperature:");
    let fahrenheit = (temperature * 9/5) + 32; 
    document.getElementById("temp").innerHTML=fahrenheit
}



function convertTemperature() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let scale = document.getElementById('scale').value;

    if (scale === 'C') {
      temperature = (temperature * 9/5) + 32;
      document.getElementById('result').innerHTML = `${temperature.toFixed(2)} Fahrenheit`;
    } else if (scale === 'F') {
      temperature = (temperature - 32) * 5/9;
      document.getElementById('result').innerHTML = `${temperature.toFixed(2)} Celsius`;
    } else {
      document.getElementById('result').innerHTML = 'Invalid scale. Please select "C" for Celsius or "F" for Fahrenheit.';
    }
  }