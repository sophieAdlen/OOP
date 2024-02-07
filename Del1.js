// Konstruktrfunktion för Color
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
    const hexR = this.r.toString(16).padStart(2, '0');
    const hexG = this.r.toString(16).padStart(2, '0');
    const hexB = this.r.toString(16).padStart(2, '0');

    //retunera hexkoden
    return `#${hexR}${hexG}${hexB}`;
}
// Metod för att konvertera färg till rgba-format med användarens specificerade alpha-värde(opacitet)
Color.prototype.rgba = function(alpha) {
    return `rgba(${this.r},${this.g},${this.b},${alpha})`;
};

//Skapa ny färg
const myColor = new Color(9, 185, 233);// ka skiva in friviliga nummer mellan 0-255
// Skriv ut färgen i olika format
console.log(myColor.rgb()); 
console.log(myColor.hex()); 
console.log(myColor.rgba(0.8)); // kan skriva friviligt nummer

// Exempel på att ändra bakgrundsfärgen på en sida
document.body.style.backgroundColor = myColor.rgb();