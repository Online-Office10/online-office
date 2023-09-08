
function openForm() {
   let form= document.getElementById("form")
    form.style.display = "block";
    document.body.style.overflowY="hidden";

  


    }
    
    function closeForm() {
    document.getElementById("form").style.display = "none";
    document.body.style.overflowY="visible";
    }


    let email=document.getElementById('email');
    let password=document.getElementById('password');
    let form=document.getElementById('form-content');
    let error=document.getElementById('error');
    let name=document.getElementById('name');

    let namecheck=/^[A-Za-z]+$/;
    
    form.addEventListener('submit',(e)=>{
    let msg=[];
    
 
    if(name.value==='' || name.value==null){
      msg.push("ناو داخڵ بکە")
  }
    
    if(email.value==='' || email.value==null){
        msg.push("ئیمەیڵ داخڵ بکە")
    }
    
    if(password.value==='' || password.value==null){
        msg.push("وشەی نهێنی داخڵ بکە")
    }
    
    if(password.value.length<8 && password.value.length>0){
        msg.push("وشەی نهێنی دەبێت لە ٨ پیت زیاتر بێت")
    }

    if(!name.value.match(namecheck) && name.value.length>0){
      msg.push("ناوەکەت دەبێت پیت بێت")
    }
    
    if(msg.length>0){
    e.preventDefault();
    error.innerText=msg.join(', ')
    }
    })
