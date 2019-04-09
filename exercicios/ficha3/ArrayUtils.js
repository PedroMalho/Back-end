var ArrayUtils = {
    isEmpty: function (array) {
        if (array != undefined && array.length >= 1) {
            return false;
        } else {
            return true;
        }
    },

    max: function (array) {
        if (!this.isEmpty()) {
            var res = array[0];
            for (var i = 0; i < array.length; i++) {
                if (array[i] > res) {
                    res = array[i];
                }
            }
            return res
        }
        else {
            return null;
        }
    },

    min: function (array) {
        var res = array[0];
        for (var i = 0; i < array.length; i++) {
            if (array[i] < res) {
                res = array[i];
            }
        }
        return res
    },

    average: function (array) {
        var i = 0;
        var res = 0;
        while (i < array.length) {
            res = res + array[i];
            i++
        }
        var media = res / array.length;
        return media;
    },

    indexOf: function (array, value) {
        var index = -1;
        for (var i = 0; i < array.length; i++) {
            if (value == array[i]) {
                index = i;
            }
        }
        return index;
    },

    subArray: function (array, startIndex, endIndex) {
        res = [];
        for (var i = startIndex; i <= endIndex; i++) {
            res.push(array[i])
        }
        return res
    },

    isSameLength: function (a1, a2) {
        if (a1.length == a2.length) {
            return true;
        } else {
            return false;
        }
    },

    reverse: function (array) {
        var res = [];
        for (var i = array.length - 1; i >= 0; i--) {
            res.push(array[i])
        }
        return res
    },

    swap: function (array, index1, index2) {
        var res = array;
        var i = res[index2];
        res[index2] = res[index1];
        res[index1] = i;
        return res;
    },

    contains: function (array, value) {

        return this.indexOf(array, value) != -1;

        // var contains = false;
        // var index = this.indexOf(array, value);
        // if (index != -1) {
        //     contains = true;
        // }
        // return contains;

        /* var existe = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                existe = 1;
                break;
            }
        }
        if (existe == 1) {
            return true;
        } else {
            return false;
        }*/
    },

    concatenate: function (a1, a2) {
        for (var i = 0; i < a2.length; i++) {
            a1.push(a2[i])
        }
        return a1;
    }
}

module.exports = ArrayUtils;