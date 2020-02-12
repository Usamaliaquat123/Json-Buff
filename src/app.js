



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
function replace(value){
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



function stringify (o) {
    if('undefined' == typeof o) return o
  
    if(o && Buffer.isBuffer(o))
      return JSON.stringify(':base64:' + o.toString('base64'))
  
    if(o && o.toJSON)
      o =  o.toJSON()
  
    if(o && 'object' === typeof o) {
      var s = ''
      var array = Array.isArray(o)
      s = array ? '[' : '{'
      var first = true
  
      for(var k in o) {
        var ignore = 'function' == typeof o[k] || (!array && 'undefined' === typeof o[k])
        if(Object.hasOwnProperty.call(o, k) && !ignore) {
          if(!first)
            s += ','
          first = false
          if (array) {
            if(o[k] == undefined)
              s += 'null'
            else
              s += stringify(o[k])
          } else if (o[k] !== void(0)) {
            s += stringify(k) + ':' + stringify(o[k])
          }
        }
      }
  
      s += array ? ']' : '}'
  
      return s
    } else if ('string' === typeof o) {
      return JSON.stringify(/^:/.test(o) ? ':' + o : o)
    } else if ('undefined' === typeof o) {
      return 'null';
    } else
      return JSON.stringify(o)
 }



module.exports = {
    parse,
    stringify,
    replace,
    isArray,
    isString,
    isObject,
    isBufferLike
}