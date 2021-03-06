<?php
class ModelQueso
{ 
	private $conn;
	
	public function __construct()
	{
		include ('conexion.php');
		try
		{
			$this->conn = new PDO("mysql:host=$host;dbname=$db",$user,$pass);
		}
		catch(PDOException $pe)
		{
			die('Error de conexion, Mensaje: ' .$pe->getMessage());
		}
	}
	
	public function listadoQuesos()
	{
		$sql = "SELECT * FROM queso;";
		$resultado = $this->conn->prepare($sql);
		$resultado->execute();
		if (!$resultado)
		{
			die(print($this->conn->errorInfo()[2]));
		}
		return $resultado->fetchAll(PDO::FETCH_ASSOC);
	}
	
	public function consultaQuesos($nombre)
	{
		$sql = "SELECT * FROM queso WHERE upper(queso.nombre) like upper('%$nombre%');";
		$resultado = $this->conn->prepare($sql);
		$resultado->execute();
		if (!$resultado)
		{
			die(print($this->conn->errorInfo()[2]));
		}
		return $resultado->fetchAll(PDO::FETCH_ASSOC);
	}
}
?>