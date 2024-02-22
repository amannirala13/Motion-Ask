import React, {useRef, useState} from "react";
import Buffer from "buffer";
import AWS from 'aws-sdk'
import {Button, Input, Progress} from "@chakra-ui/react";

//ACCESS: https://mybucket.s3.amazonaws.com/myfilename

const S3_BUCKET ='video-bucket-1339';
const REGION ='ap-south-1';
const ACCESS_KEY ='AKIARD6AFXIJT6HMZFUW';
const SECRET_ACCESS_KEY ='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';


AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})


function UploadVideoFile() {

    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {

        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: "sex.mp4"
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                console.log("EVT", evt)
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err, data) => {
                console.log("DATA", data)
                if (err) console.log(err)
            })
    }


    return (
        <div className={"grid place-content-center justify-center"}>
            <Input type="file" onChange={handleFileInput} className={"m-8"}>
            </Input>
            <div className={"mt-4 mx-8"}>Choose the video file you want to upload and we will auto generate all the other details.</div>
            <Button className={"mt-8 mx-8"} isDisabled={progress >= 100} onClick={() => uploadFile(selectedFile)}>{(progress>=100)?"Upload Done": "Upload video"}</Button>
            <Progress value={progress} mt={12}/>
        </div>
    )
}

export default UploadVideoFile;
