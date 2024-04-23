function generaNpc() {
    var stringaDestinazione = document.getElementById("risultatoNPC");
    var aggettivoNPC = getRandom(aggettiviNpc);
    var sostantivoNPC = getRandom(sostantiviNpc);
    var powerLevel = generatePowerLevel(getChaosLevel());
    stringaDestinazione.innerText = aggettivoNPC + " " + sostantivoNPC + " | Livello di potenza: " + powerLevel + " party.";
    
    //alert("Livello Chaos: " + getChaosLevel);
    //alert("Tiro d100: " + dicePercent);
}

function getChaosLevel() {
    var chaosLevel = document.getElementById("livelloCaos").value;
    if (chaosLevel <= 0 || chaosLevel > 9) {
        alert("Livello chaos errato. Per favore, imposta un valore da 1 a 9.");
        return 0;
    }
    return chaosLevel;
}

function dicePercent() {
    return Math.floor(Math.random() * 100) + 1;
}

function getRandom(lista){
    var tiroDiDado = dicePercent();
    var risultato = lista[tiroDiDado - 1];
    return risultato;
}
  
function generatePowerLevel(livelloCaos){
    if(livelloCaos==0){
        return;
    } else if (livelloCaos >= 1 && livelloCaos <3){ // Caos 1 o 2
        var tiraDado = dicePercent();
        if(tiraDado == 1 || tiraDado == 2) {
            console.log("Eseguito");
            return "Molto più debole del";
        } else if(tiraDado >= 3 && tiraDado < 11){
            return "Leggermente più debole del";
        } else if(tiraDado >= 11 && tiraDado < 91){
            return "Equivalente al";
        } else if(tiraDado >= 91 && tiraDado < 99){
            return "Un po' più forte del";
        } else {
            return "Molto più forte del";
        }
    } else if (livelloCaos >= 3 && livelloCaos < 5){ // Caos 3 o 4
        var tiraDado = dicePercent();
        if(tiraDado < 5) {
            console.log("Eseguito");
            return "Molto più debole del";
        } else if(tiraDado >= 5 && tiraDado < 16){
            return "Leggermente più debole del";
        } else if(tiraDado >= 16 && tiraDado < 86){
            return "Equivalente al";
        } else if(tiraDado >= 86 && tiraDado < 97){
            return "Un po' più forte del";
        } else {
            return "Molto più forte del";
        }
    } else if (livelloCaos == 5){ // Caos 5
        var tiraDado = dicePercent();
        if(tiraDado < 6) {
            console.log("Eseguito");
            return "Molto più debole del";
        } else if(tiraDado >= 6 && tiraDado < 21){
            return "Leggermente più debole del";
        } else if(tiraDado >= 21 && tiraDado < 81){
            return "Equivalente al";
        } else if(tiraDado >= 81 && tiraDado < 96){
            return "Un po' più forte del";
        } else {
            return "Molto più forte del";
        }
    } else if (livelloCaos >= 6 && livelloCaos < 8){ // Caos 6 o 7
        var tiraDado = dicePercent();
        if(tiraDado < 9) {
            console.log("Eseguito");
            return "Molto più debole del";
        } else if(tiraDado >= 9 && tiraDado < 26){
            return "Leggermente più debole del";
        } else if(tiraDado >= 26 && tiraDado < 76){
            return "Equivalente al";
        } else if(tiraDado >= 76 && tiraDado < 93){
            return "Un po' più forte del";
        } else {
            return "Molto più forte del";
        }
    } else if (livelloCaos >= 8 && livelloCaos < 10){ // Caos 8 o 9
        var tiraDado = dicePercent();
        if(tiraDado < 13) {
            console.log("Eseguito");
            return "Molto più debole del";
        } else if(tiraDado >= 13 && tiraDado < 31){
            return "Leggermente più debole del";
        } else if(tiraDado >= 31 && tiraDado < 71){
            return "Equivalente al";
        } else if(tiraDado >= 71 && tiraDado < 89){
            return "Un po' più forte del";
        } else {
            return "Molto più forte del";
        }
    }
}

