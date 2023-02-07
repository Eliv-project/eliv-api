FROM tiangolo/nginx-rtmp

RUN apt-get update
RUN apt-get install -y ffmpeg

COPY nginx.conf /etc/nginx/nginx.conf