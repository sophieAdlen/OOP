class Kort {
  constructor(färg, namn, värde) {
    this.färg = färg;
    this.namn = namn;
    this.värde = värde;
  }
}

class Kortlek {
  constructor() {
    this.kort = this.skapaKortlek();
  }

  skapaKortlek() {
    // Skapa en ny kortlek genom att kombinera färger och namn på korten
    const färger = ['Hjärter', 'Ruter', 'Klöver', 'Spader'];
    const namn = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Knekt', 'Dam', 'Kung', 'Ess'];
    return färger.flatMap(färg => namn.map((namn, index) => new Kort(färg, namn, index < 9 ? index + 2 : 10)));
  }

  blanda() {
    // Blanda kortleken genom att slumpmässigt sortera korten
    this.kort.sort(() => Math.random() - 0.5);
  }

  delaHand() {
    // Skapa en ny hand genom att ta bort de fem sista korten från kortleken
    const hand = [];
    [1, 2, 3, 4, 5].forEach(() => {
      hand.push(this.kort.pop());
    });
    return hand;
  }

  återställ() {
    // Återställ kortleken till dess ursprungliga ordning
    this.kort = this.skapaKortlek();
  }
}

class Spelare {
  constructor(namn) {
    this.namn = namn;
    this.hand = [];
  }

  läggTillIHanden(kort) {
    // Lägg till ett kort i spelarens hand
    this.hand.push(kort);
  }

  kasta(index) {
    // Kasta ett kort från spelarens hand och returnera det kastade kortet
    return this.hand.splice(index, 1)[0];
  }

  återställHanden() {
    // Återställ spelarens hand till en tom lista
    this.hand = [];
  }

  handensVärde() {
    // Beräkna summan av värdena på korten i spelarens hand
    return this.hand.reduce((ack, kort) => ack + kort.värde, 0);
  }
}

// Del 1
const kortlek = new Kortlek();
kortlek.blanda();
console.log("Blandad kortlek:");
console.log(kortlek.kort);

// Del 2
const [slim, luke] = [new Spelare("Slim"), new Spelare("Luke")];
[slim.hand, luke.hand] = [kortlek.delaHand(), kortlek.delaHand()];

console.log("Slims hand:", slim.hand);
console.log("Lukes hand:", luke.hand);
console.log("Kvarvarande kort i kortleken:", kortlek.kort);
console.log("Slims handvärde:", slim.handensVärde());
console.log("Lukes handvärde:", luke.handensVärde());

// Del 3
const kasthög = [slim.kasta(0), slim.kasta(0), luke.kasta(0), luke.kasta(0)];
[slim.hand, luke.hand] = [kortlek.delaHand(), kortlek.delaHand()];

console.log("Slims hand:", slim.hand);
console.log("Lukes hand:", luke.hand);
console.log("Kasthögen:", kasthög);
console.log("Kvarvarande kort i kortleken:", kortlek.kort);
console.log("Slims handvärde:", slim.handensVärde());
console.log("Lukes handvärde:", luke.handensVärde());

// Del 4
[slim.hand, luke.hand] = [[], []];
kortlek.återställ();
kortlek.blanda();

console.log("Ny blandad kortlek:", kortlek.kort);
console.log("Slims hand:", slim.hand);
console.log("Lukes hand:", luke.hand);
console.log("Kasthögen:", kasthög);

