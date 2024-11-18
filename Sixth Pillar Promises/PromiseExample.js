
function download(url){
    return new Promise(function download(res, rej){
        console.log("Starting to Download from", url);
        setTimeout(function down(){
            console.log("Dowloading completed");
            const data = "123456";
            res(data);
        }, 4000);
    })
}

function writeFile(content){
    return new Promise(function download(res, rej){
        console.log("Starting to Write the", content);

        setTimeout(function write(){
            console.log("Writing file done");
            var fileName = "file.txt"
            res(fileName);
        }, 3000);
    })
}

function upload(url, file){
    return new Promise(function download(res, rej){
        console.log("Started Uploading",file, "on", url);
        setTimeout(function write(){
            console.log("Uploading done");
            var report = "Done uploading " + file
            res(report);
        }, 2000);
    })
}


download("www.umang.com")
.then(
    function fulfilHandler(content){
        console.log("Downloaded Data is", content);
        return writeFile(content);
    }
)
.then(
    function fulfilHandler(fileName){
        console.log("Written File is", fileName);
        return upload("www.umang2.com", fileName)
    }
)   
.then(function fulfilHandler(report){
    console.log(report);
})