let buttonGenerate=document.getElementById("button1")
let deleteButton=document.getElementById("button2");

buttonGenerate.addEventListener("click", function () {
    

    let name = document.getElementById("userName");
    
    let eta = document.getElementById("userEtà");
    let km = document.getElementById("userKm");
   
    let tariffaAlKilometro = km.value * 0.21;
    let myName = name.vlaue;
    let myEta = eta.value;
    let myKm = km.value;
    

 

        if (myEta <= 0 || myKm <= 0) {
            alert("inserisci dei valori VALIDI nei campi richiesti")
        }
        else if (myKm > 0 && myKm < 10) {
            alert(" inserire un numero maggiore")
        }
        else if (myKm > 2000) {
            alert("inserire un numero minore")
        }
        else if (myEta > 0 && myEta < 5) {
            alert("le persone con meno di 6 anni non pagano")
           
        }
        else {
            let showTicket=document.querySelector(".ticket-generator")
            showTicket.className="d-block";
            let userNamePrint = document.querySelector(".nameChanged");
            userNamePrint.innerHTML= `${myName}` ;

            if (myEta < 18) {
                prezzoBiglietto = tariffaAlKilometro - (tariffaAlKilometro * 0.2)
                let printTicket = document.getElementById("exercise")

                printTicket.innerHTML = (`<li>Età: ${myEta} anni </li> <li>Chilometri da percorrere: ${myKm} Km</li> <li>Prezzo biglietto: ${(Math.round(prezzoBiglietto * 100) / 100)} $</li>`)
            }
            else if (myEta > 65) {
                prezzoBiglietto = tariffaAlKilometro - (tariffaAlKilometro * 0.4)
                let printTicket = document.getElementById("exercise")

                printTicket.innerHTML = (`<li>Età: ${myEta} anni </li> <li>Chilometri da percorrere: ${myKm} Km</li> <li>Prezzo biglietto: ${(Math.round(prezzoBiglietto * 100) / 100)} $</li>`)
            }
            else {
                prezzoBiglietto = tariffaAlKilometro
                let printTicket = document.getElementById("exercise")

                printTicket.innerHTML = (`<li>Età: ${myEta} anni </li> <li>Chilometri da percorrere: ${myKm} Km</li> <li>Prezzo biglietto: ${(Math.round(prezzoBiglietto * 100) / 100)} $</li>`)

            }
        }

    }) 

