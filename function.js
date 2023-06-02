let pre_z = 0
let pre_do = 0



function currency() { 
    return pre_z = document.getElementById("option").value; 
}

function currency2() { 
    return pre_do = document.getElementById("option2").value;
}

async function input(){
    let num = document.getElementById("input").value;
    let raw = await fetch("https://data.kurzy.cz/json/meny/b[6].json")
    let data = await raw.json()
    console.log(data)
    
    /*document.getElementById("num").innerHTML = num;
    console.log(num)*/
}
