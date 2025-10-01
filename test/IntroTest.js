const add = require("../Intro.js")

test('add 1 + 2 = 3', ()=>{
    expect(add(1, 2)).toBe(3);
})

test('add 2 + 3 != 4', ()=>{
    expect(add(2, 3)).not.toBe(3);
})  