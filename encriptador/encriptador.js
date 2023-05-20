
    function encriptarMensaje(){
        var text = document.getElementById("uno").value;
        var palabras = text;
        var i = palabras.replaceAll('i', 'imes')
        var palabras = i;
        var a = palabras.replaceAll('a','ai');
        var palabras = a;
        var e= palabras.replaceAll('e','enter');
        var palabras = e;
        var o = palabras.replaceAll('o','ober');
        var palabras = o;
        var nuevaFrace = palabras.replaceAll('u','ufat');
        document.getElementById("texto").innerHTML = nuevaFrace;
    }

    function desencriptarMensaje(){
        var text = document.getElementById("uno").value;
        var palabras = text;
        var nuevaFrace = palabras.replaceAll('ai','a');
        var palabras = nuevaFrace;
        var nuevaFrace = palabras.replaceAll('enter','e');
        var palabras = nuevaFrace;
        var nuevaFrace = palabras.replaceAll('imes','i');
        var palabras = nuevaFrace;
        var nuevaFrace = palabras.replaceAll('ober','o');
        var palabras = nuevaFrace;
        var nuevaFrace = palabras.replaceAll('ufat','u');
        document.getElementById("texto").innerHTML = nuevaFrace;
        
    }



        function copyText() {
            var copyText = document.getElementById("texto").value;
            navigator.clipboard.writeText(copyText)
        
              .then(() => {
                alert("El texto ha sido copiado al portapapeles");
              })
              .catch(err => {
                console.error('Error al copiar el texto: ', err);
              });
          }
   

      
          function actualizarBoton() {
            var textarea = document.getElementById("texto");
            var boton = document.getElementById("clipboard");
            
            if (textarea.value.trim() !== "") {
              boton.style.display = "block";
            } else {
              boton.style.display = "none";
            }
          }