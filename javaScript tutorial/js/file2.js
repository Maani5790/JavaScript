var Prices = [200,300,400,500,600];
var newPriceTag = Prices.filter((elem,index) =>{
    return elem < 400;

})
console.log(newPriceTag);