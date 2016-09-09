<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
	<meta charset="utf-8" />
</head>
<body>
    <?php
    $con = sqlsrv_connect ("CourseBenthiqueDB.mdf");
    if(!$con) {
        die('Impossible de se connecter : ' . sqlsrv_errors());
    }
    $stmt = sqlsrv_query($con, "SELECT * FROM Cartes WHERE Id=1", $value);
        if($stmt === false) {
            die('Erreur stmt: ' . sqlsrv_errors());
        }
        else{
            echo ($value);
        }
    ?>
</body>
</html>
