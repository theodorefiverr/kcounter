pm2 stop myapp
pm2 start ecosystem.config.json;

uvicorn main:app --host 0.0.0.0 --port 4000

gunicorn main:app -w 2 -k uvicorn.workers.UvicornWorker -b "0.0.0.0:4000"