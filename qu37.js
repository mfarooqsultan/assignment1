"use strict";
/*37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt1(sizes) {
    if (sizes === 'large' || sizes === 'medium') {
        console.log('i love typescript');
    }
    else if (sizes === 'small') {
        console.log('i love none');
    }
    else {
        console.log('i love');
    }
}
;
make_shirt1("small");
make_shirt1("medium");
