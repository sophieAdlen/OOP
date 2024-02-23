
const rInput = document.querySelector('#r');
const gInput = document.querySelector('#g');
const bInput = document.querySelector('#b');
const bgBtn = document.querySelector('.bg-button');
const hexOutput = document.querySelector('.hex');
const rgbaOutput = document.querySelector('.rgba');

// Konstruktorfunktion
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// Lägger till metoder på Color-prototypen
Color.prototype.rgb = function () {
    return `rgb(${this.r},${this.g},${this.b})`;
};

Color.prototype.hex = function () {
    return rgbToHex(this.r, this.g, this.b);
};

Color.prototype.rgba = function (alpha) {
    return `(${this.r},${this.g},${this.b},${alpha})`;
};

// Metod för att konvertera rgb till hex
const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}).join('');

// Funktion för att uppdatera bakgrundsfärgen och skriva ut färgen i olika format
function updateColor() {
    const r = parseInt(rInput.value);
    const g = parseInt(gInput.value);
    const b = parseInt(bInput.value);

    if ([r, g, b].some(val => isNaN(val) || val < 0 || val > 255)) {
        alert('Please enter valid values between 0 and 255 for R, G, and B.');
        return;
    }

    const color = new Color(r, g, b);
    const rgbColor = color.rgb();
    const hexColor = color.hex();
    const rgbaColor = color.rgba(1);

    document.body.style.backgroundColor = rgbColor;
    hexOutput.textContent = `HEX: ${hexColor}`;
    rgbaOutput.textContent = `RGBA: ${rgbaColor}`;
}

// Eventlyssnare för knappen
bgBtn.addEventListener('click', updateColor);
