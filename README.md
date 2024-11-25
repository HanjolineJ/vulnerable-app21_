# Vulnerable App

This project demonstrates a Cross-Site Scripting (XSS) vulnerability in a Node.js application and provides steps to identify, exploit, and fix the issue. The application is containerized using Docker for portability and ease of use.

---

## Features
- Demonstrates an XSS vulnerability on a `/search` endpoint.
- Explains the cause of the vulnerability and the fix.
- Allows testing of XSS exploits using Burp Suite.
- Includes sanitized code to prevent the XSS vulnerability.
- Dockerized for deployment.

---

## Requirements
- **Node.js** (16.x or above)
- **Docker** (latest version)
- **Burp Suite** (latest version)
- A Linux environment or a cloud instance (e.g., DigitalOcean)

---

## Setup Instructions

### Step 1: Clone the Repository
Clone the repository to your local or remote environment:
```bash
git clone https://github.com/HanjolineJ/vulnerable-app2.git
cd vulnerable-app2

npm install
node app.js
http://localhost:3000

## Accessing Docker as a Non-Root User

### Step 1: Start the Container
Ensure the container is running:
```bash
docker start vulnerable-app
docker ps

su - demo

docker exec -it vulnerable-app bash
