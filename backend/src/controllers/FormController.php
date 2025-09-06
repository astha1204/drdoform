<?php

class FormController {
    private $db;

    public function __construct($database) {
        $this->db = $database;
    }

    public function createForm($title, $groupId) {
        $query = "INSERT INTO forms (title, group_id) VALUES (:title, :group_id)";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':title', $title);
        $stmt->bindParam(':group_id', $groupId);
        return $stmt->execute();
    }

    public function getFormsByGroup($groupId) {
        $query = "SELECT * FROM forms WHERE group_id = :group_id";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':group_id', $groupId);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteForm($formId) {
        $query = "DELETE FROM forms WHERE id = :id";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':id', $formId);
        return $stmt->execute();
    }
}