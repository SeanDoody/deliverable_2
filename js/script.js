// prompt the user for the amount of rain in inches
let rain = prompt("How many inches of rain fell?");

// create a string with the same number of asterisk (*) characters as inches of rain entered bythe user
let i;
let rainStr = "Rain: ";

for (i = 0; i < rain; i++) {
    rainStr += "*";
}

// console log the string
console.log(rainStr);

// determine how the yield is affected by the rain
let yield = 50;             // normally the land produces 50 bushels of grain

if (rain >= 20) {           // but if there's too much rain (20 inches or more), that number goes down by 10%
    yield *= 0.9;
} else if (rain < 10) {     // or if there's too little rain (less than 10 inches), that number goes down by 20%
    yield *= 0.8;
}

// prompt the user whether they used fertilizer. the user should enter "yes" or "no"
let fert = prompt("Did you use fertilizer?");

// if the user said "yes", prompt them what type of fertilizer they used
if (fert === "yes") {
    fert = prompt("Did you use premium or regular fertilizer?")      // the user should enter "premium" or "regular"
}

// adjust yield based on fertilizer
if (fert === "regular") {
    yield *= 1.1;                   // regular fertilizer: add 10% to the yield
} else if (fert === "premium") {
    yield *= 1.15;                  // premium fertilizer: add 15% to the yield
}

yield = yield.toFixed(2);           // round to 2 decimal points

// console log the result
let yieldStr = "The yield should be " + yield + " bushels per acre.";
console.log(yieldStr);