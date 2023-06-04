// Write your tests here!
const {expect} = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybius testing", () => {
    it("When encoding, it translates the letters i and j to 42", () => {
        const input = polybiusModule.polybius("quick")
        const expected = "1454423152"
        expect(input).to.equal(expected);
    });
    it("When decoding, it translates 42 to (i/j)", () => {
        const input = polybiusModule.polybius("1454423152", false)
        const expected = "qu(i/j)ck"
        expect(input).to.equal(expected);
    });
    it("It ignores capital letters", () => {
        const input = polybiusModule.polybius("IgNoReCaPs")
        const expected = "42223343245131115334"
        expect(input).to.equal(expected);
    });
    it("It maintains spaces in the message, encoding", () => {
        const input = polybiusModule.polybius("hi i am a space")
        const expected = "3242 42 1123 11 3453113151"
        expect(input).to.equal(expected);
    });
    it("It maintains spaces in the message,decoding", () => {
        const input = polybiusModule.polybius("3242 42 1123 11 3453113151", false)
        const expected = "h(i/j) (i/j) am a space"
        expect(input).to.equal(expected);
    });
});