export default class {
  constructor(spaceship) {
    this.spaceship = spaceship;
  }

  turnOn() {
    this.checkCurrentLoad().then((currentCharge) => {
      console.log(
        `(${this.spaceship.name}) Partida autorizada: carga atual em ${currentCharge}%.`
      );
    }).catch(currentCharge => {
        console.log(`(${this.spaceship.name}) Partida não autorizada: carga em apenas ${currentCharge}%.`)
    })
  }

  checkCurrentLoad() {
    return new Promise((resolve, reject) => {
      let currentCharge = this.spaceship.currentPercentCharge();
      if (currentCharge >= 30) {
        resolve(currentCharge);
      } else {
        reject(currentCharge);
      }
    });
  }
}
