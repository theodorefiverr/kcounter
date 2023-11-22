# import os
# import Ki67_counter
import datetime
import Ki67_counter_v2
from fastapi import FastAPI, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from tempfile import NamedTemporaryFile
from fastapi.responses import JSONResponse
from cleaner import delete_old_images


app = FastAPI()
origins = [
        "*",  # for local
    ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


myobj = Ki67_counter_v2.initialize_runtime(['-nojvm', '-nodisplay'])
myobj = Ki67_counter_v2.initialize()


# @app.post("/count-cell")
# async def test(image_file: UploadFile, threshold: float = 0.56):
#     try:
#         contents = await image_file.read()
#         # Create a NamedTemporaryFile to hold the image as a physical file on disk
#         temp_file = NamedTemporaryFile(mode="wb", delete=False)
#         # Write the contents of the uploaded file to the temporary file
#         temp_file.write(contents)
#         temp_file.flush()
#         # Call the Ki67_counter function with the temporary file path and threshold
#         result = myobj.Ki67_counter(temp_file.name, threshold)
#         # Close and remove the temporary file
#         temp_file.close()
#         # temp_file.unlink(missing_ok=True)
#         return result
#     except Exception as e:
#         raise HTTPException(
#             status_code=400, detail="Failed to process the image file.")

@app.post("/count-cell")
async def test(image_file: UploadFile):
    try:
        delete_old_images("images",5)
        contents = await image_file.read()
        # Create a NamedTemporaryFile to hold the image as a physical file on disk
        temp_file = NamedTemporaryFile(mode="wb", delete=False)
        # Write the contents of the uploaded file to the temporary file
        temp_file.write(contents)
        temp_file.flush()
        # Call the Ki67_counter function with the temporary file path and threshold
        timestamp = datetime.datetime.now()
        timestamp_str = timestamp.strftime("%Y%m%d_%H%M%S.%f")[:-3]
        output1In = "images/" + timestamp_str + "-output1.jpg"
        output2In = "images/" + timestamp_str + "-output2.jpg"
        result = myobj.Ki67_counter_v2(temp_file.name, output1In, output2In)
        # Close and remove the temporary file
        temp_file.close()
        # temp_file.unlink(missing_ok=True)
        # return result
        return JSONResponse(
            status_code=200,
            content={"status": True, "message":"successfully", "data":{
                "count": result,
                "output1": output1In,
                "output2": output2In
            }}
        )
    except Exception as e:
        raise JSONResponse(
            status_code=200,
            content={"status": False, "message":f"{e}", "data":e}
        )
app.mount('/images', StaticFiles(directory='./images', html=False))
app.mount('/', StaticFiles(directory='./frontend/dist', html=True))

