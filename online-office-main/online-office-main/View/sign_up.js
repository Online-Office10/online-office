function openForm() {
  let form = document.getElementById("form");
  let btn=document.getElementById("login-btn");
  form.style.display = "block";
  form.style.position="fixed";
  btn.disabled=true;
}

function closeForm() {
  document.getElementById("form").style.display = "none";
  let btn=document.getElementById("login-btn");
  btn.disabled=false;
}

let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form-content");
let error = document.getElementById("error");
let name = document.getElementById("name");

let namecheckEnglish =/^[A-Za-z\s]*$/;
let namecheckKurdish =/[\u0600-\u06FF\s]/;;

form.addEventListener("submit", (e) => {
  let msg = [];

  if (name.value.trim() === "" || name.value == null) {
    msg.push("ناو داخڵ بکە");
  }

  if (email.value === "" || email.value == null) {
    msg.push("ئیمەیڵ داخڵ بکە");
  }

  if (password.value === "" || password.value == null) {
    msg.push("وشەی نهێنی داخڵ بکە");
  }

  if (password.value.length < 8 && password.value.length > 0) {
    msg.push("وشەی نهێنی دەبێت لە ٨ پیت زیاتر بێت");
  }

  if (!name.value.match(namecheckKurdish) && name.value.length > 0) {
   
  
    if(!name.value.match(namecheckEnglish)){
      msg.push("ناوەکەت دەبێت پیت بێت");

    }else if(name.value.length==1){
      msg.push("ناوەکەت دەبێت زیاتر بێت لە یەک پیت ");
  
    }
  }

 
  

  if (msg.length > 0) {
    e.preventDefault();
    error.innerText = msg.join(", ");
  }
});
