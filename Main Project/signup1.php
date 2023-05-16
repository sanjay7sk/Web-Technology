<?php
    $Email = $_POST['mail'];
    $Pass = $_POST['pass'];

    $con = new mysqli("localhost","root","","rental");
    if($con->connect_error){
        die("Failed"+$con->connect_error);
    }else{
        // $ab = $con->prepare("select * from login where mail =?");
        $ab =$con->prepare("insert into login(mail,pass) values(?,?)");
        $ab->bind_param("ss",$Email,$Pass);
        $ab->execute();
        header("location: index.html");
        $ab->close();
        $con->close();
    }
?> 