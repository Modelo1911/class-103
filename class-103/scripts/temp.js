function celToFahr(){
    let temperature = prompt("Enter your temperature:");
    let fahrenheit = (temperature * 9/5) + 32; 
    document.getElementById("temp").innerHTML=fahrenheit
}



function convertTemperature() {
    // Get user input
    let temperature = parseFloat(document.getElementById('temperature').value);
    let scale = document.getElementById('scale').value;

    // Check the scale and convert temperature accordingly
    if (scale === 'C') {
      // Convert Celsius to Fahrenheit
      temperature = (temperature * 9/5) + 32;
      document.getElementById('result').innerHTML = `${temperature.toFixed(2)} Fahrenheit`;
    } else if (scale === 'F') {
      // Convert Fahrenheit to Celsius
      temperature = (temperature - 32) * 5/9;
      document.getElementById('result').innerHTML = `${temperature.toFixed(2)} Celsius`;
    } else {
      // Invalid scale
      document.getElementById('result').innerHTML = 'Invalid scale. Please select "C" for Celsius or "F" for Fahrenheit.';
    }
  }