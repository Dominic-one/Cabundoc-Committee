@echo off
setlocal
cd /d "%~dp0"
where npm.cmd >nul 2>nul
if errorlevel 1 (
  echo Node.js and npm are required. Install Node.js 22.18+ or 24.x first.
  pause
  exit /b 1
)
if not exist "node_modules\.bin\ng.cmd" (
  echo Installing the project dependencies. This first step needs internet.
  call npm.cmd install --include=dev
  if errorlevel 1 (
    echo Dependency installation failed. See the error above.
    pause
    exit /b 1
  )
)
call npm.cmd run serve
if errorlevel 1 pause
