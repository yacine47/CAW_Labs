

function mean(arr){
    sum = 0;
        for(let i =0;i<arr.length ;i++){
            sum+=  arr[i];
    }

    return sum/arr.length;
}


module.exports = mean;

console.log(mean([1,2,50,162]));
