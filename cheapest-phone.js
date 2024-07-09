let phones = [
   { name:'nokia',price:1200,ram:'128gb',},
    {name:'xaomi', price:16000,ram:'130gb'},
    {name:'samsung s21',price:20000,ram:150,},
    {name:'nokia 11',price:12000,ram:'12gb'},
]
let cheapest = phones[0];
for(let phone of phones){
    if(phone.price <cheapest.price){
        cheapest =phone;
    }
    
}
console.log(cheapest);


// function cheapestphone (phone){
//     let cheapest = phone[0];
//     for(let phones of phone){
//         if( phones.price < cheapest.price ){
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }
// let itemes = [
    
//      {name:'xaomi', price:16000,ram:'130gb'},
//      {name:'samsung s21',price:20000,ram:150,},
//      { name:'nokia',price:12000,ram:'128gb',},
//      {name:'nokia 11',price:1200,ram:'12gb'},
//  ];
//  result =cheapestphone (itemes);
//  console.log(result);


