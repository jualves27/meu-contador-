const { test } = require("node:test");
const assert = require("node:assert");

const { aumentar, diminuir, zerar } = require("../contador.js");

test("Deve aumentar o contador", () => {
    assert.strictEqual(aumentar(5), 6);
});

test("Deve diminuir o contador", () => {
    assert.strictEqual(diminuir(5), 4);
});

test("Deve zerar o contador", () => {
    assert.strictEqual(zerar(), 0);
});
