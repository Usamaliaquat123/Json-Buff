

 // support parse
function parse(s){
    return JSON.parse(s, function(key,value){
        if('string' === typeof(value)){
            if(/^:base64:/.test(value))
                return Buffer.from(value.substring(8), "base64")
            else   
                return /^:/.test(value) ? value.substring(1) : value
        }
        return value
    })
} 
// Support Replacer
function replacer(key,value){
    if(isBufferLike(value)){
        if(isArray(value.data)){
            if(value.data.length > 0){
                value.data = 'base64:' + Buffer.from(value.data).toString('base64') 
            }else{
                value.data = ''
            }
        }
    }
    return value
}

function isBufferLike(x){
    return (
        isObject(x) && x.type === 'Buffer' && (isArray(x.data) || isString(x.data))
    )
}


function isArray(x){
    return Array.isArray(x)
}

function isString(x){
    return typeof x === 'string'
}

function isObject(x){
    return typeof x === 'object' && x !== null
}



module.exports = {
    parse,
    replacer,
    isArray,
    isString,
    isObject,
    isBufferLike
}