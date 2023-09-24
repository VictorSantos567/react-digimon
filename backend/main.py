from fastapi import FastAPI
from api.routers import router
import uvicorn

app = FastAPI()

app.include_router(router, prefix="/api/v1", tags=["Pokemon"])

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=7777)
