<?php
header("Access-Control-Allow-Origin: *");
// get request method
$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'GET') {
	//return json message
	
	echo json_encode(array('msg' => 'THIS IS A GET REQUEST'));
}
if ($method == 'POST') {
	echo json_encode(array('msg' => 'THIS IS A POST REQUEST'));
}
if ($method == 'PUT') {
	echo json_encode(array('msg' => 'THIS IS A PUT REQUEST'));
}
if ($method == 'DELETE') {
	echo json_encode(array('msg' => 'THIS IS A DELETE REQUEST'));
}

?>