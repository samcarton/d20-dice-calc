const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const arraySum = arr => arr.reduce((acc, val) => acc + val, 0);
const isString = val => typeof val === 'string';

var createDiceTerm = function(spec) {
    var that = {};
    that.multiplier = spec.multiplier;
    //that.diceCount = spec.diceCount;
    that.diceSize = spec.diceSize;
    that.sign = spec.sign || 1;

    var execute = function() {
        if(that.diceSize) {

            var rolls = [];
            for (var i = 0; i < that.multiplier; i++) {
                rolls.push(randomIntegerInRange(1,that.diceSize));
            }

            return {rolls: rolls, total: that.sign * arraySum(rolls)};
        }
        else {

            return {rolls: null, total: that.sign * that.multiplier};
        }
    };

    that.execute = execute;

    return that;
};

var parseDiceTerm = function(input) {
    // todo validate input
    var sign = input.charAt(0) === '-' ? -1 : 1;

    var inputWithoutSign = input.charAt(0) === '-' || input.charAt(0) === '+' ? input.slice(1) : input;

    // no multiplier specified
    if(inputWithoutSign.charAt(0) === 'd') {
        return createDiceTerm({
            sign: sign,
            multiplier: 1,
            diceSize: parseInt(inputWithoutSign.slice(1))
        });
    }

    var parts = inputWithoutSign.toLowerCase().split('d');
    var multiplier = parseInt(parts[0]);
    var diceSize = null;

    if(parts.length === 2)
    {
        diceSize = parseInt(parts[1]);
    }

    return createDiceTerm({
        sign: sign,
        multiplier: multiplier,
        diceSize: diceSize
    });
};

// var term = createDiceTerm({
//     multiplier: 3,
//     diceSize: 20
// });

// var result = term.execute();
// console.log(result.total);
// console.log(result.rolls);


// result = term.execute();
// console.log(result.total);
// console.log(result.rolls);


// parse tests

// var term = parseDiceTerm('2d6');
// console.log(term);
// console.log(term.execute());

// term = parseDiceTerm('-2d6');
// console.log(term);
// console.log(term.execute());

// term = parseDiceTerm('+2d6');
// console.log(term);
// console.log(term.execute());

// term = parseDiceTerm('5');
// console.log(term);
// console.log(term.execute());

// term = parseDiceTerm('-5');
// console.log(term);
// console.log(term.execute());

// term = parseDiceTerm('+5');
// console.log(term);
// console.log(term.execute());

// term = parseDiceTerm('0');
// console.log(term);
// console.log(term.execute());

// term = parseDiceTerm('d6');
// console.log(term);
// console.log(term.execute());

// term = parseDiceTerm('+d6');
// console.log(term);
// console.log(term.execute());

// term = parseDiceTerm('-d6');
// console.log(term);
// console.log(term.execute());