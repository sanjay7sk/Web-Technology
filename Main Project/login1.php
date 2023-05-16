<?php
$con=mysqli_connect("localhost","root","","rental");
if(mysqli_connect_error()){
    echo "Error";
}
if (isset($_POST['log'])) {
    $query = "SELECT * FROM `login` WHERE `mail`='$_POST[mail]' AND `pass`='$_POST[pass]'";
    $result = mysqli_query($con, $query);
    if (mysqli_num_rows($result) == 1) {
        session_start();
        $_SESSION['loginID']=$_POST['mail'];
        header("location: index.html");
    } else {
        echo "<script>alert('Incorrect Mail or Password');</script>";
    }
}
?>