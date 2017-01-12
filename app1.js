import "babel-polyfill";
import express from "express";
import {readFile} from "fs";
function l(){
	return console.log(...arguments);
}
const readFileAsync=path=>new Promise((resolve,reject) =>{
	readFile(path,"utf-8",(err,file)=>{
		err && reject(err);
		resolve(file);
	});
});
express()
	.get("/",async(req,res)=>{
		res.send((await Promise.all([
			readFileAsync("./package.json"),
			readFileAsync("./server.js"),
			readFileAsync("./app1.js")
		])).join(""));
		// res.json(await readFileAsync("./package.json"));
	})
	.listen(23333,l("success"));
// const getJson = (url,{method,headers,body}) => new Promise((resolve,reject) =>{
// 		const xhr =new XMLHttpRequest;
// 		xhr.onreadystatechange=()=>{
// 			if(xhr.readystate===4){
// 				if(xhr.status===200){
// 					resolve({
// 						text:()=>new Promise(resolve=>{
// 							resolve(xhr.responseText);
// 						}),
// 						json:()=>new Promise((resolve,reject)=>{
// 							try{
// 								resolve(JSON.parse(xhr.responseText));
// 							}catch(e){
// 								reject(e);
// 							}
// 						})
// 					});
// 				}else{
// 					reject(new Error(xhr.responseText))
// 				}
// 			}
// 		};
// 		xhr.open(method ||"get",url,1);
// 		for(let i in headers){
// 			xhr.setRequestHeader(i,headers[i]);
// 		}
// 		xhr.send(method==="get"?null:body);
// });
// getJson("/",{}).then(({json})=>json()).then(date=>{
// 	l(data)
// }).catch(err=>{
// 	l(err)
// });



// (async()=>{
// 	try{
// 		l(await readfileAsync("./package.json"));
// 	}catch(e){
// 		l(e);
// 	}
// })();
// readfileAsync("./package.json").then(file=>{l(file)}).catch(err=>{l(err)});