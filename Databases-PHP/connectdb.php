<?php
$dbhost = "localhost";
$dbuser= "root";
$dbpass = "8j#nilcise";
$dbname = "jkaur223assign2db";
$connection = mysqli_connect($dbhost, $dbuser,$dbpass,$dbname);
if (mysqli_connect_errno()) {
     die("database connection failed :" .
     mysqli_connect_error() .
     "(" . mysqli_connect_errno() . ")"
         );
    }
?>