<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Headers: *");

header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE,PATCH");
if(isset($_SERVER["HTTP_ORIGIN"]))
{
    // You can decide if the origin in $_SERVER['HTTP_ORIGIN'] is something you want to allow, or as we do here, just allow all
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
else
{
    //No HTTP_ORIGIN set, so we allow any. You can disallow if needed here
    header("Access-Control-Allow-Origin: *");
}

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