const btn = document.createElement('button');
const fun1 = async(email) =>{
    const valu = await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=ddfdaaaf92494f65b72cdb5cc4fc84a3&email=${email}`)
    const result = await valu.json()
    console.log(result)
    const displaytext = result.deliverability;
    // span.style.display = "block"
    // span.innerHTML = displaytext;
    console.log(displaytext)
    if(displaytext == "DELIVERABLE"){
        // btn.setAttribute('class','btn btn-primary')
        $("#resultspan").html("<p style='color:green;padding-left: 2%;'>"+email+" is valid</p>")
    }
    else{
        $("#resultspan").html("<p style='color:red;padding-left: 2%;'>"+email+" is Invalid</p>")
        // btn.setAttribute('class','btn btn-danger')
    }
    // document.body.append(btn)
}

const inputEle = document.getElementById('form');

inputEle.addEventListener('submit',(e)=>{
    $("#resultspan").html("<p style='color:red;padding-left: 2%;'></p>")
    btn.style.display = "none"
    e.preventDefault();
    const inputValue = document.getElementById('email')
    fun1(inputValue.value); 
})
