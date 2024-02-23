# OOP
Detta projekt är uppdelat i två delar: del 1 och del 2. Nedan följer en översikt över varje del och dess funktionalitet:

# Description

## Del 1: Färgomvandling
Del 1 av projektet fokuserar på att skapa en användargränssnitt där användaren kan välja RGB-värden för att ändra bakgrundsfärgen på en webbsida. Detta uppnås genom att använda HTML för att skapa input-fält för R, G och B-värden samt en knapp för att tillämpa den valda färgen. JavaScript används för att hantera användarens input, skapa färgobjekt och konvertera dem till olika färgformat såsom hexadecimalt och RGBA. När användaren väljer en färg uppdateras bakgrundsfärgen på webbsidan och färgen visas i olika format.

## Del 2: Kortspel
Del 2 av projektet introducerar ett kortspel med hjälp av JavaScript-klasser. Det finns tre huvudklasser: Kort, Kortlek och Spelare. Klassen Kort representerar ett enskilt spelkort med egenskaper som färg, namn och värde. Kortlek-klassen representerar en samling kort och innehåller metoder för att blanda korten, dela ut en hand och återställa kortleken. Slutligen representerar Spelare-klassen en spelare i spelet med en hand (samling av kort) och innehåller metoder för att lägga till och ta bort kort från handen samt för att beräkna det totala värdet av korten i handen.