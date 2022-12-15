let div = document.createElement('div');
document.body.appendChild(div);
div.id = "compteur";

let compteur = document.getElementById('compteur');
let aujourdhui = new Date();

let heure = function (heure, minutes, secondes) {
    this.hour = heure;
    this.minutes = minutes;
    this.seconds = secondes;

    this.getHour = () => {
        return aujourdhui.setHours(this.hour);
    }

    this.getMinutes = () => {
        return aujourdhui.setMinutes(this.minutes);
    }
    this.getSeconds = () => {
        return aujourdhui.setSeconds(this.seconds);
    }
}

let newHour = new heure('10', '10', '10');
console.log(newHour);