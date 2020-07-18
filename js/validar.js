$(document).ready(function () {
  formularioEstudiante();
});

function validarCedula(cedula) {
  var cad = cedula.trim();
  var total = 0;
  var longitud = cad.length;
  var longcheck = longitud - 1;

  if (cad !== "" && longitud === 10) {
    for (i = 0; i < longcheck; i++) {
      if (i % 2 === 0) {
        var aux = cad.charAt(i) * 2;
        if (aux > 9) aux -= 9;
        total += aux;
      } else {
        total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
      }
    }

    total = total % 10 ? 10 - (total % 10) : 0;

    if (cad.charAt(longitud - 1) == total) {
      return true;
    } else {
      return false;
    }
  }
}

function formularioEstudiante() {
  $.validator.addMethod(
    "soloLetras",
    function (value, element) {
      return this.optional(element) || /^[a-z\s]+$/i.test(value);
    },
    "Ingrese solo letras"
  );
  $.validator.addMethod(
    "soloNumeros",
    function (value, element) {
      return this.optional(element) || /^[0-9\s]+$/i.test(value);
    },
    "Ingrese solo numeros"
  );
  $.validator.addMethod(
    "validcedula",
    validarCedula,
    "Ingrese un numero de cedula valido"
  );

  $("#estudianteF").validate({
    rules: {
      cedula: {
        number: true,
        validcedula: true,
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      nombres: {
        required: true,
        minlength: 4,
        maxlength: 75,
        soloLetras: true,
      },
      apellidos: {
        required: true,
        minlength: 4,
        maxlength: 75,
        soloLetras: true,
      },
      materia: {
        required: true,
        minlength: 4,
        maxlength: 75,
        soloLetras: true,
      },
      nota1: {
        number: true,
        min: 0,
        max: 10,
        required: true,
      },
      nota2: {
        number: true,
        min: 0,
        max: 10,
        required: true,
      },
      nota3: {
        number: true,
        min: 0,
        max: 10,
        required: true,
      },
      nota4: {
        number: true,
        min: 0,
        max: 10,
        required: true,
      },
      nota5: {
        number: true,
        min: 0,
        max: 10,
        required: true,
      },
      nota6: {
        number: true,
        min: 0,
        max: 10,
        required: true,
      },
    },
    messages: {
      cedula: {
        required: "Ingrese una cedula valida de la 10 digitos",
        minlength: "Minimo 10 caracteres",
        maxlength: "Máximo 10 caracteres",
      },
      nombres: {
        required: "Ingrese sus nombres completos",
        minlength: "Minimo 4 caracteres",
        maxlength: "Máximo 75 caracteres",
      },
      apellidos: {
        required: "Ingrese sus apellidos completos",
        minlength: "Minimo 4 caracteres",
        maxlength: "Máximo 75 caracteres",
      },
      materia: {
        required: "Ingrese el nombre de la materia",
        minlength: "Minimo 4 caracteres",
        maxlength: "Máximo 75 caracteres",
      },
      nota1: {
        required: "Ingrese la nota 1",
      },
      nota2: {
        required: "Ingrese la nota 2",
      },
      nota3: {
        required: "Ingrese la nota 3",
      },
      nota4: {
        required: "Ingrese la nota 4",
      },
      nota5: {
        required: "Ingrese la nota 5",
      },
      nota6: {
        required: "Ingrese la nota 6",
      },
    },
  });
}
