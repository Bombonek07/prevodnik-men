let pre_z;
let pre_do;


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
    let kurz = 0
    let kurz2 = 0
    if (pre_z === "CZK"){
        kurz = 1
        document.getElementById("alert").innerHTML = ""
    } else if (pre_z === "null") {
        document.getElementById("alert").innerHTML = "VYBERTE MĚNU"
        document.getElementById("num").innerHTML = ""
        return;
    } else {
        kurz = data["kurzy"][pre_z]["dev_stred"]
        document.getElementById("alert").innerHTML = ""
    }

    if (pre_do === "CZK"){
        kurz2 = 1
        document.getElementById("alert").innerHTML = ""
    } else if (pre_do === "null") {
        document.getElementById("alert").innerHTML = "VYBERTE MĚNU"
        document.getElementById("num").innerHTML = ""
        return;
    } else {
        kurz2 = data["kurzy"][pre_do]["dev_stred"]
        document.getElementById("alert").innerHTML = ""
    }
    
    document.getElementById("num").innerHTML = num/kurz*kurz2;
}
