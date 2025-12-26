@echo off
echo Starting MongoDB, Backend and Frontend...

REM Start MongoDB
start "" "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath "C:\MongoDB\data\db"

REM Start Backend
cd backend
start "" cmd /k "npm install && node server.js"
cd ..

REM Start Frontend
cd frontend
start "" cmd /k "npm install && npm start"
cd ..

echo All services started.
pause
