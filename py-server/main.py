from typing import Optional

from fastapi import FastAPI
from pi_calc import main as calc
import pika

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Hello There"}


@app.get("/pi/{num}")
def get_pi(num: int):
    pi = calc(num)
    return {"message": pi}
