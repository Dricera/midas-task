<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
class UserModel extends Database
{
    public function getUsers($limit)
    {
		if($limit == null || $limit == '' || $limit == 0)
		return $this->select("SELECT * FROM users ORDER BY user_id ASC");
        return $this->select("SELECT * FROM users ORDER BY user_id ASC LIMIT ?", ["i", $limit]);
    }
}