<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT,OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Requested-With, Authorization");
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
class PostController extends BaseController{
	public function listAction(){
		$strErrorDesc = '';
		$requestMethod = $_SERVER["REQUEST_METHOD"];
		if (strtoupper($requestMethod) == 'GET') {
            try {
                $userModel = new PostModel();
                $arrUsers = $userModel->listPosts();
                $responseData = json_encode($arrUsers);

            } catch (Error $e) {
                $strErrorDesc = $e->getMessage() . 'Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        }
        if (!$strErrorDesc) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(
                json_encode(array('error' => $strErrorDesc)),
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
	}


}