function invalidInput(num){
    if(typeof num!=='number')
        throw new Error('Invalid Input')
}

module.exports=invalidInput