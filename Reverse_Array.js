//Revrese array

const array= [12,23,14,25,26];

let arrayResult = [];
let j = array.length-1;
for(let i =j;i<=0;i--) {
    //Code for the reverse array
    if (j>=0){
        arrayResult[j] = array[i];
        j--;
        
    }
    console.log(arrayResult);
}

