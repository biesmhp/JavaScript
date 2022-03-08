<?php
header('Content-Type: text/html; charset=ISO-8859-1');
$ar=fopen("datos.txt","a") or
  die("No se pudo abrir el archivo");
fputs($ar,$_REQUEST['nombre'].",");
fputs($ar,$_REQUEST['edad'].",");
fputs($ar,$_REQUEST['dni'].",");
fputs($ar,$_REQUEST['sexo'].",");
fputs($ar,$_REQUEST['peso'].",");
fputs($ar,$_REQUEST['altura'].",");
fclose($ar);
?>