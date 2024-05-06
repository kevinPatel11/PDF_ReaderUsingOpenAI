Backend

# group7_capstone_backend

## Overview
This repository contains the backend code for our capstone project. It is developed using Python 3.11.

## Prerequisites
Ensure that you have Python 3.11 installed on your system to run this project.

## Setup

### Creating a Virtual Environment
Before installing the required packages, it's recommended to create a virtual environment to avoid conflicts with other packages and versions:

- **For Windows:**
  ```bash
  python -m venv myenv

  myenv\Scripts\activate

- **For  macOS and Linux:**
  ```bash
    python -m venv myenv
    
    source myenv/bin/activate

### Installing Dependencies
    pip install -r requirements.txt

### Running the Application
    python app.py

### Deactivating the Virtual Environment

Before installing the required packages, it's recommended to create a virtual environment to avoid conflicts with other packages and versions:

- **For Windows:**
  ```bash
    myenv\Scripts\deactivate

- **For  macOS and Linux:**
  ```bash
   deactivate

### Additional Python Commands
- **To find which Python is being used:**
  ```bash
    which python

- **To list Python site-packages:**
     ```bash
    python -m site
- **To check for the 'chromadb' package and its location:**
     ```bash
        pip list | grep chromadb
        python -c "import chromadb; print(chromadb.__file__)"



Frontend
# Capstone Project - Web Development

## Overview
This repository is for the Capstone project for Group 7, Section 3, of the Web Development course at Conestoga College.

## Getting Started

Install the node_modules first by :

```bash
npm install
```
### Environment Variables
Create a file named `.env.local` in the root directory of the project and add the following content to configure the environment variables needed for authentication and services:

```plaintext
# Google OAuth Credentials
GOOGLE_ID=****
GOOGLE_SECRET=****

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=ThiISAUthetucationShhssshSecretkey

```

### Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
