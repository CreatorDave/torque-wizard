# TorqueWizard

A modern web application for managing and looking up torque specifications for various mechanical components across different industries.

## Features

- Browse torque specifications by category and subcategory
- Search for specific torque specifications
- View detailed information including torque values, units, and notes
- Responsive design for desktop and mobile use

## Tech Stack

- **Frontend**: React, TypeScript, Material-UI
- **Backend**: Node.js, Express
- **Data**: JSON-based data structure

## Project Structure

```
torque-wizard/
├── server/             # Backend server
│   ├── src/            # Server source code
│   │   ├── data.js     # Sample data
│   │   └── index.js    # Server entry point
│   └── package.json    # Server dependencies
└── torque-wizard-app/  # Frontend application
    ├── src/            # Frontend source code
    │   ├── components/ # React components
    │   ├── services/   # API services
    │   └── types/      # TypeScript type definitions
    └── package.json    # Frontend dependencies
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/torque-wizard.git
   cd torque-wizard
   ```

2. Install backend dependencies:
   ```
   cd server
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../torque-wizard-app
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd server
   npm start
   ```

2. Start the frontend application:
   ```
   cd torque-wizard-app
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Sample torque data is for demonstration purposes only
- Always verify torque specifications against manufacturer guidelines
