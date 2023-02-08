"use strict";

class People {
  constructor(name) {
    this.senses = ['eye', 'nose', 'ear', 'mouth'];
    this.name = name;
  }
  play = (item = 'games') => {
    console.log(`play ${item}`);
  };
}
const lMC = new People('lMC');
const {
  senses,
  name
} = lMC;
