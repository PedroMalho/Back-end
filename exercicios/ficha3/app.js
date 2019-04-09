function started(){
    console.log("Download Started")
};

function update(){
    var i = 0;
    while (i <= 100){
        var res = i + '% of download';
        i++;
        console.log(res);
    }
};

function completed(){
    console.log("Download Finished")
};

function performDownload(started, update, completed){
    started();
    update();
    completed();
}

//performDownload(started, update, completed);

var ArrayUtils = require('./ArrayUtils.js');
var x = ArrayUtils.concatenate([1,2,3,4],[5,6,7,8]);

console.log(x);