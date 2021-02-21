$().ready(inicio);
function inicio(){
// EVENTO CLICK -----------------------------------
    // seleciona cajas de texto con entradas
    var _inputSec1 = $('#section1 input:text:not(#resultado1)');
    // seleciona cajasSec1 de texto para resultado
    var $resultado1 = $('#resultado1');
    // evento click
    $('#btn1').click(function(){
        var sumatorio=0;
        _inputSec1.each(function(){
            sumatorio += parseInt($(this).val());
        });
        $resultado1.val(sumatorio);
        $('#section1').delay(2000).hide('slow');
    })

// EVENTOS focus y blur  ------------------------------
    // seleciona cajas de texto con entradas
    var _inputSec2 = $('#section2 input:text:not(#resultado2)');
    // seleciona cajasSec1 de texto para resultado
    var $resultado2 = $('#resultado2');

    // obtiene el foco
    $(_inputSec2).focus(function(){
        $(this).css('background-color','green')
    })
    // pierde el foco
    $(_inputSec2).blur(function () {
        $(this).css('background-color', 'white')
    })    
    // evento click
    $('#btn2').click(function () {
        var sumatorio = 0;
        _inputSec2.each(function () {
            sumatorio += parseInt($(this).val());
        });
        $resultado2.val(sumatorio);
        $('#section2').delay(2000).hide('slow');
    })    

// FUNCION check()
    var _inputSec3 = $('#section3 input:text:not(#resultado3)');
    var resultado3 = $('#resultado3');

    // funcion de validacion de valores introducidos
    function check(){
        var ok = true;
        // para cada caja de texto
        _inputSec3.each(function(){
            // comprobacion de error > empleando function de JQuery $.isNumeric()
            if(!$.isNumeric($(this).val())){
                $(this).css('background-color','#ff0000'); // ERROR
                ok=false;
            } else{
                $(this).css('background-color', '#ffffff'); // ok
            }
        });
        return ok;
    }

    // evento de pulsacion de botón de ejecución de cálculo
    $('#btn3').click(function(){
        if(check()){
            // comprobación correcta - cálculo de sumatorio y visualización
            var sumatorio2 = 0;
            _inputSec3.each(function () {
                sumatorio2 += parseInt($(this).val());
                resultado3.val(sumatorio2);
            })
        } else {
            // comprobación no superada
            alert('Se ha encontrado un valor erroneo')
        }
    })

    $('#boton').click(function(){
        // obtencion de la opcion seleccionada
        var frutas = $('input[name="frutas"]:checked');
        if(frutas.length > 0 ){
            // opcion seleccionada
            alert('La opcion selecionada ' + frutas.val());
        } else {
            // ninguna opcion seleccionada
            alert('No has seleccionada nada')
        }
    })

    // casillas de verificación
     // $('#visa').is(':checked')
    $('#boton2').click(function(){
        let targeta = $('input[type="checkbox"]:checked');
        if($('#visa').is(':checked')){
            alert('Has marcado ' + targeta.val())
        } else {
            alert('Visa no marcada.' )
        }
    })

    // lista de selección
    $('#verificar').click(function () {
        var lista_frutas = $('#frutas option:selected');
    // comprobacion de elemento seleccionado
        if (lista_frutas.length > 0) {
            alert('El elemento selecionado es: ' + lista_frutas.html());
            alert('El valor del producto seleccionado es: ' + lista_frutas.val())
        } else {
            alert('No se ha seleccioando ninguna fruta');
        }
    })

    // lista seleccion 
    // lista de selección usando each() y $(this)
    $('#verificacion').click(function () {
        var lista_this_frutas = $('#frutas2 option:selected');
        lista_this_frutas.each(function(){
            alert('El elemento seleccionado es: ' + $(this).html());
            alert('El valor del producto seleccionado es: ' + $(this).val())
        })
    })

    // lista seleccion multiple
    // lista de selección Multipla usando comprobacion if-else, bucle each() y $(this)
    $('#verificacion_multiple2').click(function(){

        var lista_multipla_this_frutas = $('#frutas3 option:selected');

        // comprobacion de elemento seleccionado
        if(lista_multipla_this_frutas.length > 0){
            alert('Se han seleccionado: ' + lista_multipla_this_frutas.length + ' opciones');

            // bucle de recorrido de opciones seleccionadas
            lista_multipla_this_frutas.each(function () {
                alert('El elemento seleccionado es: ' + $(this).html());
                alert('El valor del producto seleccionado es: ' + $(this).val())
            })           
        } else {
            alert('No se ha seleccioando ninguna fruta');
        }
    });

    // Agregando frutas en la lista
/*
    $('#add_fruta').click(function(){
        var opciones = lista.prop('#dias options');
        opciones[0] = new Option('Lunes', 0);
        opciones[1] = new Option('Martes', 1);
        opciones[2] = new Option('Miercoles', 2);
        opciones[3] = new Option('Jueves', 3);
        opciones[4] = new Option('Viernes', 4);        
    })
*/

    // agregado a la lista de dias, cada dia en el idioma seleccionado
    $('#dias').append('<option> Lunes </option>');
    $('#dias').append('<option> Martes </option>');
    $('#dias').append('<option> Miercoles </option>');
    $('#dias').append('<option> Jueves </option>');
    $('#dias').append('<option> Viernes </option>');


    // add idioma
    // matriz bidimensional de dias por idioma
    var dias2 = new Array();
    dias2['Castellano'] = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
    dias2['Ingles'] = ['monday','tuesday','wednesday','thurday','friday','saturday','sunday'];
    dias2['Frances'] = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];

    // eliminar el idioma actual
    // en seguida agregar el nuevo idioma
    function lista_nueva(idioma) {
        // monstra el idioma selecionado
        confirm('Has seleccionado el idioma: ' + idioma);

        // elimina todos los dias en la lista de dias
        $('#dias2 option').remove();

        //diferencia entre $.each() y $().each()
        $.each(dias[idioma],function (indx, val) {

        // agregando en dias2 el nuevo idioma elegido
            $('#dias2').append(`<option>${val}</option>`);
        });
    }


    //section 10
    // mostrar los dias del nuevo idioma elegido
    $('#idiomas').change(function () {
        // enlace a funcion lista_nueva
        lista_nueva($('#idiomas option:selected').html());
    })

    // validacion a nivel de control
    function valida_navig(valor) { //funcion de validacion valor vacio
        return valor.length > 0;
    }
    function valida_numerico(valor) { //funcion de validacion numerico
        return $.isNumeric(valor);
    }
    $('#nombre').blur(function(){
        //recorrengo el valor de la funcion valida_navig
        if(!valida_navig($(this).val())){
            $('#err_nombre').show();
            this.focus();
        } else $('#err_nombre').hide();
    });
    $('#edad').blur(function(ev){
        if(!valida_numerico($(this).val())){
            $('#err_edad').show();
            this.focus();
        } else $('#err_edad').hide();
    });

    // section 10
    function valida_navig(valor) { //funcion de validacion valor vacio
        return valor.length > 0;
    }
    function valida_numerico(valor) { //funcion de validacion numerico
        return $.isNumeric(valor);
    }

    function valido(){
        $('#err_nombre').hide();
        $('#err_edad').hide();
        if(!valida_navig($('#nombre').val())){
            $('#err_nombre').show();
            return false;
        } else if (!valida_numerico($('#edad').val())){
            $('#err_edad').show();
            return false;
        } else {
            return true;
        }
    }

    // evento de envio del formulario
    // cancelacion de submit
    $('#form-10').submit(function(ev){
        if(!valido()){
            ev.preventDefault();
            alert('Error! Verificar los campos.')
        }
    });


    // section 11
    // input nombre and edad required
    $('#form11 input:not(:submit)').on('invalid', function(){
        alert(`Fallo en campo ${this.name}`);
    })


    // section 12

    // input nombre required
    $('#nombre12').blur(function(){
        if(this.validity.valueMissing){
            $('#err_nombre12').html("* Campo obligatorio.").show();
        } else{
            $('#err_nombre12').html('').hide();
        }
    });

    // input edad required
    $('#edad12').blur(function(){
        if(this.validity.valueMissing){
            $('#err_edad12').html('* Campo obligatorio').show();
        } else if (this.validity.rangeUnderflow){
            $('#err_edad12').html('* Valor muy bajo').show();
        } else if (this.validity.rangeOverflow){
            $('#err_edad12').html('* Valor muy alto').show();
        } else {
            $('#err_edad12').html('').hide();
        }
    });

    // SECTION 13

    $('#form13 input[name="clave"]').change(function(){
        if($(this).val().length > 8){ // comprobacion de longitud
            // se excedelos 8 caracteres -> ERROR
            this.setCustomValidity('Introduzca un valor de max 8 caracteres');
        } else {
            // no excede los 8 caracteres -> OK
            this.setCustomValidity('');
        }
    });
}