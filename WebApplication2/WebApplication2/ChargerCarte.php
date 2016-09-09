<?php
/**
 * Created by PhpStorm.
 * User: Lerolex
 * Date: 2016-09-08
 * Time: 06:53
 */
@$mysqli = new mysqli("localhost", "root", "", "coursebenthiquedb");
if ($mysqli->connect_errno){
    die("&Eacute;chec lors de la connexion à la base de donn&eacute;es");
}

$retour= "";
$requete = "SELECT * FROM Cartes";
$resultat = $mysqli->query($requete);
$rows = array();

if($resultat) {
    if($mysqli->affected_rows > 0) {
        while($enreg = $resultat->fetch_assoc()) {
            $rows[] = $enreg;
        }
        $retour = json_encode($rows);
    }
    else {
        $retour = "AUCUNEDONNE";
    }
}
else {
    $retour = "REQUETE";
}

if("" == $retour) {
    $retour = "NONDETERMINE";
}

echo $retour;
