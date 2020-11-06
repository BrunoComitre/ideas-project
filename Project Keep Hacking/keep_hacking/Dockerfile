FROM python:3.8.5-slim-buster

# Impede o Python grave arquivos pyc no disco(equivale à python -B option)
ENV PYTHONDONWRITEBYCODE 1

# Impede o Python armazene em buffer stdout e stderr(equivale à python -u option)
ENV PYTHONUNBUFFERED 1

RUN mkdir /keep_hacking

# work directory
WORKDIR /keep_hacking

COPY . /keep_hacking/

RUN apt-get update \
    && pip install -r /usr/app/requirements.txt
