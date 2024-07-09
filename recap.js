function largestnumber (numbers){
    let max = numbers[0];
    for (let i = 0 ; i <numbers.length; i++){
        let element = numbers [i];
        if(element > max ){
        max = element ;
        }
        
    }
    return max ;
   
}
let number = [944,322,543,976,432,24778,];
 let maxnumber = largestnumber(number);
console.log(maxnumber);

