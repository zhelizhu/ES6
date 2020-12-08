// const fs = require('fs')

// function read1() {
//     return new Promise((res, rej) =>{
//         fs.readFile('./public/1.txt', (err, data)=>{
//             if (err) {
//                 rej(err)
//             }
//             else{
//                 res(data)
//             }
//         })
//     })
// }

// function read2() {
//     return new Promise((res, rej) =>{
//         fs.readFile('./public/2.txt', (err, data)=>{
//             if (err) {
//                 rej(err)
//             }
//             else{
//                 res(data)
//             }
//         })
//     })
// }

// function read3() {
//     return new Promise((res, rej) =>{
//         fs.readFile('./public/3.txt', (err, data)=>{
//             if (err) {
//                 rej(err)
//             }
//             else{
//                 res(data)
//             }
//         })
//     })

// }

// async function main(){

//    let t1=await read1()

//    let t2=await read2()

//    let t3=await read3()

//   console.log(t1.toString());
// }

// main()