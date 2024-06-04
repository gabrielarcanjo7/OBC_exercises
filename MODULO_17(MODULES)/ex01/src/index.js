import Planetinha from "./planet";
import conversaozinha from "./info";

const mercurio = new Planetinha("Mercurio", 0.39);
const venus = new Planetinha("Vênus", 0.72);
const terra = new Planetinha("Terra", 1);
const marte = new Planetinha("Marte", 1.52);
const jupiter = new Planetinha("Júpiter", 5.2);
const saturno = new Planetinha("Saturno", 9.53);
const urano = new Planetinha("Urano", 19.1);
const netuno = new Planetinha("Netuno", 30);

const lista = [mercurio, venus, terra, marte, jupiter, saturno, urano, netuno]

lista.forEach(planeta => {
    let finalConverse = conversaozinha(planeta.au);
    console.log(`Planeta: ${planeta.name}\nAU: ${planeta.au}\nAU em Km: ${finalConverse.totalAuKm.toFixed(2)}`);
});
