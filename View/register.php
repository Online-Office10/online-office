
<?php

include 'connect.php';

if (isset($_POST['sub'])) {
  
  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['password'];


$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

if (mysqli_query($conn, $sql)) {
  echo "<script> 
  alert('هەژمارەکەت بە سەرکەوتوی دروست بوو'); 
  window.location.href = 'home_page.html';
 
  
</script>";
  
    exit(); 
    // Terminate the script execution after the header redirect
} else {
    echo "Error: " . mysqli_error($conn);
}
}



?>


<!DOCTYPE html>

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./home_page.css" />
    <link rel="stylesheet" href="./nav_page.css" />
    <link rel="stylesheet" href="./packages.css" />
    <link rel="stylesheet" href="./register.css" />
    
    <title>Khanu</title>
  </head>
  <body>
    <div class="column">
    <nav>
      <div class="row-1">
        <h1>خانوو</h1>

        <ul>
          <li><a href="#">کرێ</a></li>
          <li><a href="#">فرۆشتن</a></li>
          <li><a href="#">کڕین</a></li>
        </ul>

        <div class="btn-1">
          <button id="login-btn">
            <img src="../images/login.png">چونە ژورەوە
          </button>
          
          <button id="sign-up-btn" onclick="openForm()">
            <img src="../images/sign-up.png">تۆمار کردن
          </button>
     

          <img src="../images/settings.png" title="ڕێکخستن" id="settings" />
        </div>
      </div>
    </nav>
    
<br>
<br>
<br>   
<br>   
        <div class="back-img">
          <div class="row-image">
            <img src="../images/welcome.svg" >
       <h1>بەخێربێیت بۆ ماڵپەری خانوو</h1>
      
      </div>


      <p>لەم ماڵپەرەدا دەتوانی بە ئاسانی خانوەکەت بڵاو بکەیتەوە بیفرۆشی بە زوترین کات وە خانووی خەونەکانت بدۆزیەوە</p>
        </div>
      
       <div class="title-packages">
        <h1>پاكێجەکان</h1>
        <p>پێویستە یەکێک لە پاکێجەکان بکڕیت پێش ئەوەی خانوەکەت دابنێیت بۆ فرۆشتن یاخود کرێ</p>
     
        <div class="packages">

          <div class="package-1">
            <h1>بڕۆنز</h1>
            <p>$0</p>
          </div>

          <div class="package-2">
            <h1>سلیڤەر</h1>
            <p>$3</p>
          </div>

          <div class="package-3">
            <h1>گۆڵد</h1>
            <p>$7.99</p>
          </div>
         

        </div>


     
      </div>
      

      <!--This is Resgister form-->
    <div class="form" id="form" >
      <form action="register.php" method="post" class="form-content" id="form-content">
        <div class="close-btn"><span onclick="closeForm()">&times;</span></div>
        <h1>تۆمارکردن</h1>
    
        <label for="name">ناو</label>
        <input type="text" id="name" placeholder="ناو بنوسە" name="name" >
    
        <label for="email">ئیمەیڵ</label>
        <input type="email" id="email" placeholder="ئیمەیڵ بنوسە" name="email">

        <label for="password">ژمارەی نهێنی</label>
        <input type="password" id="password" placeholder="ژمارەی نهێنی بنوسە" name="password" >
    
        <button type="submit" name="sub"  class="btn" id="">تۆمارکردن</button>


        <div id="error" class="error">

        </div>
     
      </form>
    </div>

   
</div>


<script src="sign_up.js">


  </script>


  </body>
</html>

