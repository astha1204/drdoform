<?php

class GroupController {
    private $db;

    public function __construct($database) {
        $this->db = $database;
    }

    public function createGroup($name) {
        $stmt = $this->db->prepare("INSERT INTO groups (name) VALUES (:name)");
        $stmt->bindParam(':name', $name);
        return $stmt->execute();
    }

    public function getGroups() {
        $stmt = $this->db->query("SELECT * FROM groups");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteGroup($id) {
        $stmt = $this->db->prepare("DELETE FROM groups WHERE id = :id");
        $stmt->bindParam(':id', $id);
        return $stmt->execute();
    }
}