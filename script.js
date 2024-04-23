function generaNpc() {
    //var stringaDestinazione = document.getElementById("risultatoNPC");
    //stringaDestinazione.innerHTML = "Io sono il tuo nuovo NPC!"
    alert("Livello Chaos: " + getChaosLevel);
    alert("Tiro d100: " + dicePercent);
}

function getChaosLevel() {
    var chaosLevel = document.getElementById("livelloCaos").value;
    if (chaosLevel <= 0 || chaosLevel > 9) {
        alert("Livello chaos errato. Per favore, imposta un valore da 1 a 9.");
        return;
    }
    return chaosLevel;
}

function dicePercent() {
    return Math.floor(Math.random() * 100) + 1;
}

