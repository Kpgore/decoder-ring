// Write your tests here!
const {expect} = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar testing", () => {
    it("return false is shift param is missing", () => {
        const input = caesarModule.caesar("missing!")
        expect(input).to.be.false;
    });
    it("return false is shift is more than 25", () => {
        const input = caesarModule.caesar("too long", 100);
        expect(input).to.be.false
    });
    it("return false is shift is less than -25", () => {
        const input = caesarModule.caesar("too short?", -100);
        expect(input).to.be.false
    });
    it("return false is shift is equal to 0", () => {
        const input = caesarModule.caesar("no good", 0);
        expect(input).to.be.false
    });
    it("return encoded message", () => {
        const input = caesarModule.caesar("i should be fishing right now", 12);
        const expected = "u etagxp nq ruetuzs dustf zai";
        expect(input).to.equal(expected);
    });
    it("return decoded message", () => {
        const input = caesarModule.caesar("u etagxp nq ruetuzs dustf zai", 12, false);
        const expected = "i should be fishing right now";
        expect(input).to.equal(expected);
    });
    it("leave spacing", () => {
        const input = caesarModule.caesar("spacing !", 12);
        const expected = " ";
        expect(input.charAt(7)).to.equal(expected);
    });
    it("leave special characters", () => {
        const input = caesarModule.caesar("special &", 12);
        const expected = "&";
        expect(input.charAt(8)).to.equal(expected);
    });
    it("ignore capital letters", () => {
        const input = caesarModule.caesar("CaPiTaL LeTtErS", 12);
        const expected = "ombufmx xqffqde";
        expect(input).to.equal(expected);
    });
});