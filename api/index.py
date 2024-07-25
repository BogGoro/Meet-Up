import fdb
import fdb.tuple
from fastapi import FastAPI, HTTPException

app = FastAPI()


@app.get("/healthchecker")
def healthchecker():
    return {"status": "success", "message": "Integrate FastAPI Framework with Sveltekit"}