function isEmpty(array) {
    if (array.length >= 1) {
        return false;
    } else {
        return true;
    }
}

console.log(isEmpty([]))



function max(array) {
    var res = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > res) {
            res = array[i];
        }
    }
    return res
}

console.log(max([1,2,3,9,5,6,7,8]));



function min(array) {
    var res = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < res) {
            res = array[i];
        }
    }
    return res
}

console.log(min([1,2,3,9,5,6,7,8]));



function average(array) {
    var i = 0;
    var res = 0;
    while (i < array.length) {
        res = res + array[i];
        i++
    }
    var media = res / array.length;
    return media;
}

console.log(average([1,2,3,4]))

function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (value == array[i]) {
            var res = i;
        } else {
            return "Esse valor não existe no array."
        }
    }
    return res;
}

console.log(indexOf([1,2,3,4,5,6,7], 4))


function subArray(array, startIndex, endIndex) {
    res = [];
    for ( var i = startIndex; i <= endIndex; i++ ) {
        res.push(array[i])
    }
    return res
}

console.log(subArray([1,2,3,4,5,6,7,8], 1,4))


function isSameLength(a1, a2) {
    if (a1.length == a2.length) {
        return true;
    } else {
        return false;
    }
}

console.log(isSameLength([1,2,3], [1,2,3]))


function reverse(array) {
    var res = [];
    for ( var i = array.length-1; i >= 0; i--) {
        res.push(array[i])
    }
    return res
}

console.log(reverse([1,2,3,4]))


function swap(array, index1, index2) {
    var res = array;
    var i = res[index2];
    res[index2] = res[index1];
    res[index1] = i;
    return res;
}

console.log(swap([0,1,2,3,4], 1,3))


function contains(array, value) {
    
}

console.log(contains([1,2,3,4,5], 3))