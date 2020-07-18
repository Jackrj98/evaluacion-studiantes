<?php
	include('database.php');
	if (isset($_POST['id'])) {
		$cedula = $_POST['cedula'];
		$apellido = $_POST['apellidos'];
		$nombre = $_POST['nombres'];
		$materia = $_POST['materia'];
		$nota1 = $_POST['nota1'];
		$nota2 = $_POST['nota2'];
		$nota3 = $_POST['nota3'];
		$nota4 = $_POST['nota4'];
		$nota5 = $_POST['nota5'];
		$nota6 = $_POST['nota6'];
		$id = $_POST['id'];
		$query = "UPDATE estudiante SET cedula = '$cedula', apellidos = '$apellido', nombres = '$nombre', materia = '$materia',
		nota1 = '$nota1',nota2 = '$nota2',nota3 = '$nota3', nota4 = '$nota4', nota5 = '$nota5', nota6 = '$nota6'
		WHERE id = '$id'";
		$resultado = mysqli_query($conexion, $query);

		if(!$resultado){
			die('sentencia ha fallado en modificar');
		}

	}
?>