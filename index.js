console.log("hello Node.js");

import { area, perimeter } from './rectangle';

function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if (l <= 0 || b <= 0) {
        console.log("Rectangle dimensions should be greateer than zero: l = " + l + ", and b = " + b);
    } else {
        console.log("The area of the rectange is " + area(l, b));
        console.log("The perimeter of the rectange is " + perimeter(l, b));
    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-2, 5);