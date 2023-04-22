import 'core-js/stable';

const lMC = {
    name: 'limingcan',
    like: ['eat', 'drink', 'play', 'fun'],
    breath() {
        return new Promise(resolve => {
            setTimeout(() => resolve(), 1000)
        })
    }
};


lMC.breath().then(() => console.log('breath'));
console.log(lMC.like.includes('play'));
console.log(Array.of(1, 2, 3));