FROM python:3.7-alpine

ENV PYTHONUNBUFFERED 1

RUN mkdir /src

RUN mkdir /src/apps

RUN mkdir /src/instance

WORKDIR /src

COPY ./apps/ ./apps/

COPY ./instance/ ./instance/

COPY ./main.py .

COPY requirements.txt .

RUN pip install -r requirements.txt
