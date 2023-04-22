"use strict";

var senses = ['eye', 'nose', 'ear', 'mouth'];
var lMC = {
  senses: senses,
  like: ['eat', 'drink', 'play', 'fun'],
  information: {
    sex: 'male',
    age: '18+'
  },
  play: function play() {
    var sport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'badminton';
    console.log("play ".concat(sport));
  }
};
var like = lMC.like,
  information = lMC.information;
