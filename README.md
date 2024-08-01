# Media Capture and Storage Mobile Application

## Setup Instructions

### Backend

1. Navigate to the `backend` folder.
2. Run `npm install` to install dependencies.
3. Create a `config.js` file in the `backend` folder and add your configuration:
    ```javascript
    module.exports = {
        mongoURI: 'your-mongodb-connection-string',
        port: 5000,
        awsBucketName: 'your-aws-s3-bucket-name',
        awsAccessKey: 'your-aws-access-key',
        awsSecretKey: 'your-aws-secret-key',
        jwtSecret: 'your-jwt-secret-key'
    };
    ```
4. Run `node app.js` to start the backend server.

### Frontend

1. Navigate to the `frontend` folder.
2. Run `npm install` to install dependencies.
3. Start the React Native development server by running `npm start`.
4. Use a device or emulator to run the application.

## Features

- User registration and login
- Media capture using the device's camera
- Media storage in AWS S3
- Media management (view and delete media)
- User-friendly interface and state management using Redux

## Video Demonstration

[Link to video demonstration]
