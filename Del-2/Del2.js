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
      const färger = ['Hjärter', 'Ruter', 'Klöver', 'Spader'];
      const namn = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Knekt', 'Dam', 'Kung', 'Ess'];
      return färger.flatMap(färg => namn.map((namn, index) => new Kort(färg, namn, index < 9 ? index + 2 : 10)));
    }
  
    blanda() {
      this.kort.sort(() => Math.random() - 0.5);
    }
  
    delaHand() {
      return [this.kort.pop(), this.kort.pop(), this.kort.pop(), this.kort.pop(), this.kort.pop()];
    }
  
    återställ() {
      this.kort = this.skapaKortlek();
    }
  }
  
  class Spelare {
    constructor(namn) {
      this.namn = namn;
      this.hand = [];
    }
  
    läggTillIHanden(kort) {
      this.hand.push(kort);
    }
  
    kasta(index) {
      return this.hand.splice(index, 1)[0];
    }
  
    återställHanden() {
      this.hand = [];
    }
  
    handensVärde() {
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
  

    // Card: Representerar ett enskilt spelkort med egenskaper som svit, 

    // namn (t.ex. Ess, Kung), och värde (t.ex. 14 för Ess, 13 för Kung).

    // Deck: Representerar en samling kort. Den initialiseras med en fullständig lek på 52 kort (13 kort för varje av de 4 sviterna).
    
    // Player: Representerar en spelare i spelet med ett namn och en hand (samling av kort). Spelare kan lägga till kort i sin hand, ta bort kort från sin hand och beräkna det totala värdet av korten i sin hand.
    
    // shuffle(): Metod i Deck-klassen som blandar korten slumpmässigt.
   
    // draw(): Metod i Deck-klassen som drar (tar bort och returnerar) det översta kortet från leken.
   
    // addToHand(): Metod i Player-klassen för att lägga till ett kort i spelarens hand.
    
    // removeFromHand(): Metod i Player-klassen för att ta bort ett kort från spelarens hand på en specifik position.
    
    // calculateHandValue(): Metod i Player-klassen för att beräkna det totala värdet av korten i spelarens hand.