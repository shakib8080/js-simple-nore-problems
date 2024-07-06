// // let names = ['shakib' ,' sumaiya','shakib','ashik','sumaiya'];
// // function getonename (names){
// //     let dublicate = [];
// //     for (let i = 0 ; i <names.length; i++){
// //         let element = names[i];
// //         if(dublicate.indexOf(element) == -1){
// //             dublicate.push(element);
// //         }
     
// //     }
// //     return dublicate;
// // }
// // getresult = getonename (names);
// // console.log(getresult);

// let number = [44,22,44,88,99,44,];
// function getonenumber(number){
//     let numberis = [];
//     for(let i = 0; i<number.length; i++){
//         let element = number[i];
//         if(numberis.indexOf(element)){
//             numberis.push(element);
//         }
//     }
//     return numberis;
// }

// result = getonenumber(number);
// console.log(result);

// let number = [12,20,12,56,66,90,66,];
// function getdublicate (number) {
//     let dublicate = [];
//     for(let i = 0; i < number.length; i++){
//         let element = number [i];
//         if(dublicate.indexOf(element) == -1){
//             dublicate.push(element);
//         }
//     }
//     return dublicate;

// }

// result = getdublicate (number);
// console.log(result);

//  for of 
let number = [12,20,12,56,66,90,66,];
let dublicate = [];
function dif (number){
    for(const element of number){
        if(dublicate.indexOf(element)== -1){
            dublicate.push(element);
        }
    }
    return dublicate;
    
}
result = dif (number);
console.log(result);