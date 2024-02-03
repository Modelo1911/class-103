    //Data Base information
    let userDB = "Guillermo";
    let passDB = "Test7891";

  
function login (){
    let userName = prompt("Enter your user name: ");
    let userPassword = prompt("Type your password: ");
    console.log(userName, userPassword);

    if(userName === userDB && userPassword === passDB){
        document.getElementById("notifications").innerHTML = "<p>Welcome to Canvas</p>";
    }else{
        document.getElementById("notifications").innerHTML = "<p class=alert-error>Invalid username or password</p>";
    }
}