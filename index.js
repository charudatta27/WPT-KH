// NODE JS ---->

// modules :

// in built
// user defined
// 3rd party

//js -> functions -> require module 

//note: in order to use any fn from a module we should require it

//mymodule -> sum, product
//arithmeticoperations

//const moduleRef = require("mymodule");
// // at left side  we have a variable which will hold the refernce of the required moduele
//covention: give the variable name as same as module name so that we can recognize the purpose of the variable

// mymodule.sum(3,4);

// mymodule.product(4,5);


// fs: file system -> readfile, readFileSync

// required("fs");

// const fs = required("fs");

// fs.readFile

// ===========================================

// http module: 
// we can create servers
// ip: 127.0.0.1

// 127.0.0.1:5000    //--> 5000 port no eg sql5000
// socket  = ip + port



// const http = require("http");

// const server = http.createServer((request, response)=>{
//    var a = 30;
//    var b = 30;
//    var c = a + b;
//     response.write(`Sum of ${a} and ${b} is ${c}`);
//     response.end();
// }); // it will return the object referernce of the newly created server // local host server is all running ip: 127.0.0.1// 


// // server.listen(port-number) 
//  server.listen(5000); 

// ==========================================================


// mymodule -> sum , product 



// const sum = (a,b)=>{
//     return 
// }


// import { createServer} from 'http';
// import{sum, product} from './mymodule.js';

// const server = createServer((request, response)=>{
//    sumResult
//     response.write("hello world");
//     response.end();
// })
// server.listen(6700);










// ===============================================

// 3rd party module: with npm install 3rd party apps 

// express 

// npm i/install module-name/package-name

// npm install express

// npm i express 
// npm i cors 

// package.json -> record od installed module/package name with version 
// node modules -> contains the files and folders related installed modules 
// package-locks.json - contains the mapping of module name with the files and folders in node modules

// types of 3rd party modules:

// 1.local module : installed inside specific project 
//  eg: express, cors 

//  if a module is providing code base (fnc, propeties) that has to be installed locally cant go with global
 
//  our app will be dependent on these fn and properties given by 3rd party module so we can say 3rd party modules as dependency 
// all the local modules/dependencies are getting listed into the package.json file

// why :

//whenever there is req to move the project to share the project or put the project or put the project on git repo in all these caes we will not provide/share the node modules folder as it is not practically possible to share that much larger folder that contain large no of files and folders 
//  2.global module :  installed outside project so any one can access (centralized location like c drive)

// cli tools always installed locally

//  npm i -g module-name/tool-name


  //nodemon : nodemon 

//   npm i -g nodemon


// npm i --> to get node module folder 