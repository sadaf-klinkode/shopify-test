# React + Laravel SPA with Polaris and Tailwind CSS

This project demonstrates the integration of React (using React Router), Laravel, Shopify Polaris components, and Tailwind CSS. It includes a basic form submission and listing feature with data stored in a database.

---

## Features

- **Frontend**:
  - Built with React and React Router for Single Page Application (SPA) functionality.
  - UI components styled using Shopify Polaris.
  - Tailwind CSS for additional styling.
  
- **Backend**:
  - Built with Laravel for handling API requests and database operations.
  - RESTful API endpoints for form submission and retrieval.
  
- **Database**:
  - Stores form submissions using a `submissions` table.

---

## Prerequisites

- Node.js (>= 14.x)
- PHP (>= 8.0)
- Composer
- MySQL or equivalent database

---

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo.git
cd your-repo
```

### 2. Install Backend Dependencies
```bash
composer install
```

### 3. Install Frontend Dependencies
```bash
npm install
```

### 4. Set Up Environment Variables

Create a `.env` file in the root directory and configure it:

```env
APP_NAME=ReactLaravelSPA
APP_ENV=local
APP_KEY=base64:GENERATE_YOUR_KEY
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password

SANCTUM_STATEFUL_DOMAINS=localhost:3000
SESSION_DRIVER=cookie
SESSION_DOMAIN=localhost
```

Generate the application key:
```bash
php artisan key:generate
```

### 5. Set Up Database

Run migrations to create the necessary tables:
```bash
php artisan migrate
```

### 6. Start the Development Servers

Start Laravel backend:
```bash
php artisan serve
```

Start React frontend:
```bash
npm run dev
```

The app should now be accessible at:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:8000](http://localhost:8000)

---

## Project Structure

### Backend (Laravel)
- **Routes**:
  - API routes are defined in `routes/api.php`.
- **Controller**:
  - `SubmissionController` handles form submission and retrieval logic.
- **Model**:
  - `Submission` model represents the `submissions` table.
- **Migration**:
  - `create_submissions_table` defines the database schema.

### Frontend (React)
- **Pages**:
  - `SubmissionList.jsx`: Displays a list of form submissions.
  - `SubmissionForm.jsx`: Contains a form for adding new submissions.
- **Components**:
  - Shopify Polaris components are used for styling and layout.

---

## API Endpoints

### 1. Get All Submissions
**GET** `/api/submissions`
- **Response**: JSON array of submissions.

### 2. Create a Submission
**POST** `/api/submissions`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "dropdown_value": "option1"
  }
  ```
- **Response**: Created submission object.

---

## Debugging Tips

### Common Issues

1. **404 Error on React Routes**:
   - Ensure Laravel's `routes/web.php` serves the React app:
     ```php
     Route::get('/', function () {
                return view('app');
            })->middleware('verify.shopify')->name('home');
     ```

2. **CORS Errors**:
   - Update Laravel's CORS configuration in `app/Http/Middleware/HandleCors.php`.

3. **Failed Form Submission**:
   - Verify API endpoints in `routes/api.php`.
   - Check Laravel logs at `storage/logs/laravel.log`.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

