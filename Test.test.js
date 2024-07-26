const sum=require('./sum');
const invalidInput=require('./invalidInput')
const fetchData=require('./callback')
const getData=require('./Promise')


// for numbers toBe
test('1 + 2 should be equals to 3', () => { 

    expect(sum(1,2)).toBe(3);
}
)


// for objects use toEqual

test("objects equality",()=>{
    const data={"one":1}
    data['two']=2;

    expect(data).toEqual({'one':1,'two':2});
})

// we use toBeFalsy to check if a value is null,zero,blank,false, NaN etc.
const n=null;

test('check for null',()=>{
    expect(n).toBeFalsy();
})


// for truthy

const a=1;
test('check for truthy',()=>{
    expect(a).toBeTruthy();
})


// toThrow for error handling

test('throws error on invalid input',()=>{

    expect(()=>{
        invalidInput('sds') // if we pass a number the test will not pass as it will not throw any error
    }).toThrow();
})


// different ways of testing asynchornous code in js is callbacks,promises and async await

test('input should be Hello World',done=>{
    function callback(data)
    {
        try {
            expect(data).toBe('Hello World')
            done() // used in callback functions
        } catch (error) {
            done(error)
        }
    }
    fetchData(callback)
})

// for promises

test('data to be Hello World',()=>{
    return expect(getData()).resolves.toBe('Hello World')
})

test('data not Hello World',()=>{
    return expect(getData()).rejects.toThrow('error')
})


// async await

test('data to be hello world',async()=>{
    const data = await getData();
    expect(data).toBe('Hello World')
})


// mock fake implementation of root function and spies are tools to track those functions

test('mock implementation',()=>{
    const mock = jest.fn(x=>42+x);

    expect(mock(5)).toBe(47);
    expect(mock).toHaveBeenCalledWith(5); // checks if the function is called with the correct parameter
})


test('spying on function of an object',()=>{
    const video={
        play:()=>{
            console.log('playing...');
        }
    }
    const spy=jest.spyOn(video,'play')
    video.play()
    expect(spy).toHaveBeenCalled();
    spy.mockRestore()
})