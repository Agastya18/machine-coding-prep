let q=[]

const ques= document.getElementById("ques");
async  function fetchQ(){
    try {
        const resp= await fetch("https://opentdb.com/api.php?amount=5");

    const data= await resp.json();

    q=data.result
    } catch (error) {

        console.log(error)
        ques.innerHTML = `<h5 style='color: red'>
        ${error}</h5>`;
        
    }
}

fetchQ()


if(q.length==0) {
    ques.innerHTML = `<h5 Please wait!'>
    Loading....</h5>`;
}