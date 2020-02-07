
<h1 align="center">
	<img width="500" src="https://user-images.githubusercontent.com/33973828/74024465-ccc99700-4956-11ea-9066-3b2dc2817ac0.png" >
	<br>
	    <img src="https://img.shields.io/bundlephobia/min/json-buff">
	<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/Usamaliaquat123/Json-Buff">
	<br>
 <h2 align="center">JSON functions that can convert into buffers 🎉</h2>
</h1>

JSON mangles buffers by converting to an array... which isn't helpful. json-buff converts to base64 instead, and deconverts base64 to a buffer.


``` js


 var JSONB = require('json-buff') 
 var Buffer = require('buffer').Buffer 

 var str = JSONB.stringify(Buffer.from('hello there!')) 

 console.log(JSONB.parse(str)) //GET a BUFFER back 
 ```
If you are using yarn
```js
yarn add json-buff 
```
and 
```js
 npm install json-buff 
```
