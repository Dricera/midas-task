<?php

require("vendor/autoload.php");
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
use \Firebase\JWT\JWT;

class UserModel extends Database
{
    public function getUser($id)
    { //return error when invalid id
        if ($id == null || $id == '' || $id == 0) {
            return array('error' => 'Invalid user id.');
        }
        return $this->select("SELECT user_id,user_name,user_email,user_role FROM users WHERE user_id=$id");
    }

    public function listUsers()
    {
        return $this->select("SELECT * FROM users ORDER BY user_id ASC");
    }
    public function createUser()
    {
        $data = json_decode(file_get_contents("php://input"));
        // print_r($data);
        $name = $data->name . ' ' . $data->lastname;
        $email = $data->email;
        $prepass = $data->password;
        $role = "user"; //default role is 'user'
/* 
        if ($data->$role) { 
            $role = $data->role; //if role is set, use it
        } */

        $password = password_hash($prepass, PASSWORD_BCRYPT);
        //check if user already exists
        $user = $this->select("SELECT * FROM users WHERE user_email='$email'");
        if ($user) {
            http_response_code(409);
            return array('error' => 'User already exists.');
        }
        $sql = "INSERT INTO users (user_name,user_email,user_password,user_role,user_status) VALUES ('$name','$email','$password','$role',1)";
        $result = $this->select($sql);
        if ($result) {
            return array('success' => 'User created successfully.');
        } else {
            return array('error' => 'User creation failed.');
        }
    }
    public function updateUser($id)
    {
        $data = json_decode(file_get_contents("php://input"));
        $name = $data->name . ' ' . $data->lastname;
        $email = $data->email;
        $password = $data->password;

        $sql = "UPDATE users SET name='$name',email='$email',password='$password' WHERE user_id=$id";
        $result = $this->select($sql);
        if ($result) {
            return array('success' => 'User updated successfully.');
        } else {
            return array('error' => 'User updation failed.');
        }
    }

    public function loginUser()
    {
        $data = json_decode(file_get_contents("php://input"));
        $email = $data->email;
        $passcode = $data->password;
        $hashed_passcode=password_hash($passcode,PASSWORD_BCRYPT);
        //check if salted pass matches salted stored pass
        if (!$email || !$passcode) {
            return array('error' => 'Please enter email and password.');
        }
        
        $user = $this->select("SELECT * FROM users WHERE user_email='$email'");
        if (!$user) {
            return array('error' => 'User does not exist.');
        }
        $password = $user[0]['user_password'];

        if (!password_verify($passcode,$password)) {
            http_response_code(401);
            // throw error
            return json_encode(array("error" => "Invalid credentials."));
        }
        if ($user) {
            $email = $user[0]['user_email'];
            $password = $user[0]['user_password'];
            $id = $user[0]['user_id'];
            $role = $user[0]['user_role'];
            $name = $user[0]['user_name'];

            //set jwt token from result
            $secret_key = "secretkey123456789";
            $issuer_claim = "localhost"; // this can be the servername
            $audience_claim = "THE_AUDIENCE";
            $issuedat_claim = time(); // issued at
            $notbefore_claim = $issuedat_claim + 10; //not before in seconds
            $expire_claim = $issuedat_claim + 3600; // expire time in seconds
            $token = array(
                "iss" => $issuer_claim,
                "aud" => $audience_claim,
                "iat" => $issuedat_claim,
                "nbf" => $notbefore_claim,
                "exp" => $expire_claim,
                "data" => array(
                    "id" => $id,
                    "name" => $name,
                    "email" => $email,
                    "role" => $role
                )
            );
            $jwt = JWT::encode($token, $secret_key, 'HS256');

            return json_encode(
                array(
                    "message" => "Successful login.",
                    "jwt" => $jwt
                )
            );
            /* return array('success' => 'User login successful.', 'jwt' => $jwt); */


        } else {
            http_response_code(401);
            return json_encode(array("message" => "Login failed.", "email" => $email));
            /* return array('error' => 'User login failed.'); */

        }
    }
}