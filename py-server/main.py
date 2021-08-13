from typing import Optional

from fastapi import FastAPI
from pi_calc import main as calc

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Hello There"}

@app.get("/pi")
def get_pi():
    return {"message": "Hello There"}