@echo off
echo 🔍 MarketMesh Health Check
echo ========================
echo.

echo Checking services...
echo.

set "services=postgres redis gateway users products orders payments notifications uploads"
set "all_healthy=true"

for %%s in (%services%) do (
    echo Checking %%s...
    docker-compose ps %%s | findstr "Up" >nul
    if %errorlevel% equ 0 (
        echo ✅ %%s is running
    ) else (
        echo ❌ %%s is not running
        set "all_healthy=false"
    )
)

echo.
if "%all_healthy%"=="true" (
    echo 🎉 All services are healthy!
) else (
    echo ⚠️ Some services are not running
    echo Try: docker-compose up -d
)

echo.
echo Checking endpoints...
echo.

REM Check GraphQL endpoint
curl -s http://localhost:4000/graphql >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ GraphQL Playground: http://localhost:4000/graphql
) else (
    echo ❌ GraphQL endpoint not accessible
)

REM Check web app
curl -s http://localhost:3000 >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Web App: http://localhost:3000
) else (
    echo ❌ Web app not accessible
)

echo.
echo Health check complete!
pause
