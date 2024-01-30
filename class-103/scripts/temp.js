function celToFahr(){
    let temperature=prompt("Enter your temperature:");
    let fahrenheit = (temperature * 9/5) + 32; 
    document.getElementById("temp").innerHTML=fahrenheit
}