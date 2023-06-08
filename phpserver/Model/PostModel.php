<?php
require("vendor/autoload.php");
require_once PROJECT_ROOT_PATH . "/Model/Database.php";

class PostModel extends DataBase{
	public function getPosts(){
		return $this->select("SELECT * FROM posts ORDER BY post_id DESC");
	}

	public function getPost($id){
		if($id == null || $id == '' || $id == 0){
			return array('error' => 'Invalid post id.');
		}
		return $this->select("SELECT * FROM posts WHERE post_id=$id");
	}
	public function createPost(){
		$data = json_decode(file_get_contents("php://input"));
		$title = $data->title;
		$content = $data->content;
		$author = $data->author;
		$sql = "INSERT INTO posts (post_title,post_content,post_author) VALUES ('$title','$content','$author')";
		$result = $this->select($sql);
		if($result){
			return array('success' => 'Post created successfully.');
		}else{
			return array('error' => 'Post creation failed.');
		}
	}

}

?>