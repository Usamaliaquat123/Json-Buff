
<h1 align="center">
	<img width="500" src="https://user-images.githubusercontent.com/33973828/74024465-ccc99700-4956-11ea-9066-3b2dc2817ac0.png" alt="keyv">
	<br>
	<br>
 <h2 align="center">JSON functions that can convert into buffers 🎉</h2>
</h1>

JSON mangles buffers by converting to an array... which isn't helpful. json-buffers converts to base64 instead, and deconverts base64 to a buffer.

` var JSONB = require('json-buff') `
` var Buffer = require('buffer').Buffer `

` var str = JSONB.stringify(Buffer.from('hello there!')) `

` console.log(JSONB.parse(str)) //GET a BUFFER back `
 

If you are using yarn
` yarn add json-buff `

and 

` npm install json-buff `
