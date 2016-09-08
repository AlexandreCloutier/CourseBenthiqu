<?php
@$mysqli = new mysqli("localhost", "root", "", "coursebenthiquedb");
if ($mysqli->connect_errno){
    die("&Eacute;chec lors de la connexion à la base de donn&eacute;es");
}
?>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

</head>
<body onload="startGame()">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
    <script>
        var paquetCarte;

        //Fonction appeler au début, elle "start" le jeu.
        function startGame() {
            creerFond();
            ajouterEmplacementHabitatBas();
            ajouterEmplacementCarteBas();
            paquetCarte = creerPaquetCarte();
            melangerPaquetCarte(paquetCarte);
            creerMain();
            creerPartieDroite();
        }

        //Fonction qui ajoute la partie de droite.
        function creerPartieDroite() {
            var divTextNomJoueurA = document.createElement('div');
            divTextNomJoueurA.id = 'divTextNomJoueurA';
            divTextNomJoueurA.className = 'divTextNomJoueurA';
            divTextNomJoueurA.innerHTML = '<strong> Nom du joueurA: lorem ipsum</strong>'
            document.getElementById('divDroite').appendChild(divTextNomJoueurA);

            var divTextNomJoueurB = document.createElement('div');
            divTextNomJoueurB.id = 'divTextNomJoueurB';
            divTextNomJoueurB.className = 'divTextNomJoueurB';
            divTextNomJoueurB.innerHTML = '<p></p><strong> Nom du joueurB: lorem ipsum</strong>'
            document.getElementById('divDroite').appendChild(divTextNomJoueurB);

            var divTextePointResource = document.createElement('div');
            divTextePointResource.id = 'divTextePointResource';
            divTextePointResource.className = 'divTextePointResource';
            divTextePointResource.innerHTML = '<p></p><strong>Points de resources disponible : 6</strong>';
            document.getElementById('divDroite').appendChild(divTextePointResource);

            var divTextePointJoueurA = document.createElement('div');
            divTextePointJoueurA.id = 'divTextePointJoueurA';
            divTextePointJoueurA.className = 'divTextePointJoueurA';
            divTextePointJoueurA.innerHTML = '<p></p><strong>JoueurA a 100 points.</strong>';
            document.getElementById('divDroite').appendChild(divTextePointJoueurA);

            var divTextePointJoueurB = document.createElement('div');
            divTextePointJoueurB.id = 'divTextePointJoueurB';
            divTextePointJoueurB.className = 'divTextePointJoueurB';
            divTextePointJoueurB.innerHTML = '<p></p><strong>JoueurB a 100 points.</strong>';
            document.getElementById('divDroite').appendChild(divTextePointJoueurB);

            var divTexteMessageJeu = document.createElement('div');
            divTexteMessageJeu.id = 'divTexteMessageJeu';
            divTexteMessageJeu.className = 'divTexteMessageJeu';
            divTexteMessageJeu.innerHTML = '<p></p><strong>Zone de message:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit, nibh vel sodales malesuada, justo sem consectetur lacus, quis pulvinar erat orci id mauris. Maecenas pulvinar risus sit amet justo</strong>';
            divTexteMessageJeu.style.width = 280 + 'px';
            document.getElementById('divDroite').appendChild(divTexteMessageJeu);

            var buttonPasserTour = document.createElement('button');
            buttonPasserTour.id = 'buttonPasserTour';
            buttonPasserTour.className = 'buttonPasserTour';
            buttonPasserTour.textContent = 'Passer son tour';
            document.getElementById('divDroite').appendChild(buttonPasserTour);

            var buttonProposerEchange = document.createElement('button');
            buttonProposerEchange.id = 'buttonProposerEchange';
            buttonProposerEchange.className = 'buttonProposerEchange';
            buttonProposerEchange.textContent = 'Proposer un échange.';
            buttonProposerEchange.setAttribute('onclick', 'montrerCarte()');
            document.getElementById('divDroite').appendChild(buttonProposerEchange);

            var buttonDemarerNouvellePartie = document.createElement('button');
            buttonDemarerNouvellePartie.id = 'buttonDemarerNouvellePartie';
            buttonDemarerNouvellePartie.className = 'buttonDemarerNouvellePartie';
            buttonDemarerNouvellePartie.textContent = 'Démarer une nouvelle partie.';
            document.getElementById('divDroite').appendChild(buttonDemarerNouvellePartie);
        }

        //Fonction qui ajoute une div avec le plateau en fond d'écran.
        function creerFond() {
            //Partie de gauche.
            var divMain = document.createElement('div');
            divMain.id = 'divMain';
            divMain.className = 'divMain';
            document.getElementsByTagName('body')[0].appendChild(divMain);

            //Partie du millieu.
            var plateau = document.createElement('div');
            plateau.id = 'plateau';
            plateau.className = 'plateau';
            document.getElementsByTagName('body')[0].appendChild(plateau);

            //Partie de droite.
            var divDroite = document.createElement('div');
            divDroite.id = 'divDroite';
            divDroite.className = 'divDroite';
            document.getElementsByTagName('body')[0].appendChild(divDroite);
        }

        //Fonction qui ajoute 6 emplacement d'habitats dans le bas.
        function ajouterEmplacementHabitatBas() {
            //Boucle 6 fois pour ajouter les 6 emplacements D'habitats du bas.
            var id;
            for (id = 1; id < 7; id++) {
                var divEmplacementHabitat = document.createElement('div');
                divEmplacementHabitat.id = 'divEmplacementHabitatBas' + id;
                divEmplacementHabitat.className = 'divEmplacementHabitatBas';
                divEmplacementHabitat.style.left = 117 + 66 * id + 'px';
                document.getElementById('plateau').appendChild(divEmplacementHabitat);
                $(function () {
                    $('.divEmplacementHabitatBas').droppable({
                        drop: function (event, ui) {
                            ui.draggable.css('width', '59px');
                            ui.draggable.css('height', '90px');
                            ui.draggable.appendTo(this);
                            ui.draggable.draggable('disable');
                            ui.draggable.position({ of: $(this), my: 'center', at: 'center' });
                        }
                    });
                });
            }
        }

        //Fonction qui ajoute 4 emplacement de carte sur les emplacements d'habitats du bas.
        function ajouterEmplacementCarteBas() {
            //Boucle 4 fois pour ajouter les 4 emplacements sur les emplacements D'habitats du bas.
            var id;
            for (id = 1; id < 5; id++) {
                var divEmplacementCarte = document.createElement('div');
                divEmplacementCarte.id = 'divEmplacementCarteBas' + id;
                divEmplacementCarte.className = 'divEmplacementCarteBas';
                divEmplacementCarte.style.left = 181 + 66 * id + 'px';
                document.getElementById('plateau').appendChild(divEmplacementCarte);
                $(function () {
                    $('.divEmplacementCarteBas').droppable({
                        drop: function (event, ui) {
                            ui.draggable.css('width', '59px');
                            ui.draggable.css('height', '90px');
                            ui.draggable.appendTo(this);
                            ui.draggable.draggable('disable');
                            ui.draggable.position({ of: $(this), my: 'center', at: 'center' });
                        }
                    });
                });
            }
        }

        function creerMain() {
            var id;
            for (id = 1; id < 7; id++) {
                var li = document.createElement('li');
                li.className = 'liMain';
                document.getElementById('divMain').appendChild(li);
                var divCarte = document.createElement('div');
                divCarte.id = 'divCarte' + id;
                divCarte.className = 'divCarte';
                li.appendChild(divCarte);

                var image = document.createElement('img');
                image.id = 'imageCarte' + id;
                image.className = 'imageCarte';
                image.src = 'resources/CarteEau.jpg';
                // Mes image Dans le idiv
                divCarte.appendChild(image);

                $(function () {
                    $('.divCarte').draggable({ revert: 'invalid' });
                });
            }
        }

        //Définition de la classe.
        function Carte(type, nom, params) {
            if (type === 'predateur') {
                this.nom = nom;
                this.type = type;
                this.tolerance = params.tolerance;
                this.force = params.force;
                this.coutResources = params.coutResources;
                this.condition = params.condition;
            }
            else if (type === 'habitats') {
                this.nom = nom;
                this.type = type;
                this.habitats = params.habitats;
                this.coutResources = params.coutResources;
            }
            else if (type === 'salmonide') {
                this.nom = nom;
                this.type = type;
                this.coutResources = params.coutResources;
                this.condition = params.condition;
            }
            else if (type === 'bandeRiveraine') {
                this.nom = nom;
                this.type = type;
                this.coutResources = params.coutResources;
            }
        }

        //function pour piger une carte.
        function pigerCarte(paquetCarte) {
            return paquetCarte.pop();
        }

        //Function qui melange le paquet de carte.
        function melangerPaquetCarte(paquetCarte) {
            var currentIndex = paquetCarte.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = paquetCarte[currentIndex];
                paquetCarte[currentIndex] = paquetCarte[randomIndex];
                paquetCarte[randomIndex] = temporaryValue;
            }
        }

        //function qui crée le paquet de carte.
        function creerPaquetCarte() {
            var paquetCarte = new Array();
            //TODO: je vais utiliser la bdd bientot :)




            for (var id = 1; id < 9; id++) {
                var carteHabitatsRapide = new Carte('habitats', 'rapide', { habitats: 'rapide', coutResources: 2 });
                paquetCarte.push(carteHabitatsRapide);
            }

            return paquetCarte;
        }

        //Fonction de test pour la BD TEST
        function montrerCarte() {
            var jqxhr = $.ajax({
                type: 'POST',
                url: '',
                dataType: 'json',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: '{id:' + 1 + '}'
            })
                .done(function (response, textStatus, jqXHR){
                    document.getElementById('buttonProposerEchange').textContent = response.type.toString();
                })
            .fail(function (jqXHR, textStatus, errorThrown){
                document.getElementById('buttonProposerEchange').textContent = errorThrown.toString();
            })


        }

        //Fonction qui "update" le jeu.
        function updateGameArea() {

        }
    </script>
    <?php
    $mysqli->close();
    ?>
</body>
</html>