# Assignment_Wellness360

# Task Management API  

A RESTful API for managing tasks, built using Node.js, Express.js, and MongoDB. This system allows users to create, read, update, delete tasks, and mark them as complete. Authentication is also implemented for secure access to the API.

## **Features**  

- **CRUD Operations** for tasks.  
- Mark tasks as complete.  
- Input validation and error handling.  
- Secure endpoints using JWT-based authentication.  

## **API Endpoints**  

| Endpoint                   | Method | Description                     | Authorization Required |
|----------------------------|--------|---------------------------------|------------------------|
| `/api/tasks`               | GET    | Retrieve all tasks              | Yes                    |
| `/api/tasks/{id}`          | GET    | Retrieve a specific task by ID  | Yes                    |
| `/api/tasks`               | POST   | Create a new task               | Yes                    |
| `/api/tasks/{id}`          | PUT    | Update an existing task         | Yes                    |
| `/api/tasks/{id}`          | DELETE | Delete a task                   | Yes                    |
| `/api/tasks/{id}/complete` | PATCH  | Mark a task as complete         | Yes                    |

---

## **Prerequisites**  
Node.js (v14 or higher)  
MongoDB (local or cloud-based)  



## **Installation**  

1. Clone the repository:  
   git clone <repository-url>
   cd task-manager
2. Install dependencies:
    npm install
3. Set up environment variables:
      Create a .env file in the root directory with the following content:
        MONGO_URI=<your-mongodb-uri>
        PORT=5000
        JWT_SECRET=<your-jwt-secret>


        
## **Running the Application**
  npm start
  
## **Running Tests**
  npm test


##  **Usage**
Example Request to Create a Task
POST /api/tasks

Request Body:
{
  "title": "Complete Assignment",
  "description": "Finish the Express.js assignment",
  "due_date": "2024-11-20",
  "status": "pending"
}


Response:
{
  "message": "Task created successfully",
  "task": {
    "id": "648b4f4f1c456f3e3e93b22c",
    "title": "Complete Assignment",
    "description": "Finish the Express.js assignment",
    "due_date": "2024-11-20",
    "status": "pending",
    "created_at": "2024-11-17T10:00:00.000Z",
    "updated_at": "2024-11-17T10:00:00.000Z"
  }
}

## **Design Decisions**
Framework: Used Express.js for its simplicity and scalability.
Database: MongoDB was chosen for its schema flexibility and JSON-like storage.
Authentication: Implemented JWT for secure access to API endpoints.
Error Handling: Middleware captures and formats error responses.
