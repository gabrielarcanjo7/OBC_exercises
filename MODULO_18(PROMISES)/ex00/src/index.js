import Spaceship from "./spaceship";
import SpaceshipEngine from "./spaceship_engine";

let sophia = new Spaceship("Sophia", 10, 5);
let amsterda = new Spaceship("Amsterdã", 14, 10);
let estrelaAna = new Spaceship("Estrela-Anã", 20, 4);

const sophiaEngine = new SpaceshipEngine(sophia);
const amsterdaEngine = new SpaceshipEngine(amsterda);
const estrelaAnaEngine = new SpaceshipEngine(estrelaAna);

sophiaEngine.turnOn()
amsterdaEngine.turnOn()
estrelaAnaEngine.turnOn()

console.log("Promises")