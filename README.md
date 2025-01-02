# Task Time Tracking Web Application

A full-stack web application to manage tasks and track time efficiently. Users can create, update, and delete tasks, track time spent on each task, and view reports and analytics.

## Features

- **User Management**: 
  - Email/password authentication
  - Role-based access (admin/regular user)
  - User profiles with basic information

- **Task Management**: 
  - Create, edit, and delete tasks
  - Task properties: title, description, status, category
  - Task search and filters

- **Time Tracking**: 
  - Start, pause, and stop time tracking
  - Multiple active tasks simultaneously
  - Real-time timer updates
  - Time entry editing capabilities
  - Daily, weekly, and monthly time logs

- **Analytics & Reports**: 
  - Visualize time spent per task
  - Task completion statistics
  - Export reports in CSV/PDF
  - Custom date range filters

## Tech Stack

- **Frontend**:
  - React
  - Tailwind CSS
  - shadcn/ui
  - React Router
  - Redux/Context API for state management
  - Axios for API calls
  - React Query for data fetching
  - Date-fns for time manipulation

- **Backend**:
  - Node.js
  - Express
  - JWT Authentication
  - RESTful API
  - MongoDB for database

- **Security**:
  - Password hashing
  - JWT token validation
  - XSS protection
  - Rate limiting

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB running locally or a cloud instance

### Setup

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/task-time-tracking.git
   cd task-time-tracking