// Lista Aggettivi NPC
let aggettiviNpc = [
    "Superfluo",
    "Dipendente (da qualcosa)",
    "Conformista",
    "Nefasto",
    "Sensibile",
    "Non Allenato",
    "Romantico",
    "Irragionevole",
    "Abile",
    "Negligente",
    // 10
    "Vivace",
    "Schietto",
    "Idealista",
    "Non favorevole",
    "Razionale",
    "Grosso",
    "Stupido",
    "Astuto",
    "Delizioso",
    "Miserabile",
    // 20
    "Inetto",
    "Banale",
    "Logico",
    "Subdolo",
    "Rispettabile",
    "Malvagio",
    "Pigro",
    "Pessimista",
    "Solenne",
    "Abitudinario",
    // 30
    "Mite",
    "Utile",
    "Indifferente",
    "Generoso",
    "Docile",
    "Allegro",
    "Pragmatico",
    "Sereno",
    "Premuroso",
    "Senza Speranza",
    // 40
    "Piacevole",
    "Insensibile",
    "Titolato",
    "Inesperto",
    "Ficcanaso",
    "Indiscreto",
    "Raffinato",
    "Indispensabile",
    "Studioso",
    "Conservatore",
    // 50
    "Scostante",
    "Ostinato",
    "Indifferente",
    "Volubile",
    "Anziano",
    "Peccaminoso",
    "Ingenuo",
    "Privilegiato",
    "Cupo",
    "Simpatico",
    // 60
    "Letargico",
    "Sfidante",
    "Antipatico",
    "Perspicace",
    "Privo di tatto",
    "Fanatico",
    "Plebeo",
    "Infantile",
    "Pio",
    "Non istruito",
    // 70
    "Sconsiderato",
    "Colto",
    "Rivoltante",
    "Curioso",
    "Permaloso",
    "Bisognoso",
    "Dignitoso",
    "Insistente",
    "Gentile",
    "Corrotto",
    // 80
    "Gioviale",
    "Accorto",
    "Liberale",
    "Compiacente",
    "Indigente",
    "Cauto",
    "Attento",
    "Seducente",
    "Diffidente",
    "Ottimista",
    // 90
    "Benestante",
    "Avvilito",
    "Spensierato",
    "Passionale",
    "Devoto",
    "Affermato",
    "Non scontato",
    "Affidabile",
    "Giusto",
    "Fiducioso"
    // 100
  ];

// Lista Sostantivi
let sostantiviNpc = [
    "Gitano",
    "Strega",
    "Mercante",
    "Esperto",
    "Popolano",
    "Giudice",
    "Ranger",
    "Occultista",
    "Reverendo",
    "Delinquente",
    "Vagabondo",
    "Uomo di strada",
    "Statista",
    "Astrologo",
    "Duellante",
    "Tuttofare",
    "Aristocratico",
    "Predicatore",
    "Artigiano",
    "Canaglia",
    "Missionario",
    "Reietto",
    "Mercenario",
    "Custode",
    "Eremita",
    "Oratore",
    "Capo tribù",
    "Pioniere",
    "Scassinatore",
    "Vicario",
    "Ufficiale",
    "Esploratore",
    "Guardiano",
    "Fuorilegge",
    "Adepto",
    "Barbone",
    "Stregone",
    "Operaio",
    "Padrone",
    "Ascendente",
    "Villaggero",
    "Magus",
    "Coscritto",
    "Lavoratore",
    "Attore",
    "Araldo",
    "Brigante",
    "Cercatore di fortuna",
    "Governatore",
    "Rottamatore",
    "Monaco",
    "Casalingo",
    "Recluso",
    "Amministratore",
    "Polimata",
    "Mago",
    "Viaggiatore",
    "Vagabondo",
    "Apprendista",
    "Politico",
    "Mediatore",
    "Truffatore",
    "Civile",
    "Attivista",
    "Eroe",
    "Paladino",
    "Chierico",
    "Schiavo",
    "Pistolero",
    "Chiaroveggente",
    "Patriarca",
    "Negoziante",
    "Cortigiano",
    "Avventuriero",
    "Soldato",
    "Intrattenitore",
    "Artigiano",
    "Scienziato",
    "Asceta",
    "Superiore",
    "Performer",
    "Maestro",
    "Servo della gleba",
    "Bruto",
    "Inquisitore",
    "Signore",
    "Cattivo",
    "Professore",
    "Servo",
    "Incantatore",
    "Giramondo",
    "Cacciatore",
    "Cortigiano",
    "Prete",
    "Commerciante",
    "Sicario",
    "Mago",
    "Mendicante",
    "Commerciante",
    "Guerriero"
  ];

  