<?php
	defined('BASEPATH') OR exit('No direct script access allowed');
	
	class Downloaddb extends CI_Controller
	{
		public function __construct ()
		{
			header('Content-Type: application/octet-stream');
			header("Content-Transfer-Encoding: Binary");
			parent::__construct ();
			
		}
		public function index() {
			
//
//			$host = '178.79.164.123';
//			$username = 'root';
//			$password = 'kDkL9WKv29SurMjT';
//			$database_name = 'champs';
//
//// Get connection object and set the charset
//			$conn = mysqli_connect($host, $username, $password, $database_name);
//			$conn->set_charset("utf8");
//
//
//// Get All Table Names From the Database
//			$tables = array();
//			$sql = "SHOW TABLES";
//			$result = mysqli_query($conn, $sql);
//
//			while ($row = mysqli_fetch_row($result)) {
//				$tables[] = $row[0];
//			}
//
//			$sqlScript = "";
//			foreach ($tables as $table) {
//
//				// Prepare SQLscript for creating table structure
//				$query = "SHOW CREATE TABLE $table";
//				$result = mysqli_query($conn, $query);
//				$row = mysqli_fetch_row($result);
//
//				$sqlScript .= "\n\n" . $row[1] . ";\n\n";
//
//
//				$query = "SELECT * FROM $table";
//				$result = mysqli_query($conn, $query);
//
//				$columnCount = mysqli_num_fields($result);
//
//				// Prepare SQLscript for dumping data for each table
//				for ($i = 0; $i < $columnCount; $i ++) {
//					while ($row = mysqli_fetch_row($result)) {
//						$sqlScript .= "INSERT INTO $table VALUES(";
//						for ($j = 0; $j < $columnCount; $j ++) {
//							$row[$j] = $row[$j];
//
//							if (isset($row[$j])) {
//								$sqlScript .= "'" . $row[$j] . "'";
//							} else {
//								$sqlScript .= "''";
//							}
//							if ($j < ($columnCount - 1)) {
//								$sqlScript .= ',';
//							}
//						}
//						$sqlScript .= ");\n";
//					}
//				}
//
//				$sqlScript .= "\n";
//			}
//
//			if(!empty($sqlScript))
//			{
//				// Save the SQL script to a backup file
//				$backup_file_name = $database_name . '_backup_' . time() . '.sql';
//				$fileHandler = fopen($backup_file_name, 'w+');
//				$number_of_lines = fwrite($fileHandler, $sqlScript);
//				fclose($fileHandler);
//
////				// Download the SQL backup file to the browser
//				header('Content-Description: File Transfer');
//				header('Content-Type: application/octet-stream');
//				header('Content-Disposition: attachment; filename=' . basename($backup_file_name));
//				header('Content-Transfer-Encoding: binary');
//				header('Expires: 0');
//				header('Cache-Control: must-revalidate');
//				header('Pragma: public');
//				header('Content-Length: ' . filesize($backup_file_name));
//				ob_clean();
//				flush();
//				readfile($backup_file_name);
//				exec('rm ' . $backup_file_name);
//
//			}
//
//
//			exit;
//			return;
			$mysqlUserName      = "root";
			$mysqlPassword      = "kDkL9WKv29SurMjT";
			$mysqlHostName      = "178.79.164.123";
			$DbName             = "champs";
			$backup_name        = "mybackup.sql";
			$tables             = "Your tables";
			$tables = false;
			
			$mysqli = new mysqli($mysqlHostName,$mysqlUserName,$mysqlPassword,$DbName);
			$mysqli->select_db($DbName);
			$mysqli->query("SET NAMES 'utf8'");
			
			$queryTables    = $mysqli->query('SHOW TABLES');

			while($row = $queryTables->fetch_row())
			{
				$target_tables[] = $row[0];
			}
			if($tables !== false)
			{
				$target_tables = array_intersect( $target_tables, $tables);
			}
			foreach($target_tables as $table)
			{
				$result         =   $mysqli->query('SELECT * FROM '.$table);
				if($result == false){
					continue;
				}
				$fields_amount  =   $result->field_count;
				$rows_num=$mysqli->affected_rows;
				$res            =   $mysqli->query('SHOW CREATE TABLE '.$table);
				$TableMLine     =   $res->fetch_row();
				$content        = (!isset($content) ?  '' : $content) . "\n\n".$TableMLine[1].";\n\n";
				
				for ($i = 0, $st_counter = 0; $i < $fields_amount;   $i++, $st_counter=0)
				{
					while($row = $result->fetch_row())
					{ //when started (and every after 100 command cycle):
						if ($st_counter%100 == 0 || $st_counter == 0 )
						{
							$content .= "\nINSERT INTO ".$table." VALUES";
						}
						$content .= "\n(";
						for($j=0; $j<$fields_amount; $j++)
						{
							$row[$j] = str_replace("\n","\\n", addslashes($row[$j]) );
							if (isset($row[$j]))
							{
								$content .= "'".$row[$j]."'" ;
							}
							else
							{
								$content .= "''";
							}
							if ($j<($fields_amount-1))
							{
								$content.= ',';
							}
						}
						$content .=")";
						//every after 100 command cycle [or at last line] ....p.s. but should be inserted 1 cycle eariler
						if ( (($st_counter+1)%100==0 && $st_counter!=0) || $st_counter+1==$rows_num)
						{
							$content .= ";";
						}
						else
						{
							$content .= ",";
						}
						$st_counter=$st_counter+1;
					}
				} $content .="\n\n\n";
			}
			//$backup_name = $backup_name ? $backup_name : $name."___(".date('H-i-s')."_".date('d-m-Y').")__rand".rand(1,11111111).".sql";
			$backup_name = $backup_name ? $backup_name : $DbName.".sql";
			header('Content-Type: application/octet-stream');
			header("Content-Transfer-Encoding: Binary");
			header("Content-disposition: attachment; filename=\"".$backup_name."\"");
			echo $content; exit;
		}
	}