$(function() {

    $("img#opciones1").click(function(){
        var elemento = $(this).attr("valor");
        console.log(elemento);

        var aleatorio=Math.floor(Math.random() * 3) + 1;


        if (aleatorio == 1) elemento_contra = "Piedra";
        else if (aleatorio == 2) elemento_contra = "Papel";
        else if (aleatorio == 3) elemento_contra = "Tijera";
        var ganador;


        if (elemento == elemento_contra) ganador = "EMPATE";


        else if ((elemento == "Piedra" && elemento_contra == "Tijera") || (elemento == "Papel" && elemento_contra == "Piedra") || (elemento == "Tijera" && elemento_contra == "Papel")) {
            ganador = "GANA USUARIO";



            var actual = parseInt($('.usuario').html());
            actual += parseInt(1);
            $('.usuario').html(actual);
        }


        else {
            ganador = "GANA ORDENADOR";

            var actual = parseInt($('.ordenador').html());
            actual += parseInt(1);
            $('.ordenador').html(actual);
        }
        $('#imagen_maquina').html("<img src='web/img/"+elemento_contra+".jpg' height='50px'>");
        $('#resultado').html("Usuario juega " + elemento + " - Ordenador juega " + elemento_contra + "<br> El resultado es " + ganador);
        
    });

});