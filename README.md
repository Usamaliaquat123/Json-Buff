
![rsz_jsn](https://user-images.githubusercontent.com/33973828/74006359-4ac67780-4930-11ea-9f61-0314a57bb51e.png?style=centerme)
## JSON functions that can convert into buffers 🎉


JSON mangles buffers by converting to an array... which isn't helpful. json-buffers converts to base64 instead, and deconverts base64 to a buffer.

` var JSONB = require('json-buff') `
` var Buffer = require('buffer').Buffer `

` var str = JSONB.stringify(Buffer.from('hello there!')) `

` console.log(JSONB.parse(str)) //GET a BUFFER back `
 

If you are using yarn
` yarn add json-buff `

and 

` npm install json-buff `