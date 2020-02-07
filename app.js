// support parse
exports.parse = function(s){
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