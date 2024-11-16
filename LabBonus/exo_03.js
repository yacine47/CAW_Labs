

// Question 1

const setOne = (arr)=>Array.from(new Set(arr));
    
console.log(setOne([1,2,3,3,4,5,4]));


// Question 2


const getRidOf = (tab, ...val) =>tab.filter(num => !val.includes(num));

console.log(getRidOf([1,2,3,3,4,5,4],4,5));

