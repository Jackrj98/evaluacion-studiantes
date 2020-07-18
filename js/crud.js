let modificar = false;
$(document).ready(function () {
  modificar = false;
  listarEstudiantes();
  registrar();
  buscar();
});

function calcularPromedio(n1, n2, n3, n4, n5, n6) {
  return (
    parseFloat(
      parseFloat(n1) +
        parseFloat(n2) +
        parseFloat(n3) +
        parseFloat(n4) +
        parseFloat(n5) +
        parseFloat(n6)
    ) / 6
  ).toFixed(2);
}

function listarEstudiantes() {
  $.ajax({
    url: "listar.php",
    type: "GET",
    success: function (response) {
      let students = JSON.parse(response);
      let html = "";
      var promedio = 0;
      students.forEach((item, index) => {
        promedio = calcularPromedio(
          item.n1,
          item.n2,
          item.n3,
          item.n4,
          item.n5,
          item.n6
        );
        html += '<tr estudianteId="' + item.id + '">';
        html +=
          '<td scope="row" id="usuarioId"><strong>' +
          (index + 1) +
          "</strong></td>";
        html += "<td>" + item.cedula + "</td>";
        html += "<td>" + item.apellidos + "  " + item.nombres + "</td>";
        html += "<td>" + item.materia + "</td>";
        html += "<td>" + item.n1 + "</td>";
        html += "<td>" + item.n2 + "</td>";
        html += "<td>" + item.n3 + "</td>";
        html += "<td>" + item.n4 + "</td>";
        html += "<td>" + item.n5 + "</td>";
        html += "<td>" + item.n6 + "</td>";
        html += "<td>" + promedio + "</td>";
        if (parseInt(promedio).toFixed(0) >= 7) {
          html += '<td><span class="badge badge-success">Aprobado</span></td>';
        } else {
          html += '<td><span class="badge badge-danger">Reprobado</span></td>';
        }
        html +=
          '<td id="'+item.id+'"><a href="#" id="itemES" class="estudiante-item btn btn-outline-primary"  data-toggle="modal" data-target="#studentModal" onClick="capturarId('+item.id+')">Modificar</a></td>';
        html += "</tr>";
      });
      $("#table tbody").append(html);
    },
  });
}

function registrar() {
  $("#estudianteF").submit((e) => {
    const datos = {
      cedula: $("#cedula").val(),
      nombres: $("#nombres").val(),
      apellidos: $("#apellidos").val(),
      materia: $("#materia").val(),
      nota1: $("#nota1").val(),
      nota2: $("#nota2").val(),
      nota3: $("#nota3").val(),
      nota4: $("#nota4").val(),
      nota5: $("#nota5").val(),
      nota6: $("#nota6").val(),
      id: $("#estudianteId").val(),
    };
    const url = modificar === false ? "insertar.php" : "modificar.php";
    $.post(url, datos, (response) => {
      listarEstudiantes();
    });
  });
}

function capturarId(x){
  alert(x)
  const id = x;
  $.post("getTarea.php", { id }, (response) => {
    const data = JSON.parse(response);
    console.log(data);
    $("#cedula").val(data.cedula);
    $("#apellidos").val(data.apellidos);
    $("#nombres").val(data.nombres);
    $("#materia").val(data.materia);
    $("#nota1").val(data.n1);
    $("#nota2").val(data.n2);
    $("#nota3").val(data.n3);
    $("#nota4").val(data.n4);
    $("#nota5").val(data.n5);
    $("#nota6").val(data.n6);
    $("#estudianteId").val(data.id);
    modificar = true;
  });
}

function buscar() {
  $("#btn-buscar").click(function () {
    if ($("#search").val()) {
      let search = $("#search").val();
      $.ajax({
        url: "buscar.php",
        data: { search },
        type: "POST",
        success: function (response) {
          const students = JSON.parse(response);
          console.log(students);
          let html = "";
          var promedio = 0;
          students.forEach((item, index) => {
            promedio = calcularPromedio(
              item.nota1,
              item.nota2,
              item.nota3,
              item.nota4,
              item.nota5,
              item.nota6
            );
            html += '<tr estudianteId="' + item.id + '">';
            html +=
              '<td scope="row" id="usuarioId"><strong>' +
              (index + 1) +
              "</strong></td>";
            html += "<td>" + item.cedula + "</td>";
            html += "<td>" + item.apellidos + "  " + item.nombres + "</td>";
            html += "<td>" + item.materia + "</td>";
            html += "<td>" + item.n1 + "</td>";
            html += "<td>" + item.n2 + "</td>";
            html += "<td>" + item.n3 + "</td>";
            html += "<td>" + item.n4 + "</td>";
            html += "<td>" + item.n5 + "</td>";
            html += "<td>" + item.n6 + "</td>";
            html += "<td>" + promedio + "</td>";
            if (parseInt(promedio).toFixed(0) >= 7) {
              html += '<td><span class="badge badge-success">Aprobado</span></td>';
            } else {
              html += '<td><span class="badge badge-danger">Reprobado</span></td>';
            }
            html +=
              '<td id="'+item.id+'"><a href="#" id="itemES" class="estudiante-item btn btn-outline-primary"  data-toggle="modal" data-target="#studentModal" onClick="capturarId('+item.id+')">Modificar</a></td>';
            html += "</tr>";
          });
          $("#table tbody").html(html);
        },
      });
    } else {
      listarEstudiantes();
    }
  });
}
