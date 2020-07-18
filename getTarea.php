<?php
include('database.php');
if (isset($_POST['id'])) {
	$query = "SELECT * FROM estudiante WHERE id = ".$_POST['id'];
	$resultado = mysqli_query($conexion, $query);
	if(!$resultado){
		die('sentencia ha fallado en get tarea'. mysqli_error($connection));
	}
	
	$json = array();
  	while($row = mysqli_fetch_array($resultado)) {
    	$json[] = array(
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
  $jsonstring = json_encode($json[0]);
  echo $jsonstring;
}
?>