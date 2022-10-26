// GET https://icanhazdadjoke.com/


const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");



const generateJokes = async () =>{
     

    const setHeader = {
        headers : {
            Accept : "application/json"
        }
    }

      const res =  await fetch("https://icanhazdadjoke.com/" , setHeader);
      const data = await res.json();
      .then((res) => res.json() )
      .then((data) =>{
        joke.innerHTML = data.joke;
      }).catch((error) => {
        console.log(error);
      }
      )
    
    }




jokeBtn.addEventListener("click" , generateJokes);
generateJokes();
    