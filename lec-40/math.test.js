const math = require("./math")

jest.mock("./math") // mocking the entire module

/*
multiply = jest.fn()
sub = jest.fn()
mod = jest.fn()
*/

test("multiplication of 2 and 3 is 6" , ()=>{
    math.multiply.mockReturnValueOnce(6)
    expect(math.multiply(2,3)).toBe(6);
})

test("subtraction of 6 and 5 is 1" , () =>{
    math.sub.mockReturnValueOnce(1)
    expect(math.sub(6,5)).toBe(1);
})


test("modulo of 6 and 3 is 0" , () =>{
    math.sub.mockReturnValueOnce(0)
    expect(math.sub(6,3)).toBe(0);
})
