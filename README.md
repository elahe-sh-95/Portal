# On-Premises Internal IT Corporate Portal

A modern, responsive internal IT portal designed for corporate intranet deployment. Built with Next.js and Tailwind CSS, this portal serves as a centralized dashboard for IT announcements and quick access to internal enterprise systems.

## 🚀 Quick Start Guide

### Option 1: Docker Deployment (Recommended)

This is the easiest way to deploy the portal on your intranet server.

**Prerequisites:**
- Docker installed
- Docker Compose installed

**Steps:**

1. **Navigate to the project directory:**
```bash
cd it-portal
```

2. **Build and run with Docker Compose:**
```bash
docker-compose up -d --build
```

3. **Access the portal:**
Open your browser and navigate to:
- Local: `http://localhost:3000`
- Server IP: `http://YOUR_SERVER_IP:3000`

4. **Stop the container (when needed):**
```bash
docker-compose down
```

### Option 2: Local Development

**Prerequisites:**
- Node.js 18 or higher
- npm or yarn

**Steps:**

1. **Navigate to the project directory:**
```bash
cd it-portal
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Access the portal:**
Open your browser and navigate to `http://localhost:3000`

5. **Build for production:**
```bash
npm run build
npm start
```

## ⚙️ Configuration

All content is managed through a single JSON file located at `data/portal-config.json`.

### Managing Announcements

Edit `it-portal/data/portal-config.json` to add/update announcements:

```json
{
  "announcements": [
    {
      "id": "1",
      "title": "Server Maintenance Scheduled",
      "content": "The main server will undergo maintenance on...",
      "priority": "maintenance",
      "createdAt": "2024-07-15T10:30:00Z",
      "author": "IT Infrastructure Team"
    }
  ]
}
```

**Priority Levels:**
- `critical` - 🔴 Red: Urgent issues requiring immediate attention
- `warning` - 🟠 Amber: Important notices requiring action
- `maintenance` - 🔵 Blue: Scheduled maintenance windows
- `info` - 🟢 Green: General information and updates

### Managing Internal Tools

Add your company's internal tools in the same config file:

```json
{
  "tools": [
    {
      "id": "gitlab",
      "name": "GitLab",
      "description": "Source code management and CI/CD",
      "url": "https://gitlab.yourcompany.com",
      "icon": "gitlab",
      "category": "Development"
    }
  ]
}
```

**Available Icons:** Any icon from [Lucide React](https://lucide.dev/icons/)

## 📁 Project Structure

```
/workspace/
├── README.md                 # This file
└── it-portal/                # Main application
    ├── data/
    │   └── portal-config.json    # Content configuration
    ├── src/
    │   ├── app/                    # Next.js app router
    │   ├── components/             # React components
    │   └── types/                  # TypeScript types
    ├── Dockerfile                  # Docker build config
    ├── docker-compose.yml          # Docker Compose config
    └── README.md                   # Detailed documentation
```

## 🎨 Features

- **Announcements Section:** Priority-coded cards with timestamps
- **System Directory:** Searchable grid of internal tools
- **Dark/Light Mode:** Toggle with persistent preference
- **Responsive Design:** Mobile-friendly for on-call staff
- **Easy Configuration:** Single JSON file for all content

## 🔧 Customization

1. **Change branding:** Edit `src/components/Header.tsx`
2. **Modify colors:** Update `tailwind.config.js`
3. **Add new tools:** Update `data/portal-config.json`
4. **Add new features:** Create components in `src/components/`

## 📖 Full Documentation

For detailed documentation, see [`it-portal/README.md`](./it-portal/README.md)

## 🆘 Troubleshooting

**Portal won't start?**
```bash
cd it-portal
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

**Check logs:**
```bash
docker-compose logs -f
```

## 📄 License

Internal use only. Not for external distribution.