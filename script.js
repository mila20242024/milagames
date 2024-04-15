//definisco le variabili
let scelte = ["sasso", "carta", "forbici", "lizard", "spock"];

let vistagiocatore = document.getElementById("vistagiocatore");
let vistacomputer = document.getElementById("vistacomputer");
let vistarisultato = document.getElementById("vistarisultato");

//creo le funzioni
function gioca(sceltagiocatore) {
  //la scelta del compumputer deve essere random  percio...
  let sceltacomputer = scelte[Math.floor(Math.random() * 5)]; //* 3 perche deve scelgliere tra 3
  //console.log(sceltacomputer); controllo che funzioni ok!
  let risultato = ""; //lo lascio vuoto cosi si compila, guarda lo switchh

  if (sceltagiocatore === sceltacomputer) {
    risultato = "siete pari!!!!";
  } else {
    //uso lo switch
    switch (sceltagiocatore) {
      case "sasso":
        risultato =
          sceltacomputer === "forbici" || sceltacomputer === "lizard"
            ? "hai vintoh"
            : "hai perso";
        break;
      case "carta":
        risultato =
          sceltacomputer === "sasso" || sceltacomputer === "lizard"
            ? "hai vintoh"
            : "hai perso";
        break;
      case "forbici":
        risultato =
          sceltacomputer === "carta" || sceltacomputer === "lizard"
            ? "hai vintoh"
            : "hai perso";
        break;
      case "lizard":
        risultato =
          sceltacomputer === "spock" || sceltacomputer === "carta"
            ? "hai vintoh"
            : "hai perso";
        break;
      case "spock":
        risultato =
          sceltacomputer === "sasso" || sceltacomputer === "forbici"
            ? "hai vintoh"
            : "hai perso";
        break;
    }
  }
  vistagiocatore.textContent = `hai scelto: ${sceltagiocatore}`; //unisco una stringa ad una variabile
  vistacomputer.textContent = `il computer ha scelto: ${sceltacomputer}`;
  vistarisultato.textContent = risultato;
}
