<?php

require_once '../controllers/GroupController.php';
require_once '../controllers/FormController.php';

$groupController = new GroupController();
$formController = new FormController();

// Group routes
$router->post('/api/groups', [$groupController, 'createGroup']);
$router->get('/api/groups', [$groupController, 'getGroups']);
$router->delete('/api/groups/{id}', [$groupController, 'deleteGroup']);

// Form routes
$router->post('/api/forms', [$formController, 'createForm']);
$router->get('/api/forms/group/{groupId}', [$formController, 'getFormsByGroup']);
$router->delete('/api/forms/{id}', [$formController, 'deleteForm']);