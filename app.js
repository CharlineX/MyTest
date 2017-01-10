// function l(){
// 	return console.log.apply(console,arguments);
// }
function l(){
	return console.log(...arguments);
}
Array.prototype.s=function(){
	return this.push(...arguments);
}
const arr=[1,2];arr.s(3);
l(arr);
{
	let a=10;
	var b=1;
}
console.log(b);
l(b);