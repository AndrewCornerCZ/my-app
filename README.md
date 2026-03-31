# 🏋️ BeFit

A social fitness platform where users can connect, share activities, join groups, and discover sport events nearby.

Built with **Next.js 15**, **Prisma**, **NextAuth**, and **Leaflet**.

---

## Features

**Social**
- User profiles with bio, avatar, and sport badges
- Follow system with mutual-follow friends
- Posts with hashtags, likes, and comments
- Personalized feed based on interests and follows
- Direct messaging (real-time via WebSockets)

**Activities**
- Log personal sport activities with time, location, and privacy settings
- Activity calendar with monthly stats and Bronze/Silver/Gold badges
- Public activity map showing nearby events with sport filters
- Join public or friends-only activities

**Groups**
- Create and manage sport groups
- Invite members or request to join
- Schedule group activities with attendance tracking
- Admin/member role management

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Auth | NextAuth.js (credentials) |
| Database ORM | Prisma |
| Styling | Tailwind CSS |
| Maps | Leaflet |
| Image Storage | Cloudinary |
| Real-time | Socket.IO |
| Password Hashing | Argon2 |

---

## Getting Started

### Prerequisites

- Node.js 15+
- PostgreSQL database
- Cloudinary account (for profile images)

### Installation

```bash
git clone <repo-url>
cd befit
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/befit"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

NEXT_PUBLIC_WS_URL="http://localhost:3001"
```

### Database Setup

```bash
npx prisma migrate dev
npx prisma generate
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── api/           # API routes (auth, posts, activities, groups, chat...)
│   ├── userprofile/   # User profile pages
│   ├── groups/        # Group pages
│   ├── Map/           # Activity map page
│   └── ...
├── components/
│   ├── postsComponents/     # Feed, post cards, comments
│   ├── usernameComponents/  # Profile, calendar, modals
│   ├── Navbar.tsx
│   ├── ChatClient.tsx
│   ├── GroupView.tsx
│   └── mapPageComponent.tsx
└── lib/
    ├── db.ts          # Prisma client
    └── cloudinary.ts
```

---

## Key Pages

| Route | Description |
|---|---|
| `/` | Main feed |
| `/userprofile/[username]` | User profile with calendar |
| `/Map` | Nearby activities map |
| `/groups` | Group discovery and management |
| `/friends` | Mutual follows + direct chat |
| `/search` | Search users, hashtags, groups |
| `/AddPost` | Create a new post |
| `/settings` | Account settings |