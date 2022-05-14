let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

let  name,email,genaral,sleeper,ac,date,date2,time,days,type;
function selectors(){
    name=document.getElementById("name");
    email=document.getElementById("email");
    genaral=document.getElementById("genaral");
    sleeper=document.getElementById("sleeper");
    ac=document.getElementById("ac");
    date=document.getElementById("date");
    date2=document.getElementById("date2");
    const d1=new Date(date.value);
    const d2=new Date(date2.value);
    time=Math.abs(d2-d1);
    days=Math.ceil(time/(1000*60*60*24));
}
let data=[];
show()
function libraryFormSubmit(e) {
    e.preventDefault();
    selectors();
    if (!name.value||!email.value||!date.value||!date2.value) {
        alert('Enter value')
    }else{
    type="";
    if (genaral.checked) {
        type=genaral.value;
    }else if (sleeper.checked) {
        type=sleeper.value;
    }else if (ac.checked) {
        type=ac.value;
    }
    let amount=0;
    if(type=="genaral"){
        amount+=100;
    }else if (type=="sleeper") {
        amount+=200;
    }else if(type=="ac"){
        amount+=400;
    }

   obj={
       "name":name.value,
       "email":email.value,
       "type":type,
       "amount":amount,
       "date":date.value,
       "date2":date2.value,
       "days":days
   }
   data.push(obj);
   name.value="";
   email.value="";
   type="";
   amount="";
   date.value="";
   date2.value="";
   show();
}
}

function show(){
    let tableBody=document.getElementById("tableBody"); 
   let html="";
   data.forEach((ele,index)=>{
    html+=`<tr>
    <td>${index+1}</td>
    <td>${ele.name}</td>
    <td>${ele.email}</td>
    <td>${ele.type}</td>
    <td>${ele.amount}</td>
    <td>${ele.date}</td>
    <td>${ele.date2}</td>
    <td>${ele.days}</td>
</tr> `
   });
   if (html.length>0) {
    tableBody.innerHTML=html;
}else{
    tableBody.innerHTML="Opps No data"
}
}