

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var div1 = document.getElementById("div1");
var eror = document.getElementsByClassName("eror")
function add() {

    if(input1.value == "" && input2.value == ""){

        eror[0].innerHTML = "Empty input";
        eror[1].innerHTML = "Empty input";

    }

     else if (input1.value == "") {   
         
        eror[0].innerHTML = "Empty input"
        

    }

    else if (input2.value == "")  {
    
    eror[1].innerHTML = "Empty input"
    



    }
    else{
        
    var div2 = document.createElement("div");
    div2.setAttribute("class", "text")

    var h2 = document.createElement("h2");
    var h2tex = document.createTextNode(input1.value)
    h2.appendChild(h2tex)

    var p = document.createElement("p")
    var ptex = document.createTextNode(input2.value)
    p.appendChild(ptex)



    var editbtn = document.createElement("button");
    var edittex = document.createTextNode("Edit")
    editbtn.setAttribute("onclick", "edit(this)")
    editbtn.appendChild(edittex)

    var remove = document.createElement("button");
    var remtex = document.createTextNode("Remove");
    remove.setAttribute("onclick", "remove(this)")
    remove.appendChild(remtex);


    div1.appendChild(div2)
    div2.appendChild(h2)
    div2.appendChild(p)
    div2.appendChild(editbtn)
    div2.appendChild(remove)
    console.log(div1)


    input1.value = "";
    input2.value = "";
    eror[0].innerHTML =""
    eror[1].innerHTML =""

    }


}



function deleteAll() {


    div1.innerHTML = ""

}

function edit(e) {

    var a = e.parentNode.firstChild.innerHTML;
    var b = e.parentNode.firstChild.nextSibling.innerHTML;


    input1.value = a;
    input2.value = b;
    e.parentNode.remove()
    

}

function remove(a) {
    var c = a.parentNode.remove()





}