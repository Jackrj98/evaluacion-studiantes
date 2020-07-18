<?php
	include('database.php');
	$query = "SELECT * from estudiante";
	$result = mysqli_query($conexion,$query);
	if(!$result){
		die('Query con problemas'.mysqli_error($conexion));
	}
	$json = array();
	while ($row = mysqli_fetch_array($result)) {
		$json[]= array(
			'cedula'=>$row['cedula'],
			'nombres'=>$row['nombres'],
			'apellidos'=>$row['apellidos'],
			'materia'=>$row['materia'],
			'n1'=>$row['nota1'],
			'n2'=>$row['nota2'],
			'n3'=>$row['nota3'],
			'n4'=>$row['nota4'],
			'n5'=>$row['nota5'],
			'n6'=>$row['nota6'],
			'id'=>$row['id']
		);
	}
	$jsonstring = json_encode($json);
	echo $jsonstring;
?>