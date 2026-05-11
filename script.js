// STATS ANIMATION
let f=0,r=0,u=0;

setInterval(()=>{
    if(f<10){f++;document.getElementById("fields").innerText=f;}
    if(r<50){r+=2;document.getElementById("resources").innerText=r;}
    if(u<1000){u+=50;document.getElementById("users").innerText=u;}
},100);

// COMMENTS
function addComment(){
    let name=document.getElementById("name").value;
    let comment=document.getElementById("comment").value;

    if(name==""||comment==""){
        alert("Fill all fields");
        return;
    }

    document.getElementById("commentList").innerHTML += 
    <div class="card">
        <h3>${name}</h3>
        <p>${comment}</p>
    </div>
    ;
}