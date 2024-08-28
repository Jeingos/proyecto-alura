//variables y botones//
const btnEncriptar= document.querySelector(".btn_encriptara");
const txtEncriptar=document.querySelector(".encriptar");
const aviso=document.querySelector(".presentacion__botones_subtitulo");
const respuesta=document.querySelector(".evaluar");
const contenido=document.querySelector(".tarjeta-contenedor");
const btncopiar=document.querySelector(".copiar");
const btnDesEncriptar=document.querySelector(".btn_desencriptara");

 
//boton encriptar//
btnEncriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto= txtEncriptar.value;
    let txt=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
     if(texto==""){
       aviso.style.background="#0A3871"; 
       aviso.style.color= "#ffffff";
       aviso.style.fontweight= "800";
       aviso.textContent="no puede tener este campo vacio";
       setTimeout(()=>{
        aviso.removeAttribute("style");

       },1500);

       
     }
     else if(texto!==txt){
        aviso.style.background="#0A3871"; 
       aviso.style.color= "#ffffff";
       aviso.style.fontweight= "800";
       aviso.textContent="no debe tener acentos ni caracteres especiales";
       setTimeout(()=>{
        aviso.removeAttribute("style");

       },1500);
     }
     else if(texto!==texto.toLowerCase()){
       aviso.style.background="#0A3871"; 
       aviso.style.color= "#ffffff";
       aviso.style.fontweight= "800";
       aviso.textContent="el texto debe ser todo en minuscula";
       setTimeout(()=>{
       aviso.removeAttribute("style");

       },1500);
     }
     else {
        texto=texto.replace(/e/mg,"enter");
        texto=texto.replace(/i/mg,"imes");
        texto=texto.replace(/a/mg,"ai");
        texto=texto.replace(/o/mg,"ober");
        texto=texto.replace(/u/mg,"ufat");
        respuesta.innerHTML=texto;
        btncopiar.style.visibility="inherit";
        contenido.remove();

     }
});


//boton desencriptar//
btnDesEncriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto= txtEncriptar.value;
    let txt=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
     if(texto==""){
       aviso.style.background="#0A3871"; 
       aviso.style.color= "#ffffff";
       aviso.style.fontweight= "800";
       aviso.textContent="no puede tener este campo vacio";
       setTimeout(()=>{
        aviso.removeAttribute("style");

       },1500);

       
     }
     else if(texto!==txt){
        aviso.style.background="#0A3871"; 
       aviso.style.color= "#ffffff";
       aviso.style.fontweight= "800";
       aviso.textContent="no debe tener acentos ni caracteres especiales";
       setTimeout(()=>{
        aviso.removeAttribute("style");

       },1500);
     }
     else if(texto!==texto.toLowerCase()){
       aviso.style.background="#0A3871"; 
       aviso.style.color= "#ffffff";
       aviso.style.fontweight= "800";
       aviso.textContent="el texto debe ser todo en minuscula";
       setTimeout(()=>{
       aviso.removeAttribute("style");

       },1500);
     }
     else {
        texto=texto.replace(/enter/mg,"e");
        texto=texto.replace(/imes/mg,"i");
        texto=texto.replace(/ai/mg,"a");
        texto=texto.replace(/ober/mg,"o");
        texto=texto.replace(/ufat/mg,"u");
        respuesta.innerHTML=texto;
        btncopiar.style.visibility="inherit";
        contenido.remove();

     }
});
//copiar//
btncopiar.addEventListener("click",e=>{
    e.preventDefault();
    let copiar= respuesta;
    copiar.select();
    document.execCommand("copy");
});