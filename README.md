# Social Media Feed Web Application

This is a fully functional social media feed web application built using React.js and Appwrite as the backend. The app includes features such as infinite scrolling, user authentication, multi-image posts, video handling, and user profiles. It is optimized for mobile and tablet devices, with responsive design for a seamless user experience.

## Features

### 1. User Authentication
- User registration and login functionality using Appwrite Authentication.
- Supports email/password-based login.
- Google authentication (feature pending implementation).

### 2. Social Media Feed
- Displays posts from users, including text, images, and videos.
- Users can create posts with multi-image support.
- Timestamps displayed for each post.

### 3. Infinite Scrolling
- Dynamically loads 20 posts at a time as the user scrolls down.
- Fetches posts from Appwrite in batches for smooth loading.

### 4. User Profiles
- Users can view and edit their profiles, including:
  - Bio
  - Name
  - Profile picture
  - A "My Posts" section showcasing all their posts.

### 5. Video Handling
- Videos in posts automatically play when they enter the viewport and pause when they exit, providing a dynamic user experience.

### 6. Share Option
- Users can share posts and content with other applications.

### 7. Performance Optimization
- Ensures fast loading times and smooth interactions:
  - Image optimization.
  - Efficient data fetching strategies.
  - Minimized asset sizes.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Appwrite
- **Styling**: Tailwind CSS
- **State Management**: React Context API


## Setup Instructions

### Prerequisites
- Node.js installed on your machine.
- Appwrite backend setup and configured.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>

2. ```bash
      npm install

3. Create a .env file in the root of your project.
    Add the following environment variables:
    ```bash
        VITE_APPWRITE_PROJECT_ID='<YOUR_PROJECT_ID>'
        VITE_APPWRITE_URL='<YOUR_APPWRITE_URL>'
        VITE_APPWRITE_STORAGE_ID='<YOUR_STORAGE_BUCKET_ID>'
        VITE_APPWRITE_DATABASE_ID='<YOUR_DATABASE_ID>'
        VITE_APPWRITE_USER_COLLECTION_ID='<YOUR_USER_COLLECTION_ID>'
        VITE_APPWRITE_POST_COLLECTION_ID='<YOUR_POST_COLLECTION_ID>'
        VITE_APPWRITE_SAVES_COLLECTION_ID='<YOUR_SAVES_COLLECTION_ID>'

4.  Run the development server:
```bash
  npm run dev

