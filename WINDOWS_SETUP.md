# 🚀 MarketMesh - Windows Development Guide

## ✅ Prerequisites
- Node.js 18+ installed
- Docker Desktop installed and running
- Git installed

## 🛠️ Step 1: Navigate to Project Directory
```powershell
cd "C:\Users\Administrator\Documents\GitHub\New folder\marketmesh"
```

## 📦 Step 2: Install Dependencies
```powershell
# Install root dependencies
npm install

# Install all workspace dependencies
npm install --workspaces
```

## 🗄️ Step 3: Database Setup
```powershell
# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Open Prisma Studio (optional)
npm run db:studio
```

## 🚀 Step 4: Start Services with Docker
```powershell
# Start all backend services
docker-compose up -d

# Check if services are running
docker-compose ps
```

## 🌐 Step 5: Start Frontend Applications

### Web App (Next.js)
```powershell
# In a new terminal
cd apps/web
npm run dev
# Opens at http://localhost:3000
```

### Mobile App (Expo)
```powershell
# In a new terminal
cd apps/mobile
npm run start
# Opens Expo DevTools
```

### Admin App (Next.js)
```powershell
# In a new terminal
cd apps/admin
npm run dev
# Opens at http://localhost:3001
```

## 📊 Step 6: Access Key URLs

### GraphQL Playground
```powershell
# Open in browser
start http://localhost:4000/graphql
```

### Applications
- **Web App**: http://localhost:3000
- **Admin Panel**: http://localhost:3001
- **Mobile App**: Follow Expo instructions

## 🔧 Development Commands

### Build Everything
```powershell
npm run build
```

### Run Tests
```powershell
npm run test
```

### Run Linting
```powershell
npm run lint
```

### Clean Build Artifacts
```powershell
npm run clean
```

## 🐳 Docker Services Status
```powershell
# Check running services
docker-compose ps

# View logs
docker-compose logs -f [service-name]

# Stop all services
docker-compose down
```

## 📱 Mobile Development
1. Install Expo Go app on your phone
2. Scan QR code from `npm run start` in mobile app
3. Or run on simulator:
   ```powershell
   cd apps/mobile
   npm run ios    # iOS simulator
   npm run android # Android emulator
   ```

## 🔍 Troubleshooting

### If services don't start:
```powershell
# Check Docker containers
docker-compose ps

# View service logs
docker-compose logs [service-name]

# Restart services
docker-compose restart
```

### If npm workspaces fail:
```powershell
# Install dependencies individually
cd services/gateway && npm install
cd services/users && npm install
cd services/products && npm install
cd services/orders && npm install
cd services/payments && npm install
cd services/notifications && npm install
cd services/uploads && npm install

cd apps/web && npm install
cd apps/mobile && npm install
cd apps/admin && npm install

cd packages/ui && npm install
cd packages/graphql && npm install
cd packages/utils && npm install
cd packages/config && npm install
```

### Database Issues:
```powershell
# Reset database
docker-compose down
docker-compose up -d postgres
npm run db:push
```

## 🎯 Development Workflow

1. **Start services**: `docker-compose up -d`
2. **Start frontend**: `cd apps/web && npm run dev`
3. **Make changes** to any service or app
4. **Test changes** in browser/mobile
5. **Commit changes** to trigger CI/CD
6. **Deploy** automatically to production

## 📞 Need Help?

- Check the logs: `docker-compose logs -f`
- Review the setup guide: `README.md`
- Check environment variables: `.env.example`

Happy coding! 🚀
