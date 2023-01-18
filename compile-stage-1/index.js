let x = 100;
let y = 20;

let a = do {
    if (x > 10) {
        if (y > 20) {
            ("big x, big y");
        } else {
            ("big x, small y");
        }
    } else {
        if (y > 10) {
            ("small x, big y");
        } else {
            ("small x, small y");
        }
    }
};