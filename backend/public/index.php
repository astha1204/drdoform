<?php
require_once '../src/config/database.php';
require_once '../src/routes/api.php';

// Initialize the application
$database = new Database();
$db = $database->getConnection();

// Handle incoming requests
$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestUri = $_SERVER['REQUEST_URI'];

// Route the request to the appropriate controller
switch ($requestUri) {
    case '/api/groups':
        $controller = new GroupController($db);
        if ($requestMethod === 'GET') {
            $controller->getGroups();
        } elseif ($requestMethod === 'POST') {
            $controller->createGroup();
        } elseif ($requestMethod === 'DELETE') {
            $controller->deleteGroup();
        }
        break;

    case '/api/forms':
        $controller = new FormController($db);
        if ($requestMethod === 'GET') {
            $controller->getFormsByGroup();
        } elseif ($requestMethod === 'POST') {
            $controller->createForm();
        } elseif ($requestMethod === 'DELETE') {
            $controller->deleteForm();
        }
        break;

    default:
        http_response_code(404);
        echo json_encode(['message' => 'Not Found']);
        break;
}
?>