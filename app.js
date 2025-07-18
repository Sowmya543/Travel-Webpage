

// // scope

// // global - let, var, const
// // function - 
// // block - var


// // console.log(Name);
// // const Name = "satya"

// // function Name(){
// //     let a = 30
// // }
// // console.log(a);


// // var = global, block
// // let = global
// // const = global


// // higher order functions

// // function Sowmya(data){
// //     function SowmyaData(){
// //         details = {
// //             Name : "Sowmya",
// //             id : 123,
// //             Role : "Full Stack",
// //             Salary : "5Cr"
// //         }
// //         data()
// //         console.log(details);
// //     }
// //     return SowmyaData;
// // }

// // function Satya(data){
// //     function SatyaData(){
// //         details = {
// //             Name : "Satya",
// //             id : 245,
// //             Role : "MERN Stack",
// //             Salary : "10Cr"
// //         }
// //         data()
// //         console.log(details);
// //     }
// //     return SatyaData;
// // }

// // function Management(){
// //     console.log("access given");
// // }

// // closure

// // let access = Sowmya(Management)
// // access()

// // map, filter, reduce

// // function test(){
// //     array = [1,2,3,4,5]
// //     let result = array.map((i)=>{
// //            return i*3

// //     })
// //     console.log(result);

// // }

// // test()


// // function test1(){
// //     array = [1,2,3,4,5]
// //     let result = array.filter((i)=>{

// //         return i%2 == 0;

// //     })
// //     console.log(result);

// // }

// // test1()

// function test2() {
//     array = [1, 2, 3, 4, 5]
//     let result = array.reduce((i, sum) => {
//         return sum * i
//     })
//     console.log(result);

// }

// test2()

// // spread operator and rest operator

// // array = [11,12,13,14,15]

// // array1 = [1,2,3,4,...array]

// // array2 = [...array1, 21,31,41]

// // console.log(array1);


// // function test3(...data){
// //     console.log("test3 function");
// //     console.log(data);
// // }

// // test3(1,2,3,4,5,6,7,8,9,10)


// // let a = [1,2,3,4,5]
// // let b = [10,20,30,40,50]
// // let c = [11,21,31,41,51, ...b, ...a]
// // console.log(c);


// // let array = [1,2,3]
// // let [a,b,c] = array
// // console.log(a,b,c);


// function fetchData(callback) {
//     console.log('Data fetched');
//     callback();
// }

// function processData(callback) {
//     console.log('Data processed');
//     callback();
// }

// function displayData() {
//     console.log('Data displayed');
// }

// // Callback Hell
// fetchData(

//     function () {

//         processData(

//             function () {

//                 displayData();

//             }


//         )

//     }

// )


// promises

// let checkEven = new Promise((resolve, reject) => {
//     let number = 5;
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });

// checkEven
//     .then((message) => console.log(message)) // On success
//     .catch((error) => console.error(error)); // On failure


console.log("object1");
console.log("object2");

async function fetchData() {
  const response =  await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

fetchData();

console.log("object3");
