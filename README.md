# Ops1g CRM Dashboard

<p align="center">
  <h2 align="center">Modern Operational CRM & Workflow Intelligence Platform</h2>
  <p align="center">
    Lead Management • Analytics • Notifications • Scheduling • Outreach • Inventory
  </p>
</p>

---

# Overview

Ops1g is a modern operational CRM and workflow intelligence platform designed to streamline lead management, operational coordination, outreach workflows, scheduling systems, and business analytics within a unified dashboard experience.

The platform centralizes operational activities across lead pipelines, team workflows, inventory visibility, outreach sequences, analytics reporting, and communication systems while maintaining a responsive, scalable, and modular frontend architecture.

Built using React, TypeScript, Vite, and TailwindCSS, the platform focuses on operator efficiency, workflow visibility, and data-driven decision making.

---

# Core Platform Modules

## Lead Operations
- Centralized lead lifecycle management
- Intent categorization
- Lead detail management
- Follow-up visibility
- Conversion tracking
- Workflow prioritization

## Inbox & Communication
- Unified operational communication workflows
- Notification-driven updates
- Lead activity visibility
- Follow-up coordination

## Calendar & Scheduling
- Tour scheduling workflows
- Calendar coordination
- Timeline visibility
- Follow-up planning

## Marketplace
- Marketplace operations management
- Listing visibility
- Inventory coordination
- Operational workflows

## Inventory Supply Hub
- Inventory tracking
- Supply visibility
- Availability coordination
- Property management workflows

## Outreach Sequences
- Outreach campaign management
- Sequence tracking
- Campaign monitoring
- Operational visibility

## Analytics Dashboard
- Funnel intelligence
- KPI monitoring
- Conversion analytics
- Team performance metrics
- Operational reporting

## Notification Center
- Categorized operational notifications
- Workflow visibility
- Unread tracking
- Real-time operational awareness

## Theme System
- Enterprise-grade dark mode
- Persistent user preference storage
- Responsive theming architecture

---

# Key Features

- Lead Funnel Management
- Workflow Visibility
- Operational Analytics
- Team Performance Metrics
- Conversion Intelligence
- Categorized Notifications
- Command Palette Navigation
- Dark Mode Support
- Responsive Dashboard UI
- Mobile Optimized Layout
- Reusable Component Architecture
- Real-Time Operational Monitoring
- KPI Tracking
- Outreach Workflow Management
- Role-Based Navigation
- Modular Analytics Components

---

# Analytics Dashboard

The analytics system provides operational intelligence through interactive data visualization and KPI reporting.

## Included Analytics

### Lead Funnel Analytics
Tracks lead progression across multiple conversion stages:
- New Leads
- Contacted
- Qualified
- Tours Scheduled
- Negotiation
- Converted

### Intent Distribution
Visual representation of:
- Hot Leads
- Warm Leads
- Cold Leads

### Activity Metrics
Operational activity tracking including:
- Leads generated
- Tours completed
- Revenue metrics
- Daily operational trends

### Sequence Performance
Outreach campaign tracking and performance visibility.

### Team Performance Metrics
Operational leaderboard and productivity monitoring.

### Revenue Tracking
Daily operational revenue analytics and trend visualization.

---

# Notification System

The notification center improves workflow visibility through categorized operational alerts.

## Notification Categories

- Lead Updates
- Follow-Up Reminders
- Tour Scheduling
- Inventory Alerts
- Outreach Sequences
- System Notifications

## Notification Features

- Unread notification tracking
- Category filtering
- Responsive notification panel
- Workflow visibility improvements
- Real-time operational awareness

---

# Theme System

The platform includes a fully integrated dark mode architecture optimized for long operational workflows.

## Theme Features

- Persistent theme storage using localStorage
- System preference detection
- Smooth theme transitions
- TailwindCSS dark selector integration
- Global theme management using React Context API

---

# Architecture Overview

The application follows a modular component-driven frontend architecture optimized for scalability and maintainability.

## Architectural Principles

- Component Composition
- Reusable UI Systems
- Modular Routing
- Type-Safe Development
- Scalable State Management
- Responsive Design Patterns
- Shared Utility Abstractions

## Frontend Architecture

- React-based component architecture
- TypeScript strict mode
- Route-based page organization
- Shared reusable UI components
- Centralized utility libraries
- Context-based global theme management

---

# Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend UI |
| TypeScript | Type Safety |
| Vite | Build Tooling |
| TailwindCSS | Styling System |
| shadcn/ui | Component Library |
| Recharts | Analytics Visualization |
| Zustand | State Management |
| React Context API | Global Theme State |

---

# Folder Structure

```bash
src/
│
├── components/
│   ├── analytics/
│   │   ├── LeadFunnelChart.tsx
│   │   ├── IntentDistributionChart.tsx
│   │   ├── ActivityMetricsChart.tsx
│   │   ├── SequencePerformanceChart.tsx
│   │   └── TCMPerformanceChart.tsx
│   │
│   ├── NotificationCenter.tsx
│   ├── ProfileMenu.tsx
│   └── AppShell.tsx
│
├── lib/
│   ├── analytics-store.ts
│   ├── notifications.ts
│   ├── mock-notifications.ts
│   └── theme-context.tsx
│
├── routes/
│   ├── analytics.tsx
│   └── __root.tsx
│
└── styles/
```

---

# Responsive Design

The dashboard is optimized for:
- Desktop operational workflows
- Tablet-based coordination
- Mobile workflow visibility

Responsive behavior includes:
- Adaptive grid systems
- Responsive chart rendering
- Mobile navigation support
- Flexible dashboard layouts
- Optimized spacing and typography

---

# Performance & Scalability

The frontend architecture is optimized for maintainability and scalable growth.

## Scalability Features

- Reusable analytics components
- Shared state abstractions
- Modular dashboard architecture
- Lazy-loaded route structure
- Optimized rendering patterns
- Reusable visualization systems

---

# UI & UX Principles

The platform prioritizes:
- Operator efficiency
- Workflow visibility
- Minimal navigation friction
- Responsive interaction patterns
- Dashboard readability
- Enterprise-grade usability

---

# Development Setup

## Clone Repository

```bash
git clone <repository-url>
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

---

# Production Build

```bash
npm run build
```

---

# Deployment

The application is compatible with modern frontend deployment platforms including:

- Vercel
- Netlify
- Cloudflare Pages

---

# Future Improvements

Potential platform enhancements include:

- Real-time WebSocket notifications
- Backend analytics integration
- Role-based access control
- AI-assisted lead prioritization
- CRM workflow automations
- Advanced reporting exports
- Team collaboration systems
- Audit logging
- API integrations
- Multi-tenant architecture

---

# Engineering Highlights

- Production-style frontend architecture
- TypeScript strict mode implementation
- Reusable analytics system
- Context-driven theme management
- Responsive operational UI
- Modular component structure
- Scalable dashboard composition

---

# Platform Goals

Ops1g focuses on improving:
- Operational coordination
- Lead conversion visibility
- Workflow management
- Analytics-driven decision making
- Team productivity
- Dashboard usability
- Workflow intelligence

---

# License

This repository is intended for educational, evaluation, and development purposes.