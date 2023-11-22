import { uploadBytesResumable, getStorage, getDownloadURL, ref } from "firebase/storage";
import { app } from "."
const storage = getStorage(app)

interface Res {
    status?: boolean
    url?: string,
    message?: any
}
export const uploadFile = (
    filename: string,
    location: string,
    imageData: Blob | Uint8Array | ArrayBuffer,
    callbackFn?: (value: Res) => void,
    progressFn?: (value: string) => void,
    progressState?: (value: string) => void
) => {


    return new Promise((resolve: (value: Res) => void, reject: (value: Res) => void) => {



        const res: Res = {}
        const storageRef = ref(storage, `${location}/${filename}`);
        const uploadTask = uploadBytesResumable(storageRef, imageData);


        uploadTask.on(
            "state_changed",
            snapshot => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressFn?.(`${progress} + %`)
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        progressState?.(`Upload is paused `);
                        break;
                    case "running":
                        progressState?.(`Upload is running`);
                        console.log("Upload is running");
                        break;
                    case "success":
                        progressState?.(`Upload is successfully`);
                        console.log("Upload is successfully");
                        break;
                    case "canceled":
                        progressState?.(`Upload is canceled`);
                        console.log("Upload is canceled");
                        break;
                    case "error":
                        progressState?.(`Upload is error`);
                        console.log("Upload is error");
                        break;
                }
            },
            error => {
                res.status = false;
                res.message = error.message;
                callbackFn?.(res);
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case "storage/unauthorized":
                        // User doesn't have permission to access the object
                        console.log(
                            "User does'nt have permission to access the object"
                        );
                        break;
                    case "storage/canceled":
                        // User canceled the upload
                        console.log("user canceled the upload");
                        break;

                    // ...
                    case "storage/unknown":
                        // Unknown error occurred, inspect error.serverResponse
                        console.log(
                            "Unknown error occurred, inspect error.serverResponse"
                        );
                        break;
                }
                reject(res)
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                    console.log("File available at", downloadURL);
                    res.status = true;
                    res.url = downloadURL;
                    callbackFn?.(res);
                    resolve(res)
                });
            }
        );
    })
};

