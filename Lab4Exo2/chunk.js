

function chunk(array, size){
    var chunkedArr = [];
    var index = 0;
    while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
    }
    return chunkedArr;
    }

console.log(chunk([0,1,2,3,5,9,],2));
    

module.exports = chunk;