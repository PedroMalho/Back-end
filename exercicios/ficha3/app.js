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

