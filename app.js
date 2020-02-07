// support stringify
exports.stringify = function stringify(o) {
    if ('undefined' == typeof o ) return o

    if(o && Buffer.isBuffer(o)){
        return JSON.stringify(':base64:' + o.toString('base64'))
    }
    if(o && o.toJSON())
        o = o.toJSON()

    if(o && 'object' === typeof o ){
        // not handle object 
    }else if('string' === typeof o){
        return JSON.stringify(/^:/.test(o) ? ':' + o : o)
    }else if('undefined' === typeof o ){
        return null
    }else{
        return JSON.stringify(o)
    }
}

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