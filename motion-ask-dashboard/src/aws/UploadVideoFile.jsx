import React, {useEffect, useRef, useState} from "react";
import Buffer from "buffer";
import AWS from 'aws-sdk'
import {Button, Input, Progress} from "@chakra-ui/react";
import {RouterPaths} from "../router";
import {FiUpload} from "react-icons/fi";
import { v4 as uuidv4 } from 'uuid';
import {AddVideoToDB} from "../firebase/database/AddVideoToDB";
import {VideoModel} from "../firebase/models/VideoModel";

//ACCESS: https://mybucket.s3.amazonaws.com/myfilename

const S3_BUCKET ='BUCKET_NAME';
const REGION ='REGION';
const ACCESS_KEY ='ACCESS_KEY';
const SECRET_ACCESS_KEY ='SECRET_ACCESS_KEY';


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
    const [fileSize, setFileSize] = useState(0);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [creator, setCreator] = useState("")

    useEffect(() => {
        console.log("File", selectedFile)
        if (selectedFile){
            console.log("File", selectedFile)
            setFileSize(Math.round((selectedFile.size / (1024 * 1024))))
        }
    }, [selectedFile]);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {
        const id = uuidv4()
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: `${id}.mp4`
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err, data) => {
                console.log("DATA", data)
                if (err) return console.log(err)
                else{
                    AddVideoToDB(VideoModel({
                        id:id,
                        title: title,
                        description: description,
                        creator: creator,
                        duration: fileSize,
                        content: `https://${S3_BUCKET}.s3.amazonaws.com/${id}.mp4`
                    })).then(doc=>{

                    }).catch(e=>{

                    })
                }
            })
    }


    return (
        <div className={"grid place-content-center justify-center"}>
            <div className={"mx-8"}>Choose the video file you want to upload and we will get the rest setup for you
                other details.
            </div>
            <div className={'m-8 grid grid-cols-1 gap-4'}>
                <Input varient={"filled"} placeholder={"Enter title"} onChange={(e)=>{setTitle(e.target.value)}}/>
                <Input varient={"filled"} placeholder={"Enter Description"} onChange={(e)=>{setDescription(e.target.value)}}/>
                <Input varient={"filled"} placeholder={"Enter creator name"} onChange={(e)=>{setCreator(e.target.value)}}/>
            </div>
            <input type="file" onChange={handleFileInput} className={"m-8"}>
            </input>
            <div className={"mb-8 mx-8 font-semibold"}>Size: {fileSize}mb</div>
            <div
                onClick={() => uploadFile(selectedFile)}
                className={"m-auto mt-8 mb-16 py-4 px-6 text-white text-center grid place-content-center font-semibold text-lg rounded-xl h-fit w-fit bg-gradient-to-b from-violet-400 to-violet-600 hover:shadow-xl hover:shadow-purple-300 hover:cursor-pointer"}>
                <div className={"flex gap-4 items-center"}>
                    <FiUpload/><span>{(progress >= 100) ? "Upload Done" : "Upload video"}</span>
                </div>
            </div>
            <Progress value={progress} colorScheme={"purple"} mt={12}/>
        </div>
    )
}

export default UploadVideoFile;
