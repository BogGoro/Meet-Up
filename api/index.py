import fdb
import fdb.tuple
from fastapi import FastAPI, HTTPException

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")


@app.get("/api/healthchecker")
def healthchecker():
    return {"status": "success", "message": "Integrate FastAPI Framework with Sveltekit"}