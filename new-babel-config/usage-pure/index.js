const array = [1, 2, 3, 4, 5];

// 处于stage-3提案的方法
const arr = array.group((num, index, array) => {
    return num % 2 === 0 ? 'even': 'odd';
});

const wait = () => {
    return new Promise(resolve => setTimeout(() => resolve('get up Lee'), 1000))
};


wait().then(val => console.log(val));