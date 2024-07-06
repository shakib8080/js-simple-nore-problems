function wooscalculator (chirquantity ,khatquantity,tablequantity){
    let chairwood = 10;
    let khatwood = 20;
    let tablewood = 30;
 let chairwoodquantity = chairwood *chirquantity;
 let khatwoodquantity = khatwood *khatquantity;
 let tablewoodquantity = tablewood * tablequantity;
 let totall = chairwoodquantity+ khatwoodquantity +tablewoodquantity;
 return totall;
}

need = wooscalculator (2,2,3);
console.log(need);
