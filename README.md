````markdown
# Real-Time Chat Application

## Overview

This project is a real-time chat application developed with TypeScript and Node.js. It allows users to join different chat rooms, send messages, and receive updates instantly via WebSockets. The frontend is built with React, providing a dynamic and responsive user interface. The application includes features such as user authentication, private messaging, and message history storage using PostgreSQL.

## Features

- Real-time messaging using WebSockets
- User authentication and secure access
- Private messaging
- Multiple chat rooms
- Typing indicators and message notifications
- Message history storage
- Responsive user interface built with React

## Technologies Used

- TypeScript
- Node.js
- Express.js
- socket.io
- React
- PostgreSQL
- JWT (JSON Web Tokens) for authentication

## Setup and Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/NecheyGrace/realtimeChatApp.git
   cd chat-app
   ```
````

2. **Backend Setup**

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Set up your PostgreSQL database and update the database connection settings in `config.ts`.
   - Run database migrations:
     ```bash
     npm run migrate
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup**

   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

4. **Running the Application**
   - Open your browser and go to `http://localhost:3000` to see the application in action.

## Usage

- Register for a new account or log in with existing credentials.
- Join an existing chat room or create a new one.
- Start sending messages and enjoy real-time communication.
- Use private messaging for one-on-one conversations.
- View message history and notifications.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need further assistance, feel free to open an issue or contact the project maintainer at nechemetu@example.com.
