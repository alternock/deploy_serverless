exports.handler = async function(event) { 
    let arr = ["foo","bar","baz","qux","thud","octo","cat"];
    
    return{
        statusCode:200,
        body:JSON.stringify({"products":arr})
    }
}