const assert = require('assert');
const { HelloWorld } = require('../src/HelloWorld');

beforeEach(() => {
    this.helloWorld = new HelloWorld();
})

describe('HelloWorld Test', () => {
    it("should return hello world message", () => {
        assert.equal('Hello World', this.helloWorld.sayHello());
    })
});