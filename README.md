# node-python-communication-tests

Trying out different strategies to establish communication between Node and Python

## Setup

Run the following commands

To Initialize

```bash
python3 -m venv pyvenv
```

To Activate

```bash
source pyvenv/bin/activate
```

To Create `requirements.txt`

```bash
pip3 freeze > requirements.txt
```

To Install Requirements

```bash
pip3 install -r requirements.txt
```

## Running

Node Server

```bash
yarn
cd node-server
nodemon
```

Python Server

```bash
source pyvenv/bin/activate
cd py-server
uvicorn main:app --reload
```

## Benchmarking

We calculate `n` digits of pi through python. In my case I'll set n to `4000`

## Results

| name            | time(ms)   |
| --------------- | ---------- |
| fastapi         | 1160 - 1175ms |
| express+fastapi | 1160 - 1225ms   |
