$( document ).ready(function() {
 
    $("#btn1").on('click',function(){
        let saludo="Hola " +  $(" #nombre").val();
      alert(saludo);
    });

    $("#btn2").on('click',function(){
        let saludo="Hola " +  $(" #nombre").val();
        $("#mensaje").html(saludo);
    });
    //validacion form1
    $("#form1").validate({
      lang: 'es',
      
      rules:{
        nombre:{
          required:true
        },
        edad:{
          required:true,
          number:true
        }
      }
    });
  });