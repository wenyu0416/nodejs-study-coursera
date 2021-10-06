console.log("hello Node.js");

var rect = require('./rectangle');

function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("Error:" + err.message);
        } else {
            console.log("The area of the rectange is " + rectangle.area);
            console.log("The perimeter of the rectange is " + rectangle.perimeter);
        }
    });
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-2, 5);