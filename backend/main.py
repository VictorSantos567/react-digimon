from fastapi import FastAPI
from routers import router
import uvicorn

app = FastAPI()

app.include_router(router, prefix="/api/v1", tags=["Pokemon"])

if __name__ == "__main__":
    uvicorn.run(app,host="127.0.0.1",port=7777)