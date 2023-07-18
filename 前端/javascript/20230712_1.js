let guestList = [
    {"name":"John", "gender":"Male"},
    {"name":"David", "gender":"Male"},
    {"name":"Marry", "gender":"Female"},
    {"name":"Sherry", "gender":"Female"},
    {"name":"Ryan", "gender":"Male"}
]

let thisButton = document.getElementsByTagName("button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];
let count = 0;

function Q1(){
    let ul1 = document.getElementById("ul1");
    for (let guest=0; guestList.length; guest++){
        if (guestList[guest]['name'] == "Sherry"){
            let tmp = document.createElement("li");
            tmp.textContent = "Sherry 住在"+guest+"號房";
            ul1.appendChild(tmp);
            break;
        };
    }
}

function Q2(){
    let ul1 = document.getElementById("ul2");
    for (let guest=0; guestList.length; guest++){
        if (guestList[guest]['gender'] == "Male"){
            let tmp = document.createElement("li");
            tmp.textContent = "名字 : "+guestList[guest]["name"]+"房號"+guest;
            ul1.appendChild(tmp);
        };
    }
}

function showAlert(){
    console.log("[showAlert] in");
    thisH1.innerHTML = "XXXX";

    for (let i=0; i<10; i++){
        if (i == 3){
            //break;
            continue;
        }
        console.log(i)
    }
};

thisH1.innerHTML = count;
thisButton.onclick = function(){
    showAlert();
    count += 1;
    thisH1.innerHTML = count;
    // if (count == 1){Q1();}
    // else if(count == 2){Q2();}
    practice();
}

function practice(){
    let person = {
        "first-name" : "Ryan",
        // first-name : "Ryan",
        lastname : "Chung",
        weight : 178
    };
    // console.log(person);
    // debugger;
    for (x in person){
        console.log(x+" "+person[x]);
    }
}