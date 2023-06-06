<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
class UserModel extends Database
{
    public function getUser($id)
    {        //return error when invalid id
        if ($id == null || $id == '' || $id == 0) {
            return array('error' => 'Invalid user id.');
        }
        return $this->select("SELECT * FROM users WHERE user_id=$id" );
    }

    public function listUsers()
    {
        return $this->select("SELECT * FROM users ORDER BY user_id ASC");
    }
}