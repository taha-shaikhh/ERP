# ERP System with React

## Project Overview

The Simplified ERP System is a web application built with React, designed to manage basic business operations efficiently. It includes a dashboard for an overview of key metrics, product management for handling product listings, and order management for viewing and handling orders. An optional feature includes an orders calendar view for visualizing orders based on expected delivery dates.

## Technology Stack

- React: JavaScript library for building user interfaces
- React Router: Declarative routing for React applications

## Features

1. **Dashboard:**
   - Display key metrics (e.g., total number of products, orders).
   - Quick navigation links to Products and Orders management pages.

2. **Products Management:**
   - List products with details (name, category, price, stock).
   - Add, edit, and delete products.

3. **Orders Management:**
   - Display a list of orders with details (order ID, customer name, order date, status).
   - (Optional) View order details, update order status, and delete orders.

4. **Orders Calendar View (Optional):**
   - Calendar interface displaying orders based on expected delivery dates.
   - Click on a date to view all orders due for delivery that day.

## Getting Started

### Prerequisites

- Node.js: [Install Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/taha-shaikhh/ERP.git
Navigate to the project directory:
   ```bash
  cd ERP
```
#Install dependencies:

```bash
  npm install
```  
#Running the Application:

```bash
  npm start
```
Visit http://localhost:3000 in your browser.


Folder Structure

  src/: Source code for the React application.
  
  components/: React components for different pages.
  
  data/: Mock data for products and orders.
  
  styles/: CSS files for styling components.
  
  public/: Public assets and the main HTML file.
  
