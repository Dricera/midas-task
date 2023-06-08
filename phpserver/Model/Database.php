<?php
class DataBase
{
    protected $connection = null;
    public function __construct()
    {
        try {
            mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
            $this->connection = new \MySQLi(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);

            if (mysqli_connect_errno()) {
                throw new Exception("Could not connect to database.");
            }
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }


    public function select($query = "", $params = [])
    {
        try {
            $stmt = $this->executeStatement($query, $params);
            
            if (stripos($query, 'INSERT INTO') === 0) {
                // This is an INSERT INTO statement, so return true to indicate success
                $result = true;
            } else {
                $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
            }

            $stmt->close();

            return $result;

        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }

        // return false;
    }
    private function executeStatement($query = "", $params = [])
    {
        try {

            $stmt = $this->connection->prepare($query);
            if ($stmt === false) {
                throw new Exception("Unable to perform prepared statement: " . $query);
            }
            if ($params) {
                $stmt->bind_param($params[0], $params[1]);
            }
            $stmt->execute();
            return $stmt;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}