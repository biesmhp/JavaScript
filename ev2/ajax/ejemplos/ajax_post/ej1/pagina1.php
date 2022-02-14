<?php
header('Content-Type: text/html; charset=ISO-8859-1');
$ar=fopen("comentarios.xml","a") or
  die("No se pudo abrir el archivo");
fputs($ar,"<Persona>"."\n");
  fputs($ar,"\t"."<nombre>".$_REQUEST['nombre']."</nombre>"."\n");
  fputs($ar,"\t"."<edad>".$_REQUEST['edad']."</edad>"."\n");
  fputs($ar,"\t"."<dni>".$_REQUEST['dni']."</dni>"."\n");
  fputs($ar,"\t"."<genero>".$_REQUEST['genero']."</genero>"."\n");
  fputs($ar,"\t"."<peso>".$_REQUEST['peso']."</peso>"."\n");
  fputs($ar,"\t"."<altura>".$_REQUEST['altura']."</altura>"."\n");
fputs($ar,"</Persona>"."\n");
fclose($ar);
?>
