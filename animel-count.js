function animelcount (miles){
    const firstmile = 10; 
    const secounmile = 50;
    const thirdmile = 100;

    if(miles <= 10){
        let count = miles *10;
        return count; 
    }
    else if(miles <= 20 ){
        let firstdensanimel = 10 * firstmile ;
        let restdens = miles - 10 ;
        let secounddensanimels = miles *secounmile;
        let totalldensanimels = secounddensanimels + firstdensanimel;
        return totalldensanimels;
    }
    else if(miles <= 30){
        let firstdensanimel = 10 * firstmile ;
        let restdens = miles - 10 ;
        let secounddensanimels = miles *secounmile; 
        let restdensanimels = miles - 20 ;
        let thirddensanimels = restdensanimels * thirdmile;
        let totalldens = firstdensanimel +secounddensanimels +thirddensanimels ;
        return totalldens;
    }
}
 result = animelcount (30); 
 console.log(result);