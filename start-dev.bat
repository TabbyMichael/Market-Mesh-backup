@echo off
echo 🚀 Starting MarketMesh Development Environment...
echo.

cd /d "%~dp0"

echo 📦 Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo 🗄️ Setting up database...
call npm run db:generate
call npm run db:push
if %errorlevel% neq 0 (
    echo ⚠️ Database setup failed, but continuing...
)

echo 🐳 Starting Docker services...
docker-compose up -d
if %errorlevel% neq 0 (
    echo ❌ Failed to start Docker services
    echo Make sure Docker Desktop is running
    pause
    exit /b 1
)

echo.
echo ✅ Services started successfully!
echo.
echo 🌐 Access URLs:
echo   - GraphQL Playground: http://localhost:4000/graphql
echo   - Web App: http://localhost:3000
echo   - Admin Panel: http://localhost:3001
echo.
echo 🔧 Development Commands:
echo   - Start Web App: cd apps/web && npm run dev
echo   - Start Mobile: cd apps/mobile && npm run start
echo   - View Logs: docker-compose logs -f
echo   - Stop Services: docker-compose down
echo.
echo Press any key to exit...
pause >nul
