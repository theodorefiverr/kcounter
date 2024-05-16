from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from tempfile import NamedTemporaryFile
from fastapi.responses import JSONResponse
from compute_count import computeCount


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


@app.post("/count-cell")
async def test(image_file: UploadFile):
    try:
        contents = await image_file.read()
        temp_file = NamedTemporaryFile(mode="wb", delete=False)
        temp_file.write(contents)
        temp_file.flush()
        image_file_path = temp_file.name
        result, output1In, output2In, autoContract = computeCount(image_file_path)
        temp_file.close()
        return JSONResponse(
            status_code=200,
            content={"status": True, "message":"successfully", "data":{
                "count": result,
                "output1": output1In,
                "output2": output2In,
                "autoContract": autoContract
            }}
        )
    except Exception as e:
        raise JSONResponse(
            status_code=200,
            content={"status": False, "message":f"{e}", "data":e}
        )
app.mount('/images', StaticFiles(directory='./images', html=False))
app.mount('/', StaticFiles(directory='./frontend/dist', html=True))

