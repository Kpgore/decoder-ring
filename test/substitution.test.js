// Write your tests here!
const {expect} = require("chai");
const substitutionModule = require("../src/substitution");

describe("substitution testing", () => {
    it("It returns false if the given alphabet isn't exactly 26 characters long", () => {
        const input = substitutionModule.substitution("elevator", "short")
        expect(input).to.be.false;
    });
    it("It correctly translates the given phrase, based on the alphabet given to the function", () => {
        const input = substitutionModule.substitution("elevator", "qwertyuioplkjhgfdsazxcvbnm")
        const expected = "tktcqzgs"
        expect(input).to.equal(expected);
    });
    it("It returns false if there are any duplicate characters in the given alphabet", () => {
        const input = substitutionModule.substitution("elevator", "qwertyuioplkjhgfdsazxcvbbb")
        expect(input).to.be.false;
    });
    it("It maintains spaces in the message, decoding", () => {
        const input = substitutionModule.substitution("afqeohu oa vtosr", "qwertyuioplkjhgfdsazxcvbnm", false)
        const expected = "spacing is weird"
        expect(input).to.equal(expected);
    });
    it("It maintains spaces in the message, encoding", () => {
        const input = substitutionModule.substitution("spacing is weird", "qwertyuioplkjhgfdsazxcvbnm")
        const expected = "afqeohu oa vtosr"
        expect(input).to.equal(expected);
    });
    it("It ignores capital letters", () => {
        const input = substitutionModule.substitution("CaPiTaL", "qwertyuioplkjhgfdsazxcvbnm")
        const expected = "eqfozqk"
        expect(input).to.equal(expected);
    });
});