<?php

class Form {
    private $id;
    private $title;
    private $groupId;

    public function __construct($id, $title, $groupId) {
        $this->id = $id;
        $this->title = $title;
        $this->groupId = $groupId;
    }

    public function getId() {
        return $this->id;
    }

    public function getTitle() {
        return $this->title;
    }

    public function getGroupId() {
        return $this->groupId;
    }

    public static function create($title, $groupId, $pdo) {
        $stmt = $pdo->prepare("INSERT INTO forms (title, group_id) VALUES (:title, :group_id)");
        $stmt->bindParam(':title', $title);
        $stmt->bindParam(':group_id', $groupId);
        $stmt->execute();
        return new Form($pdo->lastInsertId(), $title, $groupId);
    }

    public static function getFormsByGroup($groupId, $pdo) {
        $stmt = $pdo->prepare("SELECT * FROM forms WHERE group_id = :group_id");
        $stmt->bindParam(':group_id', $groupId);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function delete($id, $pdo) {
        $stmt = $pdo->prepare("DELETE FROM forms WHERE id = :id");
        $stmt->bindParam(':id', $id);
        return $stmt->execute();
    }
}