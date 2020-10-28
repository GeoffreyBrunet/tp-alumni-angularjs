const { browser } = require("protractor");

describe("Alumni application", function(){
    describe("membersList", function(){

    });
    it("should filter the list of members", async function(){
        await browser.get("/");
        var membersList = element.all(by.repeater("title in portfoliotitle"));
        expect(membersList.count()).toBe(6);
    })
    it("should have a title", async function(){
        browser.get('http://localhost:8000/');
        expect(browser.getTitle()).toEqual("Alumni website");
    })
})