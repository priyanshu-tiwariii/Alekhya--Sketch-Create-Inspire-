
# Chitran – Sketch. Create. Inspire.

**Chitran** is a full-fledged **real-time collaborative canvas application**, built for people who think visually — developers, designers, students, product teams, or anyone who solves problems with sketches.

Think **Excalidraw**, but with deeper engineering — real-time sync, role-based collaboration, modular architecture, and a backend robust enough to handle thousands of users sketching in sync.

---

## Why Chitran?

While most whiteboard tools are either too simple or too heavy, Chitran aims to **strike the perfect balance between performance, scalability, and usability**:

* **Freehand drawing & shapes** – Supports live sketching, basic geometric shapes, and intelligent pointer sync.
* **Real-time collaboration** – Multiple users can draw together, live, on the same canvas.
* **Role-based access** – Viewers, editors, owners – all handled seamlessly.
* **Optimistic UI & state reconciliation** – Ensures what you draw is what they see.
* **Modular design** – Easy to maintain, scale, and extend with new features.

---

## Architecture & Tech Stack

Chitran is **engineered as a modern monorepo using Turborepo**, separating concerns across frontend, backend APIs, WebSocket server, and shared libraries. It's designed not as a toy project, but as an **MVP-grade product** with real-world scalability.

### ⚙️ Backend

* **Express.js + Prisma + PostgreSQL** – REST API for file management, user roles, and canvas data
* **Redis Pub/Sub** – Room-based real-time event broadcasting
* **Socket.IO Server (Port 8080)** – Dedicated server for real-time WebSocket communication
* **Singleton Pattern** – Connection manager for maintaining live sessions

### Frontend

* **Next.js (App Router)** – Frontend app hosted on port 3000
* **React + Tailwind CSS + shadcn/ui** – Clean and modern UI/UX
* **Canvas Engine** – Custom rendering of shapes using HTML canvas with manual event tracking
* **React Query** – For cache-based fetching and optimistic state updates

### Dev Tooling & Patterns

* **Turborepo** – Managed monorepo setup for web, API, and socket server
* **Zod + TypeScript** – End-to-end type safety and schema validation
* **Pub/Sub Channels** – Scoped event streams per canvas
* **Middleware Guards** – Ensuring protected routes and auth roles

---

## Collaboration Logic

* Users join a canvas room via WebSocket
* On every stroke/action, deltas are broadcasted using Redis Pub/Sub
* Redis isolates canvas sessions via unique channels
* A singleton connection map tracks and emits socket events efficiently
* Canvas state is auto-loaded from DB on entry and synced in real-time

---

## Current Features

* Drawing basic shapes and paths
* Collaborative canvas with real-time sync
* Canvas-level role permissions
* File creation, saving, and history loading
* Authentication and user sessions
* Invite-only collaboration support
* Responsive dashboard UI
* Canvas persistence using PostgreSQL

---

## What’s Coming Next

* Version history & undo-redo
* Cursor presence tracking (who's drawing where)
* Export canvas as image/PDF
* Auto-save with throttling
* Canvas-level chat integration
* Multi-tab awareness and activity indicators

---

## Live Demo

> *A live preview and deployment are coming soon after performance profiling and rate-limit setup.*

---

## For Contributors

Chitran is not just a drawing tool — it’s a **real-world architecture playground**. Contributions are welcome across:

* Collaborative system design
* Canvas rendering optimizations
* WebSocket scaling
* UI enhancements and animations

---

## Inspiration

“**Chitran**” comes from the Sanskrit word *चित्रण*, meaning “drawing” or “sketching.” It's built with the vision that every great idea starts with a blank canvas.


