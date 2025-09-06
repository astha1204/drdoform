<?php
// This file defines custom types or constants used throughout the application.

// Define a constant for the database table names
define('TABLE_GROUPS', 'groups');
define('TABLE_FORMS', 'forms');

// Define a custom type for the response status
class ResponseStatus {
    const SUCCESS = 'success';
    const ERROR = 'error';
}

// Define a custom type for the user roles
class UserRole {
    const ADMIN = 'admin';
    const USER = 'user';
}
?>