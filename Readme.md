# NIGER-CITY
Hey i'm Divine an 18yrs old developer. I created an npm package that helps you list out States and Town in Nigeria. It's called NigerDelivery, you can use it on any javascript Framw work like reactjs, Vue .e.t.c.
# LET START WITH JAVASCRIPT
In your HTML code we need to paste the following default code:
```html
<div class="niger">
    <select  id="niger"
     onfocus="nigerfocus()" 
     onchange="handlechange(event)"
     ><option>#Default</option></select>
     <hr/>
     <select  id="nigerr"
     onchange="handlechangee()"
     
     ></select>
     <span id="sc">@</span>
    </div>
```
 After pasting the code the next step is to install niger-city by running this command: ```npm i niger-city```.You have to have node installed before running this command.
 # HOW TO USE NIGER-CITY 
 To use niger-city we need to paste the default code in your javascript file:
 ```js
 const {nigerfocus,handlechange,handlechangee}=require("niger-city");
 ```
  In he above code nigerfocus handles the focus method - handlechange handles the city - hnadlechangee handles the town and get the km needed.To calculate
  the amount, we need to first get the kilometre by the below code:
  ```js
  var x = document.getElementById("nigerr");
  // you can name the variable
  //By default niger-city has a const value for one km in all cities.
  var onekm = 11.4;
  function handleAmount(){
      var x = document.getElementById("nigerr");
     var amount =  x.value * onekm;
     console.log(amount + "AMOUNT");
     return amount;
     
  }
  ```
  # HOW TO USE NIGER-CITY ON REACTJS
  The following  code is needed when using react:
  ```js
  import {nigerfocus,handlechange,handlechangee,nigerKm} from "niger-city";
  function App(){
const[km,setKm]=useState(nigerKm());
const oneKm = 11.4;
const[amount,setAmount]=useState(0);
const handleAmount=(e)=>{
    setAmount(oneKm * km);
}
      return(
<div class="niger">
    <select  id="niger"
     onfocus={nigerfocus} 
     onchange={(e)=>handlechange(e)}
     ><option>#Default</option></select>
     <hr/>
     <select  id="nigerr"
     onchange={(e)=>handlechangee(e)}
     
     ></select>
     <button onClick={(e)=>handleAmount(e)}>Get Amount</button>
     <span id="sc">{km} and {amount}</span>
    </div>);
    
    };
```
 The handleAmount setAmount to oneKm * km.

  For more information or help call:08165728539,       email:chimdi4332@gmail.com.
      I'm Chimdi .
   
