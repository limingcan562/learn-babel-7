import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.string.includes.js";
import "core-js/modules/es.array.of.js";
var lMC = {
  name: 'limingcan',
  like: ['eat', 'drink', 'play', 'fun'],
  breath: function breath() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        return resolve();
      }, 1000);
    });
  }
};
lMC.breath().then(function () {
  return console.log('breath');
});
console.log(lMC.like.includes('play'));
console.log(Array.of(1, 2, 3));
