//const jest =  require("jest")
const sum = jest.fn() // func. mocking -> creates a new function 

sum.mockReturnValue(5)
//sum.mockReturnValue(5)

test("addition of 2 and 3 is 5" , ()=>{
    
    expect(sum()).toBe(5);
})

test("addition of 6 and 3 is 12" , ()=>{
    
    expect(sum()).toBe(5);
})