
function multiply(number,msg){
    document.write(`---- ${msg} --- ${number}`)
    for (let i=0;i<=10;i++){
        document.write(`
        <p>${i} x ${number} = ${i*number}</p>`);
    }
}

multiply(1, "mulyi");
multiply(2, "mult");
