# Real_Estate

Real_Estate is a web application built with the MERN stack, Firebase, Redux, and JWT for managing property listings. It includes functionalities for signing in, signing out, Google authentication, and creating listings for properties. Users can create listings for rent or sale properties, specify details like beds, bathrooms, offer prices, and more. The application also allows viewing, searching, updating, and deleting property listings.

## Tech Stack

- **MongoDB**: Database
- **Express**: Backend Framework
- **React**: Frontend Framework
- **Node.js**: Runtime Environment
- **Firebase**: Authentication
- **Redux**: State Management
- **JWT**: JSON Web Tokens for Authentication

## Functionality

- **User Authentication**: Sign in, Sign out, and Google authentication.
- **Create Listing**: Users can create property listings with options for rent, sale, beds, bathrooms, offer, regular price, offered price, and parking.
- **View Listings**: All listings are displayed on the home page.
- **Search Listings**: Search functionality to find specific listings.
- **Update Listings**: Users can update their listings.
- **Delete Listings**: Users can delete their listings.

## Installation

1. Clone the repository:
    ```sh
    https://github.com/yourusername/Real_Estate.git](https://github.com/HITARTH3452/Real_Estate_MERN.git
    cd Real_Estate
    ```

2. Install backend dependencies:
    ```sh
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```sh
    cd ../frontend
    npm install
    ```

4. Set up Firebase for authentication and configure environment variables as required.

## Usage

1. Start the backend server:
    ```sh
    cd backend
    npm start
    ```

2. Start the frontend application:
    ```sh
    cd frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000` to use the application.

## Deployment

This project is deployed using [Render](https://render.com/).

### Automatic Deployment from GitHub

1. Ensure all changes are committed and pushed to your repository:
    ```sh
    git add .
    git commit -m "Your commit message"
    git push origin main
    ```

2. Render will automatically detect changes in the `main` branch and start a new deployment. Ensure that auto-deploy is enabled in Render settings.

## API Endpoints

- `POST /signup` - Sign up a new user
- `POST /signin` - Sign in an existing user
- `POST /google` - Sign in with Google
- `GET /signout` - Sign out the current user
- `POST /create` - Create a listing for the logged-in user
- `GET /:id` - Get the listings of the current user
- `DELETE /delete/:id` - Delete a specific listing
- `POST /update/:id` - Update a specific listing
- `GET /get/:id` - Get a specific listing by ID
- `GET /get` - Get all listings present in the database
- `GET /` - Test endpoint
- `POST /update/:id` - Update a specific listing
- `DELETE /delete/:id` - Delete a specific listing
- `GET /:id` - Get a specific listing by ID

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
