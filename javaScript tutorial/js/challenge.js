

const months = ["jan" , "march", "april","june", "july"];
const indexOfMonth = months.indexOf('june');

if(indexOfMonth=! -1){
    const updateMonth = months.splice(indexOfMonth,1,'june');
    console.log(months);
}else{
    console.log("not ashow again and agian");
}

