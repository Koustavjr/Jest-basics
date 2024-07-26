function fetchData(callback)
{
    setTimeout(()=>{

        callback('Hello World')
    },2000)
}

module.exports=fetchData