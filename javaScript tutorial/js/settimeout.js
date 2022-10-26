const myName = document.querySelector("#showMyName");
const btn = document.querySelector("#btn");

const callFent = () =>{
    setTimeout(() => {
        para.innerHtml = "maani"
    }, 1000);
}

btn.addEventListener(click , callFent)