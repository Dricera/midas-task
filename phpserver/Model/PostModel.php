<?php
require("vendor/autoload.php");
require_once PROJECT_ROOT_PATH . "/Model/Database.php";

class PostModel extends DataBase{
	public function listPosts(){
		return $this->select("SELECT post_id,post_title,created_at,category_id,author_id FROM posts ORDER BY post_id ASC");
	}

	public function getPostById($id){
		if($id == null || $id == '' || $id == -1){
			return array('error' => 'Invalid post id.');
		}
		return $this->select("SELECT * FROM posts WHERE post_id=$id");
		
	}
	public function createPost(){
		$data = json_decode(file_get_contents("php://input"));
		$title = $data->title;
		//escape html of base64 string
		// $content = htmlspecialchars($data->content);
		$content = $data->content;
		$author = $data->author;
		$sql = "INSERT INTO posts (post_title,post_content,author_id,created_at) VALUES ('$title','$content','$author',NOW())";
		$result = $this->select($sql);
		if($result){
			return array('success' => 'Post created successfully.');
		}else{
			return array('error' => 'Post creation failed.');
		}
	}

	public function updatePost($id){
		$data = json_decode(file_get_contents("php://input"));
		$title = $data->title;
		$content = $data->content;
		$author = $data->author;
		$category = $data->category;
		$sql = "UPDATE posts SET post_title='$title',post_content='$content',author_id='$author', category_id='$category' WHERE post_id=$id";
		$result = $this->select($sql);
		if($result){
			return array('success' => 'Post updated successfully.');
		}else{
			return array('error' => 'Post updation failed.');
		}
	}

	public function deletePost($id){
		$sql = "DELETE FROM posts WHERE post_id=$id";
		$result = $this->select($sql);
		if($result){
			return array('success' => 'Post deleted successfully.');
		}else{
			return array('error' => 'Post deletion failed.');
		}
	}

}

?>