# DRDO Form Backend

This project is a backend application for managing groups and forms. It is built using PHP and utilizes a MySQL database for data storage.

## Project Structure

```
drdoform-backend
├── public
│   └── index.php          # Entry point for the application
├── src
│   ├── config
│   │   └── database.php   # Database configuration settings
│   ├── controllers
│   │   ├── GroupController.php  # Handles group-related operations
│   │   └── FormController.php   # Handles form-related operations
│   ├── models
│   │   ├── Group.php      # Represents the group entity
│   │   └── Form.php       # Represents the form entity
│   ├── routes
│   │   └── api.php        # API routes for the application
│   └── types
│       └── index.php      # Custom types or constants
├── sql
│   └── schema.sql         # SQL schema for the database
├── composer.json           # Composer configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd drdoform-backend
   ```

2. **Install Dependencies**
   Make sure you have Composer installed. Run the following command to install the required dependencies:
   ```bash
   composer install
   ```

3. **Configure Database**
   Update the `src/config/database.php` file with your database connection settings.

4. **Set Up Database**
   Run the SQL schema located in `sql/schema.sql` to set up the necessary tables in your database.

5. **Run the Application**
   You can run the application using a local server. For example, using PHP's built-in server:
   ```bash
   php -S localhost:8000 -t public
   ```

## Usage Guidelines

- Use the API routes defined in `src/routes/api.php` to interact with the application.
- The `GroupController` manages group-related operations such as creating, retrieving, and deleting groups.
- The `FormController` manages form-related operations such as creating forms and retrieving forms by group.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.