
<h1 align="center">
	<img width="500" src="https://user-images.githubusercontent.com/33973828/74024465-ccc99700-4956-11ea-9066-3b2dc2817ac0.png" >
	<br>
	    <img src="https://img.shields.io/bundlephobia/min/json-buff">
	<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/Usamaliaquat123/Json-Buff">
	<br>
 <h2 align="center">JSON functions that can convert into buffers 🎉</h2>
</h1>

json-buff converts to base64 instead, and deconverts base64 to a buffer. 


### API

#### stringify(value)
Converts to base64 instead.
#### parse(str)
Get a buffer.
#### replace(val)
replace implementation which turns every value that is a Buffer instance into an object.
#### isArray(val)
if the value is an arr return TRUE | FALSE
#### isObject(val)
if the value is an object return TRUE | FALSE
#### isString(val)
if the value is an string return TRUE | FALSE
#### isBufferLike(val)
if the value is an buffer return TRUE | FALSE

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
