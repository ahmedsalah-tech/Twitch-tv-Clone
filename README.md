# Twitch Clone

**This is an ongoing project and is not yet complete.**

This is a full-stack Twitch clone project built with the MERN stack and other technologies.

## Features

### Current Features

* User authentication (Login/Register)
* Browse channels
* View individual channels
* Follow/unfollow channels
* Update user settings (password, channel details)

### In Progress / Planned Features

* **Real-time Streaming:** Building out the RTMP server to handle live video streams.
* **Live Chat:** Developing a `socket.io` server for real-time chat functionality in channel views.
* **Dashboard:** Enhancing the user dashboard with stream management tools.
* **Notifications:** Implementing a notification system for when followed channels go live.

## Tech Stack

* **Frontend:** React, Vite, TypeScript, Axios
* **Backend:** Node.js, Express, MongoDB, Mongoose
* **Streaming:** Node Media Server (for RTMP)
* **Real-time Communication:** Socket.io

## Getting Started

### Prerequisites

* Node.js (v14 or later)
* MongoDB instance (local or cloud)
* `npm` or `yarn`

### Installation & Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ahmedsalah-tech/Twitch.tv-Clone.git
    cd twitch-clone
    ```

2. **Install root dependencies:**

    ```bash
    npm install
    ```

3. **Install server dependencies:**

    ```bash
    cd server
    npm install
    ```

4. **Install client dependencies:**

    ```bash
    cd ../client
    npm install
    ```

5. **Install RTMP server dependencies:**

    ```bash
    cd ../rtmp-server
    npm install
    ```

6. **Environment Variables:**

    Create a `.env` file in the `server/` directory and add the following variables:

    ```env
    MONGO_URI=your_mongodb_connection_string
    TOKEN_KEY=your_secret_jwt_token_key
    PORT=5002
    ```

### Running the application

You can run the client and server concurrently from the root directory:

```bash
npm run dev
```

This will start:

* The React client on `http://localhost:3000`
* The Express server on `http://localhost:5002`

To start the RTMP server for streaming:

```bash
cd rtmp-server
node index.js
```

The RTMP server will be running on port 1935.
