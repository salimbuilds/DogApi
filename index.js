const btn = document.getElementById("btn");
const result = document.getElementById("status");
const img = document.getElementById("dog");

async function getDog(){

    result.className ="";
    result.textContent = "loading..";
    btn.disabled=true;

    try{

        const response = await fetch("https://dog.ceo/api/breeds/image/random");

        if(!response.ok){
            throw new Error("server error: " + response.status);
            
        }
         
        const data = await response.json();
        
        img.src = data.message;
        img.hidden = false;
        result.textContent="";

    }
    catch(e){
          
        result.textContent = "error: " +e.message;

    }

    finally{
         btn.disabled = false;
    }
}
btn.addEventListener("click", getDog);