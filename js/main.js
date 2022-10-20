
let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

function backweb() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "none";
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("xiaomi").style.display = "none";
        document.getElementById("Iphone").style.display = "none";
        document.getElementById("sansung").style.display = "none";
        document.getElementById("Honor").style.display = "none";
        document.getElementById("Realme").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else{
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("sansung").style.display = "none";
        document.getElementById("Iphone").style.display = "none";
        document.getElementById("xiaomi").style.display = "none";
        document.getElementById("Honor").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        contador=1;
        backarriba();


    }};


//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "none";
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("xiaomi").style.display = "none";
        document.getElementById("Iphone").style.display = "none";
        document.getElementById("sansung").style.display = "none";
        document.getElementById("Honor").style.display = "none";
        document.getElementById("Realme").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else{
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("sansung").style.display = "none";
        document.getElementById("Iphone").style.display = "none";
        document.getElementById("xiaomi").style.display = "none";
        document.getElementById("Honor").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        contador=1;
        backarriba();


    }};


function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("sansung").style.display = "none";
    document.getElementById("Iphone").style.display = "none";
    document.getElementById("xiaomi").style.display = "none";
    document.getElementById("Honor").style.display = "none";
    document.getElementById("Realme").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
    ids1();
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {

    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("back").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
    ids1();

}


function catalogos() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("sansung").style.display = "none";
    document.getElementById("Iphone").style.display = "none";
    document.getElementById("xiaomi").style.display = "none";
    document.getElementById("Honor").style.display = "none";
    document.getElementById("Realme").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    conta=0;
    contador=0;
    backweb();;
   
}

function sansung() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("sansung").style.display = "grid";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
    ids1();
   
}

function Iphone() {
    document.getElementById("Iphone").style.display = "grid";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("sansung").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
    ids1();
   
}

function xiaomi() {
    document.getElementById("xiaomi").style.display = "grid";
    document.getElementById("Iphone").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("sansung").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
    ids1();
   
}


function Honor() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("Honor").style.display = "grid";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
    ids1();
   
}

function Realme() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("Realme").style.display = "grid";
    document.getElementById("Honor").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
    ids1();
   
}

function cotizar() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("sansung").style.display = "none";
    document.getElementById("Iphone").style.display = "none";
    document.getElementById("xiaomi").style.display = "none";
    document.getElementById("Honor").style.display = "none";
    document.getElementById("Realme").style.display = "none";
    conta=0;
    contador=1; 
    ids1();    
}

// llevar cerrar side automatico

document.querySelector('.tarjeta').addEventListener('click',()=>{
    document.getElementById("side").style.display = "none";
    conta=0;
    });

   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }

// llevar arriba
       

document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});
document.querySelector('.portafolio')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

document.querySelector('.back')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});



// formulario

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "593939819499";
  
    let cliente = document.querySelector("#cliente").value;
    let venta = document.querySelector("#venta").value;
    let cantidad = document.querySelector("#cantidad").value;
    let productos = document.querySelector("#productos").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *Omega Phone*%0A
          *Solicitud de Compra*%0A
          *Nombre de Cliente*%0A
          ${cliente}%0A
          *Marca*%0A
          ${venta}%0A
          *Cantidad*%0A
          ${cantidad}%0A
          *Modelo*%0A
          ${productos}%0A`;
  
    if (cliente === "" || venta === "" || cantidad === "" ) {
      resp.classList.add("fail");
      resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Solicitud de Compra Enviada, ${cliente}`;
  
    window.open(url);
  });
  


        document.querySelector('.side1')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });


        document.querySelector('.side3')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });


  // saveperfil    
  
  function save(){
    let url = `https://drive.google.com/u/0/uc?id=1nE5orCi4ecCHgMmW-ByGxza4nj73tQO-&export=download`;
    window.open(url); 
   }

        function ftuser() {
            Swal.fire({
                text: 'CC. Espiral Local 51-52',
                imageUrl: 'img/OMEGAPHONE2.png',
                imageWidth: 200,
                confirmButtonText: 'Añadir a Contactos',
                showCloseButton: 'true',
                showCancelButton: true,
          
            
            }).then((result) => {
                if (result.isConfirmed) {
                  save();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Descarga Correcta',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
              })
        
         
        };
    

// alerta 
        function sms() {
            Swal.fire({
            showCloseButton: true,
            icon: 'success',
            title: 'Omega Phone',
            text: 'Garantía Directa 12 Meses | Aplica únicamente en pagos en efectivo o vía transferencia',
            footer: 'Garantia'
            });
          
           
          };

          // alerta 
        function sms2() {
            Swal.fire({
            showCloseButton: true,
            icon: 'info',
            title: 'Omega Phone',
            text: 'Este Video Estara Disponible Próximamente',
            footer: 'Tarjeta Gold'
            });
          
           
          };


     // share tarjeta

const shareData2 = {
    title: 'Omega Phone',
    text: 'Enviado desde Cliconline App. Catálogo Tarjeta Digital Omega Phone',
    url: 'https://omegaphone-catalogo.blogspot.com',
    }
    
    
    // Share must be triggered by "user activation"
   
    var urltarjeta = 'https://api.whatsapp.com//send?text=Enviado%20desde%20Cliconline%20App%20Catálogo%20Tarjeta%20Digital%20OmegaPhone%20https://omegaphone-catalogo.blogspot.com'
  
    function sharetarjeta(){
    if (navigator.share) {
        navigator
       .share(shareData2)
       .then(() => console.log('correcto'))
       .catch(error => console.log ('error sharing',error) );
    }else {
      window.open(urltarjeta);
    }
    } 
    
    
    
      

        
        




