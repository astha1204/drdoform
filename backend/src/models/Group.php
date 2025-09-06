<?php

class Group {
    private $id;
    private $name;

    public function __construct($name) {
        $this->name = $name;
    }

    public function getId() {
        return $this->id;
    }

    public function getName() {
        return $this->name;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function save($conn) {
        $stmt = $conn->prepare("INSERT INTO groups (name) VALUES (:name)");
        $stmt->bindParam(':name', $this->name);
        $stmt->execute();
        $this->id = $conn->lastInsertId();
    }

    public static function getAll($conn) {
        $stmt = $conn->prepare("SELECT * FROM groups");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function delete($conn, $id) {
        $stmt = $conn->prepare("DELETE FROM groups WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }
}