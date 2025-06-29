
# SuperTokens Next.js + Express Starter Template

This template provides a production-ready authentication system using:
- Next.js (frontend)
- Express.js (backend)
- SuperTokens (authentication)
- Docker (for SuperTokens Core)

## Requirements
1. Docker (for SuperTokens Core)
2. Node.js
3. Google OAuth credentials

## Quick Start
1. **Create PostgreSQL database:**
   ```bash
    CREATE DATABASE < Your Database Name >;
   ```
1. **Start SuperTokens Core:**
     
```bash
# IMPORTANT: If your PostgreSQL is hosted on your own machine and NOT in Docker, 
# do NOT use "localhost" as POSTGRESQL_HOST — use host.docker.internal instead
docker run -d -p 3567:3567 \
  --name supertokens \
  -e SUPERTOKENS_ENV=production \
  -e POSTGRESQL_HOST=host.docker.internal \
  -e POSTGRESQL_PORT=5432 \
  -e POSTGRESQL_DATABASE_NAME=<Your Database Name> \
  -e POSTGRESQL_USER=postgres \
  -e POSTGRESQL_PASSWORD=<Your Password> \
  supertokens/supertokens-express
```
2. **Install dependencies:**
```
npm install
```
3. **Run development servers:**

  1. Start Express backend (port 5000) :
```
node server.js
```
  2. Start Next.js frontend (port 3000) :
``` 
npm run dev
```
Access the application:

http://localhost:3000

Configuration
Get Google OAuth credentials from Google Cloud Console

Add credentials to .env:
```
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
```
Update provider config in config/superToken.js

Technical Documentation
For detailed implementation guides and API references, please refer to the official documentation:

[SuperTokens Docs](https://supertokens.com/docs)
