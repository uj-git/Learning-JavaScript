function download(url){
    return new Promise(function download(res, rej){
        console.log("Starting to Download from", url);
        setTimeout(function down(){
            console.log("Dowloading completed");
            const data = "123456";
            res(data);
        }, 1000);
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

function upload(file, url){
    return new Promise(function download(res, rej){
        console.log("Started Uploading",file, "on", url);
        setTimeout(function up(){
            console.log("Uploading done");
            const report = "SUCCESS"
            res(report);
        }, 2000);
    })
}

function doAfterReceiving(value){
    let future = iter.next(value);
    console.log("Future is", future);
    if(future.done) return;
    future.value.then(doAfterReceiving);
}

async function steps(){
    const downloadedData = await download("www.xyz.com");
    console.log("Data Downloaded is", downloadedData);
    const fileWritten = await writeFile(downloadedData);
    console.log("File Written is", fileWritten);
    const response =  await upload(fileWritten, "wwww.umang.com");
    console.log("Upload response is", response);
}

steps();