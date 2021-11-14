export function nigerfocus(){
    var d = document.getElementById("niger");
    d.innerHTML =` 
            <option value="ABUJA">ABUJA</option>
            <option value="LAGOS">LAGOS</option>`

}

export const handlechange=(event)=>{
     var select = event.target.value;
     console.log(select.toString());
     var d = document.getElementById("nigerr");
     if(select==="ABUJA")
     {
        d.innerHTML =`
         <option value="20">NOT AVALIABLE</option> <option value="17">LAGOS ISLAND</option>
            `
     }
     else if(select ==="LAGOS"){
        d.innerHTML =` <option value="20">APAPA</option>
            <option value="44">ETI-OSA</option>
            <option value="17">LAGOS ISLAND</option>
            <option value="13">MAINLAND</option>
            <option value="28">AJEROMI-IFELODUN</option>
            <option value="16">LAGOS MAINLAND</option>
            <option value="18">SURULERE</option>
            <option value="15">SUB URBAN</option>
            <option value="15">AGEGE</option>
            <option value="12">AKINOSHO</option>
            <option value="24">IFAKO-IJAIYE</option>
            <option value="6.8">IKEJA</option>
            <option value="2.1">KOSOFE</option>
            <option value="2.1">OJOTA</option>
            <option value="7.5">MUSHIN</option>
            <option value="21">OJO</option>
            <option value="7.2">OSHODI</option>
            <option value="12">SHOMOHU</option>
            <option value="34">AMUWO-ODOFIU</option>
            `
     }
    
 };
 export  const handlechangee=()=>{
     var x = document.getElementById("nigerr");
     x.value = x.value.toUpperCase();
    console.log(x.value + ` is the returned value. `);
    
 };
 export function nigerKm(){
    var x = document.getElementById("nigerr").value;
     return x.toString(); 
 }
 
 