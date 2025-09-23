# STF - Next.js Application

A Full-stack Next.js application with authentication, containerization, and cloud deployment capabilities.

## 🚀 Features

- **Next.js 15** with TypeScript and Turbopack 
- **Authentication** with Auth.js V5 (Google, GitHub, Credentials)
- **Containerization** with Docker and Docker Compose
- **Kubernetes** deployment configurations
- **Terraform** infrastructure as code
- **CI/CD** with Jenkins
- **Nginx** reverse proxy
- **MongoDB** database integration
- **Ingress**
- **Jenkins**

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/auth/          # NextAuth API routes
│   │   ├── changepassword/    # Password change page
│   │   ├── contact/           # Contact page
│   │   ├── queries/           # Dynamic query pages
│   │   └── utils/             # Utility functions
│   ├── auth.ts                # NextAuth configuration
│   └── middleware.ts          # Next.js middleware
├── k8s/                       # Kubernetes manifests
├── terraform/                 # Infrastructure as code
├── nginx/                     # Nginx configuration
├── docker-compose-*.yml       # Docker Compose files
└── Dockerfile.*               # Docker configurations
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Authentication**: Auth.js V5
- **Database**: MongoDB
- **Containerization**: Docker, Docker Compose
- **Orchestration**: Kubernetes
- **Infrastructure**: Terraform (FOR AWS)
- **CI/CD**: Jenkins
- **Web Server**: Nginx

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Docker and Docker Compose
- MongoDB

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd git-maintain
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Run the development server
```bash
npm run dev
```

## 🐳 Docker Deployment

### Development
```bash
docker-compose -f docker-compose-dev.yml up
```

### Production
```bash
docker-compose -f docker-compose-prod.yml up
```

## ☸️ Kubernetes Deployment

```bash
kubectl apply -f k8s/
```

## 🏗️ Infrastructure (Terraform)

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
NEXTAUTH_SECRET=your-secret-key
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret
AUTH_GITHUB_ID=your-github-client-id
AUTH_GITHUB_SECRET=your-github-client-secret
AUTH_REDDIT_ID=your-reddit-client-id
AUTH_REDDIT_SECRET=your-reddit-client-secret
AUTH_FB_ID=your-fb-client-id
AUTH_FB_SECRET=your-fb-client-secret
AUTH_DISCORD_ID=your-discord-client-id
AUTH_DISCORD_SECRET=your-discord-client-secret
MONGODB_URI=mongodb://localhost:27017/gitMaintain
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is private and proprietary.
