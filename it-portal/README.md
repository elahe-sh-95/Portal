# IT Portal - On-Premises Internal Corporate Dashboard

A modern, responsive internal IT portal designed for corporate intranet deployment. Built with Next.js and Tailwind CSS, this portal serves as a centralized dashboard for IT announcements and quick access to internal enterprise systems.

## 🚀 Tech Stack Recommendation

For this specific use case (local intranet deployment), I recommend:

**Frontend:** Next.js 14 (React)
- Server-side rendering for fast initial loads
- Static site generation capabilities for announcements
- Easy deployment with Docker

**Styling:** Tailwind CSS
- Utility-first approach for rapid development
- Built-in dark mode support
- Highly customizable design system

**Data Management:** JSON file-based approach
- **Why not a database?** For an internal portal with infrequent content updates, a full database is overkill
- JSON files are easy to edit, version-controlled, and don't require database maintenance
- Perfect for local intranet where high-frequency writes aren't needed
- Can be easily extended to fetch from a CMS or API later if needed

**Deployment:** Docker
- Consistent environment across development and production
- Easy to deploy on any internal server
- Minimal configuration required

## 📁 Project Structure

```
it-portal/
├── data/
│   └── portal-config.json      # Configuration for tools & announcements
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main dashboard page
│   ├── components/
│   │   ├── AnnouncementCard.tsx    # Announcement display component
│   │   ├── Header.tsx              # Header with theme toggle
│   │   └── SystemDirectory.tsx     # Tools grid with search
│   ├── data/
│   │   └── portal-config.json      # Data file (copied for build)
│   └── types/
│       └── index.ts                # TypeScript interfaces
├── docker-compose.yml              # Docker Compose configuration
├── Dockerfile                      # Multi-stage Docker build
├── next.config.mjs                 # Next.js configuration
├── package.json                    # Dependencies
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Tailwind configuration
└── tsconfig.json                   # TypeScript configuration
```

## 🛠️ Features

### 1. Announcements Section
- **Priority Tags:** Critical, Warning, Maintenance, Info
- **Rich Display:** Color-coded cards with icons
- **Timestamps:** Automatic date/time formatting
- **Author Attribution:** Shows who posted the announcement
- **Sorted Display:** Newest announcements first

### 2. Internal Systems Directory
- **Visual Grid:** Clean card-based layout
- **Search Functionality:** Filter by name or description
- **Category Filters:** Quick filtering by tool category
- **Icons:** Lucide React icons for visual identification
- **Direct Links:** Opens tools in new tabs

### 3. UI/UX Features
- **Dark/Light Mode:** Toggle with localStorage persistence
- **Responsive Design:** Mobile-friendly for on-call staff
- **Modern Aesthetics:** Clean, professional corporate design
- **Smooth Animations:** Subtle hover effects and transitions
- **Accessibility:** Semantic HTML and ARIA labels

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Docker & Docker Compose (for containerized deployment)

### Local Development

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:** Navigate to `http://localhost:3000`

### Docker Deployment

1. **Build and run with Docker Compose:**
```bash
docker-compose up -d --build
```

2. **Access the portal:** Navigate to `http://localhost:3000` (or your server's IP)

3. **Stop the container:**
```bash
docker-compose down
```

## ⚙️ Configuration

### Managing Announcements

Edit `data/portal-config.json`:

```json
{
  "announcements": [
    {
      "id": "unique-id",
      "title": "Announcement Title",
      "content": "Detailed announcement content...",
      "priority": "critical|warning|info|maintenance",
      "createdAt": "2024-07-15T10:30:00Z",
      "author": "IT Team Name"
    }
  ]
}
```

**Priority Levels:**
- `critical` - Red: Urgent issues requiring immediate attention
- `warning` - Amber: Important notices requiring action
- `maintenance` - Blue: Scheduled maintenance windows
- `info` - Green: General information and updates

### Managing Internal Tools

Edit `data/portal-config.json`:

```json
{
  "tools": [
    {
      "id": "tool-id",
      "name": "Tool Name",
      "description": "Brief description",
      "url": "https://internal-url.company.com",
      "icon": "icon-name-from-lucide",
      "category": "Category Name"
    }
  ]
}
```

**Available Icons:** Any icon from [Lucide React](https://lucide.dev/icons/)

Common mappings:
- `gitlab` → GitLab icon
- `jira` → Jira icon  
- `ticket` → Ticket icon
- `server` → Server icon
- `lock` → Lock icon
- `users` → Users icon
- `book` → Book icon
- `code` → Code icon
- `activity` → Activity icon
- `bar-chart` → Bar chart icon

## 🎨 Customization

### Branding

1. **Update the logo/icon:** Modify the `Header.tsx` component
2. **Change colors:** Edit `tailwind.config.js` primary color palette
3. **Update footer:** Modify the footer section in `page.tsx`

### Adding New Features

The modular component structure makes it easy to extend:

- Add new pages in `src/app/`
- Create new components in `src/components/`
- Extend types in `src/types/index.ts`

## 🔒 Security Considerations

For production intranet deployment:

1. **Network Security:** Ensure the server is only accessible from internal networks
2. **HTTPS:** Configure SSL/TLS termination at the reverse proxy level
3. **Authentication:** Integrate with your corporate SSO if needed
4. **Content Updates:** Implement a CI/CD pipeline for config updates

## 📱 Responsive Design

The portal is fully responsive:
- **Desktop:** Full grid layout with all features
- **Tablet:** Adjusted grid columns
- **Mobile:** Single column layout with optimized touch targets

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache and rebuild
rm -rf node_modules .next
npm install
npm run build
```

### Docker Issues
```bash
# Rebuild without cache
docker-compose build --no-cache
docker-compose up -d
```

## 📄 License

Internal use only. Not for external distribution.

## 👥 Support

For issues or feature requests, contact the IT Development Team.
