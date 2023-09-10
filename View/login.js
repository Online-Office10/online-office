function openForm2() {
    let form = document.getElementById("form2");
    let btn=document.getElementById("form");
    let btnPackage=document.getElementById("p-btn");
    let error2 = document.getElementById("error2");
    error2.style.display="none";
    form.style.display = "block";
    form.style.position="fixed";
    btn.style.display="none";
    btnPackage.style.pointerEvents="none";


  }
  
  function closeForm2() {
    document.getElementById("form2").style.display = "none";
  
    let btnPackage=document.getElementById("p-btn");

    btnPackage.style.pointerEvents="visible";

  }
  

  
let email2 = document.getElementById("email2");
let password2 = document.getElementById("password2");
let form2 = document.getElementById("form-content2");
let error2 = document.getElementById("error2");



form2.addEventListener("submit", (e) => {
    let msg2 = [];
  

  
    if (email2.value === "" || email2.value == null) {
      msg2.push("ئیمەیڵ داخڵ بکە");
    }
  
    if (password2.value === "" || password2.value == null) {
      msg2.push("وشەی نهێنی داخڵ بکە");
    }
  
   

  
    if (msg2.length > 0) {
      e.preventDefault();
      error2.innerText = msg2.join(", ");
      error2.style.display="inline";
    }
  });
  