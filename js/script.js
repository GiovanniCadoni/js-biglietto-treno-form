//Dichiarazione e inizializzazione delle variabili
const userNameElem = document.getElementById("name");
const userKmElem = document.getElementById("km");
const userAgeElem = document.getElementById("age");
//console.log(userNameElem, userKmElem, userAgeElem);

const priceForKm = 0.21;
let priceUser;
let priceFinal;


const sendBtn = document.getElementById("send");
//console.log(sendBtn);

sendBtn.addEventListener("click", function () {
    console.log("Funziona!");
    const userName = userNameElem.value;
    const userKm = userKmElem.value;
    const userAge = userAgeElem.value;
    console.log(userName, userKm, userAge);
    
    //Calcolo del prezzo e eventuali sconti
    priceUser = (parseInt(userKm) * priceForKm);
    console.log(priceUser);

    if(parseInt(userAge) > 65) 
    {
        console.log("Over 65");
        priceFinal = priceUser - ((priceUser / 100) * 40);
        priceFinal = priceFinal.toFixed(2)
        console.log(priceFinal);
    } 
    else if (parseInt(userAge) > 17 && parseInt(userAge) < 66) 
    {
        console.log("Mi dispiace ma non ha diritto ad alcuno sconto");
        priceFinal = priceUser;
        priceFinal = priceFinal.toFixed(2)
        console.log(priceFinal);
    } 
    else if (parseInt(userAge) >= 0 && parseInt(userAge) <18)
    {
        console.log("Minorenne");
        priceFinal = priceUser - ((priceUser / 100) * 20);
        priceFinal = priceFinal.toFixed(2)
        console.log(priceFinal);
    }
    else
    {
        
    }

    });

