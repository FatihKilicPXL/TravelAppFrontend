# Travel & Expense Reimbursement App - Frontend

## Overview
This is the **frontend** of a Travel & Expense Reimbursement App.  
Employees can register business trips and home–work bike commutes, view their submitted trips, and see reimbursement statuses. Managers can review, approve, or reject reimbursements.  

This frontend is built using **Vue 3** with a mobile-first design.  

## Features (User Stories)
- **US-01:** Login with company account or unique nickname.  
- **US-02:** Register a new trip/commute : MOCK ☑️
- **US-03:** View all submitted trips with reimbursement status. : MOCK ☑️ 
- **US-04:** (Manager) View all trips, filter by employee, transport, or month.  
- **US-05:** (Manager) Approve or reject reimbursement requests.  
- **US-06:** View a summary of reimbursements (total per month or transport type).  
- **US-99:** Export monthly overview as PDF or CSV (extra feature).  

## Development & DevOps Practices
- always make a new branch when working a single feature
- make pull requests
- branch name template: `feature/us-02-add-trip-mock`
the 'mock' explains its using mock data, no API integration

## Folder & Component Structure (Frontend)
- `src/views/`: Page-level components
- `src/components/`: Reusable components
- `src/assets/`: Global CSS, fonts, and images  
- `src/router/index.js`: Route definitions for SPA navigation  

## Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
