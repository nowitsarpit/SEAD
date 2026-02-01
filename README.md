****Real-Time Queue & Appointment Optimizer****

A web-based real-time queue management system designed to automate walk-in service queues for environments such as banks, hospitals, and government offices.
The system handles automatic queue progression, counter assignment, and live updates using WebSockets.


****Problem Statement****

Traditional queue systems rely on manual coordination or physical tokens, which often leads to:
Long and uncertain waiting times,
Counter underutilization,
Lack of transparency for customers,
This project replaces manual queue handling with an automated, real-time, software-based solution.


**System Overview**

The system follows a client–server architecture:
Clients interact through a web interface,
Backend manages queue logic and counter state,
WebSockets broadcast live updates,
MySQL stores persistent data.


**Architecture Components:**

Client (User / Counter / Admin)
FastAPI Backend
Queue Manager
Counter Service
WebSocket Manager
MySQL Database


**System Workflow**


User joins the queue,
Token is generated and stored,
Queue Manager updates system state,
WebSocket broadcasts updates to all clients,
Counter becomes free → next token is assigned,
Service details are logged.
