const Planet = require("./planet");
const conversion = require("./info");

const mercurio = new Planet("Mercurio", 0.39);
const venus = new Planet("Vênus", 0.72);
const terra = new Planet("Terra", 1);
const marte = new Planet("Marte", 1.52);
const jupiter = new Planet("Júpiter", 5.2);
const saturno = new Planet("Saturno", 9.53);
const urano = new Planet("Urano", 19.1);
const netuno = new Planet("Netuno", 30);

const lista = [mercurio, venus, terra, marte, jupiter, saturno, urano, netuno]

lista.forEach(planeta => {
    let finalConverse = conversion(planeta.au);
    console.log(`Planeta: ${planeta.name}\nAU: ${planeta.au}\nAU em Km: ${finalConverse.totalAuKm.toFixed(2)}`);
});
