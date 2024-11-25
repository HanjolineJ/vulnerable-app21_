# Vulnerable App

This is a vulnerable web application designed for educational purposes to demonstrate how Cross-Site Scripting (XSS) attacks can occur and how to mitigate them. The application is containerized with Docker to ensure portability and easy setup.

---

## Features
- A simple Node.js and Express.js application.
- Demonstrates an XSS vulnerability.
- Includes sanitized code to mitigate the XSS vulnerability.
- Dockerized for easy deployment.

---

## Requirements

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (16.x or above)
- [Docker](https://www.docker.com/) (latest version)
- [Git](https://git-scm.com/) (latest version)

---

## Setup Instructions

### Step 1: Clone the Repository
```bash
git clone https://github.com/HanjolineJ/vulnerable-app2.git
cd vulnerable-app2
npm install
node app.js
http://localhost:3000
