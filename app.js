// function l(){
// 	return console.log.apply(console,arguments);
// }
function l(){
	return console.log(...arguments);
}
// Array.prototype.s=function(){
// 	return this.push(...arguments);
// }
// const arr=[1,2];arr.s(3);
// l(arr);
// {
// 	let a=10;
// 	var b=1;
// }
// console.log(b);
// l(b);
function bar(x=y,y=2){
	return [x,y]
}
l(bar());

function bar1(a=2,b=a){
 	return [a,b]
}
l(bar1());

//?
function f(){
	l('I am outside!')
}
(function(){
	// function f(){
	// 	l('I am inside!')
	// }
	// if(false){}
	f();
}());


let x=do{
	let t = 2;
	t*t+1;
}
l(x);