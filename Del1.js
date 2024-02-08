// Konstruktorfunktion 
function Color(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
}

// Lägger till metoder på Color-prototypen
// Metod för att konvertera färg till rgb-format
Color.prototype.rgb = function (){
    return `rgb(${this.r},${this.g},${this.b})`;
};

//Metod för att konvertera färg till hex-format
Color.prototype.hex = function(){
    return rgbToHex(this.r, this.g, this.b);
};

// Metod för att konvertera färg till rgba-format med användarens specificerade alpha-värde(opacitet)
Color.prototype.rgba = function(alpha) {
    return `rgba(${this.r},${this.g},${this.b},${alpha})`;
};
//Metod för att konvertera fgrb till hex
const rgbToHex = (r, g, b) => '#' + [r, g, b]
  .map(x => x.toString(16).padStart(2, '0')).join('');

//Skapa ny färg
const myColor = new Color(456, 135, 235);// ka skiva in friviliga nummer mellan 0-255
// Skriv ut färgen i olika format
console.log(myColor.rgb()); 
console.log(myColor.hex()); 
console.log(myColor.rgba(0.8)); // kan skriva friviligt nummer

// Exempel på att ändra bakgrundsfärgen på en sida
document.body.style.backgroundColor = myColor.rgb();
