const senses = ['eye', 'nose', 'ear', 'mouth'];

const lMC = {
    senses,
    like: ['eat', 'drink', 'play', 'fun'],
    information: {
        sex: 'male',
        age: '18+'
    },
    play: (sport = 'badminton') => {
        console.log(`play ${sport}`);
    }
};

const { like, information } = lMC;