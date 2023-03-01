// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;


describe("caesar", () => {
    describe("error handling" , () =>{
        it("Should return false if the shift amount is zero", () =>{
            const actual = caesar("thinkful", 0);
            expect(actual).to.be.false;
        });

        it("should return false if the shift amount is above 25", () =>{
            const actual = caesar("thinkful", 26);
            expect(actual).to.be.false;
        });

        it("should return false if the shift amount is less than -25", () =>{
            const actual = caesar("thinkful", -26);
            expect(actual).to.be.false;
        });
    });

    describe("encoding", () => {
        it("should encode a message by shifting the letters", () =>{
            const expected = "phvvdjh";
            const actual = caesar("message", 3);
            expect(actual).to.equal(expected);
        });

        it("should leave spaces and other symbols as is", () =>{
            const expected = "bpqa qa i amkzmb umaaiom!";
            const actual = caesar("this is a secret message!", 8);
            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters", () => {
            const expected = "bpqa qa i amkzmb umaaiom!";
            const actual = caesar("This is a secret message!", 8);
            expect(actual).to.equal(expected);
        });

        it("should appropriately handle letters at the end of the alphabet", () =>{
            const expected = "bpqa qa i amkzmb umaaiom!";
            const actual = caesar("this is a secret message!", 8);
            expect(actual).to.equal(expected);
        });

        it("should allow for a negative shift that will shift to the left", () =>{
            const expected = "qefkhcri"
            const actual = caesar("thinkful", -3);
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding", () => {
        it("should decode a message by shifting the letters in the opposite direction", () => {
            const actual = caesar("qefkhcri", -3, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });

        it("should leave spaces and other symbols as is", () => {
            const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
            const expected = "this is a secret message!"
            expect(actual).to.equal(expected);
        });

        it("should ignore capital letter", () => {
            const actual = caesar("Phvvdjh", 3, false);
            const expected = "message";
            expect(actual).to.equal(expected);
        });

        it("should appropriately handle letters at the end of the alphabet", () => {
            const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
            const expected = "this is a secret message!";
            expect(actual).to.equal(expected);
        });

        it("should allow for a negative shift that will shift to the left", () => {
            const actual = caesar("qefkhcri", -3, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });
    });
});