<?php
	include('database.php');
	$search = $_POST['search'];
		if(!empty($search)) {
			$query = "SELECT * from estudiante WHERE apellidos LIKE '$search%'";
			$result = mysqli_query($conexion,$query);
			if(!$result){
				die('Query con problemas en buscar'.mysqli_error($conexion));
			}
	}
	$json = array();
	while ($row = mysqli_fetch_array($result)) {
		$json[]= array(
			'cedula'=>$row['cedula'],
			'apellidos'=>$row['apellidos'],
			'nombres'=>$row['nombres'],
			'materia'=>$row['materia'],
			'nota1'=>$row['nota1'],
			'nota2'=>$row['nota2'],
			'nota3'=>$row['nota3'],
			'nota4'=>$row['nota4'],
			'nota5'=>$row['nota5'],
			'nota6'=>$row['nota6'],
			'id'=>$row['id']
		);
	}
	$jsonstring = json_encode($json);
	echo $jsonstring;
?>