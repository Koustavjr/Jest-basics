function getData(){
    return new Promise((resolve,reject)=>{
      setTimeout( ()=> resolve('Hello World'),1000)
    })
}

module.exports=getData