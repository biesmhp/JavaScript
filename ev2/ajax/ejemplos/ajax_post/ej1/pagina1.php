<?php
header('Content-Type: text/html; charset=ISO-8859-1');
$ar=fopen("comentarios.txt","a") or
  die("No se pudo abrir el archivo");
fputs($ar,"Nombre:".$_REQUEST['nombre']."\n");
fputs($ar,"Edad:".$_REQUEST['edad']."\n");
fputs($ar,"DNI:".$_REQUEST['dni']."\n");
fputs($ar,"Genero:".$_REQUEST['genero']."\n");
fputs($ar,"Peso:".$_REQUEST['peso']."\n");
fputs($ar,"Altura:".$_REQUEST['altura']."\n\n");
fclose($ar);
?>
