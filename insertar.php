<?php
	include('database.php');
	if (isset($_POST['nombres'])) {
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
		$query = "INSERT INTO estudiante(cedula, apellidos, nombres, materia, nota1, nota2, nota3, nota4, nota5, nota6) 
		values ('$cedula','$nombre', '$apellido','$materia','$nota1','$nota2','$nota3','$nota4','$nota5','$nota6')";
		$resultado = mysqli_query($conexion, $query);

		if(!$resultado){
			die('sentencia ha fallado en insertar alumno');
		}
		//header('Location: http://localhost/repaso');
	}
?>