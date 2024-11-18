function download(url, cb){
    console.log("Starting to Download from", url);

    setTimeout(function down(){
        console.log("Dowloading completed");
        const data = "123456";
        cb(data);
    }, 4000);
}

function writeFile(data, cb){
    console.log("Started Writing a file with data", data);
    setTimeout(function write(){
        console.log("Writing file done");
        var report = "file.txt"
        cb(report);
    }, 3000);
}

function upload(url, file, cb){
    console.log("Started Uploading",file, "on", url);
    setTimeout(function write(){
        console.log("Uploading done");
        var report = "Done uploading " + file
        cb(report);
    }, 2000);
}

download("Umang.com", 
    function callbackDownload(content){
        console.log("Downloaded Data is", content);
        
        writeFile("123456789", 
            function callbackWrite(fileName){
                console.log("Written File is", fileName);
                
                upload("umang2.com", fileName,
                    function callbackUpload(resposne){
                        console.log("Uploaded Report is", resposne);
                    }
                )
            }
        )
    }
)

