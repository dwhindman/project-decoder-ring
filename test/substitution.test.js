// Write your tests here!
const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    describe("error handling", () => {
        it("should return false if the substitution alphabet is missing", () => {
            const actual = substitution("message", undefined);
            expect(actual).to.be.false;
        });

        it("should return false if the substitution alphabet is not exactly 26 characters", () => {
            const actual = substitution("message", "short");
            expect(actual).to.be.false;
        });

        it("should return false if the substitution alphabet does repeat characters", () => {
            
            const actual = substitution("message", "abcabcabcabcabcabcabcabcab");
            expect(actual).to.be.false;
        });
    });

    describe("encoding", () => {
        it("should encode a message by using the given substitution alphabet", () => {
            const expected = "ykrrpik";
            const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
            expect(actual).to.equal(expected);
        });

        it("should work with any kind of key with unique characters", () => {
            const expected = "ysii.rs";
            const actual = substitution("message", ".waeszrdxtfcygvuhbijnokmpl");
            expect(actual).to.equal(expected);
        });

        it("should preserve spaces", () => {
            const expected = "yp ysii.rs";
            const actual = substitution("my message", ".waeszrdxtfcygvuhbijnokmpl");
            expect(actual).to.equal(expected);
        });
    });


    describe("decoding", () => {
        it("should decode a message by using the given substitution alphabet", () => {
            const expected = "message";
            const actual = substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false);
            expect(actual).to.equal(expected);
        });

        it("should work with any kind of key with unique characters", () => {
            const expected = "message";
            const actual = substitution("ysii.rs", ".waeszrdxtfcygvuhbijnokmpl", false);
            expect(actual).to.equal(expected);
        });

        it("should preserve spaces", () => {
            const expected = "my message";
            const actual = substitution("yp ysii.rs", ".waeszrdxtfcygvuhbijnokmpl", false);
            expect(actual).to.equal(expected);
        });
    });
});