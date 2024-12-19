let subbtn=document.getElementById("subbtn");
let form=document.getElementsByTagName("form");
let val=1;
function clfun(){
    let table=document.getElementById("table");
    let username=document.getElementById("username").value;
    let bikeno=document.getElementById("bikeno").value;
    let checkin=document.getElementById("checkin").value;
    let checkout=document.getElementById("checkout").value;
   let tr=document.createElement("tr");
    table.appendChild(tr);
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");
    let td6=document.createElement("td");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    td1.textContent=val++;
    td2.textContent=username;
    td3.textContent=bikeno;
    td4.textContent=checkin;
    td5.textContent=checkout;
   if(val%2==0){
    tr.style.backgroundColor="grey";
   }
   let del= document.createElement("button")
    del.textContent="Delete";
    td6.appendChild(del);
    del.addEventListener('click',(element)=>{
       let ctr= element.currentTarget.closest("tr");
       ctr.remove();
       val--;
       let start=(Number(element.currentTarget.parentElement.parentElement.children[0].textContent));
       let table1=document.getElementsByTagName("table");
       for(i=start;i<val;i++){
        if(i%2!=0){
          table1[1].children[i].style.backgroundColor="grey";
          console.log("Hi");
        }
        else{
          table1[1].children[i].style.backgroundColor="white";
        }
         table1[1].children[i].children[0].textContent=i;

       }
    })



    let input=document.getElementsByTagName("input");
  //  console.log(input);
    input[0].value=null;
    input[1].value=null;
    input[2].value=null;
    input[3].value=null;
}
