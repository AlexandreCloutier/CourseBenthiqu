﻿window.onload = menuPrincipal;
        /* ------------------enum---------------------  */
        var typeEnum = {
            'habitats': 'habitats',
            'macroInvertebre': 'macroInvertebre',
            'perturbation': 'perturbation',
            'speciale': 'special',
            'action': 'action',
            'intervention': 'intervention',
            'salmonide': 'salmonide',
            'bandeRiveraine': 'bandeRiveraine',
            'reglementation': 'reglementation'
        };
        var nomEnum = {
            'erosion': 'erosion',
            'assainissement': 'assainissement',
            'fosse': 'fosse',
            'sable': 'sable',
            'gravier': 'gravier',
            'rapides': 'rapides',
            'galets': 'galets',
            'oligochaeta': 'oligochaeta',
            'simuliidae': 'simuliidae',
            'chironomidae': 'chironomidae',
            'psephenidae': 'psephenidae',
            'hydropsychidae': 'hydropsychidae',
            'elmidae': 'elmidae',
            'baetidae': 'baetidae',
            'hydroptilidae': 'hydroptilidae',
            'ephemeridae': 'ephemeridae',
            'prosobranchia': 'prosobranchia',
            'sphaeridae': 'sphaeridae',
            'anisoptera': 'anisoptera',
            'glossosomatidae': 'glossosomatidae',
            'heptageniidae': 'heptageniidae',
            'ephemerellidae': 'ephemerellidae',
            'brachycentrus': 'brachycentrus',
            'rhyacophilidae': 'rhyacophilidae',
            'tipulidae': 'tipulidae',
            'gyrinidae': 'gyrinidae',
            'perlidae': 'perlidae',
            'corydalidae': 'corydalidae',
            'nipidae': 'nipidae',
            'decapoda': 'decapoda',
            'pteronarcyidae': 'pteronarcyidae',
            'zonage': 'zonage',
            'crueSoudaine': 'crueSoudaine',
            'pecheur': 'pecheur',
            'emergence': 'emergence',
            'derivation': 'derivation',
            'predation': 'predation',
            'retention': 'retention',
            'prisSurFait': 'prisSurFait',
            'accumulation': 'accumulation',
            'corveNettoyage': 'corveNettoyage',
            'naturalisation': 'naturalisation',
            'amenagement': 'amenagement',
            'pollutionOrganique': 'pollutionOrganique',
            'dechets': 'dechets',
            'artificialisation': 'artificialisation',
            'passageToutTerrain': 'passageToutTerrain',
            'deversement': 'deversement',
            'interdiction': 'interdiction',
            'politique': 'politique',
            'attestation': 'attestation',
            'ombleFontaine': 'ombleFontaine',
            'amenageSable': 'amenageSable',
            'amenageRapides': 'amenageRapides',
            'amenageFosse': 'amenageFosse',
            'amenageGalets': 'amenageGalets',
            'amenageGravier': 'amenageGravier',
            'amenageHerbace': 'amenageHerbace',
            'amenageArbustes': 'amenageArbustes',
            'amenageArbre': 'amenageArbre',
            'herbace': 'herbace',
            'arbustes': 'arbustes',
            'arbres': 'arbres'
        };
        var typeMacroEnum = {
            'annelide': 'annelide',
            'diptere': 'diptere',
            'coleoptere': 'coleoptere',
            'trichoptere': 'trichoptere',
            'ephemeroptere': 'ephemeroptere',
            'mollusque': 'mollusque',
            'odonate': 'odonate',
            'trichoptere': 'trichoptere',
            'plecoptere': 'plecoptere',
            'megaloptere': 'megaloptere',
            'hemiptere': 'hemiptere',
            'crustace': 'crustace'
        };

        //Tableau contenant l'âge des joueurs.
        var ageJoueur;
        //Tableau contenant les noms des joueurs.
        var nomJoueur;
        //Tableau contenant les points des joueurs.
        var pointsJoueur;
        //Tableau pour savoir si le joueur passe son tour.
        var tableauPasserTour;
        //Niveau de difficulté de la partie
        var difficulte;
        //Paquet de cartes principales.
        var paquetCarte;
        //Paquet de cartes de la décharge
        var paquetDecharge;
        //Paquet de cartes interventions
        var paquetIntervention;
        /*-----------------------------Partie tableau de données---------------*/
        //Tableau contenant les mains.
        var mains;
        //Tableau contenant toute les cartes du bas de chaque joueur.
        var CarteJeu;
        //Tableau contenant le nombres d'exemplaire de chaque carte.
        var exemplaireCarteJeu;
        //Tableau contenant les position des cartes perturbation.
        var cartePerturbation;
        //Tableau pour savoir si le joueur garder ses points-ressources.
        var tableauRetention;
        //Tableau contenant les points de ressources.
        var pointsRessourcesBase;
        var pointsRessourcesSuplementaire;
        var pointsRessourcesTotal;
        var pointsRessourcesUtiliser;
        var pointsRessourcesRestant;
        var calculer;
        //Numero du joueur présentement actif.
        var numeroJoueurActif;
        //Variable comptant le nombre de tour.
        var tour;
        //Variable content le nb de clic sur le bouton Passer son tour
        var facteurRotation;
        //Variable de la carte qui sera transférer de la main à la zone du bas, ou ailleurs.
        var carteDrag;
        //Variable du numero de la carte dans la main pour pouvoir le supprimer facilement lorsqu'on le drop à quelque part.
        var carteDragNumero;
        //Variable qui contient le nombre de joueur.
        var nombreJoueur;
        //Variable qui nous dira si nous sommes en train de manger.
        var mangerPredateur;
        //Variable qui stock la taille.
        var taillePredateur;
        //Vairable qui dits si un déversement va avoir lieu.
        var deversement;
        var tempsDeversement;
        var numeroJoueurDeversement;
        var verifier; //SOLUTION TEMPORAIRE
        //Variable qui dits si on est en pleine pollution organique.
        var onPollu;
        var nombrePolluer;
        //Variable pour erosion.
        var erosion;
        var etapeErosion
        var bandeRiveraineEroder;
        var habitatEroder;
        //Variable pour prédation.
        var predation;
        //Variable pour Naturalisation
        var naturalisation;
        //Variable qui contient le joueur selectioner par le popUp de choix de joueur.
        var joueurSelectionne;
        //Variable pour l'échange de la carte zonage.
        var zonage;
        var etapeZonage;
        var carteEchange1;
        var positionCarte1;
        var lettreJoueur1;
        var carteEchange2;
        var positionCarte2;
        var lettreJoueur2;
        var mangerSalmonide;
        var nombreMangerSalmonide;
        //Variable de fin de partie pour le salmonide.
        var salmonide;
        var tourSalmonide;
        //Variable de fin de partie pour le manque de carte
        var aucuneCarte;

        //Fonction qui affiche l'écran d'introduction.
        function menuPrincipal() {
            $('#menuCreerPartie').remove();
            var menuPrincipal = document.createElement('div');
            menuPrincipal.id = 'menuPrincipal';
            menuPrincipal.className = 'menuPrincipal';
            menuPrincipal.innerHTML = '<img class="imageMenuPrincipal" src="ressources/logo.png" />';
            $('body').append(menuPrincipal);

            var buttonNouvellePartie = document.createElement('button');
            buttonNouvellePartie.id = 'buttonNouvellePartie';
            buttonNouvellePartie.className = 'buttonMenuPrincipal';
            buttonNouvellePartie.innerHTML = 'Nouvelle partie';
            buttonNouvellePartie.onclick = lancerOptionPartie;
            buttonNouvellePartie.style.bottom = '155px';
            $('#menuPrincipal').append(buttonNouvellePartie);

            //Div Règle
            var divCredits = document.createElement('div');
            divCredits.id = 'divCredits';
            divCredits.className = 'divCredits';
            divCredits.innerHTML = "<p><span style='font-size: 20pt;'>Production&nbsp;:</span> Groupe d'&eacute;ducation et d'&eacute;cosurveillance de l'eau (G3E)</p><p><span style='font-size: 20pt;'>Coordination, recherche et r&eacute;dation&nbsp;:</span> Tiphanie Rivi&egrave;re</p><p><span style='font-size: 20pt;'>Illustration&nbsp;:</span> Pierre-Olivier Boucher</p><p><span style='font-size: 20pt;'>Conception et d&eacute;vellopement&nbsp;:</span> Samuel Brien et Alexandre Cloutier</p><p><span style='font-size: 20pt;'>Cr&eacute;ation&nbsp;:</span> Jonathan Pedneau</p><p><span style='font-size: 20pt;'>Illustration des cartes&nbsp;:</span> G3E</p><p><span style='font-size: 20pt;'>Partenaire financier&nbsp;:</span> &nbsp;Le fonds d'action qu&eacute;b&eacute;cois pour le&nbsp;</p><p>d&eacute;veloppement durable (FAQDD), et son partenaire financier</p><p>le gouvernement du Qu&eacute;bec.</p>";
            $('#menuPrincipal').append(divCredits);

            //Div Fin
            var divFin = document.createElement('div');
            divFin.id = 'divFin';
            divFin.className = 'divFin';
            var meilleur = placementFinal();
            var ordre = ordreJoueur();
            if (aucuneCarte) {
                if (nombreJoueur === 2) {
                    divCredits.innerHTML = "<p>Fin de la partie !</p><p>F&eacute;licitation &agrave; " + ordre[0] + " </p><p>&nbsp;</p><p>La partie s'est termin&eacute;e car il n'y a plus de carte dans le paquet.</p><p>&nbsp;</p><p>Points:</p><p>Premi&egrave;re place: " + ordre[0] + " avec " + meilleur[0] + " points</p><p>Deuxi&egrave;me place : " + ordre[1] + " avec " + meilleur[1] + " points</p><p>&nbsp;</p><p>La partie s'est termin&eacute;e apr&egrave;s XX tours</p>";
                } else if (nombreJoueur === 3) {
                    divCredits.innerHTML = "<p>Fin de la partie !</p><p>F&eacute;licitation &agrave; " + ordre[0] + " </p><p>&nbsp;</p><p>La partie s'est termin&eacute;e car il n'y a plus de carte dans le paquet.</p><p>&nbsp;</p><p>Points:</p><p>Premi&egrave;re place: " + ordre[0] + " avec " + meilleur[0] + " points</p><p>Deuxi&egrave;me place : " + ordre[1] + " avec " + meilleur[1] + " points</p><p>Troisi&egrave;me place : " + ordre[2] + " avec " + meilleur[2] + " points</p><p>&nbsp;</p><p>La partie s'est termin&eacute;e apr&egrave;s XX tours</p>";
                } else if (nombreJoueur === 4) {
                    divCredits.innerHTML = "<p>Fin de la partie !</p><p>F&eacute;licitation &agrave; " + ordre[0] + " </p><p>&nbsp;</p><p>La partie s'est termin&eacute;e car il n'y a plus de carte dans le paquet.</p><p>&nbsp;</p><p>Points:</p><p>Premi&egrave;re place: " + ordre[0] + " avec " + meilleur[0] + " points</p><p>Deuxi&egrave;me place : " + ordre[1] + " avec " + meilleur[1] + " points</p><p>Troisi&egrave;me place : " + ordre[2] + " avec " + meilleur[2] + " points</p><p>Quatir&egrave;me place : " + ordre[3] + " avec " + meilleur[3] + " points</p><p>&nbsp;</p><p>La partie s'est termin&eacute;e apr&egrave;s XX tours</p>";
                }
            } else {
                if (nombreJoueur === 2) {
                    divCredits.innerHTML = "<p>Fin de la partie !</p><p>F&eacute;licitation &agrave; " + gagnantPoisson() + " </p><p>&nbsp;</p><p>Vous avez gagn&eacute;(e) parce que vous avez r&eacute;ussi &agrave; garder votre carte &laquo;Salmonid&eacute;&raquo; durant 1 tour en entier !</p><p>&nbsp;</p><p>Points:</p><p>Premi&egrave;re place: " + ordre[0] + " avec " + meilleur[0] + " points</p><p>Deuxi&egrave;me place : " + ordre[1] + " avec " + meilleur[1] + " points</p><p>&nbsp;</p><p>La partie s'est termin&eacute;e apr&egrave;s XX tours</p>";
                } else if (nombreJoueur === 3) {
                    divCredits.innerHTML = "<p>Fin de la partie !</p><p>F&eacute;licitation &agrave; " + gagnantPoisson() + " </p><p>&nbsp;</p><p>Vous avez gagn&eacute;(e) parce que vous avez r&eacute;ussi &agrave; garder votre carte &laquo;Salmonid&eacute;&raquo; durant 1 tour en entier !</p><p>&nbsp;</p><p>Points:</p><p>Premi&egrave;re place: " + ordre[0] + " avec " + meilleur[0] + " points</p><p>Deuxi&egrave;me place : " + ordre[1] + " avec " + meilleur[1] + " points</p><p>Troisi&egrave;me place : " + ordre[2] + " avec " + meilleur[2] + " points</p><p>&nbsp;</p><p>La partie s'est termin&eacute;e apr&egrave;s XX tours</p>";
                } else if (nombreJoueur === 4) {
                    divCredits.innerHTML = "<p>Fin de la partie !</p><p>F&eacute;licitation &agrave; " + gagnantPoisson() + " </p><p>&nbsp;</p><p>Vous avez gagn&eacute;(e) parce que vous avez r&eacute;ussi &agrave; garder votre carte &laquo;Salmonid&eacute;&raquo; durant 1 tour en entier !</p><p>&nbsp;</p><p>Points:</p><p>Premi&egrave;re place: " + ordre[0] + " avec " + meilleur[0] + " points</p><p>Deuxi&egrave;me place : " + ordre[1] + " avec " + meilleur[1] + " points</p><p>Troisi&egrave;me place : " + ordre[2] + " avec " + meilleur[2] + " points</p><p>Quatir&egrave;me place : " + ordre[3] + " avec " + meilleur[3] + " points</p><p>&nbsp;</p><p>La partie s'est termin&eacute;e apr&egrave;s XX tours</p>";
                }
            }
            $('#menuPrincipal').append(divCredits);

            var buttonChargerPartie = document.createElement('div');
            buttonChargerPartie.id = 'buttonChargerPartie';
            buttonChargerPartie.className = 'buttonMenuPrincipal';
            buttonChargerPartie.innerHTML = '<p class="buttonCharger">Charger une partie</p>';
            buttonChargerPartie.style.bottom = '95px';
            $('#menuPrincipal').append(buttonChargerPartie);

            var fileReader = document.createElement('input');
            fileReader.type = 'file';
            fileReader.id = 'fileReader';
            fileReader.className = 'fileReader';
            fileReader.accept = '.jcb';
            $(fileReader).attr('title', ' ');
            fileReader.addEventListener("change", function () {
                chargerPartie(fileReader.files);
            });
            $('#buttonChargerPartie').append(fileReader);

            var buttonCredits = document.createElement('button');
            buttonCredits.id = 'buttonCredits';
            buttonCredits.className = 'buttonMenuPrincipal';
            buttonCredits.innerHTML = 'Crédits';
            buttonCredits.style.bottom = '35px';
            buttonCredits.onclick = afficherCredits;
            $('#menuPrincipal').append(buttonCredits);
        }

        //Fonction qui commence la partie.
        function lancerOptionPartie() {
            $('#menuPrincipal').remove();
            menuCreerPartie();
        }

        //Fonction qui affiche l'écran de création de partie.
        function menuCreerPartie() {

            var menuCreerPartie = document.createElement('div');
            menuCreerPartie.id = 'menuCreerPartie';
            menuCreerPartie.className = 'menuCreerPartie';
            $('body').append(menuCreerPartie);

            //Section contre des vrais joueurs
            var divContreVJ = document.createElement('div');
            divContreVJ.id = 'divContreVJ';
            divContreVJ.className = 'divContreVJ';
            $(menuCreerPartie).append(divContreVJ);

            var labelTexteNombreJoueur = document.createElement('label');
            labelTexteNombreJoueur.id = 'labelTexteNombreJoueur';
            labelTexteNombreJoueur.className = 'labelTexteNombreJoueur';
            labelTexteNombreJoueur.innerHTML = 'Nombre de joueurs&nbsp;: ';
            $(divContreVJ).append(labelTexteNombreJoueur);

            var dropDownNombreJoueur = document.createElement('select');
            dropDownNombreJoueur.id = 'dropDownNombreJoueur';
            dropDownNombreJoueur.className = 'dropDown';
            $(divContreVJ).append(dropDownNombreJoueur);
            var option1 = document.createElement('option');
            option1.value = '0';
            option1.innerHTML = '';
            dropDownNombreJoueur.appendChild(option1);
            var option2 = document.createElement('option');
            option2.value = '2';
            option2.innerHTML = '2';
            dropDownNombreJoueur.appendChild(option2);
            var option3 = document.createElement('option');
            option3.value = '3';
            option3.innerHTML = '3';
            dropDownNombreJoueur.appendChild(option3);
            var option4 = document.createElement('option');
            option4.value = '4';
            option4.innerHTML = '4';
            dropDownNombreJoueur.appendChild(option4);
            $(function () {
                $(dropDownNombreJoueur).on({
                    change: function () {
                        $(divJoueurA).hide();
                        $(divJoueurB).hide();
                        $(divJoueurC).hide();
                        $(divJoueurD).hide();

                        if (this.value === '2') {
                            $(divJoueurA).show();
                            $(divJoueurB).show();
                        }
                        else if (this.value === '3') {
                            $(divJoueurA).show();
                            $(divJoueurB).show();
                            $(divJoueurC).show();
                        }
                        else if (this.value === '4') {
                            $(divJoueurA).show();
                            $(divJoueurB).show();
                            $(divJoueurC).show();
                            $(divJoueurD).show();
                        }
                    }
                });
            });

            //Div Joueur A
            var divJoueurA = document.createElement('div');
            divJoueurA.id = 'divJoueurA';
            divJoueurA.className = 'divJoueurs';
            $(divContreVJ).append(divJoueurA);

            var labelJoueurA = document.createElement('label');
            labelJoueurA.id = 'labelJoueurA';
            labelJoueurA.className = 'labelTitreJoueur';
            labelJoueurA.innerHTML = 'Joueur A';
            $(divJoueurA).append(labelJoueurA);

            var labelNomJoueurA = document.createElement('label');
            labelNomJoueurA.id = 'labelNomJoueurA';
            labelNomJoueurA.className = 'labelJoueur';
            labelNomJoueurA.innerHTML = 'Nom&nbsp;: ';
            $(divJoueurA).append(labelNomJoueurA);

            var nomJoueurA = document.createElement('input');
            nomJoueurA.type = 'text';
            nomJoueurA.id = 'nomJoueurA';
            nomJoueurA.maxLength = 20;
            nomJoueurA.className = 'textBoxJoueur';
            $(divJoueurA).append(nomJoueurA);

            var labelAgeJoueurA = document.createElement('label');
            labelAgeJoueurA.id = 'labelAgeJoueurA';
            labelAgeJoueurA.className = 'labelJoueur';
            labelAgeJoueurA.innerHTML = 'Âge&nbsp;: ';
            $(divJoueurA).append(labelAgeJoueurA);

            var ageJoueurA = document.createElement('input');
            ageJoueurA.type = 'text';
            ageJoueurA.id = 'ageJoueurA';
            ageJoueurA.className = 'textBoxJoueur';
            ageJoueurA.onkeypress = function (evt) { return EstChiffre(evt) };
            ageJoueurA.maxLength = 2;
            $(divJoueurA).append(ageJoueurA);

            //Div Joueur B
            var divJoueurB = document.createElement('div');
            divJoueurB.id = 'divJoueurB';
            divJoueurB.className = 'divJoueurs';
            $(divContreVJ).append(divJoueurB);

            var labelJoueurB = document.createElement('label');
            labelJoueurB.id = 'labelJoueurB';
            labelJoueurB.className = 'labelTitreJoueur';
            labelJoueurB.innerHTML = 'Joueur B';
            $(divJoueurB).append(labelJoueurB);

            var labelNomJoueurB = document.createElement('label');
            labelNomJoueurB.id = 'labelNomJoueurB';
            labelNomJoueurB.className = 'labelJoueur';
            labelNomJoueurB.innerHTML = 'Nom&nbsp;: ';
            $(divJoueurB).append(labelNomJoueurB);

            var nomJoueurB = document.createElement('input');
            nomJoueurB.type = 'text';
            nomJoueurB.id = 'nomJoueurB';
            nomJoueurB.maxLength = 20;
            nomJoueurB.className = 'textBoxJoueur';
            $(divJoueurB).append(nomJoueurB);

            var labelAgeJoueurB = document.createElement('label');
            labelAgeJoueurB.id = 'labelAgeJoueurB';
            labelAgeJoueurB.className = 'labelJoueur';
            labelAgeJoueurB.innerHTML = 'Âge&nbsp;: ';
            $(divJoueurB).append(labelAgeJoueurB);

            var ageJoueurB = document.createElement('input');
            ageJoueurB.type = 'text';
            ageJoueurB.id = 'ageJoueurB';
            ageJoueurB.className = 'textBoxJoueur';
            ageJoueurB.onkeypress = function (evt) { return EstChiffre(evt) };
            ageJoueurB.maxLength = 2;
            $(divJoueurB).append(ageJoueurB);

            //Div Joueur C
            var divJoueurC = document.createElement('div');
            divJoueurC.id = 'divJoueurC';
            divJoueurC.className = 'divJoueurs';
            $(divContreVJ).append(divJoueurC);

            var labelJoueurC = document.createElement('label');
            labelJoueurC.id = 'labelJoueurC';
            labelJoueurC.className = 'labelTitreJoueur';
            labelJoueurC.innerHTML = 'Joueur C';
            $(divJoueurC).append(labelJoueurC);

            var labelNomJoueurC = document.createElement('label');
            labelNomJoueurC.id = 'labelNomJoueurC';
            labelNomJoueurC.className = 'labelJoueur';
            labelNomJoueurC.innerHTML = 'Nom&nbsp;: ';
            $(divJoueurC).append(labelNomJoueurC);

            var nomJoueurC = document.createElement('input');
            nomJoueurC.type = 'text';
            nomJoueurC.id = 'nomJoueurC';
            nomJoueurC.maxLength = 20;
            nomJoueurC.className = 'textBoxJoueur';
            $(divJoueurC).append(nomJoueurC);

            var labelAgeJoueurC = document.createElement('label');
            labelAgeJoueurC.id = 'labelAgeJoueurC';
            labelAgeJoueurC.className = 'labelJoueur';
            labelAgeJoueurC.innerHTML = 'Âge&nbsp;: ';
            $(divJoueurC).append(labelAgeJoueurC);

            var ageJoueurC = document.createElement('input');
            ageJoueurC.type = 'text';
            ageJoueurC.id = 'ageJoueurC';
            ageJoueurC.className = 'textBoxJoueur';
            ageJoueurC.onkeypress = function (evt) { return EstChiffre(evt) };
            ageJoueurC.maxLength = 2;
            $(divJoueurC).append(ageJoueurC);

            //Div Joueur D
            var divJoueurD = document.createElement('div');
            divJoueurD.id = 'divJoueurD';
            divJoueurD.className = 'divJoueurs';
            $(divContreVJ).append(divJoueurD);


            var labelJoueurD = document.createElement('label');
            labelJoueurD.id = 'labelJoueurD';
            labelJoueurD.className = 'labelTitreJoueur';
            labelJoueurD.innerHTML = 'Joueur D';
            $(divJoueurD).append(labelJoueurD);

            var labelNomJoueurD = document.createElement('label');
            labelNomJoueurD.id = 'labelNomJoueurD';
            labelNomJoueurD.className = 'labelJoueur';
            labelNomJoueurD.innerHTML = 'Nom&nbsp;: ';
            $(divJoueurD).append(labelNomJoueurD);

            var nomJoueurD = document.createElement('input');
            nomJoueurD.type = 'text';
            nomJoueurD.id = 'nomJoueurD';
            nomJoueurD.maxLength = 20;
            nomJoueurD.className = 'textBoxJoueur';
            $(divJoueurD).append(nomJoueurD);

            var labelAgeJoueurD = document.createElement('label');
            labelAgeJoueurD.id = 'labelAgeJoueurD';
            labelAgeJoueurD.className = 'labelJoueur';
            labelAgeJoueurD.innerHTML = 'Âge&nbsp;: ';
            $(divJoueurD).append(labelAgeJoueurD);

            var ageJoueurD = document.createElement('input');
            ageJoueurD.type = 'text';
            ageJoueurD.id = 'ageJoueurD';
            ageJoueurD.className = 'textBoxJoueur';
            ageJoueurD.onkeypress = function (evt) { return EstChiffre(evt) };
            ageJoueurD.maxLength = 2;
            $(divJoueurD).append(ageJoueurD);

            $(divJoueurA).hide();
            $(divJoueurB).hide();
            $(divJoueurC).hide();
            $(divJoueurD).hide();

            //Zone choix de difficulté
            var divDifficulte = document.createElement('div');
            divDifficulte.id = 'divDifficulte';
            divDifficulte.className = 'divDifficulte';
            $(menuCreerPartie).append(divDifficulte);

            var labelTexteDifficulte = document.createElement('label');
            labelTexteDifficulte.id = 'labelTexteDifficulte';
            labelTexteDifficulte.className = 'labelTexteDifficulte';
            labelTexteDifficulte.innerHTML = 'Difficulté de la partie&nbsp;: ';
            $(divDifficulte).append(labelTexteDifficulte);

            var dropDownDifficulte = document.createElement('select');
            dropDownDifficulte.id = 'dropDownDifficulte';
            dropDownDifficulte.className = 'dropDown';
            $(divDifficulte).append(dropDownDifficulte);
            var option1 = document.createElement('option');
            option1.value = '1';
            option1.innerHTML = 'Facile';
            dropDownDifficulte.appendChild(option1);
            var option2 = document.createElement('option');
            option2.value = '2';
            option2.innerHTML = 'Moyen';
            dropDownDifficulte.appendChild(option2);
            var option3 = document.createElement('option');
            option3.value = '3';
            option3.innerHTML = 'Difficile';
            dropDownDifficulte.appendChild(option3);

            var labelErreur = document.createElement('label');
            labelErreur.className = 'labelErreur';
            labelErreur.id = 'labelErreur';
            $(menuCreerPartie).append(labelErreur);

            var buttonDebuter = document.createElement('button');
            buttonDebuter.id = 'buttonDebuter';
            buttonDebuter.className = 'buttonMenuPrincipal';
            buttonDebuter.innerHTML = 'Débuter';
            buttonDebuter.style.bottom = '95px';
            buttonDebuter.onclick = commencerNouvellePartie;
            $(menuCreerPartie).append(buttonDebuter);

            var buttonRetour = document.createElement('button');
            buttonRetour.id = 'buttonRetour';
            buttonRetour.className = 'buttonMenuPrincipal';
            buttonRetour.innerHTML = 'Retour';
            buttonRetour.style.bottom = '35px';
            buttonRetour.onclick = menuPrincipal;
            $(menuCreerPartie).append(buttonRetour);
        }

        //Fonction qui envoie vers les options de création de partie.
        function commencerNouvellePartie() {
            if (verifierConditionCreationPartie() === '') {
                $('#menuCreerPartie').remove();
                startGame();//Commence la partie.
            } else {
                $('#labelErreur').css('color', 'red');
                $('#labelErreur').html('<p></p>' + verifierConditionCreationPartie());
            }
        }

        //Fonction qui va vérifier les conditions des champs lors de la création d'une nouvelle partie.
        function verifierConditionCreationPartie() {
            var retour;

            if ($('#dropDownNombreJoueur').val() === '2') {//Si 2 joueurs.
                if ($('#nomJoueurA').val() != '' && $('#nomJoueurB').val() != '') {
                    if ($('#ageJoueurA').val() != '' && $('#ageJoueurB').val() != '') {
                        entrerValeurCreationPartie();
                        return '';
                    } else {
                        retour = 'Veuillez entrer l\'âge de chacun des joueurs.';
                        return retour;
                    }
                } else {
                    retour = 'Veuillez entrer un nom pour chacun des joueurs.';
                    return retour;
                }
            } else if ($('#dropDownNombreJoueur').val() === '3') {//Si 3 joueurs.
                if ($('#nomJoueurA').val() != '' && $('#nomJoueurB').val() != '' && $('#nomJoueurC').val() != '') {
                    if ($('#ageJoueurA').val() != '' && $('#ageJoueurB').val() != '' && $('#ageJoueurC').val() != '') {
                        entrerValeurCreationPartie();
                        return '';
                    } else {
                        retour = 'Veuillez entrer l\'age de chacun des joueurs.';
                        return retour;
                    }
                } else {
                    retour = 'Veuillez entrer un nom pour chacun des joueurs.';
                    return retour;
                }
            } else if ($('#dropDownNombreJoueur').val() === '4') {//Si 4 joueurs.
                if ($('#nomJoueurA').val() != '' && $('#nomJoueurB').val() && $('#nomJoueurC').val() != '' && $('#nomJoueurD').val() != '') {
                    if ($('#ageJoueurA').val() != '' && $('#ageJoueurB').val() != '' && $('#ageJoueurC').val() != '' && $('#ageJoueurD').val() != '') {
                        entrerValeurCreationPartie();
                        return '';
                    } else {
                        retour = 'Veuillez entrer l\'age de chacun des joueurs.';
                        return retour;
                    }
                } else {
                    retour = 'Veuillez entrer un nom pour chacun des joueurs.';
                    return retour;
                }
            } else {
                retour = 'Veuillez entrer un nombre de joueur.';
                return retour;
            }
        }

        //Fonction qui va entrer les valeurs de créations de partie dans les variables.
        function entrerValeurCreationPartie() {
            nomJoueur = new Array();
            ageJoueur = new Array();
            pointsJoueur = new Array();
            difficulte = $('#dropDownDifficulte').val();

            if ($('#dropDownNombreJoueur').val() >= '2') {//Si 2 joueurs.
                nombreJoueur = 2;
                nomJoueur[0] = $('#nomJoueurA').val();
                nomJoueur[1] = $('#nomJoueurB').val();
                ageJoueur[0] = $('#ageJoueurA').val();
                ageJoueur[1] = $('#ageJoueurB').val();
                pointsJoueur[0] = 0;
                pointsJoueur[1] = 0;
            }

            if ($('#dropDownNombreJoueur').val() >= '3') {//Si 3 joueurs.
                nombreJoueur = 3;
                nomJoueur[2] = $('#nomJoueurC').val();
                ageJoueur[2] = $('#ageJoueurC').val();
                pointsJoueur[2] = 0;
            }

            if ($('#dropDownNombreJoueur').val() >= '4') {//Si 4 joueurs.
                nombreJoueur = 4;
                nomJoueur[3] = $('#nomJoueurD').val();
                ageJoueur[3] = $('#ageJoueurD').val();
                pointsJoueur[3] = 0;
            }
        }

        //Fonction appeler au début, elle "start" le jeu.
        function startGame() {
            valeurDepartVariable();//Donne les valeurs de départs à nos variables.
            instancierTableaux();//instancie tout les tableaux.
            instancierPaquetCarte();//Crée le paquet de carte de départ.
            updatePointsRessourcesJeu();//Update les points-ressources.
            creerElementFond();//Crée touts les éléments du jeu.
            updateAffichageImage();//Update l'affichage de toutes les images.
        }

        //Fonction qui donne les valeurs de départs à nos variables.
        function valeurDepartVariable() {
            //Partie général.
            numeroJoueurActif = 0;
            tour = 1;
            facteurRotation = 0;

            //Partie prédateur.
            mangerPredateur = false;

            //Partie pour la carte déversement.
            deversement = false;
            numeroJoueurDeversement = null;
            tempsDeversement = null;
            verifier = false;
            nombrePolluer = 0;

            //Partie carte prédation.
            predation = false;

            //Partie Érosion
            bandeRiveraineEroder = [];

            //Partie fin salmonide
            salmonide = [nombreJoueur];
            tourSalmonide = [nombreJoueur];

            //Partie fin aucune carte
            aucuneCarte = false;

            //Partie pour la carte naturalisation.
            naturalisation = false;
            calculer = false;

            //Pop-up sont actif au début du jeu.
            popUpActif = true;

            //Partie salmonide
            mangerSalmonide = false;
            nombreMangerSalmonide = 0;
        }

        //Fonction qui appelle les fonctions qui instancie les différents tableaux.
        function instancierTableaux() {
            instancierTableauJoueur();
            instancierTableauEmplacementBas();
            instancierTableauPointsRessources();
            instancierTableauExemplaire();
            instancierTableauPerturbation();
            pointsJoueur = [];
            paquetDecharge = [];
            paquetIntervention = [];

            tableauRetention = new Array(nombreJoueur);
            for (var i = 0; i < tableauRetention.length; i++) {
                tableauRetention[i] = 0;
            }

            tableauPasserTour = new Array(nombreJoueur);
            for (var i = 0; i < tableauPasserTour.length; i++) {
                tableauPasserTour[i] = false;
            }
        }

        //Fonction qui va instancier et remplir le tableau des points de ressources.
        function instancierTableauPointsRessources() {
            pointsRessourcesBase = new Array(nombreJoueur);
            pointsRessourcesBase[0] = 6;
            pointsRessourcesBase[1] = 6;
            pointsRessourcesRestant = new Array(nombreJoueur);
            pointsRessourcesSuplementaire = new Array(nombreJoueur);
            pointsRessourcesTotal = new Array(nombreJoueur);
            pointsRessourcesUtiliser = new Array(nombreJoueur);

            if (nombreJoueur >= 3) {
                pointsRessourcesBase[2] = 6;
            }
            if (nombreJoueur === 4) {
                pointsRessourcesBase[3] = 6;
            }
        }

        //Fonction qui va instancier le tableau des pertubations.
        function instancierTableauPerturbation() {
            cartePerturbation = new Array(nombreJoueur);
            cartePerturbation[0] = [null, null, null, null, null, null, null, null, null, null];
            cartePerturbation[1] = [null, null, null, null, null, null, null, null, null, null];
            if (nombreJoueur > 2) {// 3 joueurs.
                cartePerturbation[2] = [null, null, null, null, null, null, null, null, null, null];
            }
            if (nombreJoueur > 3) {// 4 joueurs.
                cartePerturbation[3] = [null, null, null, null, null, null, null, null, null, null];
            }
        }

        //Fonction qui va instancier le tableau bi-dimensionel de mains.
        function instancierTableauJoueur() {
            mains = new Array(nombreJoueur);

            //Minimum de 2 joueurs.
            mains[0] = [];
            mains[1] = [];

            if (nombreJoueur >= 3) {//3 joueurs.
                mains[2] = [];
            }
            if (nombreJoueur === 4) {//4 joueurs.
                mains[3] = [];
            }
        }

        //Fonction qui va instancier le tableau des exemplaires de cartes de la zone de jeu.
        function instancierTableauExemplaire() {
            exemplaireCarteJeu = new Array(nombreJoueur);
            exemplaireCarteJeu[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            exemplaireCarteJeu[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            if (nombreJoueur >= 3) {//3 joueurs.
                exemplaireCarteJeu[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            }
            if (nombreJoueur === 4) {//4 joueurs.
                exemplaireCarteJeu[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            }
        }

        //Fonction qui va instancier le tableau bi-dimensionel des emplacements du jeu.
        function instancierTableauEmplacementBas() {
            CarteJeu = new Array(nombreJoueur);

            //Minimum de 2 joueurs.
            CarteJeu[0] = [null, null, null, null, null, null, null, null, null, null];
            CarteJeu[1] = [null, null, null, null, null, null, null, null, null, null];

            if (nombreJoueur >= 3) {//3 joueurs.
                CarteJeu[2] = [null, null, null, null, null, null, null, null, null, null];
            }
            if (nombreJoueur === 4) {//4 joueurs.
                CarteJeu[3] = [null, null, null, null, null, null, null, null, null, null];
            }
        }

        //Fonction qui s'occupe de créer le paquet de carte et de le mélanger au début de la partie.
        function instancierPaquetCarte() {
            paquetCarte = creerPaquetCarte(difficulte);//Remplie le paquet de carte selon la difficulté.
            melangerPaquetCarte(paquetCarte);//Mélange le paquet de carte.
            remplirMain();//Remplie les tableau de main de chaque joueur.
        }

        //Fonction qui va créer les diverse éléments du fond.
        function creerElementFond() {
            creerFond();//Crée le fond et lui mes le droppable.
            creerEmplacementsPlateau();//Crée les emplacements de touts les joueurs.
            calculerPoints();//Calcul les points de départ.
            creerPartieDroite();//Crée la partie de droite.
            creerMain();//Crée les divisions de la main.
            instancierDivPopUp();//Crée les pop-up pour plus tard.
        }

        //Fonction qui ajoute une div avec le plateau en fond d'écran.
        function creerFond() {
            //Partie de gauche.
            var divMain = document.createElement('div');
            divMain.id = 'divMain';
            divMain.className = 'divMain';
            $('body').append(divMain);

            //Partie du millieu.
            var plateau = document.createElement('div');
            plateau.id = 'plateau';
            plateau.className = 'plateau';
            $('body').append(plateau);
            $(plateau).droppable({
                tolerance: 'pointer',
                drop: function (evt, ui) {//Ajoute le code du drop pour la plateau.
                    if (bonneZoneDrop(evt.target)) {//Si l'endroit que nous voulons droper est à la bonne place.
                        if (accepterDrop(evt.target)) {
                            pointsRessourcesRestant[numeroJoueurActif] -= carteDrag.coutRessources;
                            pointsRessourcesUtiliser[numeroJoueurActif] += carteDrag.coutRessources;
                            updatePointsRessources();
                            /* -----------Perturbation--------------*/
                            if (carteDrag.nom === nomEnum.deversement) {
                                //Si personne n'a de carte pris sur le fait.
                                if (verifierPresencePrisSurFait().filter(function (value) { return value != null }).length === 0) {
                                    supprimerCartePrecise(carteDragNumero);
                                    paquetDecharge.push(carteDrag);
                                    deversement = true;
                                    tempsDeversement = 2;
                                    numeroJoueurDeversement = numeroJoueurActif;
                                    ui.draggable.remove();
                                    updateAffichageImage();
                                    popUpConfirmation('Un déversement aura lieu à la fin de votre prochain tour.');
                                } else {//Code pour le pop-up qui demande si un joueur désire utiliser sa carte pris sur le fait.
                                    $('#divChoixContenu').children().remove('ul');
                                    $('#labelChoix').text('Est-ce qu\'il y a un joueur qui désire utiliser sa carte «Pris sur le fait!» pour annuler la carte «' + premiereLettreMaj(carteDrag.nom) + '»?');
                                    $('#divChoix').dialog({
                                        classes: {
                                            'ui-dialog': 'no-x ui-corner-all',
                                        },
                                        buttons: {
                                            Confirmer: function () {//Confirmation du résultats du pop-up.
                                                if (joueurSelectionne != null) {
                                                    if (joueurSelectionne.innerHTML === 'Aucun joueur') {//Si personne désire utiliser sa carte.
                                                        supprimerCartePrecise(carteDragNumero);
                                                        paquetDecharge.push(carteDrag);
                                                        deversement = true;
                                                        tempsDeversement = 2;
                                                        numeroJoueurDeversement = numeroJoueurActif;
                                                        ui.draggable.remove();
                                                        updateAffichageImage();
                                                        $(this).dialog('close');
                                                    } else {//Sinon la personne qui désire utiliser sa carte, l'utiliser et annule les effets de la carte.
                                                        paquetDecharge.push(carteDrag);
                                                        supprimerCartePrecise(carteDragNumero);
                                                        ui.draggable.remove();

                                                        for (var i = 0; i < nombreJoueur; i++) {
                                                            if (nomJoueur[i] === joueurSelectionne.innerHTML) {
                                                                for (var j = 0; j < mains[i].length; j++) {
                                                                    if (mains[i][j] != null) {
                                                                        if (mains[i][j].nom === nomEnum.prisSurFait) {
                                                                            paquetDecharge.push(mains[i][j]);
                                                                            mains[i][j] = null;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        $(this).dialog('close');
                                                    }
                                                } else {
                                                    popUpAvertissement('Veuillez choisir un option.');
                                                }
                                            }
                                        },
                                        draggable: false,
                                        resizable: false,
                                        modal: true,
                                        height: 575,
                                        width: 500,
                                        hide: 'fade',
                                        show: 'fade'
                                    });

                                    var ul = document.createElement('ul');
                                    ul.id = 'listeJoueur';
                                    $('#divChoixContenu').append(ul);

                                    var tabJoueur = verifierPresencePrisSurFait();
                                    for (var i = 0; i < tabJoueur.length; i++) {
                                        if (tabJoueur[i] != null) {
                                            var li = document.createElement('li');
                                            li.style.listStyleType = 'none';
                                            li.className = 'listeJoueur';
                                            li.innerHTML = nomJoueur[i];
                                            $(ul).append(li);
                                        }
                                    }
                                    var li = document.createElement('li');
                                    li.style.listStyleType = 'none';
                                    li.className = 'listeJoueur';
                                    li.innerHTML = 'Aucun joueur';
                                    $(ul).append(li);

                                    $(function () {
                                        $(ul).selectable({
                                            stop: function (evt, ui) {
                                                $(evt.target).children('.ui-selected').not(':first').removeClass('ui-selected');
                                            },
                                            selected: function (evt, ui) {
                                                joueurSelectionne = ui.selected;
                                            }
                                        });
                                    });
                                }
                                //-------------Carte Zonage--------------------
                            } else if (carteDrag.nom === nomEnum.zonage) {
                                zonage = true;
                                etapeZonage = 1;
                                popUpConfirmation('Sélectionnez l\'«Habitats» que vous voulez échanger');
                                supprimerCartePrecise(carteDragNumero);
                                paquetDecharge.push(carteDrag);
                                ui.draggable.remove();
                                brillerCarte(typeEnum.habitats, numeroJoueurActif, true);
                                griserZone(true, false, true);
                                //-------------Carte Naturalisation--------------------
                            } else if (carteDrag.nom === nomEnum.naturalisation) {
                                paquetDecharge.push(carteDrag);
                                supprimerCartePrecise(carteDragNumero);
                                ui.draggable.remove();
                                $('#divChoixContenu').children().remove('ul');
                                $('#labelChoix').text('Choisissez un des effets suivants.');
                                $('#divChoix').dialog({
                                    classes: {
                                        'ui-dialog': 'no-x ui-corner-all',
                                    },
                                    buttons: {
                                        Confirmer: function () {
                                            if (joueurSelectionne.id === '1') { //Si le joueur décide d'annuler une carte Artificialisation
                                                naturalisation = true;
                                                griserZone(true, false, true);
                                                popUpConfirmation('Choisissez la «Bande Riveraine» que vous voulez désartificialiser.');
                                                for (var i = 0; i < nombreJoueur; i++) {
                                                    for (var j = 0; j < cartePerturbation[i].length; j++) {
                                                        if (cartePerturbation[i][j] != null) {
                                                            if (cartePerturbation[i][j].nom === nomEnum.artificialisation) {
                                                                $('#emplacementJoueur' + lettreJoueur(i) + j).addClass('ui-echange-highlight');
                                                                $('.ui-perturber-highlight').removeClass('ui-perturber-highlight');
                                                            }
                                                        }
                                                    }
                                                }
                                                $(this).dialog('close');
                                            } else if (joueurSelectionne.id == '2') {//Si le joueur décide de choisir une carte intervention.
                                                $('#labelChoix').text('Choisissez la carte «Intervention» désirée')
                                                $('#divChoixContenu').children().remove('ul');
                                                $(this).dialog({
                                                    width: 575,
                                                    buttons: {
                                                        Confirmer: function () {
                                                            if (carteSelectionne == null) {
                                                                popUpAvertissement('Veuillez d\'abord choisir une carte.');
                                                            } else {
                                                                for (var i = 0; i < mains[numeroJoueurActif].length; i++) {
                                                                    if (mains[numeroJoueurActif][i] == null) {
                                                                        if (paquetIntervention[carteSelectionne] != null) {
                                                                            mains[numeroJoueurActif][i] = paquetIntervention[carteSelectionne];
                                                                            paquetIntervention[carteSelectionne] = null;
                                                                        }
                                                                    }
                                                                }
                                                                if (paquetIntervention[carteSelectionne] != null) {
                                                                    mains[numeroJoueurActif][mains[numeroJoueurActif.length]] = paquetIntervention[joueurSelectionne];
                                                                    paquetIntervention[carteSelectionne] = null;
                                                                }
                                                                $(this).dialog('close');
                                                                updateAffichageImage();
                                                            }
                                                        }
                                                    }
                                                });

                                                //Crée la liste des cartes interventions.
                                                var ul = document.createElement('ul');
                                                ul.id = 'listeCartes';
                                                $('#divChoixContenu').append(ul);

                                                var carteSelectionne;
                                                paquetIntervention.forEach(function (item, index) {
                                                    if (paquetIntervention[index] != null) {
                                                        if (paquetIntervention[index].nom === nomEnum.amenageArbre || paquetIntervention[index].nom === nomEnum.amenageArbustes || paquetIntervention[index].nom === nomEnum.amenageHerbace) {
                                                            var li = document.createElement('li');
                                                            li.className = 'listeChoixCarte';
                                                            var carte = document.createElement('img');
                                                            carte.id = index;
                                                            carte.className = 'cartesListe'
                                                            carte.src = 'ressources/' + item.nomImage;
                                                            $(carte).click(function () {
                                                                if (carteSelectionne != null) {
                                                                    $('.cartesListe').removeAttr('style');
                                                                }

                                                                $(this).css('-moz-box-shadow', '0 0 15px 10px #000');
                                                                $(this).css('-webkit-box-shadow', '0 0 15px 10px #000');
                                                                $(this).css('box-shadow', '0px 0px 15px 10px #000');
                                                                carteSelectionne = index;
                                                            });

                                                            $(ul).append(li);
                                                            $(li).append(carte);
                                                        }
                                                    }
                                                });
                                            } else {
                                                popUpAvertissement('Veuillez choisir un option.');
                                            }
                                        }
                                    },
                                    draggable: false,
                                    resizable: false,
                                    modal: true,
                                    height: 575,
                                    width: 500,
                                    hide: 'fade',
                                    show: 'fade'
                                });

                                //Crée la liste des effets de la carte Naturalisation
                                var ul = document.createElement('ul');
                                ul.id = 'listeJoueur';
                                $('#divChoixContenu').append(ul);

                                var stop = false;
                                for (var i = 0; i < nombreJoueur; i++) {
                                    for (var j = 0; j < cartePerturbation[i].length; j++) {
                                        if (!stop) {
                                            if (cartePerturbation[i][j] != null) {
                                                if (cartePerturbation[i][j].nom === nomEnum.artificialisation) {
                                                    var li = document.createElement('li');
                                                    li.style.listStyleType = 'none';
                                                    li.className = 'listeJoueur';
                                                    li.id = '1';
                                                    li.innerHTML = 'Annuler l\'effet d\'une carte «Artificialisation».';
                                                    $(ul).append(li);
                                                    conte = true;
                                                }
                                            }
                                        }
                                    }
                                }

                                if (paquetIntervention.filter(
                                    function (value) {
                                        if (value.nom === nomEnum.amenageArbre || value.nom === nomEnum.amenageArbustes || value.nom === nomEnum.amenageHerbace) {
                                            return value;
                                }
                                }).length > 0) {
                                    var li = document.createElement('li');
                                    li.style.listStyleType = 'none';
                                    li.className = 'listeJoueur';
                                    li.id = '2';
                                    li.innerHTML = 'Choisir une «Bande Riveraine» dans les cartes «Interventions».';
                                    $(ul).append(li);
                                }

                                $(function () {
                                    $(ul).selectable({
                                        stop: function (evt, ui) {
                                            $(evt.target).children('.ui-selected').not(':first').removeClass('ui-selected');
                                        },
                                        selected: function (evt, ui) {
                                            joueurSelectionne = ui.selected;
                                        }
                                    });
                                });
                                //-----------------------Carte Aménagement-------------------------------
                            } else if (carteDrag.nom === nomEnum.amenagement) {
                                paquetDecharge.push(carteDrag);
                                supprimerCartePrecise(carteDragNumero);
                                ui.draggable.remove();
                                $('#divChoixContenu').children().remove('ul');
                                $('#labelChoix').text('Choisissez un des effets suivants.');
                                $('#divChoix').dialog({
                                    classes: {
                                        'ui-dialog': 'no-x ui-corner-all',
                                    },
                                    buttons: {
                                        Confirmer: function () {
                                            if (joueurSelectionne.id === '1') {
                                                //Retransforme la carte sable en habitat
                                                for (var i = 0; i < nombreJoueur; i++) {
                                                    for (var j = 0; j < cartePerturbation[i].length; j++) {
                                                        if (cartePerturbation[i][j] != null) {
                                                            if (cartePerturbation[i][j].nom === nomEnum.erosion) {
                                                                CarteJeu[i][j].perturber = false;
                                                                CarteJeu[i][j] = habitatEroder;
                                                                cartePerturbation[i][j] = null;
                                                                $('#emplacementJoueur' + lettreJoueur(i) + j).children().remove();
                                                                var carteHabitat = document.createElement('img');
                                                                carteHabitat.className = 'imageCarteJeu';
                                                                carteHabitat.src = 'ressources/' + habitatEroder.nomImage;
                                                                $('#emplacementJoueur' + lettreJoueur(i) + j).append(carteHabitat);
                                                                habitatEroder = null;

                                                                $(function () {
                                                                    $(carteHabitat).on({
                                                                        click: function (evt, ui) {
                                                                            onClickImage($(this).parent().attr("id"), ui);
                                                                        }
                                                                    })
                                                                });
                                                            }
                                                        }
                                                    }
                                                }
                                                //Reajoute la carte bande riveraine
                                                var posLibre = trouverPositionLibre(bandeRiveraineEroder[1]);
                                                var numeroPosLibre = posLibre.substr(posLibre.length - 1);
                                                CarteJeu[bandeRiveraineEroder[1]][numeroPosLibre] = bandeRiveraineEroder[0];
                                                var carte = document.createElement('img');
                                                carte.className = 'imageCarteJeu';
                                                carte.src = 'ressources/' + bandeRiveraineEroder[0].nomImage;
                                                $(posLibre).append(carte);

                                                bandeRiveraineEroder[0] = null;
                                                bandeRiveraineEroder[1] = null;

                                                $(function () {
                                                    $(carte).on({
                                                        click: function (evt, ui) {
                                                            onClickImage($(this).parent().attr("id"), ui);
                                                        }
                                                    })
                                                });
                                                $(this).dialog('close');
                                                updateAffichageImage();
                                            } else if (joueurSelectionne.id === '2') {
                                                $('#labelChoix').text('Choisissez la carte «Intervention» désirée.')
                                                $('#divChoixContenu').children().remove('ul');
                                                $(this).dialog({
                                                    width: 575,
                                                    buttons: {
                                                        Confirmer: function () {
                                                            if (carteSelectionne == null) {
                                                                popUpAvertissement('Veuillez d\'abord choisir une carte.');
                                                            } else {
                                                                for (var i = 0; i < mains[numeroJoueurActif].length; i++) {
                                                                    if (mains[numeroJoueurActif][i] == null) {
                                                                        if (paquetIntervention[carteSelectionne] != null) {
                                                                            mains[numeroJoueurActif][i] = paquetIntervention[carteSelectionne];
                                                                            paquetIntervention[carteSelectionne] = null;
                                                                        }
                                                                    }
                                                                }
                                                                if (paquetIntervention[carteSelectionne] != null) {
                                                                    mains[numeroJoueurActif][mains[numeroJoueurActif.length]] = paquetIntervention[joueurSelectionne];
                                                                    paquetIntervention[carteSelectionne] = null;
                                                                }
                                                                $(this).dialog('close');
                                                                updateAffichageImage();
                                                            }
                                                        }
                                                    }
                                                });

                                                var ul = document.createElement('ul');
                                                ul.id = 'listeCartes';
                                                $('#divChoixContenu').append(ul);

                                                var carteSelectionne;
                                                paquetIntervention.forEach(function (item, index) {
                                                    if (paquetIntervention[index] != null) {
                                                        if (paquetIntervention[index].nom === nomEnum.amenageFosse || paquetIntervention[index].nom === nomEnum.amenageGalets || paquetIntervention[index].nom === nomEnum.amenageGravier || paquetIntervention[index].nom === nomEnum.amenageRapides || paquetIntervention[index].nom === nomEnum.amenageSable) {
                                                            var li = document.createElement('li');
                                                            li.className = 'listeChoixCarte';
                                                            var carte = document.createElement('img');
                                                            carte.id = index;
                                                            carte.className = 'cartesListe'
                                                            carte.src = 'ressources/' + item.nomImage;
                                                            $(carte).click(function () {
                                                                if (carteSelectionne != null) {
                                                                    $('.cartesListe').removeAttr('style');
                                                                }

                                                                $(this).css('-moz-box-shadow', '0 0 15px 10px #000');
                                                                $(this).css('-webkit-box-shadow', '0 0 15px 10px #000');
                                                                $(this).css('box-shadow', '0px 0px 15px 10px #000');
                                                                carteSelectionne = index;
                                                            });

                                                            $(ul).append(li);
                                                            $(li).append(carte);
                                                        }
                                                    }
                                                });
                                            } else {
                                                popAvertissement('Veuillez d\'abord choisir un option');
                                            }
                                        }
                                    },
                                    draggable: false,
                                    resizable: false,
                                    modal: true,
                                    height: 575,
                                    width: 500,
                                    hide: 'fade',
                                    show: 'fade'
                                });

                                var ul = document.createElement('ul');
                                ul.id = 'listeJoueur';
                                $('#divChoixContenu').append(ul);

                                var stop = false;
                                for (var i = 0; i < nombreJoueur; i++) {
                                    for (var j = 0; j < cartePerturbation[i].length; j++) {
                                        if (!stop) {
                                            if (cartePerturbation[i][j] != null) {
                                                if (cartePerturbation[i][j].nom === nomEnum.erosion) {
                                                    var li = document.createElement('li');
                                                    li.style.listStyleType = 'none';
                                                    li.className = 'listeJoueur';
                                                    li.id = '1';
                                                    li.innerHTML = 'Annuler l\'effet de la carte «Érosion».';
                                                    $(ul).append(li);
                                                    stop = true;
                                                }
                                            }
                                        }
                                    }
                                }

                                if (paquetIntervention.filter(
                                    function (value) {
                                        if (value.nom === nomEnum.amenageFosse || value.nom === nomEnum.amenageGalets || value.nom === nomEnum.amenageGravier || value.nom === nomEnum.amenageRapides || value.nom === nomEnum.amenageSable) {
                                    return value;

                                }
                                }).length > 0) {
                                    var li = document.createElement('li');
                                    li.style.listStyleType = 'none';
                                    li.className = 'listeJoueur';
                                    li.id = '2';
                                    li.innerHTML = 'Choisir un habitat dans les cartes «Interventions».';
                                    $(ul).append(li);
                                }

                                $(function () {
                                    $(ul).selectable({
                                        stop: function (evt, ui) {
                                            $(evt.target).children('.ui-selected').not(':first').removeClass('ui-selected');
                                        },
                                        selected: function (evt, ui) {
                                            joueurSelectionne = ui.selected;
                                        }
                                    });
                                });
                                //-------------Carte Érosion--------------------
                            } else if (carteDrag.nom === nomEnum.erosion) {
                                //Si personne à la carte pris sur le fait.
                                if (verifierPresencePrisSurFait().filter(function (value) { return value != null }).length === 0) {
                                    popUpConfirmation('Vous devez sélectioner la «Bande Riveraine» à envoyer à la décharge.');
                                    supprimerCartePrecise(carteDragNumero);
                                    paquetDecharge.push(carteDrag);
                                    ui.draggable.remove();
                                    erosion = true;
                                    etapeErosion = 1;

                                    if (numeroJoueurActif != 0) {
                                        brillerCarte(typeEnum.bandeRiveraine, 0, true);
                                    }
                                    if (numeroJoueurActif != 1) {
                                        brillerCarte(typeEnum.bandeRiveraine, 1, true);
                                    }
                                    if (nombreJoueur > 2) {
                                        if (numeroJoueurActif != 2) {
                                            brillerCarte(typeEnum.bandeRiveraine, 2, true);
                                        }
                                    }
                                    if (nombreJoueur > 3) {
                                        if (numeroJoueurActif != 3) {
                                            brillerCarte(typeEnum.bandeRiveraine, 3, true);
                                        }
                                    }
                                    griserZone(true, false, true);
                                } else {//Sinon, demande si un joueur veut utiliser sa carte et annuler la carte.
                                    $('#divChoixContenu').children().remove('ul');
                                    $('#labelChoix').text('Est-ce qu\'il y a un joueur qui désire utiliser sa carte «Pris sur le fait!» pour annuler la carte «' + premiereLettreMaj(carteDrag.nom) + '»?');
                                    $('#divChoix').dialog({
                                        classes: {
                                            'ui-dialog': 'no-x ui-corner-all',
                                        },
                                        buttons: {
                                            Confirmer: function () {
                                                if (joueurSelectionne != null) {
                                                    if (joueurSelectionne.innerHTML === 'Aucun joueur') {
                                                        popUpConfirmation('Vous devez sélectioner la «Bande Riveraine» à envoyer à la décharge.');
                                                        supprimerCartePrecise(carteDragNumero);
                                                        paquetDecharge.push(carteDrag);
                                                        erosion = true
                                                        etapeErosion = 1;
                                                        griserZone(true, false, true);
                                                        ui.draggable.remove();
                                                        updateAffichageImage();

                                                        if (numeroJoueurActif != 0) {
                                                            brillerCarte(typeEnum.bandeRiveraine, 0, true);
                                                        }
                                                        if (numeroJoueurActif != 1) {
                                                            brillerCarte(typeEnum.bandeRiveraine, 1, true);
                                                        }
                                                        if (nombreJoueur > 2) {
                                                            if (numeroJoueurActif != 2) {
                                                                brillerCarte(typeEnum.bandeRiveraine, 2, true);
                                                            }
                                                        }
                                                        if (nombreJoueur > 3) {
                                                            if (numeroJoueurActif != 3) {
                                                                brillerCarte(typeEnum.bandeRiveraine, 3, true);
                                                            }
                                                        }
                                                        $(this).dialog('close');
                                                    } else {
                                                        paquetDecharge.push(carteDrag);
                                                        supprimerCartePrecise(carteDragNumero);
                                                        ui.draggable.remove();

                                                        for (var i = 0; i < nombreJoueur; i++) {
                                                            if (nomJoueur[i] === joueurSelectionne.innerHTML) {
                                                                for (var j = 0; j < mains[i].length; j++) {
                                                                    if (mains[i][j] != null) {
                                                                        if (mains[i][j].nom === nomEnum.prisSurFait) {
                                                                            paquetDecharge.push(mains[i][j]);
                                                                            mains[i][j] = null;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        $(this).dialog('close');
                                                    }
                                                } else {
                                                    popUpAvertissement('Veuillez choisir un option.');
                                                }
                                            }
                                        },
                                        draggable: false,
                                        resizable: false,
                                        modal: true,
                                        height: 575,
                                        width: 500,
                                        hide: 'fade',
                                        show: 'fade'
                                    });

                                    var ul = document.createElement('ul');
                                    ul.id = 'listeJoueur';
                                    $('#divChoixContenu').append(ul);

                                    var tabJoueur = verifierPresencePrisSurFait();
                                    for (var i = 0; i < tabJoueur.length; i++) {
                                        if (tabJoueur[i] != null) {
                                            var li = document.createElement('li');
                                            li.style.listStyleType = 'none';
                                            li.className = 'listeJoueur';
                                            li.innerHTML = nomJoueur[i];
                                            $(ul).append(li);
                                        }
                                    }
                                    var li = document.createElement('li');
                                    li.style.listStyleType = 'none';
                                    li.className = 'listeJoueur';
                                    li.innerHTML = 'Aucun joueur';
                                    $(ul).append(li);

                                    $(function () {
                                        $(ul).selectable({
                                            stop: function (evt, ui) {
                                                $(evt.target).children('.ui-selected').not(':first').removeClass('ui-selected');
                                            },
                                            selected: function (evt, ui) {
                                                joueurSelectionne = ui.selected;
                                            }
                                        });
                                    });
                                }
                                //-------------Carte Pollution Organique--------------------
                            } else if (carteDrag.nom === nomEnum.pollutionOrganique) {
                                //Si aucun joueur ne possède de carte Pris sur le fait.
                                if (verifierPresencePrisSurFait().filter(function (value) { return value != null }).length === 0) {
                                    popUpConfirmation('Vous devez sélectioner 3 «Habitats» à polluer.');
                                    supprimerCartePrecise(carteDragNumero);
                                    paquetDecharge.push(carteDrag);
                                    brillanceHabitatsEnnemi(true);
                                    onPollu = true;
                                    ui.draggable.remove();
                                    updateAffichageImage();
                                    nombrePolluer = 0;
                                    griserZone(true, false, true);
                                } else {
                                    $('#divChoixContenu').children().remove('ul');
                                    $('#labelChoix').text('Est-ce qu\'il y a un joueur qui désire utiliser sa carte «Pris sur le fait!» pour annuler la carte «' + premiereLettreMaj(carteDrag.nom) + '»?');
                                    $('#divChoix').dialog({
                                        classes: {
                                            'ui-dialog': 'no-x ui-corner-all',
                                        },
                                        buttons: {
                                            Confirmer: function () {
                                                if (joueurSelectionne != null) {
                                                    if (joueurSelectionne.innerHTML === 'Aucun joueur') {
                                                        popUpConfirmation('Vous devez sélectioner 3 «Habitats» à polluer.');
                                                        supprimerCartePrecise(carteDragNumero);
                                                        paquetDecharge.push(carteDrag);
                                                        brillanceHabitatsEnnemi(true);
                                                        onPollu = true;
                                                        nombrePolluer = 0;
                                                        ui.draggable.remove();
                                                        updateAffichageImage();
                                                        griserZone(true, false, true);
                                                        $(this).dialog('close');
                                                    } else {
                                                        paquetDecharge.push(carteDrag);
                                                        supprimerCartePrecise(carteDragNumero);
                                                        ui.draggable.remove();

                                                        for (var i = 0; i < nombreJoueur; i++) {
                                                            if (nomJoueur[i] === joueurSelectionne.innerHTML) {
                                                                for (var j = 0; j < mains[i].length; j++) {
                                                                    if (mains[i][j] != null) {
                                                                        if (mains[i][j].nom === nomEnum.prisSurFait) {
                                                                            paquetDecharge.push(mains[i][j]);
                                                                            mains[i][j] = null;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        $(this).dialog('close');
                                                    }
                                                } else {
                                                    popUpAvertissement('Veuillez choisir un option.');
                                                }
                                            }
                                        },
                                        draggable: false,
                                        resizable: false,
                                        modal: true,
                                        height: 575,
                                        width: 500,
                                        hide: 'fade',
                                        show: 'fade'
                                    });

                                    var ul = document.createElement('ul');
                                    ul.id = 'listeJoueur';
                                    $('#divChoixContenu').append(ul);

                                    var tabJoueur = verifierPresencePrisSurFait();
                                    for (var i = 0; i < tabJoueur.length; i++) {
                                        if (tabJoueur[i] != null) {
                                            var li = document.createElement('li');
                                            li.style.listStyleType = 'none';
                                            li.className = 'listeJoueur';
                                            li.innerHTML = nomJoueur[i];
                                            $(ul).append(li);
                                        }
                                    }

                                    var li = document.createElement('li');
                                    li.style.listStyleType = 'none';
                                    li.className = 'listeJoueur';
                                    li.innerHTML = 'Aucun joueur';
                                    $(ul).append(li);

                                    $(function () {
                                        $(ul).selectable({
                                            stop: function (evt, ui) {
                                                $(evt.target).children('.ui-selected').not(':first').removeClass('ui-selected');
                                            },
                                            selected: function (evt, ui) {
                                                joueurSelectionne = ui.selected;
                                            }
                                        });
                                    });
                                }
                                //-------------Carte Accumulation--------------------
                            } else if (carteDrag.nom === nomEnum.accumulation) {
                                paquetDecharge.push(carteDrag);
                                supprimerCartePrecise(carteDragNumero);
                                ui.draggable.remove();
                                for (var i = 0; i < 3; i++) {
                                    var nouvelle = true;
                                    for (var j = 0; j < mains[numeroJoueurActif].length; j++) {
                                        if (nouvelle) {
                                            if (mains[numeroJoueurActif][j] == null) {
                                                annimationPigerCarte(j);
                                                nouvelle = false;
                                            }
                                        }
                                    }
                                    if (nouvelle) {
                                        annimationPigerCarte(mains[numeroJoueurActif].length);
                                        nouvelle = false;
                                    }
                                }
                                //-------------Carte Prédation--------------------
                            } else if (carteDrag.nom === nomEnum.predation) {
                                supprimerCartePrecise(carteDragNumero);
                                predation = true;
                                trouverPredateur();
                                brillanceCarteMangeable(true);
                                paquetDecharge.push(carteDrag);
                                ui.draggable.remove();
                                updateAffichageImage();
                                popUpConfirmation('Choississez le «Macroinvertébré» de taille inférieure à ' + taillePredateur + ' que vous voulez manger.');
                                //-------------Carte Rétention--------------------
                            } else if (carteDrag.nom === nomEnum.retention) {
                                tableauRetention[numeroJoueurActif] = true;
                                paquetDecharge.push(carteDrag);
                                supprimerCartePrecise(carteDragNumero);
                                ui.draggable.remove();
                                updateAffichageImage();
                                //-------------Carte Dérivation--------------------
                            } else if (carteDrag.nom === nomEnum.derivation) {
                                paquetDecharge.push(carteDrag);
                                supprimerCartePrecise(carteDragNumero);
                                ui.draggable.remove();
                                updateAffichageImage();
                                $('#divChoixContenu').children().remove('ul');
                                $('#labelChoix').text('Choisissez le joueur avec qui vous voulez échanger votre main.');

                                var ul = document.createElement('ul');
                                ul.id = 'listeJoueur';
                                $('#divChoixContenu').append(ul);

                                for (var i = 0; i < nombreJoueur; i++) {
                                    if (i != numeroJoueurActif) {
                                        var li = document.createElement('li');
                                        li.style.listStyleType = 'none';
                                        li.className = 'listeJoueur';
                                        li.innerHTML = nomJoueur[i];
                                        $(ul).append(li);
                                    }
                                }
                                $(function () {
                                    $(ul).selectable({
                                        stop: function (evt, ui) {
                                            $(evt.target).children('.ui-selected').not(':first').removeClass('ui-selected');
                                        },
                                        selected: function (evt, ui) {
                                            joueurSelectionne = ui.selected;
                                        }
                                    });
                                });
                                $('#divChoix').dialog({
                                    classes: {
                                        'ui-dialog': 'no-x ui-corner-all',
                                    },
                                    buttons: {
                                        Confirmer: function () {
                                            if (joueurSelectionne != null) {
                                                var numeroJoueurEchange;
                                                for (var i = 0; i < nombreJoueur; i++) {
                                                    if (nomJoueur[i] === joueurSelectionne.innerHTML) {
                                                        numeroJoueurEchange = i
                                                    }
                                                }
                                                var mainsTemporaire = mains[numeroJoueurActif];
                                                mains[numeroJoueurActif] = mains[numeroJoueurEchange];
                                                mains[numeroJoueurEchange] = mainsTemporaire;
                                                $(this).dialog('close');
                                                updateAffichageImage();
                                            }
                                        }
                                    },
                                    draggable: false,
                                    resizable: false,
                                    modal: true,
                                    height: 575,
                                    width: 500,
                                    hide: 'fade',
                                    show: 'fade'
                                });
                                //-------------Carte Corvé de Nettoyage--------------------
                            } else if (carteDrag.nom === nomEnum.corveNettoyage) {
                                retirerDechets();
                                paquetDecharge.push(carteDrag);
                                supprimerCartePrecise(carteDragNumero);
                                ui.draggable.remove();
                                updateAffichageImage();
                                //-------------Carte Crue Soudaine--------------------
                            } else if (carteDrag.nom === nomEnum.crueSoudaine) {
                                paquetDecharge.push(carteDrag);
                                supprimerCartePrecise(carteDragNumero);
                                ui.draggable.remove();
                                updateAffichageImage();
                                $('#divChoixContenu').children().remove('ul');
                                $('#labelChoix').text('Choisissez le joueur qui ratera son prochain tour.');

                                var ul = document.createElement('ul');
                                ul.id = 'listeJoueur';
                                $('#divChoixContenu').append(ul);

                                for (var i = 0; i < nombreJoueur; i++) {
                                    if (i != numeroJoueurActif) {
                                        var li = document.createElement('li');
                                        li.style.listStyleType = 'none';
                                        li.className = 'listeJoueur';
                                        li.innerHTML = nomJoueur[i];
                                        $(ul).append(li);
                                    }
                                }
                                $(function () {
                                    $(ul).selectable({
                                        stop: function (evt, ui) {
                                            $(evt.target).children('.ui-selected').not(':first').removeClass('ui-selected');
                                        },
                                        selected: function (evt, ui) {
                                            joueurSelectionne = ui.selected;
                                        }
                                    });
                                });

                                $('#divChoix').dialog({
                                    classes: {
                                        'ui-dialog': 'no-x ui-corner-all',
                                    },
                                    buttons: {
                                        Confirmer: function () {
                                            if (joueurSelectionne != null) {
                                                var numeroJoueurPasserTour;
                                                for (var i = 0; i < nombreJoueur; i++) {
                                                    if (nomJoueur[i] === joueurSelectionne.innerHTML) {
                                                        numeroJoueurPasserTour = i
                                                    }
                                                }
                                                tableauPasserTour[numeroJoueurPasserTour] = true;
                                                $(this).dialog('close');
                                                updateAffichageImage();
                                            }
                                        }
                                    },
                                    draggable: false,
                                    resizable: false,
                                    modal: true,
                                    height: 575,
                                    width: 500,
                                    hide: 'fade',
                                    show: 'fade'
                                });
                                //-------------Carte Pêcheur--------------------
                            } else if (carteDrag.nom === nomEnum.pecheur) {
                                paquetDecharge.push(carteDrag);
                                supprimerCartePrecise(carteDragNumero);
                                ui.draggable.remove();
                                updateAffichageImage();
                                $('#divChoixContenu').children().remove('ul');
                                $('#labelChoix').text('Choisissez un des effets suivants.');
                                $('#divChoix').dialog({
                                    classes: {
                                        'ui-dialog': 'no-x popUpChoix ui-corner-all',
                                    },
                                    buttons: {
                                        Confirmer: function () {
                                            if (joueurSelectionne != null) {
                                                if (joueurSelectionne.id === '1') {// si le joueur décide de voler un salmonidé.
                                                    var stop = false;
                                                    for (var i = 0; i < nombreJoueur; i++) {
                                                        if (i != numeroJoueurActif) {
                                                            for (var j = 0; j < CarteJeu[i].length; j++) {
                                                                if (!stop) {
                                                                    if (CarteJeu[i][j] != null) {
                                                                        if (CarteJeu[i][j].type === typeEnum.salmonide) {
                                                                            for (var k = 0; k < mains[numeroJoueurActif].length; k++) {
                                                                                if (mains[numeroJoueurActif][k] == null) {
                                                                                    mains[numeroJoueurActif][k] = CarteJeu[i][j];
                                                                                    CarteJeu[i][j] = null;
                                                                                    exemplaireCarteJeu[i][j] = 0;
                                                                                    $('#emplacementJoueur' + lettreJoueur(i) + j).children().remove();
                                                                                    stop = true;
                                                                                }
                                                                            }
                                                                            if (CarteJeu[i][j] != null) {
                                                                                mains[numeroJoueurActif][mains[numeroJoueurActif].length] = CarteJeu[i][j];
                                                                                CarteJeu[i][j] = null;
                                                                                exemplaireCarteJeu[i][j] = 0;
                                                                                $('#emplacementJoueur' + lettreJoueur(i) + j).children().remove();
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    updateAffichageImage();
                                                    $(this).dialog('close');
                                                } else { //Si le joueur décide de choisir une carte dans la défausse.
                                                    $('#labelChoix').text('Choisissez la carte de la défausse désirée.');
                                                    $('#divChoixContenu').children().remove('ul');
                                                    $(this).dialog({
                                                        width: 575,
                                                        buttons: {
                                                            Confirmer: function () {
                                                                if (carteSelectionne == null) {
                                                                    popUpAvertissement('Veuillez d\'abord choisir une carte.');
                                                                } else {
                                                                    for (var i = 0; i < mains[numeroJoueurActif].length; i++) {
                                                                        if (mains[numeroJoueurActif][i] == null) {
                                                                            if (paquetDecharge[carteSelectionne] != null) {
                                                                                mains[numeroJoueurActif][i] = paquetDecharge[carteSelectionne];
                                                                                paquetDecharge[carteSelectionne] = null;
                                                                            }
                                                                        }
                                                                    }
                                                                    if (paquetDecharge[carteSelectionne] != null) {
                                                                        mains[numeroJoueurActif][mains[numeroJoueurActif.length]] = paquetDecharge[joueurSelectionne];
                                                                        paquetDecharge[carteSelectionne] = null;
                                                                    }
                                                                    $(this).dialog('close');
                                                                    updateAffichageImage();
                                                                }
                                                            }
                                                        }
                                                    });
                                                    //Crée la liste des cartes de la défausse.
                                                    var ul = document.createElement('ul');
                                                    ul.id = 'listeCartes';
                                                    $('#divChoixContenu').append(ul);

                                                    var carteSelectionne;
                                                    paquetDecharge.forEach(function (item, index) {
                                                        if (paquetDecharge[index] != null) {
                                                            var li = document.createElement('li');
                                                            li.className = 'listeChoixCarte';
                                                            var carte = document.createElement('img');
                                                            carte.id = index;
                                                            carte.className = 'cartesListe'
                                                            carte.src = 'ressources/' + item.nomImage;
                                                            $(carte).click(function () {
                                                                if (carteSelectionne != null) {
                                                                    $('.cartesListe').removeAttr('style');
                                                                }

                                                                $(this).css('-moz-box-shadow', '0 0 15px 10px #000');
                                                                $(this).css('-webkit-box-shadow', '0 0 15px 10px #000');
                                                                $(this).css('box-shadow', '0px 0px 15px 10px #000');
                                                                carteSelectionne = index;
                                                            });

                                                            $(ul).append(li);
                                                            $(li).append(carte);
                                                        }
                                                    });
                                                }
                                            } else {
                                                popUpAvertissement('Veuillez choisir un option.');
                                            }
                                        }
                                    },
                                    draggable: false,
                                    resizable: false,
                                    modal: true,
                                    height: 575,
                                    width: 500,
                                    hide: 'fade',
                                    show: 'fade'
                                });

                                //Crée la liste de choix.
                                var ul = document.createElement('ul');
                                ul.id = 'listeJoueur';
                                $('#divChoixContenu').append(ul);

                                var poisson = false;
                                for (var i = 0; i < nombreJoueur; i++) {
                                    if (i != numeroJoueurActif) {
                                        for (var j = 0; j < CarteJeu[i].length; j++) {
                                            if (poisson !== true) {
                                                if (CarteJeu[i][j] != null) {
                                                    if (CarteJeu[i][j].type === typeEnum.salmonide) {
                                                        poisson = true;
                                                        var li = document.createElement('li');
                                                        li.style.listStyleType = 'none';
                                                        li.className = 'listeJoueur';
                                                        li.id = '1';
                                                        li.innerHTML = 'Pêcher la carte «Salmonidé» d\'un adversaire et la placer dans votre main.';
                                                        $(ul).append(li);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (paquetDecharge.length > 0) {
                                    var li = document.createElement('li');
                                    li.style.listStyleType = 'none';
                                    li.className = 'listeJoueur';
                                    li.id = '2';
                                    li.innerHTML = 'Choisir une carte dans la décharge.';
                                    $(ul).append(li);
                                }

                                $(function () {
                                    $(ul).selectable({
                                        stop: function (evt, ui) {
                                            $(evt.target).children('.ui-selected').not(':first').removeClass('ui-selected');
                                        },
                                        selected: function (evt, ui) {
                                            joueurSelectionne = ui.selected;
                                        }
                                    });
                                });
                                //-------------Carte Émergence--------------------
                            } else if (carteDrag.nom === nomEnum.emergence) {
                                var ordreSelectionne;
                                var tabOrdre = new Array(5);
                                paquetDecharge.push(carteDrag);
                                ui.draggable.remove();
                                supprimerCartePrecise(carteDragNumero);
                                updateAffichageImage();
                                $('#divChoixContenu').children().remove('ul');
                                $('#labelChoix').text('Veuillez choisir un ordre de «Macroinvertébrés» à retourner dans les mains de leurs joueurs respectifs.');

                                var ul = document.createElement('ul');
                                ul.id = 'listeJoueur';
                                $('#divChoixContenu').append(ul);

                                for (var i = 0; i < nombreJoueur; i++) {
                                    for (var j = 0; j < CarteJeu[i].length; j++) {
                                        if (CarteJeu[i][j] != null) {
                                            if (CarteJeu[i][j].type === typeEnum.macroInvertebre) {
                                                if (CarteJeu[i][j].typeMacro === typeMacroEnum.ephemeroptere) {
                                                    tabOrdre[0] = typeMacroEnum.ephemeroptere;
                                                } else if (CarteJeu[i][j].typeMacro === typeMacroEnum.trichoptere) {
                                                    tabOrdre[1] = typeMacroEnum.trichoptere;
                                                } else if (CarteJeu[i][j].typeMacro === typeMacroEnum.plecoptere) {
                                                    tabOrdre[2] = typeMacroEnum.plecoptere;
                                                } else if (CarteJeu[i][j].typeMacro === typeMacroEnum.odonate) {
                                                    tabOrdre[3] = typeMacroEnum.odonate;
                                                } else if (CarteJeu[i][j].typeMacro === typeMacroEnum.diptere) {
                                                    tabOrdre[4] = typeMacroEnum.diptere;
                                                }
                                            }
                                        }
                                    }
                                }
                                /* pop-up contenant les type de macro-invertébrés présent en jeu et pouvant être tuer
                                un clique sur le type puis sur confirmer détruit tout les macro-invertébrés de ce type. */

                                tabOrdre.forEach(function (item, index) {
                                    if (tabOrdre[index] != null) {
                                        var li = document.createElement('li');
                                        li.style.listStyleType = 'none';
                                        li.className = 'listeJoueur';
                                        li.innerHTML = tabOrdre[index];
                                        $(ul).append(li);
                                    }
                                });

                                $(function () {
                                    $(ul).selectable({
                                        stop: function (evt, ui) {
                                            $(evt.target).children('.ui-selected').not(':first').removeClass('ui-selected');
                                        },
                                        selected: function (evt, ui) {
                                            ordreSelectionne = ui.selected.innerHTML;
                                        }
                                    });
                                });

                                $('#divChoix').dialog({
                                    classes: {
                                        'ui-dialog': 'no-x ui-corner-all',
                                    },
                                    buttons: {
                                        Confirmer: function () {
                                            if (ordreSelectionne != null) {
                                                for (var i = 0; i < nombreJoueur; i++) {
                                                    for (var j = 0; j < CarteJeu[i].length; j++) {
                                                        if (CarteJeu[i][j] != null && CarteJeu[i][j].typeMacro === ordreSelectionne) {
                                                            for (var k = 0; k < mains[i].length; k++) {
                                                                if (mains[i][k] === null) {
                                                                    if (CarteJeu[i][j] != null) {
                                                                        mains[i][k] = CarteJeu[i][j];
                                                                        CarteJeu[i][j] = null;
                                                                        $('#emplacementJoueur' + lettreJoueur(i) + j).children().remove();
                                                                    }
                                                                }
                                                            }
                                                            if (CarteJeu[i][j] != null) {
                                                                mains[i][mains[i].length] = CarteJeu[i][j];
                                                                CarteJeu[i][j] = null;
                                                                $('#emplacementJoueur' + lettreJoueur(i) + j).children().remove();
                                                            }
                                                        }
                                                    }
                                                }
                                                $(this).dialog('close');
                                                updateAffichageImage();
                                            } else {
                                                popUpAvertissement('Veuillez selectionner un ordre.')
                                            }
                                        }
                                    },
                                    draggable: false,
                                    resizable: false,
                                    modal: true,
                                    height: 575,
                                    width: 500,
                                    hide: 'fade',
                                    show: 'fade'
                                });
                            }
                        }
                    }
                },
                over: function (evt, ui) {
                    if (bonneZoneDrop(evt.target)) {
                        $(evt.target).addClass('droppable-hover');
                    }
                },
                out: function (evt, ui) {
                    $(evt.target).removeClass('droppable-hover');
                }
            });

            //Partie de droite.
            var divDroite = document.createElement('div');
            divDroite.id = 'divDroite';
            divDroite.className = 'divDroite';
            $('body').append(divDroite);

            //Paquet de charge
            var paquetCharge = document.createElement('div');
            paquetCharge.id = 'paquetCharge';
            paquetCharge.className = 'paquetCharge';
            var imagePaquet = document.createElement('img');
            imagePaquet.className = 'imageCharge'
            imagePaquet.setAttribute('src', 'ressources/grosPaquet.png');
            $(plateau).append(paquetCharge);
            $(paquetCharge).append(imagePaquet);

            //Paquet Défausse
            var paquetDefausse = document.createElement('div');
            paquetDefausse.id = 'paquetDefausse';
            paquetDefausse.className = 'paquetDefausse';
            $(plateau).append(paquetDefausse);

            //Paquet Intervention
            var paquetImageIntervention = document.createElement('div');
            paquetImageIntervention.id = 'paquetIntervention';
            paquetImageIntervention.className = 'paquetIntervention';
            $(plateau).append(paquetImageIntervention);

            var imageIntervention = document.createElement('img');
            imageIntervention.src = 'ressources/petitPaquet.png';
            imageIntervention.className = 'imageCarteJeu';
            $(paquetImageIntervention).append(imageIntervention);
        }

        //Fonction qui crée les divers emplacements sur le tableau.
        function creerEmplacementsPlateau() {
            $(function () {
                for (var i = 0; i < 6; i++) {
                    var emplacementJoueurA = document.createElement('div');
                    emplacementJoueurA.id = 'emplacementJoueurA' + i;
                    emplacementJoueurA.className = 'emplacementJoueurA';
                    emplacementJoueurA.style.left = 116 + 66 * (i + 1) + 'px';
                    emplacementJoueurA.style.bottom = '30px';
                    $('#plateau').append(emplacementJoueurA);

                    var emplacementJoueurB = document.createElement('div');
                    emplacementJoueurB.id = 'emplacementJoueurB' + i;
                    emplacementJoueurB.className = 'emplacementJoueurB';
                    emplacementJoueurB.style.left = 116 + 66 * (i + 1) + 'px';
                    emplacementJoueurB.style.top = '30px';
                    $('#plateau').append(emplacementJoueurB);

                    if (nombreJoueur >= 3) {// si 3 joueurs.
                        var emplacementJoueurC = document.createElement('div');
                        emplacementJoueurC.id = 'emplacementJoueurC' + i;
                        emplacementJoueurC.className = 'emplacementJoueurC';
                        emplacementJoueurC.style.top = 100 + 66 * (i + 1) + 'px';
                        emplacementJoueurC.style.left = '46px';
                        $('#plateau').append(emplacementJoueurC);
                    }
                    if (nombreJoueur === 4) {//Si 4 joueurs.
                        var emplacementJoueurD = document.createElement('div');
                        emplacementJoueurD.id = 'emplacementJoueurD' + i;
                        emplacementJoueurD.className = 'emplacementJoueurD';
                        emplacementJoueurD.style.top = 100 + 66 * (i + 1) + 'px';
                        emplacementJoueurD.style.right = '46px';
                        $('#plateau').append(emplacementJoueurD);
                    }
                }
                for (var i = 6; i < 10; i++) {
                    var emplacementJoueurA = document.createElement('div');
                    emplacementJoueurA.id = 'emplacementJoueurA' + i;
                    emplacementJoueurA.className = 'emplacementJoueurA';
                    emplacementJoueurA.style.left = 182 + 66 * (i - 5) + 'px';
                    emplacementJoueurA.style.bottom = '131px';
                    $('#plateau').append(emplacementJoueurA);

                    var emplacementJoueurB = document.createElement('div');
                    emplacementJoueurB.id = 'emplacementJoueurB' + i;
                    emplacementJoueurB.className = 'emplacementJoueurB';
                    emplacementJoueurB.style.left = 182 + 66 * (i - 5) + 'px';
                    emplacementJoueurB.style.top = '130px';
                    $('#plateau').append(emplacementJoueurB);

                    if (nombreJoueur >= 3) {//Si 3 joueurs.
                        var emplacementJoueurC = document.createElement('div');
                        emplacementJoueurC.id = 'emplacementJoueurC' + i;
                        emplacementJoueurC.className = 'emplacementJoueurC';
                        emplacementJoueurC.style.top = 166 + 66 * (i - 5) + 'px';
                        emplacementJoueurC.style.left = '146px'
                        $('#plateau').append(emplacementJoueurC);
                    }

                    if (nombreJoueur === 4) {//Si 4 joueurs.
                        var emplacementJoueurD = document.createElement('div');
                        emplacementJoueurD.id = 'emplacementJoueurD' + i;
                        emplacementJoueurD.className = 'emplacementJoueurD';
                        emplacementJoueurD.style.top = 166 + 66 * (i - 5) + 'px';
                        emplacementJoueurD.style.right = '146px';
                        $('#plateau').append(emplacementJoueurD);
                    }
                }
                $(function () {//Ajoute le droppable à chaque zone.
                    $('.emplacementJoueurA, .emplacementJoueurB, .emplacementJoueurC, .emplacementJoueurD').droppable({
                        tolerance: 'pointer',
                        drop: function (evt, ui) {
                            if (carteDrag.nom != nomEnum.deversement && carteDrag.nom != nomEnum.erosion && carteDrag.nom != nomEnum.pollutionOrganique && carteDrag.type != typeEnum.speciale && carteDrag.type != typeEnum.action) {
                                if (bonneZoneDrop(evt.target)) {//Si l'endroit que nous voulons droper est à la bonne place.
                                    if (accepterDrop(evt.target)) {
                                        if ($(this).children().length < 1) {//Si l'endroit où on drope est vide.
                                            if (verifierCartePresente(carteDrag.nomImage) === '') {//Si la carte n'est pas déjà présente.
                                                if (carteDrag.type === typeEnum.macroInvertebre) {
                                                    if (carteDrag.predateur === 1) {//Si c'est un prédateur, démarre le processus de miam miam.
                                                        taillePredateur = carteDrag.taille;
                                                        onDrop(evt, ui, this);
                                                        mangerPredateur = true;
                                                        popUpConfirmation('Vous devez sélectionner un «mMacroinvertébré» de taille inférieur à ' + taillePredateur + ' à manger.');
                                                        brillanceCarteMangeable(true);
                                                        griserZone(true, false, true);
                                                    } else {//Sinon, met simplement la carte.
                                                        onDrop(evt, ui, this);
                                                    }
                                                } else if (carteDrag.type === typeEnum.salmonide) {
                                                    taillePredateur = carteDrag.taille;
                                                    onDrop(evt, ui, this);
                                                    salmonide[numeroJoueurActif] = true;
                                                    mangerSalmonide = true;
                                                    tourSalmonide = 0;
                                                    popUpConfirmation('Vous devez sélectionner un «mMacroinvertébré» de taille inférieur à ' + taillePredateur + ' à manger.');
                                                    brillanceCarteMangeable(true);
                                                    griserZone(true, false, true);
                                                } else {//Sinon, met simplement la carte.
                                                    onDrop(evt, ui, this);
                                                }
                                            } else {
                                                if (carteDrag.type === typeEnum.macroInvertebre) {
                                                    if (carteDrag.predateur === 1) {//Si c'est un prédateur, démarre le processus de miam miam.
                                                        taillePredateur = carteDrag.taille;
                                                        onDrop(evt, ui, verifierCartePresente(carteDrag.nomImage));
                                                        mangerPredateur = true;
                                                        popUpConfirmation('Vous devez sélectionner un «mMacroinvertébré» de taille inférieur à ' + taillePredateur + ' à manger.');
                                                        brillanceCarteMangeable(true);
                                                    } else {//Sinon, mes simplement la carte.
                                                        onDrop(evt, ui, verifierCartePresente(carteDrag.nomImage));
                                                    }
                                                } else {//Sinon, mes simplement la carte.
                                                    onDrop(evt, ui, verifierCartePresente(carteDrag.nomImage));
                                                }
                                            }
                                            //sinon si l'endroit contient une carte.
                                        } else if ($(this).children().length >= 1) {
                                            if (carteDrag.type != typeEnum.perturbation) {
                                                var id;
                                                id = evt.target.id.substr(evt.target.id.length - 1);

                                                if (carteDrag.nom === CarteJeu[numeroJoueurActif][id].nom) {
                                                    if (!(CarteJeu[numeroJoueurActif][id].type === typeEnum.habitats && CarteJeu[numeroJoueurActif][id].perturber)) {
                                                        if (!(CarteJeu[numeroJoueurActif][id].type === typeEnum.bandeRiveraine && CarteJeu[numeroJoueurActif][id].perturber)) {
                                                            onDrop(evt, ui, this);
                                                        } else {
                                                            popUpErreur('Vous ne pouvez pas empiler sur une carte perturbée.')
                                                            ui.draggable.draggable({ revert: function (evt) { return revertCarte(evt, ui.draggable) } });
                                                        }
                                                    } else {
                                                        popUpErreur('Vous ne pouvez pas empiler sur une carte perturbée.')
                                                        ui.draggable.draggable({ revert: function (evt) { return revertCarte(evt, ui.draggable) } });
                                                    }
                                                } else {//Sinon, le drop n'est pas accepté.
                                                    ui.draggable.draggable({ revert: function (evt) { return revertCarte(evt, ui.draggable) } });
                                                    popUpErreur('Vous ne pouvez pas empiler des cartes différentes.');
                                                }
                                            } else {
                                                var zoneDrop = this;
                                                if (verifierPresencePrisSurFait().filter(function (value) { return value != null }).length === 0) {//Si un joueur a une carte pris sur le fait.
                                                    if ($(zoneDrop).children().length >= 2) {
                                                        deplacerCartePerturber(zoneDrop, evt, ui);
                                                    } else {
                                                        rendrePerturber(evt.target);
                                                        onDrop(evt, ui, zoneDrop);
                                                    }
                                                    updateAffichageImage();
                                                } else {
                                                    $('#divChoixContenu').children().remove('ul');
                                                    $('#labelChoix').text('Est-ce qu\'il y a un joueur qui désire utiliser sa carte «Pris sur le fait!» pour annuler la carte «' + premiereLettreMaj(carteDrag.nom) + '»?');
                                                    $('#divChoix').dialog({
                                                        classes: {
                                                            'ui-dialog': 'no-x ui-corner-all',
                                                        },
                                                        buttons: {
                                                            Confirmer: function () {
                                                                if (joueurSelectionne != null) {
                                                                    if (joueurSelectionne.innerHTML === 'Aucun joueur') {
                                                                        if ($(this).children().length >= 2) {
                                                                            deplacerCartePerturber(this, evt, ui);
                                                                        } else {
                                                                            rendrePerturber(evt.target);
                                                                            onDrop(evt, ui, zoneDrop);
                                                                        }
                                                                        updateAffichageImage();
                                                                        $(this).dialog('close');
                                                                    } else {
                                                                        paquetDecharge.push(carteDrag);
                                                                        supprimerCartePrecise(carteDragNumero);
                                                                        ui.draggable.remove();

                                                                        for (var i = 0; i < nombreJoueur; i++) {
                                                                            if (nomJoueur[i] === joueurSelectionne.innerHTML) {
                                                                                for (var j = 0; j < mains[i].length; j++) {
                                                                                    if (mains[i][j] != null) {
                                                                                        if (mains[i][j].nom === nomEnum.prisSurFait) {
                                                                                            paquetDecharge.push(mains[i][j]);
                                                                                            mains[i][j] = null;
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                        $(this).dialog('close');
                                                                    }
                                                                } else {
                                                                    popUpAvertissement('Veuillez choisir un option.');
                                                                }
                                                            }
                                                        },
                                                        draggable: false,
                                                        resizable: false,
                                                        modal: true,
                                                        height: 575,
                                                        width: 500,
                                                        hide: 'fade',
                                                        show: 'fade'
                                                    });

                                                    var ul = document.createElement('ul');
                                                    ul.id = 'listeJoueur';
                                                    $('#divChoixContenu').append(ul);

                                                    var tabJoueur = verifierPresencePrisSurFait();
                                                    for (var i = 0; i < tabJoueur.length; i++) {
                                                        if (tabJoueur[i] != null) {
                                                            var li = document.createElement('li');
                                                            li.style.listStyleType = 'none';
                                                            li.className = 'listeJoueur';
                                                            li.innerHTML = nomJoueur[i];
                                                            $(ul).append(li);
                                                        }
                                                    }
                                                    var li = document.createElement('li');
                                                    li.style.listStyleType = 'none';
                                                    li.className = 'listeJoueur';
                                                    li.innerHTML = 'Aucun joueur';
                                                    $(ul).append(li);

                                                    $(function () {
                                                        $(ul).selectable({
                                                            stop: function (evt, ui) {
                                                                $(evt.target).children('.ui-selected').not(':first').removeClass('ui-selected');
                                                            },
                                                            selected: function (evt, ui) {
                                                                joueurSelectionne = ui.selected;
                                                            }
                                                        });
                                                    });
                                                }
                                            }
                                        }
                                    } else {
                                        ui.draggable.draggable({ revert: function (evt) { return revertCarte(evt, ui.draggable) } });
                                    }
                                } else {//Respecte pas les conditions, donc drop pas accepté.
                                    ui.draggable.draggable({ revert: function (evt) { return revertCarte(evt, ui.draggable) } });
                                }
                            } else {
                                ui.draggable.draggable({ revert: function (evt) { return revertCarte(evt, ui.draggable) } });

                                if (carteDrag.type === typeEnum.habitats || carteDrag.type === typeEnum.macroInvertebre || carteDrag.type === typeEnum.bandeRiveraine || carteDrag.type === typeEnum.salmonide) {
                                    popUpErreur('Cette carte n\'est jouable que dans votre zone.');
                                } else if (carteDrag.type === typeEnum.perturbation) {
                                    popUpErreur('Cette carte n\'est jouable que dans la zone d\'un de vos adversaire ou directement sur le plateau.');
                                }
                            }
                        },
                        over: function (evt, ui) {
                            if (bonneZoneDrop(evt.target)) {
                                $(evt.target).addClass('droppable-hover');
                            }
                        },
                        out: function (evt, ui) {
                            $(evt.target).removeClass('droppable-hover');
                        }
                    });
                });
            });
        }

        //Fonction qui ajoute la partie de droite.
        function creerPartieDroite() {
            //Div des noms.
            var divNomJoueurs = document.createElement('div');
            divNomJoueurs.id = 'divNomJoueurs';
            divNomJoueurs.className = 'divNomJoueurs';

            if (nombreJoueur === 4) {//Selon le nombre de joueur, écrit les noms.
                divNomJoueurs.innerHTML = '<p class=titreEquipe><strong>Nom des équipes</strong></p>
<ul class=listeUlEquipe><li class=listeEquipe>Équipe A&nbsp;: ' + nomJoueur[0] + '</li><li class=listeEquipe>Équipe B&nbsp;: ' + nomJoueur[1] + '</li><li class=listeEquipe>Équipe C&nbsp;: ' + nomJoueur[2] + '</li><li class=listeEquipe>Équipe D&nbsp;: ' + nomJoueur[3] + '</li></ul>';
            } else if (nombreJoueur === 3) {
                divNomJoueurs.innerHTML = '<p class=titreEquipe><strong>Nom des équipes</strong></p>
<ul class=listeUlEquipe><li class=listeEquipe>Équipe A&nbsp;: ' + nomJoueur[0] + '</li><li class=listeEquipe>Équipe B&nbsp;: ' + nomJoueur[1] + '</li><li class=listeEquipe>Équipe C&nbsp;: ' + nomJoueur[2] + '</li></ul>';
            } else if (nombreJoueur === 2) {
                divNomJoueurs.innerHTML = '<p class=titreEquipe><strong>Nom des équipes</strong></p>
<ul class=listeUlEquipe><li class=listeEquipe>Équipe A&nbsp;: ' + nomJoueur[0] + '</li><li class=listeEquipe>Équipe B&nbsp;: ' + nomJoueur[1] + '</li></ul>';
            } else if (nombreJoueur === 1) {
                divNomJoueurs.innerHTML = '<p class=titreEquipe><strong>Nom des équipes</strong></p>
<ul class=listeUlEquipe><li class=listeEquipe>Équipe A&nbsp;: ' + nomJoueur[0] + '</li></ul>';
            }
            document.getElementById('divDroite').appendChild(divNomJoueurs);

            //Div des points de joueurs.
            var divTextePointsJoueurs = document.createElement('div');
            divTextePointsJoueurs.id = 'divTextePointsJoueurs';
            divTextePointsJoueurs.className = 'divTextePointsJoueurs';
            if (nombreJoueur === 4) {
                divTextePointsJoueurs.innerHTML = '<p class=titreEquipe><strong>Points</strong></p>
<ul class=listeUlEquipe><li class=listeEquipe>Équipe A&nbsp;: ' + pointsJoueur[0] + '</li><li class=listeEquipe>Équipe B&nbsp;: ' + pointsJoueur[1] + '</li><li class=listeEquipe>Équipe C&nbsp;: ' + pointsJoueur[2] + '</li><li class=listeEquipe>Équipe D&nbsp;: ' + pointsJoueur[3] + '</li></ul>';
            } else if (nombreJoueur === 3) {
                divTextePointsJoueurs.innerHTML = '<p class=titreEquipe><strong>Points</strong></p>
<ul class=listeUlEquipe><li class=listeEquipe>Équipe A&nbsp;: ' + pointsJoueur[0] + '</li><li class=listeEquipe>Équipe B&nbsp;: ' + pointsJoueur[1] + '</li><li class=listeEquipe>Équipe C&nbsp;: ' + pointsJoueur[2] + '</li></ul>';
            } else if (nombreJoueur === 2) {
                divTextePointsJoueurs.innerHTML = '<p class=titreEquipe><strong>Points</strong></p>
<ul class=listeUlEquipe><li class=listeEquipe>Équipe A&nbsp;: ' + pointsJoueur[0] + '</li><li class=listeEquipe>Équipe B&nbsp;: ' + pointsJoueur[1] + '</li></ul>';
            } else if (nombreJoueur === 1) {
                divTextePointsJoueurs.innerHTML = '<p class=titreEquipe><strong>Points</strong></p>
<ul class=listeUlEquipe><li class=listeEquipe>Équipe A&nbsp;: ' + pointsJoueur[0] + '</li></ul>';
            }
            document.getElementById('divDroite').appendChild(divTextePointsJoueurs);

            //Div points-ressources.
            var divTextePointsRessource = document.createElement('div');
            divTextePointsRessource.id = 'divTextePointsRessource';
            divTextePointsRessource.className = 'divTextePointsRessource';
            divTextePointsRessource.innerHTML = '<p class=titreRessource>Points-ressources de base&nbsp;: ' + pointsRessourcesBase[numeroJoueurActif] + '</p><p class=titreRessource>Points-ressources additionnels&nbsp;: ' + pointsRessourcesSuplementaire[numeroJoueurActif] + '</p><p class=titreRessource>Points-ressources totaux&nbsp;: ' + pointsRessourcesTotal[numeroJoueurActif] + '</p><p class=titreRessource>Points-ressources utilisés&nbsp;: ' + pointsRessourcesUtiliser[numeroJoueurActif] + '</p><p class=titreRessource><strong>Points-ressources restants&nbsp;: ' + pointsRessourcesRestant[numeroJoueurActif] + '</strong></p>';
            document.getElementById('divDroite').appendChild(divTextePointsRessource);

            //Div du nom du joueur en cours.
            var divTexteJoueurEnCour = document.createElement('div');
            divTexteJoueurEnCour.id = 'divJoueurEnCours';
            divTexteJoueurEnCour.className = 'divJoueurEnCours';
            divTexteJoueurEnCour.innerHTML = 'Tour de : <strong>' + nomJoueur[numeroJoueurActif] + '</strong>';
            document.getElementById('divDroite').appendChild(divTexteJoueurEnCour);

            //Div de la difficulté en cours.
            var divTexteDifficulte = document.createElement('div');
            divTexteDifficulte.id = 'divDifficultePartie';
            divTexteDifficulte.className = 'divDifficultePartie';
            divTexteDifficulte.innerHTML = 'Difficulté de la partie : <strong>' + retourDifficulte() + '</strong>';
            document.getElementById('divDroite').appendChild(divTexteDifficulte);

            //Bouton du tableau des cartes.
            var buttonTableauCarte = document.createElement('button');
            buttonTableauCarte.id = 'buttonTableauCarte';
            buttonTableauCarte.className = 'buttonJeu';
            buttonTableauCarte.setAttribute('onclick', 'popUpTableauCarte()');
            buttonTableauCarte.textContent = 'Voir le tableau des cartes';
            $('#divDroite').append(buttonTableauCarte);

            //Bouton des règles.
            var buttonRegle = document.createElement('button');
            buttonRegle.id = 'buttonRegle';
            buttonRegle.className = 'buttonJeu';
            buttonRegle.setAttribute('onclick', 'popUpRegle()');
            buttonRegle.textContent = 'Voir les règles';
            $('#divDroite').append(buttonRegle);

            //Bouton pour passer le tour.
            var buttonPasserTour = document.createElement('button');
            buttonPasserTour.id = 'buttonPasserTour';
            buttonPasserTour.className = 'buttonJeu';
            buttonPasserTour.setAttribute('onclick', 'passerTour()');
            buttonPasserTour.textContent = 'Joueur suivant';
            document.getElementById('divDroite').appendChild(buttonPasserTour);

            //Bouton pour les options.
            var buttonOption = document.createElement('button');
            buttonOption.id = 'buttonOption';
            buttonOption.className = 'buttonJeu';
            buttonOption.textContent = 'Options';
            buttonOption.setAttribute('onclick', 'ouvrirOptionsEnJeu()');
            document.getElementById('divDroite').appendChild(buttonOption);
        }

        //Fonction qui crée l'espace de la main.
        function creerMain() {
            for (var i = 0; i < 6; i++) {
                var li = document.createElement('li');
                li.className = 'liMain';
                li.id = 'liMain' + i;
                document.getElementById('divMain').appendChild(li);

                var divCarte = document.createElement('div');
                divCarte.id = 'divCarte' + i;
                divCarte.className = 'divCarte';
                li.appendChild(divCarte);
            }
        }

        //Fonction qui créer la div qui servira pour les pop-ups d'erreur.
        function instancierDivPopUp() {
            //Div Erreur
            var divErreur = document.createElement('div');
            divErreur.id = 'divErreur';
            divErreur.className = 'divErreur';
            $('#plateau').append(divErreur);

            var divTexteErreur = document.createElement('div');
            divTexteErreur.id = 'divTexteErreur';
            divTexteErreur.className = 'divTexteErreur';
            $('#divErreur').append(divTexteErreur);

            //Div Début de Tour
            var divDebutTour = document.createElement('div');
            divDebutTour.id = 'divDebutTour';
            divDebutTour.className = 'divDebutTour';
            $('#plateau').append(divDebutTour);

            var divTexteDebutTour = document.createElement('div');
            divTexteDebutTour.id = 'divTexteDebutTour';
            divTexteDebutTour.className = 'divTexteDebutTour';
            $('#divDebutTour').append(divTexteDebutTour);

            //Div Règle
            var divRegle = document.createElement('div');
            divRegle.id = 'divRegle';
            divRegle.className = 'divRegle';
            divRegle.innerHTML = "<p>Dur&eacute;e<br />Pour 2 joueurs&nbsp;: 45 &agrave; 60 minutes<br />Pour 3 &agrave; 4 joueurs&nbsp;: 60 &agrave; 90 minutes</p><p>But du jeu<br />Le but de ce jeu est de b&acirc;tir le meilleur &eacute;cosyst&egrave;me riverain, en cr&eacute;ant un environnement favorable dans lequel pourront &eacute;voluer une grande vari&eacute;t&eacute; de macroinvert&eacute;br&eacute;s.</p><p>Fin du jeu<br />Le jeu peut se terminer de deux fa&ccedil;ons&nbsp;:</p><p>1. Lorsque les conditions des habitats permettent &agrave; la carte<br />Salmonid&eacute; de rester en jeu apr&egrave;s un tour complet.</p><p>2. Lorsqu&rsquo;il ne reste plus de cartes dans la charge.</p> <p>Pointage<br />Chaque joueur compte ses points selon la m&eacute;thode qui suit.</p><p>&bull; La valeur de chacune des cartes est indiqu&eacute;e dans le coin sup&eacute;rieur gauche. Seules les cartes en jeu peuvent &ecirc;tre comptabilis&eacute;es.</p><p>&bull; Les cartes subissant une perturbation et les cartes<br />Perturbation ne valent aucun point.</p><p>&bull; Lorsqu&rsquo;il y a des cartes identiques, la premi&egrave;re vaut tous ses points et les suivantes valent seulement un point chacune.<br />Le gagnant est celui qui poss&egrave;de le plus grand nombre de points, &eacute;tant g&eacute;n&eacute;ralement celui avec la plus grande vari&eacute;t&eacute; de cartes en jeu.</p><p>R&egrave;glements<br />D&Eacute;ROULEMENT DU JEU<br />Les joueurs utilisent deux paquets de cartes. Le premier paquet, nomm&eacute; la charge, correspond aux cartes non jou&eacute;es qui sont plac&eacute;es face contre table. Le deuxi&egrave;me paquet, nomm&eacute; la d&eacute;charge, correspond aux cartes jou&eacute;es et rejet&eacute;es. Les cartes en jeu sont plac&eacute;es sur la table, face vers le haut, devant le joueur qui les poss&egrave;de. Les cartes en main ne doivent en aucun temps &ecirc;tre vues par les autres joueurs. Les cartes Intervention (grises) ne sont pas dans la charge; elles sont mises de c&ocirc;t&eacute; jusqu&rsquo;&agrave; ce qu&rsquo;un joueur en ait besoin.</p><p>&bull; Le nombre de points-ressources n&eacute;cessaire &agrave; la mise en jeu des cartes est inscrit dans le coin sup&eacute;rieur gauche de la carte (voir Configuration des cartes).<br />&bull; Pour jouer une carte macroinvert&eacute;br&eacute;, le joueur doit d&eacute;j&agrave; avoir en jeu la ou les cartes Habitat repr&eacute;sent&eacute;es en haut &agrave; gauche de la carte &agrave; jouer. Ce sont les habitats n&eacute;cessaires &agrave; la survie du macroinvert&eacute;br&eacute;. Si un habitat est perturb&eacute; par un adversaire et que le joueur vis&eacute; ne peut sauver la carte &agrave; son tour, les cartes macroinvert&eacute;br&eacute; qui en d&eacute;pendent vont &agrave; la d&eacute;charge.<br />&bull; Pour &ecirc;tre mis en jeu, les macroinvert&eacute;br&eacute;s pr&eacute;dateurs doivent manger un macroinvert&eacute;br&eacute; en jeu de taille inf&eacute;rieure.<br />&bull; &Agrave; la fin de son tour, le joueur doit avoir en main un maximum de quatre cartes. S&rsquo;il en poss&egrave;de davantage, il devra mettre &agrave; la d&eacute;charge les cartes exc&eacute;dentaires. Si le joueur poss&egrave;de<br /> moins de quatre cartes en main, il ne peut pas se d&eacute;barrasser<br />des cartes non d&eacute;sir&eacute;es.</p><p>&bull; Lorsque le joueur d&eacute;clare son jeu termin&eacute;, ou s&rsquo;il joue toutes ses cartes, le joueur suivant peut commencer son tour.</p><p>CARTES EN JEU<br />AU JEU<br />&bull; Au d&eacute;but de son tour, le joueur pige des cartes dans la charge afin d&rsquo;avoir six cartes en main.<br />&bull; Le joueur place les cartes qu&rsquo;il d&eacute;sire jouer sur la table, &agrave; la vue de tous. Ces cartes resteront ainsi, devant le joueur, sauf si elles sont envoy&eacute;es &agrave; la d&eacute;charge par d&rsquo;autres cartes ou si leur dur&eacute;e de vie se termine.<br />&bull; Les cartes ne peuvent &ecirc;tre mises en jeu qu&rsquo;au moment de jouer, &agrave; l&rsquo;exception des cartes Sp&eacute;ciale qui peuvent &ecirc;tre jou&eacute;es &agrave; n&rsquo;importe quel moment.<br /> &bull; &Agrave; chaque tour, le joueur poss&egrave;de cinq points-ressources. Un joueur peut choisir de ne pas utiliser tous les points-ressources auxquels il a droit; les points non utilis&eacute;s sont alors perdus et ne peuvent &ecirc;tre utilis&eacute;s au prochain tour.<br />&bull; Des points-ressources suppl&eacute;mentaires peuvent &ecirc;tre utilis&eacute;s si le joueur a mis en jeu une ou des cartes Bande riveraine ou la carte r&eacute;tention (voir les instructions au bas de ces cartes).<br /><br />Chaque carte poss&egrave;de des crit&egrave;res diff&eacute;rents d&rsquo;utilisation. R&eacute;f&eacute;rez- vous &agrave; la section Configuration des cartes et au tableau des Types de cartes pour en prendre connaissance.<br />Un m&ecirc;me joueur ne peut pas avoir en jeu plus de trois cartes Bande riveraine et huit cartes Habitat. De plus, une fois sur la table, ces cartes ne peuvent pas &ecirc;tre retir&eacute;es du jeu. Elles peuvent cependant &ecirc;tre modifi&eacute;es ou d&eacute;sactiv&eacute;es par des cartes Perturbation, ou restaur&eacute;es par des cartes action.<br /></p>";

            $('body').append(divRegle);

            //divTableauCarte
            var divTableauCarte = document.createElement('div');
            divTableauCarte.id = 'divTableauCarte';
            divTableauCarte.className = 'divTableauCarte';
            divTableauCarte.innerHTML = "<table><tbody><tr><td><p><strong>NOM</strong></p><p>&nbsp;</p></td><td><p><strong>DESCRIPTION</strong></p></td><td><p><strong>CONDITIONS</strong></p></td><td><p><strong>ASTUCES</strong></p></td></tr><tr><td><p>Habitat</p><p>&nbsp;</p></td><td><p>5 types de cartes <strong>Habitat</strong>&nbsp;:&nbsp;</p><p>Sable</p><p>Gravier</p><p>Galets</p><p>Rapides</p><p>Fosse</p></td><td><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Chaque joueur peut avoir un maximum de 8 cartes <strong>Habitat</strong> en jeu, actives ou perturb&eacute;es.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Une carte <strong>Habitat</strong> peut &ecirc;tre transform&eacute;e ou rendue inutilisable par une carte <strong>Perturbation</strong>. Une carte perturb&eacute;e reste en jeu, mais ne vaut aucun point tant qu&rsquo;elle n&rsquo;est pas restaur&eacute;e.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; &Agrave; la fin du tour, si le joueur ne peut pas restaurer l&rsquo;habitat perturb&eacute; avec les cartes qu&rsquo;il a en main, tous les macroinvert&eacute;br&eacute;s d&eacute;pendant de cette carte <strong>Habitat</strong> meurent et sont jet&eacute;s dans la d&eacute;charge.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Une carte perturb&eacute;e peut &ecirc;tre utilis&eacute;e en tenant compte des indications et contraintes inscrites sur la carte <strong>Perturbation</strong>.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Une carte perturb&eacute;e peut &ecirc;tre restaur&eacute;e par une carte <strong>Action </strong>ou lorsque la dur&eacute;e de vie de la <strong>Perturbation</strong> est &eacute;chue.</p></td><td><p>Une combinaison d&rsquo;habitats diversifi&eacute;s est souhaitable pour mettre en jeu plusieurs organismes diff&eacute;rents.</p><p>&nbsp;</p></td></tr><tr><td><p>Bande riveraine</p><p>&nbsp;</p></td><td><p>3 types de cartes <strong>Bande riveraine&nbsp;:</strong> Arbres, Arbustes, Herbac&eacute;es naturelles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>&nbsp;</p></td><td><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Chaque joueur peut mettre en jeu un maximum de 3 cartes <strong>Bande riveraine</strong>.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Leur mise en jeu permet d&rsquo;obtenir des points-ressources suppl&eacute;mentaires &agrave; chaque tour suivant. Une carte <strong>Bande riveraine</strong> en jeu &eacute;quivaut &agrave; 1 point-ressource suppl&eacute;mentaire. 2 cartes ajoutent 2 points-ressources. 3 cartes offrent 3 points-ressources, mais si elles sont diff&eacute;rentes, le joueur obtient 5 points-ressources suppl&eacute;mentaires (pour un total de 10 points par tour)!</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Une carte <strong>Bande riveraine</strong> peut &ecirc;tre rendue inutilisable ou d&eacute;truite par une carte <strong>Perturbation</strong>. La carte inutilisable reste en jeu et peut &ecirc;tre restaur&eacute;e par une carte <strong>Action</strong>.</p></td><td><p>Des points-ressources suppl&eacute;mentaires sont n&eacute;cessaires pour la mise en jeu de certaines cartes. Il s&rsquo;av&egrave;re donc avantageux de poss&eacute;der les 3 types de cartes <strong>Bande riveraine</strong>.</p><p>&nbsp;</p></td></tr><tr><td><p>Macroinvert&eacute;br&eacute;</p><p>&nbsp;</p></td><td><p>25 types de cartes</p><p>Pr&eacute;dateur&nbsp;: pour mettre cette carte en jeu, le joueur doit envoyer</p><p>&agrave; la d&eacute;charge un <strong>Macroinvert&eacute;br&eacute;</strong> dont la taille est inf&eacute;rieure au pr&eacute;dateur. Cette proie peut &ecirc;tre dans le jeu du joueur ou dans celui de l&rsquo;adversaire.</p><p>&nbsp;</p></td><td><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Pour mettre en jeu une carte <strong>Macroinvert&eacute;br&eacute;</strong>, tous les habitats requis doivent &ecirc;tre dans le jeu du joueur (voir Configuration des cartes).</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Ce symbole indique que n&rsquo;importe quel habitat convient au macroinvert&eacute;br&eacute;.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Si un adversaire transforme ou rend inutilisable une carte <strong>Habitat</strong> essentielle pour certains des macroinvert&eacute;br&eacute;s mis en jeu, le joueur concern&eacute; doit attendre son tour pour tenter de restaurer la carte <strong>Habitat</strong> et sauver ainsi ses macroinvert&eacute;br&eacute;s. Si aucune carte de sa main ne lui permet de restaurer l&rsquo;habitat, les macroinvert&eacute;br&eacute;s d&eacute;pendant de cette carte <strong>Habitat</strong> vont &agrave; la d&eacute;charge.</p><p>&nbsp;</p></td><td><p>Mangez les macroinvert&eacute;br&eacute;s de vos adversaires valant le plus de points!</p><p>&nbsp;</p></td></tr><tr><td><p>Salmonid&eacute;</p><p>&nbsp;</p></td><td><p>1 type de carte</p><p>&nbsp;</p></td><td><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Elle est utilis&eacute;e dans les m&ecirc;mes conditions que les cartes <strong>Macroinvert&eacute;br&eacute;</strong>.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Elle permet de mettre fin &agrave; la partie si elle reste en jeu apr&egrave;s un tour complet.</p></td><td><p>M&eacute;fiez-vous de la carte <strong>P&ecirc;cheur</strong>!</p><p>&nbsp;</p></td></tr><tr><td><p>Action</p><p>&nbsp;</p></td><td><p>3 types de cartes <strong>Action</strong>&nbsp;: Naturalisation, Am&eacute;nagement, Corv&eacute;e de nettoyage</p><p>&nbsp;</p></td><td><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Elle permet de restaurer les cartes <strong>Habitat</strong> et les cartes <strong>Bande riveraine</strong> qui sont perturb&eacute;es.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Une fois mise en jeu, elle est jet&eacute;e dans la d&eacute;charge avec la carte <strong>Perturbation</strong> qu&rsquo;elle annule. La carte <strong>Habitat</strong> ou <strong>Bande riveraine</strong> restaur&eacute;e demeure en jeu.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Pour l&rsquo;am&eacute;nagement de nouveaux habitats et de bandes riveraines, vous devez utiliser les cartes Intervention.</p></td><td><p>Leur nombre &eacute;tant restreint, assurez-vous de les utiliser &agrave; bon escient.</p><p>&nbsp;</p></td></tr><tr><td><p>R&egrave;glementation</p><p>&nbsp;</p></td><td><p>3 types de cartes <strong>R&egrave;glementation</strong>&nbsp;: Interdiction de jeter des ordures, Politiques de protection des rives, du littoral et des plaines inondables, Attestation d&rsquo;assainissement</p><p>&nbsp;</p></td><td><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Ces cartes permettent de pr&eacute;venir les perturbations.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Un joueur qui met en jeu une de ces cartes emp&ecirc;che de futures attaques provenant des cartes <strong>Perturbation</strong>.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Ces cartes sont permanentes et restent en jeu toute la partie.</p></td><td><p>Mettez-les en jeu le plus rapidement possible.</p><p>&nbsp;</p></td></tr><tr><td><p>Perturbation</p><p>&nbsp;</p></td><td><p>6 types de cartes <strong>Perturbation</strong>&nbsp;: D&eacute;versement, D&eacute;chets, Artificialisation, &Eacute;rosion, Pollution organique, <br /> Passage de tout-terrain</p><p>&nbsp;</p></td><td><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Ces cartes nuisent &agrave; l&rsquo;adversaire soit en rendant inutilisables ses cartes <strong>Habitat</strong> et <strong>Bande riveraine</strong>, soit en faisant fuir les macroinvert&eacute;br&eacute;s mis en jeu.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Le joueur choisit la ou les cartes qu&rsquo;il perturbe.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; La dur&eacute;e de ces cartes est variable, allant d&rsquo;un tour &agrave; permanente.</p></td><td><p>Une perturbation jou&eacute;e au bon moment permet de nuire efficacement &agrave; un adversaire!</p><p>&nbsp;</p></td></tr><tr><td><p>Sp&eacute;ciale</p><p>&nbsp;</p></td><td><p>9 types de cartes <strong>Sp&eacute;ciale</strong>&nbsp;: <br /> D&eacute;rivation, P&ecirc;cheur, Pr&eacute;dation, <br /> Pris sur le fait, &Eacute;mergence, <br /> Crue soudaine, Accumulation, Zonage, R&eacute;tention</p><p>&nbsp;</p></td><td><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Chaque carte <strong>Sp&eacute;ciale</strong> a des caract&eacute;ristiques propres qui peuvent nuire &agrave; l&rsquo;adversaire ou permettre d&rsquo;am&eacute;liorer le jeu du joueur.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Toutes les cartes sp&eacute;ciales vont directement &agrave; la d&eacute;charge apr&egrave;s leur utilisation.</p></td><td><p>Elles sont utilisables &agrave; n&rsquo;importe quel moment du jeu, que ce soit ou non votre tour.</p><p>&nbsp;</p></td></tr><tr><td><p>Intervention</p><p>&nbsp;</p></td><td><p>8 types de cartes <strong>Intervention</strong>&nbsp;: <br /> 5 cartes de type <strong>Habitat am&eacute;nag&eacute;</strong> et 3 cartes de type <strong>Bande riveraine am&eacute;nag&eacute;e</strong></p><p>&nbsp;</p></td><td><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Elles sont retir&eacute;es du paquet au d&eacute;but de la partie.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Elles sont mises en jeu lorsqu&rsquo;un joueur cr&eacute;e un habitat ou une bande riveraine gr&acirc;ce aux cartes <strong>Action</strong>, <strong>Am&eacute;nagement</strong> ou <strong>Naturalisation</strong>.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Le joueur prend la carte de son choix, selon les cartes <strong>Intervention</strong> disponibles.</p><p>&middot;&nbsp;&nbsp;&nbsp;&nbsp; Les cartes Intervention poss&egrave;dent les m&ecirc;mes caract&eacute;ristiques que les cartes <strong>Habitat</strong> et <strong>Bande riveraine</strong> qu&rsquo;elles repr&eacute;sentent.</p></td><td><p>Premier arriv&eacute;, premier servi! Une carte <strong>Intervention</strong> ne peut servir qu&rsquo;une seule fois dans le jeu.</p><p>&nbsp;</p></td></tr></tbody></table><p>&nbsp;</p>";
            $('body').append(divTableauCarte);

            //Div Choix
            var divChoix = document.createElement('div');
            divChoix.id = 'divChoix';
            divChoix.className = 'divChoix';
            $('body').append(divChoix);

            var divChoixContenu = document.createElement('div');
            divChoixContenu.id = 'divChoixContenu';
            $(divChoix).append(divChoixContenu);

            var labelChoix = document.createElement('label');
            labelChoix.id = 'labelChoix';
            $(divChoixContenu).append(labelChoix);
        }

        //Fonction qui retourne le nom du gagnant du poisson.
        function gagnantPoisson() {
            for (var i = 0; i < salmonide.length; i++) {
                if (salmonide[i] != null) {
                    if (salmonide[i]) {
                        if (tourSalmonide[i] != 0) {
                            return nomJoueur[i];
                        }
                    }
                }
            }
        }

        //Function qui retournera l'ordre des joueurs
        function placementFinal(){
            var placement = [nombreJoueur];
            for(var i = 0;i<nombreJoueur;i++){ placement[i]=pointsJoueur[i];
                                               }
                                               placement.sort(function(a, b){return a-b});
                                               return placement;
                                               }

        //Fonction qui retournera le nom des joueurs en ordre
        function ordreJoueur(){
            var placement = placementFinal();
            var ordreJoueur = [nombreJoueur];
            for(var i = 0; i<nombreJoueur;i++){ for(var j=0;j<placement.length;j++){
                    if(placement[j] === pointsJoueur[i]){
                        ordreJoueur[i] = nomJoueur[i];
                    }
                }
            }

            return ordreJoueur;
        }

        //Function qui affichera les crédits.
        function afficherCredits() {
            popUpCredits();
        }

        //Fonction qui sera appelé lors d'un clic sur le bouton sauvegarder
        function sauvegarderPartie(nom) {
            var paquetCarteJson = '[';
            var paquetDechargeJson = '[';
            var paquetInterventionJson = '[';
            var mainsJson = '[';
            var CarteJeuJson = '[';
            var nomJoueurJson = '[';
            var exemplaireCarteJeuJson = '[';
            var cartePerturbationJson = '[';
            var tableauRetentionJson = '[';
            var dificulteJson;
            var tableauPasserTourJson = '[';
            var nombreJoueurJson;
            var numeroJoueurActifJson;
            var tourJson;
            var facteurRotationJson;
            var deversementJson;
            var tempsDeversementJson;
            var numeroJoueurDeversementJson;
            var pointsRessourcesUtiliserJson;
            var habitatEroderJson;
            var bandeRiveraineEroderJson = '[';

            //Sauvegarde le paquet de cartes principales.
            paquetCarte.forEach(function (item, index) {
                if (item != null) {
                    paquetCarteJson += '{ "type":"' + item.type + '" , "nom":"' + item.nom + '" , "nomImage":"' + item.nomImage + '" , "coutRessources":' + item.coutRessources + '';
                    if (item.type === typeEnum.habitats) {
                        paquetCarteJson += ' , "habitats":"' + item.habitats + '" , "perturber":' + item.perturber + ' , "tempsPerturber":' + item.tempsPerturber + ' }';
                    } else if (item.type === typeEnum.salmonide) {
                        paquetCarteJson += ' , "condition":"' + item.condition + '" }';
                    } else if (item.type === typeEnum.bandeRiveraine) {
                        paquetCarteJson += ' , "perturber":' + item.perturber + ' , "tempsPerturber":' + item.tempsPerturber + ' }';
                    } else if (item.type === typeEnum.speciale || item.type === typeEnum.action || item.type === typeEnum.reglementation || item.type === typeEnum.intervention) {
                        paquetCarteJson += ' }';
                    } else if (item.type === typeEnum.perturbation) {
                        paquetCarteJson += ' , "tempsActif":' + item.tempsActif + ' }';
                    } else if (item.type === typeEnum.macroInvertebre) {
                        paquetCarteJson += ' , "tolerance":' + item.tolerance + ' , "taille":' + item.taille + ' , "predateur":' + item.predateur + ' , "typeMacro":"' + item.typeMacro + '" , "condition":"' + item.condition + '" }';
                    }
                } else {
                    paquetCarteJson += null;
                }
                if (index != paquetCarte.length - 1) {
                    paquetCarteJson += ','
                }
            });
            paquetCarteJson += ' ]';

            //Sauvegarde le paquet de cartes de la défausse.
            paquetDecharge.forEach(function (item, index) {
                if (item != null) {
                    paquetDechargeJson += '{ "type":"' + item.type + '" , "nom":"' + item.nom + '" , "nomImage":"' + item.nomImage + '" , "coutRessources":' + item.coutRessources + '';
                    if (item.type === typeEnum.habitats) {
                        paquetDechargeJson += ' , "habitats":"' + item.habitats + '" , "perturber":' + item.perturber + ' , "tempsPerturber":' + item.tempsPerturber + ' }';
                    } else if (item.type === typeEnum.salmonide) {
                        paquetDechargeJson += ' , "condition":"' + item.condition + '" }';
                    } else if (item.type === typeEnum.bandeRiveraine) {
                        paquetDechargeJson += ' , "perturber":' + item.perturber + ' , "tempsPerturber":' + item.tempsPerturber + ' }';
                    } else if (item.type === typeEnum.speciale || item.type === typeEnum.action || item.type === typeEnum.reglementation || item.type === typeEnum.intervention) {
                        paquetDechargeJson += ' }';
                    } else if (item.type === typeEnum.perturbation) {
                        paquetDechargeJson += ' , "tempsActif":' + item.tempsActif + ' }';
                    } else if (item.type === typeEnum.macroInvertebre) {
                        paquetDechargeJson += ' , "tolerance":' + item.tolerance + ' , "taille":' + item.taille + ' , "predateur":' + item.predateur + ' , "typeMacro":"' + item.typeMacro + '" , "condition":"' + item.condition + '" }';
                    }
                } else {
                    paquetDechargeJson += null;
                }
                if (index != paquetDecharge.length - 1) {
                    paquetDechargeJson += ','
                }
            });
            paquetDechargeJson += ' ]';

            //Sauvegarde le paquet de cartes intervention.
            paquetIntervention.forEach(function (item, index) {
                if (item != null) {
                    paquetInterventionJson += '{ "type":"' + item.type + '" , "nom":"' + item.nom + '" , "nomImage":"' + item.nomImage + '" , "coutRessources":' + item.coutRessources + ' }';
                } else {
                    paquetInterventionJson += null;
                }
                if (index != paquetIntervention.length - 1) {
                    paquetInterventionJson += ','
                }
            });
            paquetInterventionJson += ' ]';

            //Sauvegarde les mains de chaque joueur.
            mains.forEach(function (item1, index1) {
                mainsJson += '[';
                mains[index1].forEach(function (item, index) {
                    if (item != null) {
                        mainsJson += '{ "type":"' + item.type + '" , "nom":"' + item.nom + '" , "nomImage":"' + item.nomImage + '" , "coutRessources":' + item.coutRessources + '';
                        if (item.type === typeEnum.habitats) {
                            mainsJson += ' , "habitats":"' + item.habitats + '" , "perturber":' + item.perturber + ' , "tempsPerturber":' + item.tempsPerturber + ' }';
                        } else if (item.type === typeEnum.salmonide) {
                            mainsJson += ' , "condition":"' + item.condition + '" }';
                        } else if (item.type === typeEnum.bandeRiveraine) {
                            mainsJson += ' , "perturber":' + item.perturber + ' , "tempsPerturber":' + item.tempsPerturber + ' }';
                        } else if (item.type === typeEnum.speciale || item.type === typeEnum.action || item.type === typeEnum.reglementation || item.type === typeEnum.intervention) {
                            mainsJson += ' }';
                        } else if (item.type === typeEnum.perturbation) {
                            mainsJson += ' , "tempsActif":' + item.tempsActif + ' }';
                        } else if (item.type === typeEnum.macroInvertebre) {
                            mainsJson += ' , "tolerance":' + item.tolerance + ' , "taille":' + item.taille + ' , "predateur":' + item.predateur + ' , "typeMacro":"' + item.typeMacro + '" , "condition":"' + item.condition + '" }';
                        }
                    } else {
                        mainsJson += null;
                    }
                    if (index != mains[index1].length - 1) {
                        mainsJson += ','
                    }
                });
                mainsJson += ' ]';
                if (index1 != mains.length - 1) {
                    mainsJson += ',';
                }
            });
            mainsJson += ' ]';

            //Sauvegarde le jeu de chaque joueur.
            CarteJeu.forEach(function (item1, index1) {
                CarteJeuJson += '[';
                CarteJeu[index1].forEach(function (item, index) {
                    if (item != null) {
                        CarteJeuJson += '{ "type":"' + item.type + '" , "nom":"' + item.nom + '" , "nomImage":"' + item.nomImage + '" , "coutRessources":' + item.coutRessources + '';
                        if (item.type === typeEnum.habitats) {
                            CarteJeuJson += ' , "habitats":"' + item.habitats + '" , "perturber":' + item.perturber + ' , "tempsPerturber":' + item.tempsPerturber + ' }';
                        } else if (item.type === typeEnum.salmonide) {
                            CarteJeuJson += ' , "condition":"' + item.condition + '" }';
                        } else if (item.type === typeEnum.bandeRiveraine) {
                            CarteJeuJson += ' , "perturber":' + item.perturber + ' , "tempsPerturber":' + item.tempsPerturber + ' }';
                        } else if (item.type === typeEnum.speciale || item.type === typeEnum.action || item.type === typeEnum.reglementation || item.type === typeEnum.intervention) {
                            CarteJeuJson += ' }';
                        } else if (item.type === typeEnum.perturbation) {
                            CarteJeuJson += ' , "tempsActif":' + item.tempsActif + ' }';
                        } else if (item.type === typeEnum.macroInvertebre) {
                            CarteJeuJson += ' , "tolerance":' + item.tolerance + ' , "taille":' + item.taille + ' , "predateur":' + item.predateur + ' , "typeMacro":"' + item.typeMacro + '" , "condition":"' + item.condition + '" }';
                        }
                    } else {
                        CarteJeuJson += null;
                    }
                    if (index != CarteJeu[index1].length - 1) {
                        CarteJeuJson += ',';
                    }
                });
                CarteJeuJson += ' ]';
                if (index1 != CarteJeu.length - 1) {
                    CarteJeuJson += ',';
                }
            });
            CarteJeuJson += ' ]';

            //Sauvegarder le nom des joueurs
            nomJoueur.forEach(function (item, index) {
                nomJoueurJson += '"' + item + '"';

                if (index != nomJoueur.length - 1) {
                    nomJoueurJson += ','
                }
            });
            nomJoueurJson += ' ]';

            //Sauvegarder les exemplaires des cartes
            exemplaireCarteJeu.forEach(function (item1, index1) {
                exemplaireCarteJeuJson += '[';
                exemplaireCarteJeu[index1].forEach(function (item, index) {
                    exemplaireCarteJeuJson += item;
                    if (index != exemplaireCarteJeu[index1].length - 1) {
                        exemplaireCarteJeuJson += ',';
                    }
                });
                exemplaireCarteJeuJson += ' ]';
                if (index1 != exemplaireCarteJeu.length - 1) {
                    exemplaireCarteJeuJson += ',';
                }
            });
            exemplaireCarteJeuJson += ' ]';

            //Sauvegarde les cartes perturbation.
            cartePerturbation.forEach(function (item1, index1) {
                cartePerturbationJson += '[';
                cartePerturbation[index1].forEach(function (item, index) {
                    if (item != null) {
                        cartePerturbationJson += '{ "type":"' + item.type + '" , "nom":"' + item.nom + '" , "nomImage":"' + item.nomImage + '" , "coutRessources":' + item.coutRessources + ' , "tempsActif":' + item.tempsActif + ' }';
                    } else {
                        cartePerturbationJson += null
                    }
                    if (index != cartePerturbation[index1].length - 1) {
                        cartePerturbationJson += ',';
                    }
                });
                cartePerturbationJson += ' ]';
                if (index1 != cartePerturbation.length - 1) {
                    cartePerturbationJson += ',';
                }
            });
            cartePerturbationJson += ' ]';

            //Sauvegarder l'etat retention des joueurs.
            tableauRetention.forEach(function (item, index) {
                tableauRetentionJson += item;
                if (index != tableauRetention.length - 1) {
                    tableauRetentionJson += ',';
                }
            });
            tableauRetentionJson += ' ]';

            //Sauvegarde la difficulté de la partie.
            dificulteJson = difficulte;

            //Sauvegarde l'état PasserTour des joueurs
            tableauPasserTour.forEach(function (item, index) {
                tableauPasserTourJson += item;
                if (index != tableauPasserTour.length - 1) {
                    tableauPasserTourJson += ',';
                }
            });
            tableauPasserTourJson += ' ]';

            //Sauvegarde le nombre de joueurs.
            nombreJoueurJson = nombreJoueur;

            //Sauvegarde le numero du joueur actif.
            numeroJoueurActifJson = numeroJoueurActif;

            //Sauvegarde le numero du tour.
            tourJson = tour;

            //Sauvegarde le facteur rotation(pour savoir la position du plateau)
            facteurRotationJson = facteurRotation;

            //Sauvegarde l'état déversement
            deversementJson = deversement;

            //Sauvegarde le temps restant avant un déversement
            tempsDeversementJson = tempsDeversement;

            //Sauvegarde le numero du joueur qui à joué deversement;
            numeroJoueurDeversementJson = numeroJoueurDeversement;

            //Sauvegarde les points-ressources restant du joueur actif.
            pointsRessourcesUtiliserJson = pointsRessourcesUtiliser[numeroJoueurActif];

            //Sauvegarde l'habitat érodé
            if (habitatEroder != null) {
                habitatEroderJson += '{ "type":"' + habitatEroder.type + '" , "nom":"' + habitatEroder.nom + '" , "nomImage":"' + habitatEroder.nomImage + '" , "coutRessources":' + habitatEroder.coutRessources + '" , "habitats":"' + habitatEroder.habitats + '" , "perturber":' + habitatEroder.perturber + ' , "tempsPerturber":' + habitatEroder.tempsPerturber + ' }';
            } else {
                habitatEroderJson = null;
            }

            //Sauvegarde la bandeRiveraine érodée
            if (bandeRiveraineEroder[0] != null) {
                bandeRiveraineEroderJson += '{ "type":"' + bandeRiveraineEroder[0].type + '" , "nom":"' + bandeRiveraineEroder[0].nom + '" , "nomImage":"' + bandeRiveraineEroder[0].nomImage + '" , "coutRessources":' + bandeRiveraineEroder[0].coutRessources + ' , "perturber":' + bandeRiveraineEroder[0].perturber + ' , "tempsPerturber":' + bandeRiveraineEroder[0].tempsPerturber + ' } , ' + bandeRiveraineEroder[1] + ' ]';
            } else {
                bandeRiveraineEroderJson += null + ', ' + null + ' ]';
            }

            //Créer un grand fichier texte dans le format Json
            var json = '{ "paquetCarte":' + paquetCarteJson + ',' +
                '"paquetDecharge":' + paquetDechargeJson + ',' +
                '"paquetIntervention":' + paquetInterventionJson + ',' +
                '"mains":' + mainsJson + ',' +
                '"CarteJeu":' + CarteJeuJson + ',' +
                '"nomJoueur":' + nomJoueurJson + ',' +
                '"exemplaireCarteJeu":' + exemplaireCarteJeuJson + ',' +
                '"cartePerturbation":' + cartePerturbationJson + ',' +
                '"tableauRetention":' + tableauRetentionJson + ',' +
                '"difficulte":' + dificulteJson + ',' +
                '"tableauPasserTour":' + tableauPasserTourJson + ',' +
                '"nombreJoueur":' + nombreJoueurJson + ',' +
                '"numeroJoueurActif":' + numeroJoueurActifJson + ',' +
                '"tour":' + tourJson + ',' +
                '"facteurRotation":' + facteurRotationJson + ',' +
                '"deversement":' + deversementJson + ',' +
                '"tempsDeversement":' + tempsDeversementJson + ',' +
                '"numeroJoueurDeversement":' + numeroJoueurDeversementJson + ',' +
                '"pointsRessourcesUtiliser":' + pointsRessourcesUtiliserJson + ',' +
                '"habitatEroder":' + habitatEroderJson + ',' +
                '"bandeRiveraineEroder":' + bandeRiveraineEroderJson + '}';

            //Enregistre le fichier.
            var blob = new Blob([json], { type: "text/plain;charset=utf-8" });
            saveAs(blob, nom + '.jcb');
        }

        //Fonction appelée lorsqu'un fichier est sélectionné pour être chargé.
        function chargerPartie(file) {
            var fileReader = new FileReader();
            var json;

            fileReader.readAsText(file[0]);
            fileReader.onload = function (e) {
                try { //Si il n'y a pas d'erreur.
                    json = JSON.parse(fileReader.result);

                    //Reinstancie les variables.
                    nomJoueur = [];
                    difficulte = json.difficulte;
                    nombreJoueur = json.nombreJoueur;
                    numeroJoueurActif = json.numeroJoueurActif;
                    tour = json.tour;
                    facteurRotation = json.facteurRotation;
                    deversement = json.deversement;
                    tempsDeversement = json.tempsDeversement;
                    numeroJoueurDeversement = json.numeroJoueurDeversement;
                    habitatEroder = json.habitatEroder;
                    bandeRiveraineEroder = [];
                    paquetCarte = [];
                    mangerPredateur = false;
                    verifier = false;
                    nombrePolluer = 0;
                    predation = false;
                    salmonide = [nombreJoueur];
                    tourSalmonide = [nombreJoueur];
                    aucuneCarte = false;
                    naturalisation = false;
                    calculer = false;
                    mangerSalmonide = false;
                    nombreMangerSalmonide = 0;
                    instancierTableaux();

                    //Recrée la paquet de jeu.
                    json.paquetCarte.forEach(function (item, index) {
                        if (item != null) {
                            var params;
                            if (item.type === typeEnum.habitats) {
                                params = { habitats: item.habitats, perturber: item.perturber, tempsPerturber: item.tempsPerturber };
                            } else if (item.type === typeEnum.macroInvertebre) {
                                var cond = item.condition.split(',');
                                params = { taille: item.taille, tolerance: item.tolerance, predateur: item.predateur, typeMacro: item.typeMacro, condition: cond };
                            } else if (item.type === typeEnum.perturbation) {
                                params = { tempsActif: item.tempsActif };
                            } else if (item.type === typeEnum.bandeRiveraine) {
                                params = { perturber: item.perturber, tempsPerturber: item.tempsPerturber };
                            } else if (item.type === typeEnum.salmonide) {
                                var cond = item.condition.split(',');
                                params = { condition: cond };
                            }
                            var carte = new Carte(item.type, item.nom, item.nomImage, item.coutRessources, params);
                            paquetCarte.push(carte);
                        }
                    });

                    //Recrée le paquet de la défausse.
                    json.paquetDecharge.forEach(function (item, index) {
                        if (item != null) {
                            var params;
                            if (item.type === typeEnum.habitats) {
                                params = { habitats: item.habitats, perturber: item.perturber, tempsPerturber: item.tempsPerturber };
                            } else if (item.type === typeEnum.macroInvertebre) {
                                var cond = item.condition.split(',');
                                params = { taille: item.taille, tolerance: item.tolerance, predateur: item.predateur, typeMacro: item.typeMacro, condition: cond };
                            } else if (item.type === typeEnum.perturbation) {
                                params = { tempsActif: item.tempsActif };
                            } else if (item.type === typeEnum.bandeRiveraine) {
                                params = { perturber: item.perturber, tempsPerturber: item.tempsPerturber };
                            } else if (item.type === typeEnum.salmonide) {
                                var cond = item.condition.split(',');
                                params = { condition: cond };
                            }
                            paquetDecharge[index] = new Carte(item.type, item.nom, item.nomImage, item.coutRessources, params);
                        } else {
                            paquetDecharge[index] = null;
                        }
                    });

                    //Recrée le paquet de cartes Interventions
                    json.paquetIntervention.forEach(function (item, index) {
                        if (item != null) {
                            var params;

                            if (item.nom === nomEnum.amenageFosse || item.nom === nomEnum.amenageGalets || item.nom === nomEnum.amenageGravier || item.nom === nomEnum.amenageRapides || item.nom === nomEnum.amenageSable) {
                                params = { habitats: item.habitats };
                            }
                            paquetIntervention[index] = new Carte(item.type, item.nom, item.nomImage, item.coutRessources, params);
                        } else {
                            paquetIntervention[index] = null;
                        }
                    });

                    //Recrée la Bande Riveraine érodée
                    if (json.bandeRiveraineEroder[0] != null) {
                        bandeRiveraineEroder[0] = new Carte(json.bandeRiveraineEroder[0].type, json.bandeRiveraineEroder[0].nom, json.bandeRiveraineEroder[0].nomImage, json.bandeRiveraineEroder[0].coutRessources, { perturber: json.bandeRiveraineEroder[0].perturber, tempsPerturber: json.bandeRiveraineEroder[0].tempsPerturber });
                        bandeRiveraineEroder[1] = json.bandeRiveraineEroder[1];
                    } else {
                        bandeRiveraineEroder[0] = null;
                        bandeRiveraineEroder[1] = null;
                    }

                    //Recrée le nom des joueurs.
                    json.nomJoueur.forEach(function (item, index) {
                        if (item != null) {
                            nomJoueur[index] = item;
                        }
                    });

                    //Récrée le tableau rétention
                    json.tableauRetention.forEach(function (item, index) {
                        if (item != null) {
                            tableauRetention[index] = item;
                        }
                    });

                    //Récrée le tableau Passer Son Tour.
                    json.tableauPasserTour.forEach(function (item, index) {
                        if (item != null) {
                            tableauPasserTour = item;
                        }
                    });

                    //Recrée la main de chaque joueur.
                    json.mains.forEach(function (item1, index1) {
                        json.mains[index1].forEach(function (item, index) {
                            if (item != null) {
                                var params;

                                if (item.type === typeEnum.habitats) {
                                    params = { habitats: item.habitats, perturber: item.perturber, tempsPerturber: item.tempsPerturber };
                                } else if (item.type === typeEnum.macroInvertebre) {
                                    var cond = item.condition.split(',');
                                    params = { taille: item.taille, tolerance: item.tolerance, predateur: item.predateur, typeMacro: item.typeMacro, condition: cond };
                                } else if (item.type === typeEnum.perturbation) {
                                    params = { tempsActif: item.tempsActif };
                                } else if (item.type === typeEnum.bandeRiveraine) {
                                    params = { perturber: item.perturber, tempsPerturber: item.tempsPerturber };
                                } else if (item.type === typeEnum.salmonide) {
                                    var cond = item.condition.split(',');
                                    params = { condition: cond };
                                }
                                var carte = new Carte(item.type, item.nom, item.nomImage, item.coutRessources, params);
                                paquetCarte.push(carte);
                            }
                        });
                    });

                    //Recrée le paquet de la défausse.
                    json.paquetDecharge.forEach(function (item, index) {
                        if (item != null) {
                            var params;

                            if (item.type === typeEnum.habitats) {
                                params = { habitats: item.habitats, perturber: item.perturber, tempsPerturber: item.tempsPerturber };
                            } else if (item.type === typeEnum.macroInvertebre) {
                                var cond = item.condition.split(',');
                                params = { taille: item.taille, tolerance: item.tolerance, predateur: item.predateur, typeMacro: item.typeMacro, condition: cond };
                            } else if (item.type === typeEnum.perturbation) {
                                params = { tempsActif: item.tempsActif };
                            } else if (item.type === typeEnum.bandeRiveraine) {
                                params = { perturber: item.perturber, tempsPerturber: item.tempsPerturber };
                            } else if (item.type === typeEnum.salmonide) {
                                var cond = item.condition.split(',');
                                params = { condition: cond };
                            }
                            paquetDecharge[index] = new Carte(item.type, item.nom, item.nomImage, item.coutRessources, params);
                        } else {
                            paquetDecharge[index] = null;
                        }
                    });

                    //Recrée le paquet de cartes Interventions
                    json.paquetIntervention.forEach(function (item, index) {
                        if (item != null) {
                            var params;
                            if (item.nom === nomEnum.amenageFosse || item.nom === nomEnum.amenageGalets || item.nom === nomEnum.amenageGravier || item.nom === nomEnum.amenageRapides || item.nom === nomEnum.amenageSable) {
                                params = { habitats: item.habitats };
                            }
                            paquetIntervention[index] = new Carte(item.type, item.nom, item.nomImage, item.coutRessources, params);
                        } else {
                            paquetIntervention[index] = null;
                        }
                    });

                    //Recrée le nom des joueurs.
                    json.nomJoueur.forEach(function (item, index) {
                        if (item != null) {
                            nomJoueur[index] = item;
                        }
                    });

                    //Récrée le tableau rétention
                    json.tableauRetention.forEach(function (item, index) {
                        if (item != null) {
                            tableauRetention[index] = item;
                        }
                    });

                    //Récrée le tableau Passer Son Tour.
                    json.tableauPasserTour.forEach(function (item, index) {
                        if (item != null) {
                            tableauPasserTour = item;
                        }
                    });

                    //Recrée la main de chaque joueur.
                    json.mains.forEach(function (item1, index1) {
                        json.mains[index1].forEach(function (item, index) {
                            if (item != null) {
                                var params;
                                if (item.type === typeEnum.habitats) {
                                    params = { habitats: item.habitats, perturber: item.perturber, tempsPerturber: item.tempsPerturber };
                                } else if (item.type === typeEnum.macroInvertebre) {
                                    var cond = item.condition.split(',');
                                    params = { taille: item.taille, tolerance: item.tolerance, predateur: item.predateur, typeMacro: item.typeMacro, condition: cond };
                                } else if (item.type === typeEnum.perturbation) {
                                    params = { tempsActif: item.tempsActif };
                                } else if (item.type === typeEnum.bandeRiveraine) {
                                    params = { perturber: item.perturber, tempsPerturber: item.tempsPerturber };
                                } else if (item.type === typeEnum.salmonide) {
                                    var cond = item.condition.split(',');
                                    params = { condition: cond };
                                }
                                mains[index1][index] = new Carte(item.type, item.nom, item.nomImage, item.coutRessources, params);
                            } else {
                                mains[index1][index] = null;
                            }
                        });
                    });

                    //Recrée le jeu de chaque joueur.
                    json.CarteJeu.forEach(function (item1, index1) {
                        json.CarteJeu[index1].forEach(function (item, index) {
                            if (item != null) {
                                var params;
                                if (item.type === typeEnum.habitats) {
                                    params = { habitats: item.habitats, perturber: item.perturber, tempsPerturber: item.tempsPerturber };
                                } else if (item.type === typeEnum.macroInvertebre) {
                                    var cond = item.condition.split(',');
                                    params = { taille: item.taille, tolerance: item.tolerance, predateur: item.predateur, typeMacro: item.typeMacro, condition: cond };
                                } else if (item.type === typeEnum.perturbation) {
                                    params = { tempsActif: item.tempsActif };
                                } else if (item.type === typeEnum.bandeRiveraine) {
                                    params = { perturber: item.perturber, tempsPerturber: item.tempsPerturber };
                                } else if (item.type === typeEnum.salmonide) {
                                    var cond = item.condition.split(',');
                                    params = { condition: cond };
                                }
                                CarteJeu[index1][index] = new Carte(item.type, item.nom, item.nomImage, item.coutRessources, params);
                            }
                        });
                    });

                    //Recrée le tableau des cartes perturbations.
                    json.cartePerturbation.forEach(function (item1, index1) {
                        json.cartePerturbation[index1].forEach(function (item, index) {
                            if (item != null) {
                                cartePerturbation[index1][index] = new Carte(item.type, item.nom, item.nomImage, item.coutRessources, { tempsActif: item.tempsActif });
                            }
                        });
                    });

                    //Recrée le tableau des exemplaires des cartes.
                    json.exemplaireCarteJeu.forEach(function (item1, index1) {
                        json.exemplaireCarteJeu[index1].forEach(function (item, index) {
                            exemplaireCarteJeu[index1][index] = item;
                        });
                    });

                    //Recrée l'affichage.
                    $('#menuPrincipal').remove();
                    updatePointsRessourcesJeu();
                    pointsRessourcesUtiliser[numeroJoueurActif] = json.pointsRessourcesUtiliser;
                    pointsRessourcesRestant[numeroJoueurActif] = pointsRessourcesTotal[numeroJoueurActif] - pointsRessourcesUtiliser[numeroJoueurActif];
                    creerElementFond();
                    updateAffichageImage();
                    setTimeout(function () {
                        updatePlateau();
                    }, 200);

                }
                catch (e) {//Si une erreur s'est produit.
                    alert('Une erreur est survenue lors de la lecture de la sauvegarde. Veuillez réessayer ou charger une sauvegarde différente.');
                    console.log(e);
                }
            };
        }

        //Fonction appelée lors d'un clic sur le bouton Options en jeu
        function ouvrirOptionsEnJeu() {
            var divOptions = document.createElement('div');
            divOptions.id = 'divOptions';
            divOptions.className = 'divOptions';
            $('#plateau').append(divOptions);

            var divTitreOptions = document.createElement('div');
            divTitreOptions.id = 'divTitreOptions';
            divTitreOptions.className = 'divTitreOptions';
            divTitreOptions.innerHTML = '<p>Options</p>';
            divOptions.appendChild(divTitreOptions);

            //Résolution
            var labelResolution = document.createElement('label');
            labelResolution.id = 'labelResolution';
            labelResolution.className = 'labelResolution';
            labelResolution.innerHTML = '<span>Résolution&nbsp;: </span>'
            divOptions.appendChild(labelResolution);

            var dropDownReso = document.createElement('select');
            dropDownReso.id = 'dropDownReso';
            dropDownReso.className = 'dropDownReso';
            divOptions.appendChild(dropDownReso);
            var option1 = document.createElement('option');
            option1.value = '1';
            option1.innerHTML = '1280 x 720';
            dropDownReso.appendChild(option1);

            //Sauvegarder
            var textBoxSauvegarder = document.createElement('input');
            textBoxSauvegarder.type = 'text';
            textBoxSauvegarder.id = 'textBoxSauvegarder';
            textBoxSauvegarder.className = 'textBoxSauvegarder';
            divOptions.appendChild(textBoxSauvegarder);

            var labelText = document.createElement('label');
            labelText.id = 'labelText';
            labelText.className = 'labelText';
            labelText.innerHTML = '.jcb';
            divOptions.appendChild(labelText);

            var buttonSauvegarder = document.createElement('button');
            buttonSauvegarder.id = 'buttonSauvegarder';
            buttonSauvegarder.className = 'buttonSauvegarder';
            $(buttonSauvegarder).click(function () {
                if (!textBoxSauvegarder.value) {
                    popUpErreur('Veuillez entrer un nom de fichier avant de sauvegarder.');
                } else {
                    sauvegarderPartie(textBoxSauvegarder.value);
                }
            });
            buttonSauvegarder.textContent = 'Sauvegarder';
            divOptions.appendChild(buttonSauvegarder);

            //Ouverture du popUp.
            $(divOptions).dialog({
                classes: {
                    'ui-dialog': 'no-x ui-corner-all',
                },
                draggable: false,
                resizable: false,
                buttons: [{
                    text: 'Valider',
                    click: function () {
                        $(this).dialog('close');
                    }
                }, {
                    text: 'Annuler',
                    click: function () {
                        $(this).dialog('close');
                    }
                }],
                height: 300,
                width: 400,
                hide: 'fade',
                show: 'fade'
            });
        }

        //Fonction qui vérifie si le macroInvertebre ou le salmonide est jouable.
        function verifierCondition(carte) {
            if (carte.condition.length === 1) {//S'il y a juste une condition
                if (carte.condition[0] === '?') {//Si la condition est juste d'avoir un habitats.
                    for (var i = 0; i < 10; i++) {
                        if (CarteJeu[numeroJoueurActif][i] != null) {// S'il y a une carte.
                            //Si c'est un habitat pas perturbé ou une carte d'intervention d'habitat.
                            if ((CarteJeu[numeroJoueurActif][i].type === typeEnum.habitats && !CarteJeu[numeroJoueurActif][i].perturber) || CarteJeu[numeroJoueurActif][i].type === typeEnum.intervention) {// Si la carte est une habitats.
                                return true;
                            }
                        }
                    }
                }

                var condition1 = carte.condition[0];

                for (var i = 0; i < 10; i++) {
                    if (CarteJeu[numeroJoueurActif][i] != null) {// S'il y a une carte.
                        if ((CarteJeu[numeroJoueurActif][i].type === typeEnum.habitats && !CarteJeu[numeroJoueurActif][i].perturber) || CarteJeu[numeroJoueurActif][i].type === typeEnum.intervention) {// Si la carte est une habitats.
                            if (CarteJeu[numeroJoueurActif][i].habitats === condition1) {//Si l'habitat de la carte est la même que la condition.
                                return true;
                            }
                        }
                    }
                }
            }
            else if (carte.condition.length === 2) {//S'il y a 2 conditions
                var condition1 = carte.condition[0];
                var condition2 = carte.condition[1];

                for (var i = 0; i < 10; i++) {
                    if (CarteJeu[numeroJoueurActif][i] != null) {// S'il y a une carte.
                        //Si c'est un habitat pas perturbé ou une carte d'intervention d'habitat.
                        if ((CarteJeu[numeroJoueurActif][i].type === typeEnum.habitats && !CarteJeu[numeroJoueurActif][i].perturber) || CarteJeu[numeroJoueurActif][i].type === typeEnum.intervention) {// Si la carte est une habitats.
                            if (CarteJeu[numeroJoueurActif][i].habitats === condition1) {//Si l'habitat de la carte est la même que la condition1.
                                condition1 = 'ok';
                            } else if (CarteJeu[numeroJoueurActif][i].habitats === condition2) {//Si l'habitat de la carte est la même que la condition2.
                                condition2 = 'ok';
                            }
                        }
                    }
                }

                if (condition1 === 'ok' && condition2 === 'ok') {//Si toutes les conditions sont ok.
                    return true;
                }
            }
            else if (carte.condition.length === 3) {//S'il y a 3 conditions.
                var condition1 = carte.condition[0];
                var condition2 = carte.condition[1];
                var condition3 = carte.condition[2];

                for (var i = 0; i < 10; i++) {
                    if (CarteJeu[numeroJoueurActif][i] != null) {// S'il y a une carte.
                        //Si c'est un habitat pas perturbé ou une carte d'intervention d'habitat.
                        if ((CarteJeu[numeroJoueurActif][i].type === typeEnum.habitats && !CarteJeu[numeroJoueurActif][i].perturber) || CarteJeu[numeroJoueurActif][i].type === typeEnum.intervention) {// Si la carte est une habitats.
                            if (CarteJeu[numeroJoueurActif][i].habitats === condition1) {//Si l'habitat de la carte est la même que la condition1.
                                condition1 = 'ok';
                            } else if (CarteJeu[numeroJoueurActif][i].habitats === condition2) {//Si l'habitat de la carte est la même que la condition2.
                                condition2 = 'ok';
                            } else if (CarteJeu[numeroJoueurActif][i].habitats === condition3) {//Si l'habitat de la carte est la même que la condition3.
                                condition3 = 'ok';
                            }
                        }
                    }
                }

                if (condition1 === 'ok' && condition2 === 'ok' && condition3 === 'ok') {//Si toutes les conditions sont ok.
                    return true;
                }
            } else if (carte.condition.length === 4) {//S'il y a 4 conditions.
                var condition1 = carte.condition[0];
                var condition2 = carte.condition[1];
                var condition3 = carte.condition[2];
                var condition4 = carte.condition[3];

                for (var i = 0; i < 10; i++) {
                    if (CarteJeu[numeroJoueurActif][i] != null) {// S'il y a une carte.
                        //Si c'est un habitat pas perturbé ou une carte d'intervention d'habitat.
                        if ((CarteJeu[numeroJoueurActif][i].type === typeEnum.habitats && !CarteJeu[numeroJoueurActif][i].perturber) || CarteJeu[numeroJoueurActif][i].type === typeEnum.intervention) {// Si la carte est une habitats.
                            if (CarteJeu[numeroJoueurActif][i].habitats === condition1) {//Si l'habitat de la carte est la même que la condition1.
                                condition1 = 'ok';
                            } else if (CarteJeu[numeroJoueurActif][i].habitats === condition2) {//Si l'habitat de la carte est la même que la condition2.
                                condition2 = 'ok';
                            } else if (CarteJeu[numeroJoueurActif][i].habitats === condition3) {//Si l'habitat de la carte est la même que la condition3.
                                condition3 = 'ok';
                            } else if (CarteJeu[numeroJoueurActif][i].habitats === condition4) {//Si l'habitat de la carte est la même que la condition4.
                                condition4 = 'ok';
                            }
                        }
                    }
                }

                if (condition1 === 'ok' && condition2 === 'ok' && condition3 === 'ok' && condition4 === 'ok') {//Si toutes les conditions sont ok.
                    return true;
                }
            } else {
                return false;
            }
        }

        //Fonction qui sera fréquament appeler pour remplir la main.
        function remplirMain() {
            if (tour === 1) {//Avant de commencer, remplie toutes les mains.
                //On distribue les rapides d'abord, puis les habitats au hasard et on termine par le reste de la main au hasard
                //pour assurer une chance egale à tous les joueurs d'avoir les mêmes cartes.

                //Première carte c'est un habitats rapides.
                mains[0][0] = chercherCarteParticuliere(nomEnum.rapides, paquetCarte);
                mains[1][0] = chercherCarteParticuliere(nomEnum.rapides, paquetCarte);


                if (nombreJoueur >= 3) {//3 joueurs.
                    mains[2][0] = chercherCarteParticuliere(nomEnum.rapides, paquetCarte);
                }
                if (nombreJoueur === 4) {//4 joueurs.
                    mains[3][0] = chercherCarteParticuliere(nomEnum.rapides, paquetCarte);
                }

                //Deuxième carte, c'est un habitats au hasard.
                mains[0][1] = chercherCarteParticuliere(habitatsHasard(), paquetCarte);
                mains[1][1] = chercherCarteParticuliere(habitatsHasard(), paquetCarte);

                if (nombreJoueur >= 3) {//3 joueurs.
                    mains[2][1] = chercherCarteParticuliere(habitatsHasard(), paquetCarte);
                }
                if (nombreJoueur === 4) {//4 joueurs.
                    mains[3][1] = chercherCarteParticuliere(habitatsHasard(), paquetCarte);
                }

                //3e carte, piger au hasard.
                mains[0][2] = pigerCarte(paquetCarte);
                mains[1][2] = pigerCarte(paquetCarte);

                if (nombreJoueur >= 3) {//3 joueurs.
                    mains[2][2] = pigerCarte(paquetCarte);
                }
                if (nombreJoueur === 4) {//4 joueurs.
                    mains[3][2] = pigerCarte(paquetCarte);
                }

                //4e carte, piger au hasard.
                mains[0][3] = pigerCarte(paquetCarte);
                mains[1][3] = pigerCarte(paquetCarte);

                if (nombreJoueur >= 3) {//3 joueurs.
                    mains[2][3] = pigerCarte(paquetCarte);
                }
                if (nombreJoueur === 4) {//4 joueurs.
                    mains[3][3] = pigerCarte(paquetCarte);
                }

                //5e carte, piger au hasard.
                mains[0][4] = pigerCarte(paquetCarte);
                mains[1][4] = pigerCarte(paquetCarte);

                if (nombreJoueur >= 3) {//3 joueurs.
                    mains[2][4] = pigerCarte(paquetCarte);
                }
                if (nombreJoueur === 4) {//4 joueurs.
                    mains[3][4] = pigerCarte(paquetCarte);
                }

                //6e carte, piger au hasard.
                mains[0][5] = pigerCarte(paquetCarte);
                mains[1][5] = pigerCarte(paquetCarte);

                if (nombreJoueur >= 3) {//3 joueurs.
                    mains[2][5] = pigerCarte(paquetCarte);
                }
                if (nombreJoueur === 4) {//4 joueurs.
                    mains[3][5] = pigerCarte(paquetCarte);
                }
            } else {//Sinon, remplie les positions vides dans la main.
                //Boucle pour toutes les positions de la main.
                for (var i = 0; i < mains[numeroJoueurActif].length; i++) {
                    if (mains[numeroJoueurActif][i] == null) {
                        annimationPigerCarte(i);
                    }
                }
                if (aucuneCarte) {
                    popUpConfirmation('Il n\'y a plus de cartes dans le paquet, c\'est donc votre dernier tour.');
                }
            }
        }

        //Fonction qui renvoie un string d'un habitat au hasard pour qu'on puisse aller la chercher au début de la partie.
        function habitatsHasard() {
            var habitatsRetourner;//Habitat qui sera retourner.

            //Variable qui contiendra le nombre de chaque habitat qui sont présentement dans le paquet de carte.
            var nombreHabitats = 0;
            var nombreFosse = 0;
            var nombreRapides = 0;
            var nombreSable = 0;
            var nombreGravier = 0;
            var nombreGalets = 0;

            for (var i = 0; i < paquetCarte.length ; i++) {//Boucle pour calculer le nombre d'habitat.
                if (paquetCarte[i].nom === nomEnum.fosse) {
                    nombreFosse++;
                    nombreHabitats++;
                } else if (paquetCarte[i].nom === nomEnum.sable) {
                    nombreSable++;
                    nombreHabitats++;
                } else if (paquetCarte[i].nom === nomEnum.gravier) {
                    nombreGravier++;
                    nombreHabitats++;
                } else if (paquetCarte[i].nom === nomEnum.rapides) {
                    nombreRapides++;
                    nombreHabitats++;
                } else if (paquetCarte[i].nom === nomEnum.galets) {
                    nombreGalets++;
                    nombreHabitats++;
                }
            }

            //math.random qui décidera quel habitat on retourne. Elle envoie un chiffre au hasard entre 1 et le nombre d'habitats.
            var nombreHasard;
            //Donne un nombre au hasard selon le nombre d'habitats calculé plus haut.
            nombreHasard = Math.floor((Math.random() * nombreHabitats) + 1);

            //Tout les if pour savoir c'est quel habitat, toujours plus petit que l'habitat et plus grand que l'ancien habitat.
            if (nombreHasard <= nombreFosse) {
                habitatsRetourner = nomEnum.fosse;
            } else if (nombreHasard <= nombreFosse + nombreSable && nombreHasard > nombreFosse) {
                habitatsRetourner = nomEnum.sable;
            } else if (nombreHasard <= nombreFosse + nombreSable + nombreGravier && nombreHasard > nombreFosse + nombreSable) {
                habitatsRetourner = nomEnum.gravier;
            } else if (nombreHasard <= nombreFosse + nombreSable + nombreGravier + nombreRapides && nombreHasard > nombreFosse + nombreSable + nombreGravier) {
                habitatsRetourner = nomEnum.rapides;
            } else if (nombreHasard <= nombreFosse + nombreSable + nombreGravier + nombreRapides + nombreGalets && nombreHasard > nombreFosse + nombreSable + nombreGravier + nombreRapides) {
                habitatsRetourner = nomEnum.galets;
            }

            //Retourne l'habitat au hasard.
            return habitatsRetourner;
        }

        //Fonction qui permet de chercher une carte en particulier.
        function chercherCarteParticuliere(nomCarte) {
            var carteRetours

            //Boucle dans tout le paquet de cartes à la recherche de la bonne carte.
            for (var i = 0; i < paquetCarte.length; i++) {
                if (paquetCarte[i].nom === nomCarte) {

                    carteRetour = paquetCarte[i];

                    //Code qui change la valeur i avec la première valeur pour pouvoir faire un array.shift().
                    var valeurEnregistrer = paquetCarte[0];
                    paquetCarte[0] = paquetCarte[i];
                    paquetCarte[i] = valeurEnregistrer;

                    //Retire la carte sur le dessus
                    paquetCarte.shift();

                    //Re-mélange le paquet de carte puisqu'on vient d'enlever une carte particulière en plein milieu.
                    melangerPaquetCarte(paquetCarte);
                    return carteRetour;
                }
            }
        }

        //Fonction qui retourne la difficulte sous forme de texte.
        function retourDifficulte() {
            if (difficulte === '1') {
                return 'Facile';
            } else if (difficulte === '2') {
                return 'Moyen';
            } else if (difficulte === '3') {
                return 'Difficile';
            }
        }

        //Fonction qui sera appelée lors du clique sur une image.
        function onClickImage(evt, ui) {
            var emplacement = evt.substr(evt.length - 2);//2 derniers caractères de l'emplacement ex: A9.
            var lettreEmplacement = emplacement.substr(0, 1);//Lettre de l'emplacement ex:A.
            var numeroEmplacement = emplacement.substr(1, 2);//Chiffre de l'emplacement ex:9.
            var numeroJoueurEnnemi = numeroJoueur(lettreEmplacement);//Numero selon la lettre ex: A = 0.

            if (mangerPredateur) {//Si nous sommes en train de manger un macroinvertébré de taille inférieure.
                if (CarteJeu[numeroJoueurEnnemi][numeroEmplacement].type = typeEnum.macroInvertebre) {//Si c'est un macro.
                    if (CarteJeu[numeroJoueurEnnemi][numeroEmplacement].taille < taillePredateur) {//Si sa taille est ok.
                        mangerPredateur = false;
                        $('#emplacementJoueur' + lettreEmplacement + numeroEmplacement).children().last().remove();//Supprime le macro
                        paquetDecharge.push(CarteJeu[numeroJoueurEnnemi][numeroEmplacement]);
                        exemplaireCarteJeu[numeroJoueurEnnemi][numeroEmplacement]--;//Baisse le nombre d'exemplaire.

                        if (exemplaireCarteJeu[numeroJoueurEnnemi][numeroEmplacement] === 0) {//Si il n'y a plus d'exemplaire, supprime la carte.
                            CarteJeu[numeroJoueurEnnemi][numeroEmplacement] = null;
                        }

                        brillanceCarteMangeable(false);
                        griserZone(false, false, false);
                        updateAffichageImage();

                    } else {
                        popUpAvertissement('Le «Macroinvertébré» doit être de taille inférieure à votre prédateur.');
                    }
                } else {
                    popUpAvertissement('Vous devez sélectionner un «mMacroinvertébré» de taille inférieur à '+taillePredateur +' à manger.');
                }
                /* ---------------Partie pollution organique--------------*/
            } else if (mangerSalmonide) {
                if (numeroJoueurEnnemi !== numeroJoueurActif) {
                    if (CarteJeu[numeroJoueurEnnemi][numeroEmplacement].type === typeEnum.macroInvertebre) {

                        $('#emplacementJoueur' + lettreEmplacement + numeroEmplacement).children().last().remove();//Supprime le macro
                        paquetDecharge.push(CarteJeu[numeroJoueurEnnemi][numeroEmplacement]);
                        exemplaireCarteJeu[numeroJoueurEnnemi][numeroEmplacement]--;//Baisse le nombre d'exemplaire.

                        if (exemplaireCarteJeu[numeroJoueurEnnemi][numeroEmplacement] === 0) {//Si il n'y a plus d'exemplaire, supprime la carte.
                            CarteJeu[numeroJoueurEnnemi][numeroEmplacement] = null;
                        }

                        if (nombreMangerSalmonide === 2) {
                            nombreMangerSalmonide = 0;
                            mangerSalmonide = false;

                            brillanceCarteMangeable(false);
                            griserZone(false, false, false);
                            updateAffichageImage();
                        }
                    } else {
                        popUpAvertissement('Vous devez sélectionner un «mMacroinvertébré» de taille inférieur à ' + taillePredateur + ' à manger.');
                    }
                }
            } else if (onPollu) {
                if (numeroJoueurEnnemi !== numeroJoueurActif) {
                    if (CarteJeu[numeroJoueurEnnemi][numeroEmplacement] != null) {
                        if (CarteJeu[numeroJoueurEnnemi][numeroEmplacement].type === typeEnum.habitats) {
                            if (CarteJeu[numeroJoueurEnnemi][numeroEmplacement].perturber != true) {
                                if (exemplaireCarteJeu[numeroJoueurEnnemi][numeroEmplacement] >= 2) {
                                    deplacerCartePerturber(document.getElementById('emplacementJoueur' + lettreJoueur(numeroJoueurEnnemi) + numeroEmplacement), evt, ui);
                                } else {
                                    rendrePerturber(document.getElementById('emplacementJoueur' + lettreJoueur(numeroJoueurEnnemi) + numeroEmplacement));
                                }
                                nombrePolluer++;

                                if (nombrePolluer === 3) {
                                    onPollu = false;
                                    nombrePolluer === 0;
                                    griserZone(false, false, false);
                                    brillanceHabitatsEnnemi(false);
                                }
                            } else {
                                popUpAvertissement('Cette carte est déjà perturbée.');
                            }
                        } else {
                            popUpAvertissement('Seul les «Habitats» peuvent être pollués.');
                        }
                    }
                }
                /* -----------------Partie érosion -------------------*/
            } else if (erosion) {
                if (etapeErosion === 1) {//étape 1, détruire une bande riveraine.
                    if (CarteJeu[numeroJoueurEnnemi][numeroEmplacement].type === typeEnum.bandeRiveraine) {
                        paquetDecharge.push(CarteJeu[numeroJoueurEnnemi][numeroEmplacement]);
                        exemplaireCarteJeu[numeroJoueurEnnemi][numeroEmplacement]--;
                        if (exemplaireCarteJeu[numeroJoueurEnnemi][numeroEmplacement] === 0) {
                            bandeRiveraineEroder[0] = CarteJeu[numeroJoueurEnnemi][numeroEmplacement];
                            bandeRiveraineEroder[1] = numeroJoueurEnnemi;
                            CarteJeu[numeroJoueurEnnemi][numeroEmplacement] = null;
                        }

                        $('#emplacementJoueur' + lettreJoueur(numeroJoueurEnnemi) + numeroEmplacement).children().last().remove();
                        etapeErosion = 2;
                        updateAffichageImage();

                        if (numeroJoueurActif !== 0) {
                            brillerCarte(typeEnum.bandeRiveraine, 0, false);
                        }
                        if (numeroJoueurActif !== 1) {
                            brillerCarte(typeEnum.bandeRiveraine, 1, false);
                        }
                        if (nombreJoueur > 2) {
                            if (numeroJoueur !== 2) {
                                brillerCarte(typeEnum.bandeRiveraine, 2, false);
                            }
                        }
                        if (nombreJoueur > 3) {
                            if (numeroJoueur !== 3) {
                                brillerCarte(typeEnum.bandeRiveraine, 3, false);
                            }
                        }

                        brillerCarte(typeEnum.habitats, 0, true);
                        brillerCarte(typeEnum.habitats, 1, true);

                        if (nombreJoueur > 2) {
                            brillerCarte(typeEnum.habitats, 2, true);
                        }

                        if (nombreJoueur > 3) {
                            brillerCarte(typeEnum.habitats, 3, true);
                        }

                        popUpConfirmation('Vous devez désormais sélectionner un «Habitat» que vous voulez transformer en «Sable».')
                    } else {
                        popUpAvertissement('Vous devez sélectionner une carte «Bande Riveraine» pour l\'envoyer à la décharge.');
                    }
                } else if (etapeErosion === 2) {//Étape 2, transformer un habitats en sable.
                    if (CarteJeu[numeroJoueurEnnemi][numeroEmplacement].type === typeEnum.habitats) {
                        if (exemplaireCarteJeu[numeroJoueurEnnemi][numeroEmplacement] === 1) {//Si il y a seulement une carte non empilée.
                            habitatEroder = CarteJeu[numeroJoueurEnnemi][numeroEmplacement];
                            cartePerturbation[numeroJoueurEnnemi][numeroEmplacement] = carteDrag;
                            CarteJeu[numeroJoueurEnnemi][numeroEmplacement] = new Carte(typeEnum.intervention, nomEnum.amenageSable, 'habitatAmenageSable.png', 1, { habitats: nomEnum.sable });
                            $('#emplacementJoueur' + lettreJoueur(numeroJoueurEnnemi) + numeroEmplacement).children().remove();
                            var carteSable = document.createElement('img');
                            carteSable.className = 'imageCarteJeu imageCarteJeuErosion';
                            carteSable.src = 'ressources/habitatAmenageSable.png';

                            $('#emplacementJoueur' + lettreJoueur(numeroJoueurEnnemi) + numeroEmplacement).append(carteSable);
                            $(function () {
                                $('.imageCarteJeuErosion').on({
                                    click: function (evt, ui) {
                                        onClickImage($(this).parent().attr("id"), ui);
                                    }
                                })
                            });

                            brillerCarte(typeEnum.habitats, 0, false);
                            brillerCarte(typeEnum.habitats, 1, false);

                            if (nombreJoueur > 2) {
                                brillerCarte(typeEnum.habitats, 2, false);
                            }

                            if (nombreJoueur > 3) {
                                brillerCarte(typeEnum.habitats, 3, false);
                            }

                            $('.imageCarteJeuErosion').removeClass('imageCarteJeuErosion');

                            erosion = false;
                            etapeErosion = 1;
                        } else {
                            var positionLibre = trouverPositionLibre();
                            var numeroLettrePosition = positionLibre.substr(positionLibre.length - 2);
                            var numeroJoueurPositionLibree = numeroJoueur(numeroLettrePosition.substr(0, 1));
                            var numeroPositionLibre = numeroLettrePosition.substr(1, 2);

                            habitatEroder = CarteJeu[numeroJoueurPositionLibree][numeroPositionLibre];
                            cartePerturbation[numeroJoueurPositionLibree][numeroPositionLibre] = carteDrag;
                            CarteJeu[numeroJoueurPositionLibree][numeroPositionLibre] = new Carte(typeEnum.intervention, nomEnum.amenageSable, 'habitatAmenageSable.png', 1, { habitats: nomEnum.sable });
                            exemplaireCarteJeu[numeroJoueurPositionLibree][numeroPositionLibre] = 1;
                            $('#emplacementJoueur' + lettreJoueur(numeroJoueurEnnemi) + numeroEmplacement).children().last().remove();

                            var carteSable = document.createElement('img');
                            carteSable.className = 'imageCarteJeu imageCarteJeuErosion';
                            carteSable.src = 'ressources/habitatAmenageSable.png';

                            $(positionLibre).append(carteSable);

                            $(function () {
                                $('.imageCarteJeuErosion').on({
                                    click: function (evt, ui) {
                                        onClickImage($(this).parent().attr("id"), ui);
                                    }
                                })
                            });

                            brillerCarte(typeEnum.habitats, 0, false);
                            brillerCarte(typeEnum.habitats, 1, false);

                            if (nombreJoueur > 2) {
                                brillerCarte(typeEnum.habitats, 2, false);
                            }

                            if (nombreJoueur > 3) {
                                brillerCarte(typeEnum.habitats, 3, false);
                            }

                            $('.imageCarteJeuErosion').removeClass('imageCarteJeuErosion');
                        }

                        erosion = false;
                        etapeErosion = 1;
                        griserZone(false, false, false);
                    } else {
                        popUpAvertissement('Vous devez sélectionner une carte «Habitat» pour la transformer en «Sable».');
                    }
                }
                /* --------------------- carte prédation -----------*/
            } else if (predation) {
                if (CarteJeu[numeroJoueurEnnemi][numeroEmplacement].type === typeEnum.macroInvertebre) {
                    if (CarteJeu[numeroJoueurEnnemi][numeroEmplacement].taille < taillePredateur) {
                        if (numeroJoueurEnnemi != numeroJoueurActif) {
                            brillanceCarteMangeable(false);
                            predation = false;
                            $('#emplacementJoueur' + lettreEmplacement + numeroEmplacement).children().last().remove();
                            paquetDecharge.push(CarteJeu[numeroJoueurEnnemi][numeroEmplacement]);
                            exemplaireCarteJeu[numeroJoueurEnnemi][numeroEmplacement]--;

                            if (exemplaireCarteJeu[numeroJoueurEnnemi][numeroEmplacement] === 1) {
                                CarteJeu[numeroJoueurEnnemi][numeroEmplacement] = null;
                            }

                            updateAffichageImage();
                        } else {
                            popUpAvertissement('Vous ne pouvez pas manger vos propres prédateurs.');
                        }
                    } else {
                        popUpAvertissement('Le «Macroinvertébré» doit être de taille inférieure au prédateur.')
                    }
                } else {
                    popUpAvertissement('Vous devez sélectionner un macroinvertébrés de taille inférieure à ' + taillePredateur+' pour qu\'il soit mangé.');
                }
                /* -------------------- carte zonage---------------- */
            } else if (zonage) {
                if (etapeZonage === 1) {//Étape de zonage 1.
                    if (CarteJeu[numeroJoueurEnnemi][numeroEmplacement] != null) {
                        if (CarteJeu[numeroJoueurEnnemi][numeroEmplacement].type === typeEnum.habitats) {
                            if (numeroJoueurEnnemi === numeroJoueurActif) {
                                carteEchange1 = CarteJeu[numeroJoueurEnnemi][numeroEmplacement];
                                lettreJoueur1 = lettreJoueur(numeroJoueurEnnemi);
                                positionCarte1 = numeroEmplacement;
                                etapeZonage = 2;
                                brillanceHabitatsEnnemi(true);
                                brillerCarte(typeEnum.habitats, numeroJoueurActif, false);
                                popUpAvertissement('Vous devez maintenant cliquer sur une des cartes «Habitats» d\'un ennemi.')
                            } else {
                                popUpAvertissement('Vous devez cliquer sur un de vos «Habitats».');
                            }
                        } else {
                            popUpAvertissement('Vous devez cliquer sur un de vos «Habitats».');
                        }
                    }
                } else if (etapeZonage === 2) {//Étape de zonage 2.
                    if (CarteJeu[numeroJoueurEnnemi][numeroEmplacement] != null) {
                        if (CarteJeu[numeroJoueurEnnemi][numeroEmplacement].type === typeEnum.habitats) {
                            if (numeroJoueurEnnemi !== numeroJoueurActif) {
                                carteEchange2 = CarteJeu[numeroJoueurEnnemi][numeroEmplacement];
                                lettreJoueur2 = lettreJoueur(numeroJoueurEnnemi);
                                positionCarte2 = numeroEmplacement;

                                exemplaireCarteJeu[numeroJoueur(lettreJoueur2)][positionCarte2]--;
                                exemplaireCarteJeu[numeroJoueur(lettreJoueur1)][positionCarte1]--;

                                var carte1 = document.createElement('img');
                                carte1.className = 'imageCarteJeu imageCarteEchange';
                                carte1.src = 'ressources/' + carteEchange1.nomImage;

                                var carte2 = document.createElement('img');
                                carte2.className = 'imageCarteJeu imageCarteEchange';
                                carte2.src = 'ressources/' + carteEchange2.nomImage;

                                if (verifierCartePresenteEchange(carteEchange1.nom, numeroJoueur(lettreJoueur2)) === '') {//Si la carte n'est pas déjà présente
                                    if ($('#emplacementJoueur' + lettreJoueur2 + positionCarte2).children().length === 1) {//Si les cartes ne sont pas empilées.
                                        $('#emplacementJoueur' + lettreJoueur2 + positionCarte2).children().remove();//Enleve l'enfant.
                                        $('#emplacementJoueur' + lettreJoueur2 + positionCarte2).append(carte1);//Rajoute la carte.
                                        CarteJeu[numeroJoueur(lettreJoueur2)][positionCarte2] = carteEchange1;//Rajoute la carte dans les données.
                                        exemplaireCarteJeu[numeroJoueur(lettreJoueur2)][positionCarte2]++;
                                    } else {
                                        var prochainePositionLibre = trouverPositionLibre(numeroJoueur(lettreJoueur2));
                                        var emplacement = prochainePositionLibre.substr(prochainePositionLibre.length - 2);
                                        var numeroJoueurCarte = numeroJoueur(emplacement.substr(0, 1));
                                        var positionCarte = emplacement.substr(1, 2);

                                        $('#emplacementJoueur' + lettreJoueur2 + positionCarte2).children().last().remove();
                                        $(prochainePositionLibre).append(carte1);
                                        CarteJeu[numeroJoueurCarte][positionCarte] = carteEchange1;
                                        exemplaireCarteJeu[numeroJoueurCarte][positionCarte]++;
                                    }
                                } else {
                                    var positionCartePresente = verifierCartePresenteEchange(carteEchange1.nom, numeroJoueur(lettreJoueur2));
                                    var emplacement = positionCartePresente.substr(positionCartePresente.length - 2);
                                    var numeroJoueurCarte = numeroJoueur(emplacement.substr(0, 1));
                                    var positionCarte = emplacement.substr(1, 2);

                                    exemplaireCarteJeu[numeroJoueurCarte][positionCarte]++;
                                    $(carte1).css('margin-top', (exemplaireCarteJeu[numeroJoueurCarte][positionCarte] - 1) * 10);

                                    $('#emplacementJoueur' + lettreJoueur2 + positionCarte2).children().last().remove();

                                    CarteJeu[numeroJoueurCarte][positionCarte] = carteEchange1;
                                    $(positionCartePresente).append(carte1);
                                }

                                if (verifierCartePresenteEchange(carteEchange2.nom, numeroJoueur(lettreJoueur1)) === '') {
                                    if ($('#emplacementJoueur' + lettreJoueur1 + positionCarte1).children().length === 1) {
                                        $('#emplacementJoueur' + lettreJoueur1 + positionCarte1).children().remove();
                                        $('#emplacementJoueur' + lettreJoueur1 + positionCarte1).append(carte2);
                                        CarteJeu[numeroJoueur(lettreJoueur1)][positionCarte1] = carteEchange2;
                                        exemplaireCarteJeu[numeroJoueur(lettreJoueur1)][positionCarte1]++;
                                    } else {
                                        var prochainePositionLibre = trouverPositionLibre(numeroJoueur(lettreJoueur1));
                                        var emplacement = prochainePositionLibre.substr(prochainePositionLibre.length - 2);
                                        var numeroJoueurCarte = numeroJoueur(emplacement.substr(0, 1));
                                        var positionCarte = emplacement.substr(1, 2);

                                        $('#emplacementJoueur' + lettreJoueur1 + positionCarte1).children().last().remove();
                                        $(prochainePositionLibre).append(carte2);
                                        CarteJeu[numeroJoueurCarte][positionCarte] = carteEchange2;
                                        exemplaireCarteJeu[numeroJoueurCarte][positionCarte]++;
                                    }
                                } else {
                                    var positionCartePresente = verifierCartePresenteEchange(carteEchange2.nom, numeroJoueur(lettreJoueur1));
                                    var emplacement = positionCartePresente.substr(positionCartePresente.length - 2);
                                    var numeroJoueurCarte = numeroJoueur(emplacement.substr(0, 1));
                                    var positionCarte = emplacement.substr(1, 2);

                                    exemplaireCarteJeu[numeroJoueurCarte][positionCarte]++;
                                    $(carte2).css('margin-top', (exemplaireCarteJeu[numeroJoueurCarte][positionCarte] - 1) * 10);

                                    $('#emplacementJoueur' + lettreJoueur1 + positionCarte1).children().last().remove();

                                    CarteJeu[numeroJoueurCarte][positionCarte] = carteEchange2;
                                    $(positionCartePresente).append(carte2);
                                }

                                $(function () {
                                    $('.imageCarteEchange').on({
                                        click: function (evt, ui) {
                                            onClickImage($(this).parent().attr("id"), ui);
                                        }
                                    })
                                });

                                $('.imageCarteEchange').removeClass('imageCarteEchange');

                                brillanceHabitatsEnnemi(false);
                                etapeZonage = 1;
                                zonage = false;
                                griserZone(false, false, false);

                                popUpConfirmation('La carte «' + premiereLettreMaj(carteEchange1.nom) + '» de : ' + premiereLettreMaj(nomJoueur[numeroJoueur(lettreJoueur1)]) + ' à été changé par la carte «' + premiereLettreMaj(carteEchange2.nom) + '» de: ' + premiereLettreMaj(nomJoueur[numeroJoueur(lettreJoueur2)]));
                            } else {
                                popUpAvertissement('Vous devez cliquer sur une des cartes «Habitats» d\'un ennemi.')
                            }
                        } else {
                            popUpAvertissement('Vous devez cliquer sur une carte «Habitats».')
                        }
                    }
                }
                // ----------------Carte Naturalisation --------------
            } else if (naturalisation) {
                if (document.getElementById(evt).classList.contains('ui-echange-highlight')) {
                    cartePerturbation[numeroJoueur(lettreEmplacement)][numeroEmplacement] = null;
                    $('#emplacementJoueur' + lettreEmplacement + numeroEmplacement).children().last().remove();
                    CarteJeu[numeroJoueur(lettreEmplacement)][numeroEmplacement].perturber = false;
                    CarteJeu[numeroJoueur(lettreEmplacement)][numeroEmplacement].tempsPerturber = 0;
                    $('#emplacementJoueur' + lettreEmplacement + numeroEmplacement).removeClass('ui-echange-highlight');
                    $('.ui-echange-highlight').addClass('ui-perturber-highlight');
                    $('.ui-echange-highlight').removeClass('ui-echange-highlight');
                    griserZone(false, false, false);
                    naturalisation = false;
                }
            }

            calculerPoints();
        }

        //Fonction qui vérifie si la carte est pas déjà présente.
        function verifierCartePresenteEchange(nomCarte, numero) {
            var lettreActif = lettreJoueur(numero);
            for (var i = 0; i < 10; i++) {
                if (CarteJeu[numero][i] != null) {
                    if (CarteJeu[numero][i].nom === nomCarte) {
                        return ('#emplacementJoueur' + lettreActif + i);
                    }
                }
            }

            return '';
        }

        //Fonction qui retourne le premier emplacement libre où on peut mettre une carte.
        function trouverPositionLibre(numero) {
            var lettreEmplacement = lettreJoueur(numero);

            for (var i = 0; i < 10; i++) {
                if ($('#emplacementJoueur' + lettreEmplacement + i).children().length === 0) {
                    return ('#emplacementJoueur' + lettreEmplacement + i);
                }
            }
        }

        //Fonction qui change la taille du predateur pour trouver le plus gros du coté du joueur actif.
        function trouverPredateur() {
            taillePredateur = 0;

            for (var i = 0; i < 10; i++) {
                if (CarteJeu[numeroJoueurActif][i] != null) {
                    if (CarteJeu[numeroJoueurActif][i].type === typeEnum.macroInvertebre) {
                        if (CarteJeu[numeroJoueurActif][i].predateur > 0) {
                            if (CarteJeu[numeroJoueurActif][i].taille > taillePredateur) {
                                taillePredateur = CarteJeu[numeroJoueurActif][i].taille
                            }
                        }
                    }
                }
            }
        }

        //Fonction qui va déplacer une carte et droper la perturbation dessus pour pas qu'une carte perturbée soit empilée sur une carte non-perturbée.
        function deplacerCartePerturber(positionCarteDepart, evt, ui) {
            var emplacement = positionCarteDepart.id.substr(positionCarteDepart.id.length - 2);
            var numeroJoueurPositionDrop = numeroJoueur(emplacement.substr(0, 1));
            var numeroPosition = emplacement.substr(1, 2);

            $(positionCarteDepart).children().last().remove();

            var positionDropable = trouverPositionLibre(numeroJoueurPositionDrop);
            exemplaireCarteJeu[numeroJoueurPositionDrop][numeroPosition]--;

            var carte = document.createElement('img');
            carte.className = 'imageCarteJeu imageCarteNouvelleCarte ui-perturber-highlight';
            carte.src = 'ressources/' + CarteJeu[numeroJoueurPositionDrop][numeroPosition].nomImage;

            $(positionDropable).append(carte);
            var emplacementDropper = positionDropable.substr(positionDropable.length - 2);//2 derniers caractères de l'emplacement ex: A9.
            var numeroPositionDropper = emplacementDropper.substr(1, 2);

            exemplaireCarteJeu[numeroJoueurPositionDrop][numeroPositionDropper] = 1;
            var carteCopie = jQuery.extend(new Carte(), CarteJeu[numeroJoueurPositionDrop][numeroPosition]);
            CarteJeu[numeroJoueurPositionDrop][numeroPositionDropper] = carteCopie;
            CarteJeu[numeroJoueurPositionDrop][numeroPositionDropper].perturber = true;

            if (carteDrag.nom === nomEnum.dechets || carteDrag.nom === nomEnum.artificialisation) {//Si c'est un déchet ou artificialisation.
                CarteJeu[numeroJoueurPositionDrop][numeroPositionDropper].tempsPerturber = 10;//Le temps de perturbation de 10 fait en sorte qu'il ne baisse jamais.
                cartePerturbation[numeroJoueurPositionDrop][numeroPositionDropper] = carteDrag;
            } else if (carteDrag.nom === nomEnum.passageToutTerrain) {//Si c'est passage tout-terrain.
                CarteJeu[numeroJoueurPositionDrop][numeroPositionDropper].tempsPerturber = 2;
                cartePerturbation[numeroJoueurPositionDrop][numeroPositionDropper] = carteDrag;
            } else if (carteDrag.nom === nomEnum.pollutionOrganique) {//Si c'est Pollution Organique
                CarteJeu[numeroJoueurPositionDrop][numeroPositionDropper].tempsPerturber = 2;
            }


            $(function () {
                $('.imageCarteNouvelleCarte').on({
                    click: function (evt, ui) {
                        onClickImage($(this).parent().attr("id"), ui);
                    }
                })
            });

            $('.imageCarteNouvelleCarte').removeClass('imageCarteNouvelleCarte');
            if (carteDrag.nom !== nomEnum.pollutionOrganique) {
                onDrop(evt, ui, $(positionDropable));
            }
        }

        //Fonction qui va mettre la variable perturber à true.
        function rendrePerturber(evt) {
            var position = evt.id.substr(evt.id.length - 2);//2 derniers caractères de l'emplacement ex: A9.
            var lettrePositionJoueur = position.substr(0, 1);//Lettre de l'emplacement ex: A.
            var numeroPositionJoueur = numeroJoueur(lettrePositionJoueur);//Numero du joueur selon l'emplacement.
            var numeroPosition = position.substr(position.length - 1);// Numero de la position ex:9.

            if (carteDrag.nom === nomEnum.dechets || carteDrag.nom === nomEnum.artificialisation) {//Si c'est un déchet ou artificialisation.
                CarteJeu[numeroPositionJoueur][numeroPosition].perturber = true;//rends la carte perturbé.
                CarteJeu[numeroPositionJoueur][numeroPosition].tempsPerturber = 10;//Le temps de perturbation de 10 fait en sorte qu'il ne baisse jamais.
                cartePerturbation[numeroPositionJoueur][numeroPosition] = carteDrag;//Ajoute la carte dans le tableau de perturbation.
            } else if (carteDrag.nom === nomEnum.passageToutTerrain) {//Si c'est passage tout-terrain.
                CarteJeu[numeroPositionJoueur][numeroPosition].perturber = true;
                CarteJeu[numeroPositionJoueur][numeroPosition].tempsPerturber = 2;
                cartePerturbation[numeroPositionJoueur][numeroPosition] = carteDrag;
            } else if (carteDrag.nom === nomEnum.pollutionOrganique) {//Si c'est Pollution Organique
                $('#emplacementJoueur' + lettrePositionJoueur + numeroPosition).removeClass('ui-echange-highlight');
                CarteJeu[numeroPositionJoueur][numeroPosition].perturber = true;
                CarteJeu[numeroPositionJoueur][numeroPosition].tempsPerturber = 2;
            }

            $('#emplacementJoueur' + lettreJoueur(numeroPositionJoueur) + numeroPosition).addClass('ui-perturber-highlight');
        }

        //Fonction qui enleve 1 tour au temps de perturbation et si le temps est rendu à 0, retire la carte perturbation et l'état perturbé.
        function debutTourDeperturber() {
            for (var i = 0; i < CarteJeu[numeroJoueurActif].length; i++) {
                if (CarteJeu[numeroJoueurActif][i] != null) {
                    if (CarteJeu[numeroJoueurActif][i].type === typeEnum.habitats || CarteJeu[numeroJoueurActif][i].type === typeEnum.bandeRiveraine) {
                        if (CarteJeu[numeroJoueurActif][i].tempsPerturber != 10 && CarteJeu[numeroJoueurActif][i].tempsPerturber > 0) {
                            CarteJeu[numeroJoueurActif][i].tempsPerturber--;
                            if (CarteJeu[numeroJoueurActif][i].tempsPerturber === 0) {//si le temps est écoulé.
                                CarteJeu[numeroJoueurActif][i].perturber = false;//Déperturbe.
                                if (cartePerturbation[numeroJoueurActif][i] != null) {
                                    //Retire la carte dans le tableau de perturbation et sur le plateau.
                                    retirerCartePerturbation(numeroJoueurActif, i);
                                }
                                updateAffichageImage();
                                //Retire le highlight de perturbation.
                                $('#emplacementJoueur' + lettreJoueur(numeroJoueurActif) + i).removeClass('ui-perturber-highlight');
                            }
                        }
                    }
                }
            }
        }

        //Fonction qui s'occupe de rempiler les cartes une fois qu'elles ne sont plus perturbées.
        function reempillerCartePasPerturber(numeroDuJoueur, positionCarteAEmpiler) {
            for (var i = 0; i < CarteJeu[numeroDuJoueur].length; i++) {
                if (CarteJeu[numeroDuJoueur][i] != null) {
                    if (CarteJeu[numeroDuJoueur][i].nom === CarteJeu[numeroDuJoueur][positionCarteAEmpiler].nom) {
                        if (CarteJeu[numeroDuJoueur][i].perturber === false) {
                            exemplaireCarteJeu[numeroDuJoueur][i]++;

                            var image = document.createElement('img');
                            image.className = 'imageCarteJeu ajoutOnClick';
                            image.src = 'ressources/' + CarteJeu[numeroDuJoueur][i].nomImage;
                            $(image).css('margin-top', (exemplaireCarteJeu[numeroDuJoueur][i] - 1) * 10);
                            $('#emplacementJoueur' + lettreJoueur(numeroDuJoueur) + i).append(image);
                            $('#emplacementJoueur' + lettreJoueur(numeroDuJoueur) + positionCarteAEmpiler).children().first().remove();

                            $(function () {
                                $('.ajoutOnClick').on({
                                    click: function (evt, ui) {
                                        onClickImage($(this).parent().attr("id"), ui);
                                    }
                                })
                            });

                            $('.ajoutOnClick').removeClass('ajoutOnClick');
                        }
                    }
                }
            }
        }

        //Fonction qui va enlever la carte de perturbation sur la carte.
        function retirerCartePerturbation(numeroActif, positionCarte) {
            var lettreActif = lettreJoueur(numeroActif);
            paquetDecharge.push(cartePerturbation[numeroActif][positionCarte]);//Envoie la carte à la décharge.
            reempillerCartePasPerturber(numeroActif, positionCarte);
            cartePerturbation[numeroActif][positionCarte] = null;//Rend la position où était la carte pertubation à null.
            exemplaireCarteJeu[numeroActif][positionCarte]--;
            $('#emplacementJoueur' + lettreActif + positionCarte).children().last().remove();
        }

        //Fonction qui met en brillance les macroinvertébrés qui sont mangeable.
        function brillanceCarteMangeable(brille) {
            if (brille) {//Si on voulais les faire briller.
                for (var i = 0; i < 10; i++) {
                    if (numeroJoueurActif != 0) {//Si le joueur actif n'est pas le joueur 0.
                        lettre = lettreJoueur(0);

                        if (CarteJeu[0][i] != null) {
                            if (CarteJeu[0][i].type === typeEnum.macroInvertebre) {
                                if (CarteJeu[0][i].taille < taillePredateur) {
                                    $('#emplacementJoueur' + lettre + i).addClass('ui-echange-highlight');
                                }
                            }
                        }
                    }
                    if (numeroJoueurActif != 1) {//Si le joueur actif n'est pas le joueur 1.
                        lettre = lettreJoueur(1);

                        if (CarteJeu[1][i] != null) {
                            if (CarteJeu[1][i].type === typeEnum.macroInvertebre) {
                                if (CarteJeu[1][i].taille < taillePredateur) {
                                    $('#emplacementJoueur' + lettre + i).addClass('ui-echange-highlight');
                                }
                            }
                        }
                    }
                    if (numeroJoueurActif != 2) {//Si le joueur actif n'est pas le joueur 2.
                        if (nombreJoueur > 2) {
                            lettre = lettreJoueur(2);

                            if (CarteJeu[2][i] != null) {
                                if (CarteJeu[2][i].type === typeEnum.macroInvertebre) {
                                    if (CarteJeu[2][i].taille < taillePredateur) {
                                        $('#emplacementJoueur' + lettre + i).addClass('ui-echange-highlight');
                                    }
                                }
                            }
                        }
                    }
                    if (numeroJoueurActif != 3) {//Si le joueur actif n'est pas le joueur 3.
                        if (nombreJoueur > 3) {
                            lettre = lettreJoueur(3);

                            if (CarteJeu[3][i] != null) {
                                if (CarteJeu[3][i].type === typeEnum.macroInvertebre) {
                                    if (CarteJeu[3][i].taille < taillePredateur) {
                                        $('#emplacementJoueur' + lettre + i).addClass('ui-echange-highlight');
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (!brille) {//Sinon débrille tout.
                $('.ui-echange-highlight').removeClass('ui-echange-highlight');
            }
        }

        //Fonction qui rend tous les habitats ennemi brillant.
        function brillanceHabitatsEnnemi(brille) {
            if (brille) {
                for (var i = 0; i < nombreJoueur; i++) {
                    if (i !== numeroJoueurActif) {
                        for (var j = 0; j < CarteJeu[i].length; j++) {
                            if (CarteJeu[i][j] != null) {
                                if (CarteJeu[i][j].type === typeEnum.habitats) {
                                    if (CarteJeu[i][j].perturber !== true) {
                                        $('#emplacementJoueur' + lettreJoueur(i) + j).addClass('ui-echange-highlight');
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                for (var i = 0; i < nombreJoueur; i++) {
                    for (var j = 0; j < CarteJeu[i].length; j++) {
                        $('#emplacementJoueur' + lettreJoueur(i) + j).removeClass('ui-echange-highlight');
                    }
                }
            }
        }

        //Fonction qui fait briller les cartes d'un certain type pour le joueur donné.
        function brillerCarte(type, numero, brille) {
            var lettre = lettreJoueur(numero);

            if (brille) {//Si on voulais briller.
                for (var i = 0; i < 10; i++) {
                    if (CarteJeu[numero][i] != null) {
                        if (CarteJeu[numero][i].type === type) {
                            $('#emplacementJoueur' + lettre + i).addClass('ui-echange-highlight');
                        }
                    }
                }
            } else {//Sinon, débrille tout.
                for (var i = 0; i < 10; i++) {
                    $('#emplacementJoueur' + lettre + i).removeClass('ui-echange-highlight');
                }
            }
        }

        //Fonction qui tue les macroinvertébrés de tolérance inférieure à 6.
        function tuerDeversement() {
            if (!possedeAssainissement(0)) {//S'il ne possède pas de protection, tue.
                for (var i = 0; i < 10; i++) {
                    if (CarteJeu[0][i] != null) {
                        if (CarteJeu[0][i].type === typeEnum.macroInvertebre) {
                            if (CarteJeu[0][i].tolerance < 6) {
                                paquetDecharge.push(CarteJeu[0][i]);
                                CarteJeu[0][i] = null;
                                exemplaireCarteJeu[0][i] = 0;
                                var lettre = lettreJoueur(0);
                                $('#emplacementJoueur' + lettre + i).children().remove();
                            }
                        }
                    }
                }
            }
            if (!possedeAssainissement(1)) {//S'il ne possède pas de protection, tue.
                for (var i = 0; i < 10; i++) {
                    if (CarteJeu[1][i] != null) {
                        if (CarteJeu[1][i].type === typeEnum.macroInvertebre) {
                            if (CarteJeu[1][i].tolerance < 6) {
                                paquetDecharge.push(CarteJeu[1][i]);
                                CarteJeu[1][i] = null;
                                exemplaireCarteJeu[1][i] = 0;
                                var lettre = lettreJoueur(1);
                                $('#emplacementJoueur' + lettre + i).children().remove();
                            }
                        }
                    }
                }
            }
            if (nombreJoueur > 2) {//Si 3 joueurs.
                if (!possedeAssainissement(2)) {//S'il ne possède pas de protection, tue.
                    for (var i = 0; i < 10; i++) {
                        if (CarteJeu[2][i] != null) {
                            if (CarteJeu[2][i].type === typeEnum.macroInvertebre) {
                                if (CarteJeu[2][i].tolerance < 6) {
                                    paquetDecharge.push(CarteJeu[2][i]);
                                    CarteJeu[2][i] = null;
                                    exemplaireCarteJeu[2][i] = 0;
                                    var lettre = lettreJoueur(2);
                                    $('#emplacementJoueur' + lettre + i).children().remove();
                                }
                            }
                        }

                    }
                }
            }
            if (nombreJoueur > 3) {//Si 4 joueurs.
                if (!possedeAssainissement(3)) {//S'il ne possède pas de protection, tue.
                    for (var i = 0; i < 10; i++) {
                        if (CarteJeu[3][i] != null) {
                            if (CarteJeu[3][i].type === typeEnum.macroInvertebre) {
                                if (CarteJeu[3][i].tolerance < 6) {
                                    paquetDecharge.push(CarteJeu[3][i]);
                                    CarteJeu[3][i] = null;
                                    exemplaireCarteJeu[3][i] = 0;
                                    var lettre = lettreJoueur(3);
                                    $('#emplacementJoueur' + lettre + i).children().remove();
                                }
                            }

                        }
                    }
                }
            }
        }

        //Fonction qui retourne true si le joueur possede un certificat d'assainissement.
        function possedeAssainissement(numero) {
            for (var i = 0; i < 10; i++) {
                if (CarteJeu[numero][i] != null) {
                    if (CarteJeu[numero][i].nom === nomEnum.assainissement) {
                        return true;
                    }
                }
            }
            return false;
        }

        //Fonction qui vérifie si une carte pareil est déjà présente sur le jeu. Si elle est la, retourne la position.
        function verifierCartePresente(nomCarte) {
            var lettreActif = lettreJoueur(numeroJoueurActif);
            for (var i = 0; i < 10; i++) {
                if (CarteJeu[numeroJoueurActif][i] != null) {
                    if (CarteJeu[numeroJoueurActif][i].nomImage === nomCarte) {
                        if (!(CarteJeu[numeroJoueurActif][i].type === typeEnum.habitats && CarteJeu[numeroJoueurActif][i].perturber)) {
                            if (!(CarteJeu[numeroJoueurActif][i].type === typeEnum.bandeRiveraine && CarteJeu[numeroJoueurActif][i].perturber)) {
                                return document.getElementById('emplacementJoueur' + lettreActif + i);
                            }
                        }
                    }
                }
            }

            return '';
        }

        //Fonction qui validera que c'est la bonne zone pour droper notre carte.
        function bonneZoneDrop(evt) {
            var identification = $(evt).attr('id').substr($(evt).attr('id').length - 2);
            var lettreEmplacement = identification.substr(0, 1);

            var lettre = lettreJoueur(numeroJoueurActif);

            //Si c'est un habitat, un macroinvertebré ou une bande riveraine, la carte se joue seulement sur notre territoire.
            if (carteDrag.type === typeEnum.habitats || carteDrag.type === typeEnum.macroInvertebre || carteDrag.type === typeEnum.bandeRiveraine || carteDrag.type === typeEnum.salmonide || carteDrag.type === typeEnum.reglementation || carteDrag.type === typeEnum.intervention) {
                if (lettreEmplacement === lettre) {
                    return true;
                } else {
                    return false;
                }
            } else if (carteDrag.type === typeEnum.perturbation) {//Si c'est une carte de perturbation.
                if (carteDrag.nom === nomEnum.deversement || carteDrag.nom === nomEnum.erosion || carteDrag.nom === nomEnum.pollutionOrganique) {
                    if (identification === 'au') {//Si c'est droppé sur le plateau.
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    if (lettreEmplacement === lettre) {
                        return false;
                    } else if (identification === 'au') {//Si on drope sur le plateau.
                        return false;
                    } else {
                        return true;
                    }
                }
            } else if (carteDrag.type === typeEnum.action) {//Si c'est une carte action.
                if (identification === 'au') {//Si on drope sur le plateau.
                    return true;
                } else {
                    return false;
                }
            } else if (carteDrag.type === typeEnum.speciale) {//Si c'est une carte speciale.
                if (identification === 'au') {//Si on drope sur le plateau.
                    return true;
                } else {
                    return false;
                }
            }
        }

        //function qui transforme la première lettre d'un string en majuscule.
        function premiereLettreMaj(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        //S'assurer que le caractère est un nombre.
        function EstChiffre(evt) {
            evt = (evt) ? evt : window.evt;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }

        //Fonction qui renvoie la lettre du joueur voulu
        function lettreJoueur(numero) {
            if (nombreJoueur === 2) {
                if (numero === 0) {
                    return 'A';
                } else if (numero === 1) {
                    return 'B';
                }
            } else if (nombreJoueur === 3) {
                if (numero === 0) {
                    return 'A';
                } else if (numero === 1) {
                    return 'B';
                } else if (numero === 2) {
                    return 'C';
                }
            } else if (nombreJoueur === 4) {
                if (numero === 1) {
                    return 'D';
                } else if (numero === 0) {
                    return 'A'
                } else if (numero === 2) {
                    return 'B';
                } else {
                    return 'C';
                }
            }
        }

        //Fonction qui renvoie le numero du joueur voulu.
        function numeroJoueur(lettre) {
            if (nombreJoueur === 4) {
                if (lettre === 'A') {
                    return 0;
                } else if (lettre === 'B') {
                    return 2;
                } else if (lettre === 'C') {
                    return 3;
                } else if (lettre === 'D') {
                    return 1;
                }
            } else if (lettre === 3) {
                if (lettre === 'A') {
                    return 0;
                } else if (lettre === 'B') {
                    return 1;
                } else if (lettre === 'C') {
                    return 2;
                }
            } else if (nombreJoueur === 2) {
                if (lettre === 'A') {
                    return 0;
                } else if (lettre === 'B') {
                    return 1;
                }
            }
        }

        //Fonction qui retourne true si il y a un macroinvertébré à manger.
        function possibleManger() {
            var nombrePossible = 0;
            var tailleMacro = carteDrag.taille;

            for (var i = 0; i < 10; i++) {
                if (numeroJoueurActif != 0) {
                    if (CarteJeu[0][i] != null) {
                        if (CarteJeu[0][i].taille < tailleMacro) {
                            nombrePossible++;
                        }
                    }
                }
                if (numeroJoueurActif != 1) {
                    if (CarteJeu[1][i] != null) {
                        if (CarteJeu[1][i].taille < tailleMacro) {
                            nombrePossible++;
                        }
                    }
                }
                if (numeroJoueurActif != 2) {
                    if (nombreJoueur > 2) {
                        if (CarteJeu[2][i] != null) {
                            if (CarteJeu[2][i].taille < tailleMacro) {
                                nombrePossible++;
                            }
                        }
                    }
                }
                if (numeroJoueurActif != 3) {
                    if (nombreJoueur > 3) {
                        if (CarteJeu[3][i] != null) {
                            if (CarteJeu[3][i].taille < tailleMacro) {
                                nombrePossible++;
                            }
                        }
                    }
                }
            }

            if (nombrePossible >= carteDrag.predateur) {
                return true;
            } else {
                return false;
            }
        }

        //Fonction qui valide si le drop est accepté.
        function accepterDrop(evt) {
            if (calculer) {
                calculer = false;
                return true;
            }
            if (carteDrag.coutRessources <= pointsRessourcesRestant[numeroJoueurActif]) {//Si on a assez de points de ressources.
                // Si c'est un macroinvertebré ou un salmonide, il y a des conditions.
                if (carteDrag.type === typeEnum.macroInvertebre || carteDrag.type === typeEnum.salmonide) {
                    if (verifierCondition(carteDrag)) {
                        if (carteDrag.predateur > 0) {
                            if (possibleManger()) {//Si il y a un macroinvertébré mangeable.
                                calculer = true;
                                return true;
                            } else {
                                popUpErreur('Un adversaire doit avoir une carte avec une taille inférieure au prédateur pour qu\'il ai quelque chose à manger.');
                                return false;
                            }
                        } else {
                            calculer = true;
                            return true;
                        }
                    } else {
                        popUpAvertissement('Vous ne respectez pas les conditions nécéssaires.');
                        return false;
                    }
                } else if (carteDrag.type === typeEnum.habitats || carteDrag.type === typeEnum.intervention || carteDrag.type === typeEnum.bandeRiveraine) {
                    if (carteDrag.type === typeEnum.habitats) {//Si on joue un habitat.
                        if (verifierNombreHabitats(numeroJoueurActif, 8)) {//Si on n'a pas 8 habitats déjà en jeu.
                            calculer = true;
                            return true;
                        } else {
                            popUpAvertissement('Vous ne pouvez pas avoir plus de 8 «Habitats» en jeu.');
                            return false;
                        }
                    } else if (carteDrag.type === typeEnum.bandeRiveraine) {//Si on joue une bande riveraine.
                        if (verifierNombreBandeRiveraine(numeroJoueurActif, 3)) {//Si on n'a pas 3 bandes riveraines en jeu.
                            calculer = true;
                            return true;
                        } else {
                            popUpAvertissement('Vous ne pouvez pas avoir plus de 3 «Bandes Riveraines» en jeu.');
                            return false;
                        }
                    } else if (carteDrag.type === typeEnum.intervention) {//Si on joue une intervention.
                        calculer = true;
                        return true;
                    }
                } else if (carteDrag.type === typeEnum.perturbation) {//Si on joue une perturbation.
                    if (carteDrag.nom === nomEnum.dechets) {//Carte déchets.
                        if (presenceReglementation(nomEnum.interdiction, evt)) {
                            popUpAvertissement('Il y a une interdiction de jeter des ordures pour cet écosystème.');
                            return false;
                        }
                    } else if (carteDrag.nom === nomEnum.artificialisation) {//Carte artificialisation.
                        if (presenceReglementation(nomEnum.politique, evt)) {
                            popUpAvertissement('Il y a une politique de protection pour cet écosystème.');
                            return false;
                        }
                    } else if (carteDrag.nom === nomEnum.deversement) {//Carte déversement.
                        if (!verifier) {
                            verifier = true;
                            if (!deversement) {
                                calculer = true;
                                return true;
                            } else {
                                popUpAvertissement('Un «Déversement» aura déjà lieu à la fin du tour du joueur: ' + premiereLettreMaj(nomJoueur[numeroJoueurDeversement]) + '.');
                                return false;
                            }
                        } else {
                            verifier = false;
                            calculer = true;
                            return true;
                        }
                    }
                    var message = verifierConditionPerturbation(evt);

                    if (message === 'ok') {
                        calculer = true;
                        return true;
                    } else {
                        popUpAvertissement(message);
                        return false;
                    }

                } else if (carteDrag.type === typeEnum.reglementation) {//Carte réglementation.
                    calculer = true;
                    return true;
                } else if (carteDrag.type === typeEnum.action) {//Carte action.
                    if (carteDrag.nom === nomEnum.corveNettoyage) {
                        for (var i = 0; i < nombreJoueur; i++) {
                            for (var j = 0; j < cartePerturbation[i].length; j++) {
                                if (cartePerturbation[i][j] != null) {
                                    if (cartePerturbation[i][j].nom === nomEnum.dechets) {
                                        calculer = true;
                                        return true;
                                    }
                                }
                            }
                        }
                        popUpAvertissement('Il n\'y a pas de cartes «Déchets» en jeu.');
                        return false;
                    } else if (carteDrag.nom === nomEnum.naturalisation) {//Si c'est une naturalisation.
                        for (var i = 0; i < nombreJoueur; i++) {
                            for (var j = 0; j < cartePerturbation[i].length; j++) {
                                if (cartePerturbation[i][j] != null) {
                                    if (cartePerturbation[i][j].nom === nomEnum.artificialisation) {
                                        calculer = true;
                                        return true;
                                    }
                                }
                            }
                        }
                        for (var i = 0; i < paquetIntervention.length; i++) {
                            if (paquetIntervention[i] != null) {
                                if (paquetIntervention[i].nom === nomEnum.amenageArbre || paquetIntervention[i].nom === nomEnum.amenageArbustes || paquetIntervention[i].nom === nomEnum.amenageHerbace) {
                                    calculer = true;
                                    return true;
                                }
                            }
                        }
                        popUpAvertissement('Il n\'y a pas de cartes «Artificialisations» à retirer et il n\'y a plus de cartes «Bandes Riveraines» dans le paquet de cartes «Interventions».');
                        return false;
                    } else if (carteDrag.nom === nomEnum.amenagement) {//Si c'est une carte d'aménagement.
                        for (var i = 0; i < nombreJoueur; i++) {
                            for (var j = 0; j < cartePerturbation[i].length; j++) {
                                if (cartePerturbation[i][j] != null) {
                                    if (cartePerturbation[i][j].nom === nomEnum.erosion) {
                                        calculer = true;
                                        return true;
                                    }
                                }
                            }
                        }
                        for (var i = 0; i < paquetIntervention.length; i++) {
                            if (paquetIntervention[i] != null) {
                                if (paquetIntervention[i].nom === nomEnum.amenageFosse || paquetIntervention[i].nom === nomEnum.amenageGalets || paquetIntervention[i].nom === nomEnum.amenageGravier || paquetIntervention[i].nom === nomEnum.amenageRapides || paquetIntervention[i].nom === nomEnum.amenageSable) {
                                    calculer = true;
                                    return true;
                                }
                            }
                        }

                        popUpAvertissement('Il n\'y a pas de carte «Érosion» à annuler et il n\'y a plus de cartes «Habitats» dans le paquet de cartes «Interventions».');
                        return false;
                    }
                } else if (carteDrag.type === typeEnum.speciale) {//Si c'est une carte spéciale.
                    if (carteDrag.nom === nomEnum.retention) {
                        if (pointsRessourcesRestant[numeroJoueurActif] === 0) {
                            popUpAvertissement('Vous n\'avez plus de points-ressources à conserver.');
                            return false;
                        }
                        calculer = true;
                        return true;
                    } else if (carteDrag.nom === nomEnum.predation) {//Si c'est une carte de prédation.
                        for (var i = 0; i < CarteJeu[numeroJoueurActif].length; i++) {
                            var carteJoueur = CarteJeu[numeroJoueurActif][i];
                            if (carteJoueur != null) {
                                if (carteJoueur.type === typeEnum.macroInvertebre || carteJoueur.type === typeEnum.salmonide) {
                                    if (carteJoueur.predateur > 0) {
                                        trouverPredateur();
                                        for (var j = 0; j < nombreJoueur; j++) {
                                            if (j !== numeroJoueurActif) {
                                                for (var k = 0; k < CarteJeu[j].length; k++) {
                                                    if (CarteJeu[j][k] != null) {
                                                        if (CarteJeu[j][k].type === typeEnum.macroInvertebre && CarteJeu[j][k].taille < taillePredateur) {
                                                            calculer = true;
                                                            return true;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        popUpAvertissement('Aucun adversaire ne possède de «Macroinvertébrés» de taille inférieure aux vôtres.');
                                        return false;
                                    }
                                }
                            }
                        }
                        popUpAvertissement('Vous ne possédez pas de prédateur sur votre jeu.');
                        return false;
                    } else if (carteDrag.nom === nomEnum.derivation) {//Si c'est une carte dérivation.
                        if (mains[numeroJoueurActif].filter(function (value) { return value != null }).length > 0) {
                            var compteur = 0;
                            for (var i = 0; i < nombreJoueur; i++) {
                                if (i !== numeroJoueurActif) {
                                    if (mains[i].filter(function (value) { return value != null }).length > 0) {
                                        compteur++;
                                    }
                                }
                            }
                            if (compteur != 0) {
                                calculer = true;
                                return true;
                            }
                            popUpAvertissement('Les mains de tous vos adversaires sont vides.');
                            return false;
                        }
                        popUpAvertissement('Vous ne pouvez pas échanger votre main si elle est vide.');
                        return false;
                    } else if (carteDrag.nom === nomEnum.prisSurFait) {//Si c'est la carte pris sur le fait.
                        popUpAvertissement('Cette carte ne peut être jouée que lorsqu\'un adversaire joue une carte «Perturbation».');
                        return false;
                    } else if (carteDrag.nom === nomEnum.accumulation) {//Si c'est la carte accumlation.
                        calculer = true;
                        return true;
                    } else if (carteDrag.nom === nomEnum.emergence) {//Si c'est la carte émergence.
                        for (var i = 0; i < nombreJoueur; i++) {
                            for (var j = 0; j < CarteJeu[i].length; j++) {
                                if (CarteJeu[i][j] != null) {
                                    if (CarteJeu[i][j].type === typeEnum.macroInvertebre) {
                                        if (CarteJeu[i][j].typeMacro === typeMacroEnum.ephemeroptere || CarteJeu[i][j].typeMacro === typeMacroEnum.trichoptere || CarteJeu[i][j].typeMacro === typeMacroEnum.plecoptere || CarteJeu[i][j].typeMacro === typeMacroEnum.odonate || CarteJeu[i][j].typeMacro === typeMacroEnum.diptere) {
                                            calculer = true;
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                        popUpAvertissement('Il n\'y a aucun «Macroinvertébré» d\'un des ordres spécifiés sur le jeu.');
                        return false;
                    } else if (carteDrag.nom === nomEnum.pecheur) {//Si c'est la carte pêcheur.
                        var option1 = false;
                        var option2 = false;

                        for (var i = 0; i < nombreJoueur; i++) {
                            if (i != numeroJoueurActif) {
                                for (var j = 0; j < CarteJeu[i].length; j++) {
                                    if (CarteJeu[i][j] != null) {
                                        if (CarteJeu[i][j].type === typeEnum.salmonide) {
                                            option1 = true;
                                        }
                                    }
                                }
                            }
                        }
                        if (paquetDecharge.filter(function (value) { return value != null }).length != 0) {
                            option2 = true;
                        }
                        if (!option1 && !option2) {
                            popUpAvertissement('Il n\'y a pas de cartes «Salmonidés» en jeu et la décharge est vide.');
                            return false;
                        }
                        return true;
                    } else if (carteDrag.nom === nomEnum.crueSoudaine) {//Si c'est la carte crue soudaine.
                        calculer = true;
                        return true;
                    } else if (carteDrag.nom === nomEnum.zonage) {//Si c'est la carte zonage.
                        for (var i = 0; i < CarteJeu[numeroJoueurActif].length; i++) {
                            if (CarteJeu[numeroJoueurActif][i] != null) {
                                if (CarteJeu[numeroJoueurActif][i].type === typeEnum.habitats) {
                                    for (var j = 0; j < nombreJoueur; j++) {
                                        if (j !== numeroJoueurActif) {
                                            for (var k = 0; k < CarteJeu[j].length; k++) {
                                                if (CarteJeu[j][k] != null) {
                                                    if (CarteJeu[j][k].type === typeEnum.habitats) {
                                                        calculer = true;
                                                        return true;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    popUpAvertissement('Aucun adversaire ne possède d\'«Habitats».');
                                    return false;
                                }
                            }

                        }
                        popUpAvertissement('Vous ne possédez pas d\'«Habitats».');
                        return false;
                    }
                }
            } else {
                popUpAvertissement('Vous manquez de points-ressources pour jouer la carte.');
                return false;
            }
        }

        //Fonction qui retourne true si le nombre maximum d'habitats n'est pas dépassé.
        function verifierNombreHabitats(numeroJoueur, nombreMax) {
            var nombreHabitats = 0;

            for (var i = 0; i < 10; i++) {
                if (CarteJeu[numeroJoueur][i] != null) {
                    if (CarteJeu[numeroJoueur][i].type === typeEnum.habitats) {
                        nombreHabitats += exemplaireCarteJeu[numeroJoueur][i];
                    }
                }
            }

            if (nombreHabitats >= nombreMax) {
                return false;
            } else {
                return true;
            }
        }

        //Fonction qui vérifie si il y a la présence d'une réglementation qui empècherait la mise en place d'une carte perturbation.
        function presenceReglementation(nomReglementation, evt) {
            var position = $(evt).attr('id').substr($(evt).attr('id').length - 2);
            var lettrePositionJoueur = position.substr(0, 1);
            var numeroPositionJoueur = numeroJoueur(lettrePositionJoueur);

            for (var i = 0; i < 10; i++) {
                if (CarteJeu[numeroPositionJoueur][i] != null) {
                    if (CarteJeu[numeroPositionJoueur][i].nom === nomReglementation) {
                        return true;
                    }
                }
            }

            return false;
        }

        //Fonction qui retourne true si le nombre maximum de bande riveraine n'est pas dépassé.
        function verifierNombreBandeRiveraine(numeroJoueur, nombreMax) {
            var nombreBandeRiveraine = 0;

            for (var i = 0; i < 10; i++) {
                if (CarteJeu[numeroJoueur][i] != null) {
                    if (CarteJeu[numeroJoueur][i].type === typeEnum.bandeRiveraine) {
                        nombreBandeRiveraine += exemplaireCarteJeu[numeroJoueur][i];
                    }
                }
            }

            if (nombreBandeRiveraine >= nombreMax) {
                return false;
            } else {
                return true;
            }
        }

        //Fonction qui va vérifier si la carte perturbation respecte son emplacement.
        function verifierConditionPerturbation(evt, ui) {
            var position = $(evt).attr('id').substr($(evt).attr('id').length - 2);
            var numeroPositionEmplacement = position.substr(position.length - 1);
            var lettrePositionJoueur = position.substr(0, 1);
            var numeroPositionJoueur;

            if (nombreJoueur === 4) {
                if (lettrePositionJoueur === 'A') {
                    numeroPositionJoueur = 0;
                } else if (lettrePositionJoueur === 'D') {
                    numeroPositionJoueur = 1;
                } else if (lettrePositionJoueur === 'B') {
                    numeroPositionJoueur = 2;
                } else if (lettrePositionJoueur === 'C') {
                    numeroPositionJoueur = 3;
                }
            } else if (nombreJoueur === 3) {
                if (lettrePositionJoueur === 'A') {
                    numeroPositionJoueur = 0;
                } else if (lettrePositionJoueur === 'B') {
                    numeroPositionJoueur = 1;
                } else if (lettrePositionJoueur === 'C') {
                    numeroPositionJoueur = 2;
                }
            } else if (nombreJoueur === 2) {
                if (lettrePositionJoueur === 'A') {
                    numeroPositionJoueur = 0;
                } else if (lettrePositionJoueur === 'B') {
                    numeroPositionJoueur = 1;
                }
            }

            if (carteDrag.nom === nomEnum.dechets) {//Carte déchets.
                if (CarteJeu[numeroPositionJoueur][numeroPositionEmplacement] != null) {
                    if (CarteJeu[numeroPositionJoueur][numeroPositionEmplacement].type === typeEnum.habitats) {
                        return 'ok';
                    } else {
                        return 'La carte "Déchets" doit être jouer sur un habitat.';
                    }
                } else {
                    return 'La carte "Déchets" doit être jouer sur un habitat.';
                }
            } else if (carteDrag.nom === nomEnum.passageToutTerrain) {//Carte passage tout-terrain.
                if (CarteJeu[numeroPositionJoueur][numeroPositionEmplacement] != null) {
                    if (CarteJeu[numeroPositionJoueur][numeroPositionEmplacement].type === typeEnum.habitats) {
                        return 'ok';
                    } else {
                        return 'La carte "Passage de tout-terrain" doit être jouer sur un habitat.';
                    }
                } else {
                    return 'La carte "Passage de tout-terrain" doit être jouer sur un habitat.';
                }
            } else if (carteDrag.nom === nomEnum.artificialisation) {//Carte artificialisation.
                if (CarteJeu[numeroPositionJoueur][numeroPositionEmplacement] != null) {
                    if (CarteJeu[numeroPositionJoueur][numeroPositionEmplacement].type === typeEnum.bandeRiveraine) {
                        return 'ok';
                    } else {
                        return 'La carte "Artificialisation" doit être jouer sur une bande riveraine.';
                    }
                } else {
                    return 'La carte "Artificialisation" doit être jouer sur une bande riveraine.';
                }
            } else if (carteDrag.nom === nomEnum.erosion) {//Carte érosion.
                if (presenceTypePrecis(typeEnum.bandeRiveraine, false)) {
                    if (presenceTypePrecis(typeEnum.habitats, true)) {
                        return 'ok';
                    } else {
                        return 'Il n\'y a pas d\'habitats à changer en sable.';
                    }
                } else {
                    return 'Il n\'y a pas de bande riveraine à détruire';
                }
            } else if (carteDrag.nom === nomEnum.deversement) {//Carte déversement.
                return 'ok';
            } else if (carteDrag.nom === nomEnum.pollutionOrganique) {//Carte pollution organique.
                if (troisHabitatsPerturbable()) {
                    return 'ok';
                } else {
                    return 'Il y a moins que 3 habitats à perturber.';
                }
            } else {
                return 'Vous ne pouvez pas mettre une carte perturbation sur un emplacement vide.';
            }
        }

        //Fonction qui retourne true si il y a 3 habitats perturbables dans les zones ennemies.
        function troisHabitatsPerturbable() {
            var nombreHabitat = 0;
            for (var i = 0; i < 10; i++) {
                if (numeroJoueurActif != 0) {
                    if (CarteJeu[0][i] != null) {
                        if (CarteJeu[0][i].type === typeEnum.habitats) {
                            nombreHabitat++;
                        }
                    }
                }
                if (numeroJoueurActif != 1) {
                    if (CarteJeu[1][i] != null) {
                        if (CarteJeu[1][i].type === typeEnum.habitats) {
                            nombreHabitat++;
                        }
                    }
                }
                if (numeroJoueurActif != 2) {
                    if (nombreJoueur > 2) {
                        if (CarteJeu[2][i] != null) {
                            if (CarteJeu[2][i].type === typeEnum.habitats) {
                                nombreHabitat++;
                            }
                        }
                    }
                }
                if (numeroJoueurActif != 3) {
                    if (nombreJoueur > 3) {
                        if (CarteJeu[3][i] != null) {
                            if (CarteJeu[3][i].type === typeEnum.habitats) {
                                nombreHabitat++;
                            }
                        }
                    }
                }
            }

            if (nombreHabitat >= 3) {
                return true;
            } else {
                return false;
            }
        }

        //Fonction qui vérifie si un type de carte entré en paramètre est disponible sur le plateau.
        function presenceTypePrecis(type, joueurActif) {
            for (var j = 0; j < nombreJoueur; j++) {
                if (!(joueurActif && j === numeroJoueurActif)) {
                    for (var i = 0; i < 10; i++) {
                        if (CarteJeu[j][i] != null) {
                            if (CarteJeu[j][i].type === type) {
                                return true;
                            }
                        }
                    }
                }
            }
        }

        //Fonction qui va tuer les macroinvertébrés qui n'ont plus d'habitats.
        function tuerMacroSansHabitats() {
            //Tuer si rapides = perturber.
            if (!presence(nomEnum.rapides)) {
                tuerMacroHabitats(nomEnum.rapides, numeroJoueurActif);
            }

            //Tuer si sables = perturber.
            if (!presence(nomEnum.sable)) {
                tuerMacroHabitats(nomEnum.sable, numeroJoueurActif);
            }

            //Tuer si galets = perturber.
            if (!presence(nomEnum.galets)) {
                tuerMacroHabitats(nomEnum.galets, numeroJoueurActif);
            }

            //tuer si gravier = perturber.
            if (!presence(nomEnum.gravier)) {
                tuerMacroHabitats(nomEnum.gravier, numeroJoueurActif);
            }

            //Tuer si fosse = perturber.
            if (!presence(nomEnum.fosse)) {
                tuerMacroHabitats(nomEnum.fosse, numeroJoueurActif);
            }
        }

        //Fonction qui vérifie si le joueur actif détient un certain habitat non perturbé.
        function presence(carte) {
            for (var i = 0; i < 10; i++) {
                if (CarteJeu[numeroJoueurActif][i] != null) {
                    if (CarteJeu[numeroJoueurActif][i].nom === carte) {
                        if (!CarteJeu[numeroJoueurActif][i].perturber) {
                            return true;
                        }
                    }
                }
            }

            return false;
        }

        //Fonction qui tue les macroinvertébrés qui ont besoin d'un habitat entré en paramètre.
        function tuerMacroHabitats(habitats, joueur) {
            var tuer = false;
            for (var i = 0; i < 10; i++) {
                if (CarteJeu[joueur][i] != null) {
                    if (CarteJeu[joueur][i].type === typeEnum.macroInvertebre || CarteJeu[joueur][i].type === typeEnum.salmonide) {
                        var tabCond = CarteJeu[joueur][i].condition;
                        for (var j = 0; j < tabCond.length; j++) {
                            if (CarteJeu[joueur][i] != null) {
                                if (CarteJeu[joueur][i].condition[j] === habitats) {
                                    CarteJeu[joueur][i] = null;
                                    exemplaireCarteJeu[joueur][i] = 0;
                                    $('#emplacementJoueur' + lettreJoueur(joueur) + i).children().remove();
                                    tuer = true;
                                }
                            }
                        }
                    }
                }
            }
            if (tuer) {
                popUpConfirmation('Votre habitat «' + premiereLettreMaj(habitats) + '» est perturbé et le/les «Macroinvertébré(s)» l\'utilisant sont mort(s).');
            }
        }

        //Fonction qui va retirer toutes les cartes déchets.
        function retirerDechets() {
            for (var i = 0; i < nombreJoueur; i++) {
                for (var j = 0; j < CarteJeu[i].length; j++) {
                    if (cartePerturbation[i][j] != null) {
                        if (cartePerturbation[i][j].nom === nomEnum.dechets) {
                            cartePerturbation[i][j] = null;
                            CarteJeu[i][j].perturber = false;
                            CarteJeu[i][j].tempsPerturber = 0;
                            $('#emplacementJoueur' + lettreJoueur(i) + j).children().last().remove();
                            $('#emplacementJoueur' + lettreJoueur(i) + j).removeClass('ui-perturber-highlight');
                        }
                    }
                }
            }
        }

        //Fonction qui vérifie si une carte perturbation se trouve dans la main d'un joueur.
        function verifierPresencePrisSurFait() {
            var tabJoueur = new Array(nombreJoueur);

            for (var i = 0; i < nombreJoueur; i++) {
                if (i !== numeroJoueurActif) {
                    for (var j = 0; j < mains[i].length; j++) {
                        if (mains[i][j] != null) {
                            if (mains[i][j].nom === nomEnum.prisSurFait) {
                                tabJoueur[i] = true;
                            }
                        }
                    }
                }
            }
            return tabJoueur;
        }

        //Fonction qui se produit lorsque l'on drop.
        function onDrop(evt, ui, drop) {
            $(function () {
                $(ui.draggable).click(function () { onClickImage($(this).parent().attr('id'), ui) });
                ui.draggable.appendTo(drop);
                ui.draggable.addClass('imageCarteJeu');
                ui.draggable.removeClass('imageCarteMains');
                ui.draggable.css('width', '58px');
                ui.draggable.css('height', '90px');
                ui.draggable.css('top', '0px');
                ui.draggable.css('left', '0px');
                ui.draggable.draggable('disable');
                if ($(drop).children().length > 1) {
                    ui.draggable.css('margin-top', ($(drop).children().length * 10) - 10 + 'px');
                    if (carteDrag.type != typeEnum.perturbation) {//Si c'est une perturbation, ne l'ajoute pas.
                        exemplaireCarteJeu[numeroJoueurActif][drop.id.substr(drop.id.length - 1)]++;
                    }

                } else {
                    if (carteDrag.type != typeEnum.perturbation) {//Si c'est une perturbation, ne l'ajoute pas.
                        exemplaireCarteJeu[numeroJoueurActif][drop.id.substr(drop.id.length - 1)] = 1;
                    }
                }

                //Partie qui change les données de la main vers la partie du bas.
                pointsRessourcesRestant[numeroJoueurActif] -= carteDrag.coutRessources;
                pointsRessourcesUtiliser[numeroJoueurActif] += carteDrag.coutRessources;

                if (carteDrag.type != typeEnum.perturbation) {//Si c'est une perturbation, ne l'ajoute pas.
                    var id = drop.id.substr(drop.id.length - 1);
                    CarteJeu[numeroJoueurActif][id] = carteDrag;
                }

                supprimerCartePrecise(carteDragNumero);
                calculerPoints();
                updatePointsRessources();
                updateAffichageImage();
                updateZonePoints();
            });
        }

        //Fonction qui va supprimer une carte de la main, appelé lors du drop dans la zone du bas.
        function supprimerCartePrecise(positionCarte) {
            mains[numeroJoueurActif][positionCarte] = null;
        }

        //Définition de la classe Carte.
        function Carte(type, nom, nomImage, coutRessources, params) {
            if (type === typeEnum.habitats) {
                this.nom = nom;
                this.type = type;
                this.habitats = params.habitats;
                this.coutRessources = coutRessources;
                this.nomImage = nomImage;
                if (params == null || params.perturber == null) {
                    this.perturber = false;
                } else {
                    this.perturber = params.perturber;
                }
                if (params == null || params.tempsperturber == null) {
                    this.tempsPerturber = 0;
                } else {
                    this.tempsPerturber = params.tempsPerturber;
                }
            } else if (type === typeEnum.salmonide) {
                this.nom = nom;
                this.type = type;
                this.coutRessources = coutRessources;
                this.condition = params.condition;
                this.nomImage = nomImage;
            } else if (type === typeEnum.bandeRiveraine) {
                this.nom = nom;
                this.type = type;
                this.coutRessources = coutRessources;
                this.nomImage = nomImage;
                if (params == null || params.perturber == null) {
                    this.perturber = false;
                } else {
                    this.perturber = params.perturber;
                }
                if (params == null || params.tempsperturber == null) {
                    this.tempsPerturber = 0;
                } else {
                    this.tempsPerturber = params.tempsPerturber;
                }
            } else if (type === typeEnum.speciale) {
                this.nom = nom;
                this.type = type;
                this.nomImage = nomImage;
                this.coutRessources = coutRessources;
            } else if (type === typeEnum.action) {
                this.nom = nom;
                this.type = type;
                this.nomImage = nomImage;
                this.coutRessources = coutRessources;
            } else if (type === typeEnum.perturbation) {
                this.nom = nom;
                this.type = type;
                this.nomImage = nomImage;
                this.coutRessources = coutRessources;
                this.tempsActif = params.tempsActif;
            } else if (type === typeEnum.reglementation) {
                this.nom = nom;
                this.type = type;
                this.nomImage = nomImage;
                this.coutRessources = coutRessources;
            } else if (type === typeEnum.macroInvertebre) {
                this.nom = nom;
                this.type = type;
                this.nomImage = nomImage;
                this.coutRessources = coutRessources;
                this.tolerance = params.tolerance;
                this.taille = params.taille;
                this.predateur = params.predateur;
                this.typeMacro = params.typeMacro;
                this.condition = params.condition;
            } else if (type === typeEnum.intervention) {
                this.nom = nom;
                this.type = type;
                this.nomImage = nomImage;
                this.coutRessources = coutRessources;
            }
        }

        //function pour piger une carte.
        function pigerCarte(paquetCarte) {
            if (paquetCarte.length > 0) {
                if (paquetCarte.length === 31) {
                    popUpConfirmation("Il reste seulement 30 cartes dans le paquet.");
                } else if (paquetCarte.length === 6) {
                    popUpConfirmation("Il reste seulement 5 cartes avant la fin de la partie.");
                }

                var carte = paquetCarte.pop();
                if (paquetCarte.length <= 70) {
                    $('.imageCharge').attr('src', 'ressources/moyenPaquet.png');
                }
                if (paquetCarte.length <= 20) {
                    $('.imageCharge').attr('src', 'ressources/petitPaquet.png')
                }

                return carte;
            } else {
                aucuneCarte = true;
            }
        }

        //Fonction qui anime les cartes du paquet jusqu'à la main.
        function animationPige(carte, position) {
            var carteMain
            if (document.getElementById('divCarte' + position) != null) {
                carteMain = 'divCarte' + position;
            } else {
                var li = document.createElement('li');
                li.className = 'liMain';
                li.id = 'liMain' + position;
                document.getElementById('divMain').appendChild(li);

                var divCarte = document.createElement('div');
                divCarte.id = 'divCarte' + position;
                divCarte.className = 'divCarte';
                li.appendChild(divCarte);

                carteMain = divCarte.id;
            }
            var divCarteAnimee = document.createElement('div');
            divCarteAnimee.id = 'carte' + position;
            divCarteAnimee.className = 'divAnimee';
            divCarteAnimee.innerHTML = '<img class="imageCarteJeu" src="ressources/' + carte.nomImage + '">';
            $('body').append(divCarteAnimee);

            var x = $('#' + carteMain).offset().left;
            var y = $('#' + carteMain).offset().top;

            $('#carte' + position).animate({
                height: 180,
                width: 118,
                left: x,
                top: y,
                borderSpacing: 0,
            }, {
                step: function (now) {
                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                }
            }, { duration: 500 });
            setTimeout(function () {
                $('#carte' + position).remove();
                updateAffichageImage();
            }, 500);
        }

        //Fonction qui appelle le timer lors de la pige des cartes.
        function annimationPigerCarte(positionMain) {
            var carte = pigerCarte(paquetCarte);
            mains[numeroJoueurActif][positionMain] = carte;
            setTimeout(function () {
                animationPige(carte, positionMain);
            }, 500);
        }

        //Function qui melange le paquet de carte.
        function melangerPaquetCarte(paquetCarte) {
            var currentIndex = paquetCarte.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = paquetCarte[currentIndex];
                paquetCarte[currentIndex] = paquetCarte[randomIndex];
                paquetCarte[randomIndex] = temporaryValue;
            }
        }

        //Fonction qui ajoute des cartes selon le tour.
        function ajoutCarte(numeroTour) {
            var carte;

            if (numeroTour === 4 && difficulte === '1') {
                //---------------------------------salmonide---------------------------------

                carte = new Carte(typeEnum.salmonide, nomEnum.ombleFontaine, 'ombleFontaine.png', 10, { tolerance: 4, condition: [nomEnum.fosse, nomEnum.rapides, nomEnum.gravier, nomEnum.galets], predateur: 2 });
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.salmonide, nomEnum.ombleFontaine, 'ombleFontaine.png', 10, { tolerance: 4, condition: [nomEnum.fosse, nomEnum.rapides, nomEnum.gravier, nomEnum.galets], predateur: 2 });
                paquetCarte.push(carte);

                //---------------------------------bandeRiveraine----------------------------

                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.herbace, 'herbaceesNaturelles.png', 1);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.herbace, 'herbaceesNaturelles.png', 1);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.herbace, 'herbaceesNaturelles.png', 1);
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.arbustes, 'arbustes.png', 2);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.arbustes, 'arbustes.png', 2);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.arbustes, 'arbustes.png', 2);
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.arbres, 'arbres.png', 3);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.arbres, 'arbres.png', 3);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.arbres, 'arbres.png', 3);
                paquetCarte.push(carte);

                melangerPaquetCarte(paquetCarte);

                popUpConfirmation('Les carte de type «Bande Riveraine» et «Salmonide» sont ajoutées au paquet de carte.');
            }
        }

        //Fonction qui crée le paquet de carte.
        function creerPaquetCarte(difficulte) {
            var carte;
            var paquetCarte = [];

            carte = new Carte(typeEnum.habitats, nomEnum.fosse, 'fosse.png', 1, { habitats: nomEnum.fosse });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.fosse, 'fosse.png', 1, { habitats: nomEnum.fosse });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.fosse, 'fosse.png', 1, { habitats: nomEnum.fosse });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.fosse, 'fosse.png', 1, { habitats: nomEnum.fosse });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.habitats, nomEnum.sable, 'sable.png', 1, { habitats: nomEnum.sable });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.sable, 'sable.png', 1, { habitats: nomEnum.sable });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.sable, 'sable.png', 1, { habitats: nomEnum.sable });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.sable, 'sable.png', 1, { habitats: nomEnum.sable });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.habitats, nomEnum.gravier, 'gravier.png', 2, { habitats: nomEnum.gravier });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.gravier, 'gravier.png', 2, { habitats: nomEnum.gravier });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.gravier, 'gravier.png', 2, { habitats: nomEnum.gravier });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.gravier, 'gravier.png', 2, { habitats: nomEnum.gravier });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.gravier, 'gravier.png', 2, { habitats: nomEnum.gravier });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.gravier, 'gravier.png', 2, { habitats: nomEnum.gravier });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.habitats, nomEnum.rapides, 'rapides.png', 3, { habitats: nomEnum.rapides });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.rapides, 'rapides.png', 3, { habitats: nomEnum.rapides });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.rapides, 'rapides.png', 3, { habitats: nomEnum.rapides });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.rapides, 'rapides.png', 3, { habitats: nomEnum.rapides });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.rapides, 'rapides.png', 3, { habitats: nomEnum.rapides });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.rapides, 'rapides.png', 3, { habitats: nomEnum.rapides });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.rapides, 'rapides.png', 3, { habitats: nomEnum.rapides });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.rapides, 'rapides.png', 3, { habitats: nomEnum.rapides });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.habitats, nomEnum.galets, 'galets.png', 3, { habitats: 'galets' });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.galets, 'galets.png', 3, { habitats: 'galets' });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.galets, 'galets.png', 3, { habitats: 'galets' });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.galets, 'galets.png', 3, { habitats: 'galets' });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.habitats, nomEnum.galets, 'galets.png', 3, { habitats: 'galets' });
            paquetCarte.push(carte);

            // ----------------------------MacroInvertebre--------------------------------------------------

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.oligochaeta, 'oligochaeta.png', 1, { tolerance: 8, taille: 1, typeMacro: typeMacroEnum.annelide, condition: ['?'], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.oligochaeta, 'oligochaeta.png', 1, { tolerance: 8, taille: 1, typeMacro: typeMacroEnum.annelide, condition: ['?'], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.oligochaeta, 'oligochaeta.png', 1, { tolerance: 8, taille: 1, typeMacro: typeMacroEnum.annelide, condition: ['?'], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.oligochaeta, 'oligochaeta.png', 1, { tolerance: 8, taille: 1, typeMacro: typeMacroEnum.annelide, condition: ['?'], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.simuliidae, 'simuliidae.png', 1, { tolerance: 6, taille: 2, typeMacro: typeMacroEnum.diptere, condition: [nomEnum.rapides, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.simuliidae, 'simuliidae.png', 1, { tolerance: 6, taille: 2, typeMacro: typeMacroEnum.diptere, condition: [nomEnum.rapides, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.simuliidae, 'simuliidae.png', 1, { tolerance: 6, taille: 2, typeMacro: typeMacroEnum.diptere, condition: [nomEnum.rapides, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.chironomidae, 'chironomidae.png', 1, { tolerance: 8, taille: 2, typeMacro: typeMacroEnum.diptere, condition: ['?'], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.chironomidae, 'chironomidae.png', 1, { tolerance: 8, taille: 2, typeMacro: typeMacroEnum.diptere, condition: ['?'], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.chironomidae, 'chironomidae.png', 1, { tolerance: 8, taille: 2, typeMacro: typeMacroEnum.diptere, condition: ['?'], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.chironomidae, 'chironomidae.png', 1, { tolerance: 8, taille: 2, typeMacro: typeMacroEnum.diptere, condition: ['?'], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.psephenidae, 'psephenidae.png', 2, { tolerance: 3, taille: 4, typeMacro: typeMacroEnum.coleoptere, condition: [nomEnum.rapides, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.psephenidae, 'psephenidae.png', 2, { tolerance: 3, taille: 4, typeMacro: typeMacroEnum.coleoptere, condition: [nomEnum.rapides, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.hydropsychidae, 'hydropsychidae.png', 2, { tolerance: 5, taille: 4, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.hydropsychidae, 'hydropsychidae.png', 2, { tolerance: 5, taille: 4, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.hydropsychidae, 'hydropsychidae.png', 2, { tolerance: 5, taille: 4, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.hydropsychidae, 'hydropsychidae.png', 2, { tolerance: 5, taille: 4, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.elmidae, 'elmidae.png', 2, { tolerance: 3, taille: 3, typeMacro: typeMacroEnum.coleoptere, condition: [nomEnum.rapides], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.elmidae, 'elmidae.png', 2, { tolerance: 3, taille: 3, typeMacro: typeMacroEnum.coleoptere, condition: [nomEnum.rapides], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.elmidae, 'elmidae.png', 2, { tolerance: 3, taille: 3, typeMacro: typeMacroEnum.coleoptere, condition: [nomEnum.rapides], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.baetidae, 'baetidae.png', 2, { tolerance: 5, taille: 3, typeMacro: typeMacroEnum.ephemeroptere, condition: [nomEnum.rapides], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.baetidae, 'baetidae.png', 2, { tolerance: 5, taille: 3, typeMacro: typeMacroEnum.ephemeroptere, condition: [nomEnum.rapides], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.baetidae, 'baetidae.png', 2, { tolerance: 5, taille: 3, typeMacro: typeMacroEnum.ephemeroptere, condition: [nomEnum.rapides], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.hydroptilidae, 'hydroptilidae.png', 2, { tolerance: 4, taille: 2, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides, nomEnum.sable, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.hydroptilidae, 'hydroptilidae.png', 2, { tolerance: 4, taille: 2, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides, nomEnum.sable, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.hydroptilidae, 'hydroptilidae.png', 2, { tolerance: 4, taille: 2, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides, nomEnum.sable, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.hydroptilidae, 'hydroptilidae.png', 2, { tolerance: 4, taille: 2, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides, nomEnum.sable, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.ephemeridae, 'ephemeridae.png', 2, { tolerance: 3, taille: 5, typeMacro: typeMacroEnum.ephemeroptere, condition: [nomEnum.sable], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.ephemeridae, 'ephemeridae.png', 2, { tolerance: 3, taille: 5, typeMacro: typeMacroEnum.ephemeroptere, condition: [nomEnum.sable], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.prosobranchia, 'prosobranchia.png', 2, { tolerance: 8, taille: 5, typeMacro: typeMacroEnum.mollusque, condition: ['?'], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.prosobranchia, 'prosobranchia.png', 2, { tolerance: 8, taille: 5, typeMacro: typeMacroEnum.mollusque, condition: ['?'], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.sphaeridae, 'sphaeridae.png', 2, { tolerance: 5, taille: 3, typeMacro: typeMacroEnum.mollusque, condition: [nomEnum.rapides, nomEnum.gravier], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.sphaeridae, 'sphaeridae.png', 2, { tolerance: 5, taille: 3, typeMacro: typeMacroEnum.mollusque, condition: [nomEnum.rapides, nomEnum.gravier], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.anisoptera, 'anisoptera.png', 3, { tolerance: 5, taille: 6, typeMacro: typeMacroEnum.odonate, condition: [nomEnum.rapides], predateur: 1 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.anisoptera, 'anisoptera.png', 3, { tolerance: 5, taille: 6, typeMacro: typeMacroEnum.odonate, condition: [nomEnum.rapides], predateur: 1 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.glossosomatidae, 'glossosomatidae.png', 3, { tolerance: 0, taille: 5, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides, nomEnum.gravier, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.glossosomatidae, 'glossosomatidae.png', 3, { tolerance: 0, taille: 5, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides, nomEnum.gravier, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.heptageniidae, 'heptageniidae.png', 3, { tolerance: 2, taille: 4, typeMacro: typeMacroEnum.ephemeroptere, condition: [nomEnum.rapides, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.heptageniidae, 'heptageniidae.png', 3, { tolerance: 2, taille: 4, typeMacro: typeMacroEnum.ephemeroptere, condition: [nomEnum.rapides, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.ephemerellidae, 'ephemerellidae.png', 3, { tolerance: 1, taille: 4, typeMacro: typeMacroEnum.ephemeroptere, condition: [nomEnum.rapides, nomEnum.gravier], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.ephemerellidae, 'ephemerellidae.png', 3, { tolerance: 1, taille: 4, typeMacro: typeMacroEnum.ephemeroptere, condition: [nomEnum.rapides, nomEnum.gravier], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.brachycentrus, 'brachycentrus.png', 3, { tolerance: 3, taille: 4, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.brachycentrus, 'brachycentrus.png', 3, { tolerance: 3, taille: 4, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.rhyacophilidae, 'rhyacophilidae.png', 4, { tolerance: 0, taille: 4, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides], predateur: 1 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.rhyacophilidae, 'rhyacophilidae.png', 4, { tolerance: 0, taille: 4, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides], predateur: 1 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.rhyacophilidae, 'rhyacophilidae.png', 4, { tolerance: 0, taille: 4, typeMacro: typeMacroEnum.trichoptere, condition: [nomEnum.rapides], predateur: 1 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.tipulidae, 'tipulidae.png', 4, { tolerance: 3, taille: 8, typeMacro: typeMacroEnum.diptere, condition: [nomEnum.fosse], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.tipulidae, 'tipulidae.png', 4, { tolerance: 3, taille: 8, typeMacro: typeMacroEnum.diptere, condition: [nomEnum.fosse], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.gyrinidae, 'gyrinidae.png', 4, { tolerance: 4, taille: 5, typeMacro: typeMacroEnum.coleoptere, condition: [nomEnum.fosse], predateur: 1 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.gyrinidae, 'gyrinidae.png', 4, { tolerance: 4, taille: 5, typeMacro: typeMacroEnum.coleoptere, condition: [nomEnum.fosse], predateur: 1 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.perlidae, 'perlidae.png', 4, { tolerance: 1, taille: 5, typeMacro: typeMacroEnum.plecoptere, condition: [nomEnum.rapides, nomEnum.gravier, nomEnum.galets], predateur: 1 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.perlidae, 'perlidae.png', 4, { tolerance: 1, taille: 5, typeMacro: typeMacroEnum.plecoptere, condition: [nomEnum.rapides, nomEnum.gravier, nomEnum.galets], predateur: 1 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.corydalidae, 'corydalidae.png', 5, { tolerance: 0, taille: 8, typeMacro: typeMacroEnum.megaloptere, condition: [nomEnum.rapides, nomEnum.gravier, nomEnum.galets], predateur: 1 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.nipidae, 'nepidae.png', 6, { tolerance: 6, taille: 9, typeMacro: typeMacroEnum.hemiptere, condition: [nomEnum.fosse], predateur: 1 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.decapoda, 'decapoda.png', 6, { tolerance: 5, taille: 10, typeMacro: typeMacroEnum.crustace, condition: [nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);

            carte = new Carte(typeEnum.macroInvertebre, nomEnum.pteronarcyidae, 'pteronarcyidae.png', 7, { tolerance: 0, taille: 8, typeMacro: typeMacroEnum.plecoptere, condition: [nomEnum.rapides, nomEnum.gravier, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);
            carte = new Carte(typeEnum.macroInvertebre, nomEnum.pteronarcyidae, 'pteronarcyidae.png', 7, { tolerance: 0, taille: 8, typeMacro: typeMacroEnum.plecoptere, condition: [nomEnum.rapides, nomEnum.gravier, nomEnum.galets], predateur: 0 });
            paquetCarte.push(carte);

            if (difficulte >= 2) {//Moyen
                //---------------------------------salmonide---------------------------------

                carte = new Carte(typeEnum.salmonide, nomEnum.ombleFontaine, 'ombleFontaine.png', 10, { tolerance: 4, condition: [nomEnum.fosse, nomEnum.rapides, nomEnum.gravier, nomEnum.galets], predateur: 2 });
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.salmonide, nomEnum.ombleFontaine, 'ombleFontaine.png', 10, { tolerance: 4, condition: [nomEnum.fosse, nomEnum.rapides, nomEnum.gravier, nomEnum.galets], predateur: 2 });
                paquetCarte.push(carte);

                //---------------------------------bandeRiveraine----------------------------

                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.herbace, 'herbaceesNaturelles.png', 1);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.herbace, 'herbaceesNaturelles.png', 1);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.herbace, 'herbaceesNaturelles.png', 1);
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.arbustes, 'arbustes.png', 2);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.arbustes, 'arbustes.png', 2);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.arbustes, 'arbustes.png', 2);
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.arbres, 'arbres.png', 3);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.arbres, 'arbres.png', 3);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.bandeRiveraine, nomEnum.arbres, 'arbres.png', 3);
                paquetCarte.push(carte);
                //--------------------------perturbation--------------------------------------

                carte = new Carte(typeEnum.perturbation, nomEnum.dechets, 'dechets.png', 2, { tempsActif: 0 });
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.perturbation, nomEnum.dechets, 'dechets.png', 2, { tempsActif: 0 });
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.perturbation, nomEnum.dechets, 'dechets.png', 2, { tempsActif: 0 });
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.perturbation, nomEnum.dechets, 'dechets.png', 2, { tempsActif: 0 });
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.perturbation, nomEnum.erosion, 'erosion.png', 3, { tempsActif: 0 });
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.perturbation, nomEnum.passageToutTerrain, 'passageToutTerrain.png', 3, { tempsActif: 1 });
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.perturbation, nomEnum.passageToutTerrain, 'passageToutTerrain.png', 3, { tempsActif: 1 });
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.perturbation, nomEnum.passageToutTerrain, 'passageToutTerrain.png', 3, { tempsActif: 1 });
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.perturbation, nomEnum.artificialisation, 'artificialisation.png', 3, { tempsActif: 0 });
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.perturbation, nomEnum.artificialisation, 'artificialisation.png', 3, { tempsActif: 0 });
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.perturbation, nomEnum.artificialisation, 'artificialisation.png', 3, { tempsActif: 0 });
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.perturbation, nomEnum.pollutionOrganique, 'pollutionOrganique.png', 4, { tempsActif: 2 });
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.perturbation, nomEnum.pollutionOrganique, 'pollutionOrganique.png', 4, { tempsActif: 2 });
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.perturbation, nomEnum.deversement, 'deversement.png', 2, { tempsActif: 1 });
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.perturbation, nomEnum.deversement, 'deversement.png', 2, { tempsActif: 1 });
                paquetCarte.push(carte);

                //---------------------------action--------------------------------------

                carte = new Carte(typeEnum.action, nomEnum.corveNettoyage, 'corveNettoyage.png', 1);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.action, nomEnum.corveNettoyage, 'corveNettoyage.png', 1);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.action, nomEnum.corveNettoyage, 'corveNettoyage.png', 1);
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.action, nomEnum.naturalisation, 'naturalisation.png', 2);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.action, nomEnum.naturalisation, 'naturalisation.png', 2);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.action, nomEnum.naturalisation, 'naturalisation.png', 2);
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.action, nomEnum.amenagement, 'amenagement.png', 3);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.action, nomEnum.amenagement, 'amenagement.png', 3);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.action, nomEnum.amenagement, 'amenagement.png', 3);
                paquetCarte.push(carte);

                //---------------------------------intervention------------------------------

                carte = new Carte(typeEnum.intervention, nomEnum.amenageSable, 'habitatAmenageSable.png', 1, { habitats: nomEnum.sable });
                paquetIntervention.push(carte);

                carte = new Carte(typeEnum.intervention, nomEnum.amenageRapides, 'habitatAmenageRapides.png', 1, { habitats: nomEnum.rapides });
                paquetIntervention.push(carte);

                carte = new Carte(typeEnum.intervention, nomEnum.amenageFosse, 'habitatAmenageFosse.png', 1, { habitats: nomEnum.fosse });
                paquetIntervention.push(carte);

                carte = new Carte(typeEnum.intervention, nomEnum.amenageGalets, 'habitatAmenageGalets.png', 1, { habitats: nomEnum.galets });
                paquetIntervention.push(carte);
                carte = new Carte(typeEnum.intervention, nomEnum.amenageGalets, 'habitatAmenageGalets.png', 1, { habitats: nomEnum.galets });
                paquetIntervention.push(carte);

                carte = new Carte(typeEnum.intervention, nomEnum.amenageGravier, 'habitatAmenageGravier.png', 2, { habitats: nomEnum.gravier });
                paquetIntervention.push(carte);

                carte = new Carte(typeEnum.intervention, nomEnum.amenageHerbace, 'bandeRiveraineHerbace.png', 1);
                paquetIntervention.push(carte);

                carte = new Carte(typeEnum.intervention, nomEnum.amenageArbustes, 'bandeRiveraineArbuste.png', 2);
                paquetIntervention.push(carte);

                carte = new Carte(typeEnum.intervention, nomEnum.amenageArbre, 'bandeRiveraineArbre.png', 3);
                paquetIntervention.push(carte);
            }

            if (difficulte >= 3) {//Difficile
                //-----------------------------------speciale--------------------------------

                carte = new Carte(typeEnum.speciale, nomEnum.prisSurFait, 'prisSurFait.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.prisSurFait, 'prisSurFait.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.prisSurFait, 'prisSurFait.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.prisSurFait, 'prisSurFait.png', 0);
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.speciale, nomEnum.pecheur, 'pecheur.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.pecheur, 'pecheur.png', 0);
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.speciale, nomEnum.crueSoudaine, 'crueSoudaine.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.crueSoudaine, 'crueSoudaine.png', 0);
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.speciale, nomEnum.zonage, 'zonage.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.zonage, 'zonage.png', 0);
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.speciale, nomEnum.retention, 'retention.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.retention, 'retention.png', 0);
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.speciale, nomEnum.emergence, 'emergence.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.emergence, 'emergence.png', 0);
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.speciale, nomEnum.derivation, 'derivation.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.derivation, 'derivation.png', 0);
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.speciale, nomEnum.accumulation, 'accumulation.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.accumulation, 'accumulation.png', 0);
                paquetCarte.push(carte);

                carte = new Carte(typeEnum.speciale, nomEnum.predation, 'predation.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.predation, 'predation.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.predation, 'predation.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.predation, 'predation.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.predation, 'predation.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.predation, 'predation.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.predation, 'predation.png', 0);
                paquetCarte.push(carte);
                carte = new Carte(typeEnum.speciale, nomEnum.predation, 'predation.png', 0);
                paquetCarte.push(carte);
            }
            return paquetCarte;
        }

        //Fonction qui grise les parties non-cliquables.
        function griserZone(divMain, divPlateau, divDroite) {
            if (divMain) {
                var divMainGrise = document.createElement('div');
                divMainGrise.id = 'divMainGrise';
                divMainGrise.className = 'zoneGrise';
                $('#divMain').prepend(divMainGrise);
                $('#divMain').css('pointer-events', 'none');
            } else {
                $('#divMainGrise').remove();
                $('#divMain').css('pointer-events', 'auto');
            }

            if (divPlateau) {
                var plateauGrise = document.createElement('div');
                plateauGrise.id = 'plateauGrise';
                plateauGrise.className = 'zoneGrise';
                $('#plateau').prepend(plateauGrise);
                $('#plateau').css('pointer-events', 'none');
            } else {
                $('#plateauGrise').remove();
                $('#plateau').css('pointer-events', 'auto');
            }

            if (divDroite) {
                var divDroiteGrise = document.createElement('div');
                divDroiteGrise.id = 'divDroiteGrise';
                divDroiteGrise.className = 'zoneGrise'
                $('#divDroite').prepend(divDroiteGrise);
                $('#divDroite').css('pointer-events', 'none');
            } else {
                $('#divDroiteGrise').remove();
                $('#divDroite').css('pointer-events', 'auto');
            }
        }

        //Fonction appelée pour défausser les cartes suplémentaires de la main.
        function defausserCarte() {
            var cartesDefausse = new Array();
            var buttonDefausser = document.createElement('button');
            buttonDefausser.id = 'buttonDefausser';
            buttonDefausser.className = 'buttonJeu';
            buttonDefausser.innerHTML = '<p>Défausser</p>';
            buttonDefausser.onclick = function () {
                onClickButtonDefausse(cartesDefausse);
            };
            $('.divMain').append(buttonDefausser);

            griserZone(false, true, true);
            $('#divMain').addClass('divMainDefausse');
            $('.imageCarteMains').draggable('disable');

            mains[numeroJoueurActif].forEach(function (item, index) {
                if ($('#divCarte' + index).children().length === 1) {
                    $('#divCarte' + index).click(function () {
                        if (cartesDefausse[index] != null) {
                            cartesDefausse[index] = null;
                            $(this).removeAttr('style');
                        }
                        else {
                            $(this).css('-moz-box-shadow', '0 0 15px 10px #fff');
                            $(this).css('-webkit-box-shadow', '0 0 15px 10px #fff');
                            $(this).css('box-shadow', '0px 0px 15px 10px #fff');
                            cartesDefausse[index] = mains[numeroJoueurActif][index];
                        }
                    });
                }
            });
        }

        //Fonction appelée lors d'un clic sur le bouton Défausser.
        function onClickButtonDefausse(cartesDefausse) {
            sizeMain = mains[numeroJoueurActif].filter(function (value) { return value != null }).length;
            sizeADefausse = cartesDefausse.filter(function (value) { return value != null }).length;
            if ((sizeMain - sizeADefausse) === 4) {
                if (sizeADefausse != 0) {
                    cartesDefausse.forEach(function (item, index) {
                        if (item != null) {
                            paquetDecharge.push(item);
                            mains[numeroJoueurActif][index] = null;
                            var image = $('#divCarte' + index).children();
                            var x = ($('#paquetDefausse').offset().left) - ($(image).offset().left);
                            var y = ($('#paquetDefausse').offset().top) - ($(image).offset().top);
                            $(image).animate({
                                height: 91,
                                width: 59,
                                left: x,
                                top: y,
                                borderSpacing: 45
                            }, {
                                step: function (now, fx) {
                                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                    $(this).css('transform', 'rotate(' + now + 'deg)');
                                }
                            });
                        }
                    });
                    griserZone(false, false, false);
                    $('.imageCarteMains').draggable('enable');
                    $('#divMain').removeClass('divMainDefausse');
                    mains[numeroJoueurActif].forEach(function (item, index) {
                        $('#divCarte' + index).removeAttr('style');
                        $('#divCarte' + index).off('click');
                    });
                    $('#buttonDefausser').remove();
                    passerTour();
                }
                else {
                    popUpAvertissement('Selectionnez d\'abord la/les carte(s) à défausser.');
                }
            }
            else if ((sizeMain - sizeADefausse) > 4) {
                popUpErreur('Vous n\'avez pas sélectionné assez de cartes à défausser.');
            }
            else {
                popUpErreur('Vous avez sélectionné trop de cartes à défausser.');
            }
        }

        //Fonction appelé lors d'un clic sur le boutton Passer son tour.
        function passerTour() {
            var size = mains[numeroJoueurActif].filter(function (value) { return value != null }).length;

            if (size > 4 && tableauPasserTour[numeroJoueurActif] != true) {
                popUpConfirmation('Vous devez défausser ' + (size - 4) + ' carte(s) avant de terminer votre tour');
                $('#buttonPasserTour').prop('disabled', true);
                defausserCarte();
            } else {
                tableauPasserTour[numeroJoueurActif] = false;
                $('#buttonPasserTour').prop('disabled', true);
                $('#divMain').css('pointer-events', 'none');

                //Change le facteur de rotation selon le nombre de joueur.
                if (nombreJoueur === 4) {
                    facteurRotation += 1;
                    if (facteurRotation > 4) {
                        facteurRotation = 1;
                    }
                } else if (nombreJoueur === 2) {
                    facteurRotation += 2;
                    if (facteurRotation > 4) {
                        facteurRotation = 2
                    }
                } else if (nombreJoueur === 3) {
                    facteurRotation += 1;
                    if (facteurRotation > 4) {
                        facteurRotation = 1;
                    }
                    if (facteurRotation === 1) {
                        facteurRotation += 1;
                    }
                }

                var angleRotationDebut = (90 * (facteurRotation - 1));
                var angleRotationFin = (90 * facteurRotation);

                var $plateau = $('#plateau');
                $({ deg: angleRotationDebut }).animate({ deg: angleRotationFin }, {
                    duration: 1000,
                    step: function (now) {
                        $plateau.css('-webkit-transform', 'rotate(' + now + 'deg)');
                        $plateau.css('-moz-transform', 'rotate(' + now + 'deg)');
                        $plateau.css('transform', 'rotate(' + now + 'deg)');
                    }
                });

                if (deversement) {//Si un déversement est en cour.
                    if (numeroJoueurActif === numeroJoueurDeversement) {//Si c'est la fin du tour du joueur qui a déversé.
                        tempsDeversement--;
                        if (tempsDeversement === 0) {//Si le temps de déverseent est écoulé, tue les macros et rend déversement à false.
                            tuerDeversement();
                            deversement = false;
                            popUpAvertissement('Un «Déversement» de produits chimiques vient d\'avoir lieu, tous les «Macroinvertébrés» de résistance inférieure à 6 sont morts.');
                        }
                    }
                }
                if (tableauRetention[numeroJoueurActif] === true) {
                    tableauRetention[numeroJoueurActif] = pointsRessourcesRestant[numeroJoueurActif];
                }

                for (var i = mains[numeroJoueurActif].length - 1; i > 5; i--) {
                    mains[numeroJoueurActif].length--;
                    $('#liMain' + i).remove();
                }

                //On tue les macroinvertébrés qui n'ont plus leurs habitats ou que leurs habitats est perturbés.
                tuerMacroSansHabitats();

                if (salmonide[numeroJoueurActif]) {
                    if (tourSalmonide[numeroJoueurActif] === 0) {
                        tourSalmonide[numeroJoueurActif] = 1;
                    } else {
                        //TODO: afficher fin.
                    }
                }
                if (aucuneCarte) {

                }

                //Partie qui passe au prochain joueur.
                numeroJoueurActif++;
                if (numeroJoueurActif === nombreJoueur) {
                    numeroJoueurActif = 0;
                    tour++;
                    ajoutCarte(tour);
                }

                //Rend le bouton passer tour inactif lorsqu'on clique dessus pour éviter de "spam" le bouton.
                setTimeout(function () {
                    $('#buttonPasserTour').prop('disabled', false);
                    $('#divMain').css('pointer-events', 'auto');
                }, 2000);
                if (tour != 1) {
                    remplirMain();
                }
                updatePointsRessourcesJeu();
                setTimeout(function () {
                    updateAffichageImage();
                }, 500);
                $('#divJoueurEnCours').html('Tour de : <strong>' + nomJoueur[numeroJoueurActif] + '</strong>');

                popUpDebutTour(numeroJoueurActif);
                debutTourDeperturber();
                if (tableauPasserTour[numeroJoueurActif] === true) {
                    setTimeout(function () {
                        passerTour();
                    }, 1500);
                    popUpConfirmation('Le joueur ' + premiereLettreMaj(nomJoueur[numeroJoueurActif]) + ' a raté son tour.');
                }

            }

        }

        //Fonction qui va regarder si le joueur à droit à des points de ressources additionels.
        function pointsRessourcesAdditionel() {
            //Variable qui contiendra le nombre de bande riveraine.
            var nombreBandeRiveraine = 0;
            //Variable des bandes riveraine différentes si chacune est présente.
            var arbres = 0;
            var arbustes = 0;
            var herbace = 0;

            for (var i = 0; i < 10; i++) {
                if (CarteJeu[numeroJoueurActif][i] != null) {
                    if (CarteJeu[numeroJoueurActif][i].nom === nomEnum.amenageArbre || CarteJeu[numeroJoueurActif][i].nom === nomEnum.amenageArbustes || CarteJeu[numeroJoueurActif][i].nom === nomEnum.amenageHerbace || CarteJeu[numeroJoueurActif][i].type === typeEnum.bandeRiveraine) {
                        if (!CarteJeu[numeroJoueurActif][i].perturber) {
                            nombreBandeRiveraine++;
                            if (CarteJeu[numeroJoueurActif][i].nom === nomEnum.herbace || CarteJeu[numeroJoueurActif][i].nom === nomEnum.amenageHerbace) {
                                herbace++;
                            } else if (CarteJeu[numeroJoueurActif][i].nom === nomEnum.arbustes || CarteJeu[numeroJoueurActif][i].nom === nomEnum.amenageArbustes) {
                                arbustes++;
                            } else if (CarteJeu[numeroJoueurActif][i].nom === nomEnum.arbres || CarteJeu[numeroJoueurActif][i].nom === nomEnum.amenageArbre) {
                                arbres++;
                            }
                        }
                    }
                }
            }

            if (nombreBandeRiveraine > 3) {
                nombreBandeRiveraine = 3;
            }

            if (arbres === 1 && arbustes === 1 && herbace === 1) {
                nombreBandeRiveraine = 5;
            }

            return nombreBandeRiveraine;
        }

        //Fonction qui remet les dimensions de la carte à son état original.
        function revertCarte(e, ui) {
            $('.emplacementJoueurA, .emplacementJoueurB, .emplacementJoueurC, .emplacementJoueurD, .plateau').removeClass('droppable-hover');
            if (e != false) {
                var id;
                id = $(e).attr('id').substr($(e).attr('id').length - 1);
                if (bonneZoneDrop(e)) {
                    if (accepterDrop(e)) {
                        if ($(e).attr('id') != 'plateau') {
                            if ($(e).children().length >= 1) {
                                if (carteDrag.type === typeEnum.perturbation) {
                                    return false;
                                }

                                if (carteDrag.nom != CarteJeu[numeroJoueurActif][id].nom) {
                                    $(ui).stop();
                                    $(ui).animate({
                                        height: 180,
                                        width: 118
                                    }, {
                                        duration: 500,
                                        queue: false,
                                        complete: function () {
                                            updateAffichageImage();
                                        }
                                    });
                                    return true;
                                } else {
                                    return false;
                                }
                            } else {
                                return false;
                            }
                        } else {
                            return false;
                        }
                    } else {
                        $(ui).stop();
                        $(ui).animate({
                            height: 180,
                            width: 118
                        }, {
                            duration: 500,
                            queue: false,
                            complete: function () {
                                updateAffichageImage();
                            }
                        });
                        return true;
                    }
                } else {
                    $(ui).stop();
                    $(ui).animate({
                        height: 180,
                        width: 118
                    }, {
                        duration: 500,
                        queue: false,
                        complete: function () {
                            updateAffichageImage();
                        }
                    });
                    return true;
                }
            } else {
                $(ui).stop();
                $(ui).animate({
                    height: 180,
                    width: 118
                }, {
                    duration: 500,
                    queue: false,
                    complete: function () {
                        updateAffichageImage();
                    }
                });
                return true;
            }
        }

        //Fonction pour appeler le pop-up d'erreur.
        function popUpErreur(texte) {
            $('#divTexteErreur').text(texte);
            $('#divErreur').dialog({
                classes: {
                    'ui-dialog': 'ui-state-error no-close ui-corner-all',
                    'ui-dialog-titlebar': 'no-header'
                },
                draggable: false,
                resizable: false,
                modal: true,
                height: 80,
                width: 600,
                hide: 'fade',
                show: 'fade'
            });
        }

        //Fonction pour appeler le pop-up d'avertissement.
        function popUpAvertissement(texte) {
            $('#divTexteErreur').text(texte);
            $('#divErreur').dialog({
                classes: {
                    'ui-dialog': 'ui-state-highlight no-close ui-corner-all',
                    'ui-dialog-titlebar': 'no-header'
                },
                draggable: false,
                resizable: false,
                modal: true,
                height: 80,
                width: 600,
                hide: 'fade',
                show: 'fade'
            });
        }

        //Fonction pour appeler le pop-up de confirmation.
        function popUpConfirmation(texte) {
            $('#divTexteErreur').text(texte);
            $('#divErreur').dialog({
                classes: {
                    'ui-dialog': 'popUpConfirmation no-close ui-state-highlight ui-corner-all',
                    'ui-dialog-titlebar': 'no-header'
                },
                draggable: false,
                resizable: false,
                modal: true,
                height: 80,
                width: 600,
                hide: 'fade',
                show: 'fade'
            });
        }

        //Fonction qui appelle un pop-up pour indiquer le début du tour d'un joueur
        function popUpDebutTour(numeroJoueur) {
            joueur = nomJoueur[numeroJoueur];
            $('#divTexteDebutTour').text('Début du tour de ' + joueur + '.');
            $('#divDebutTour').dialog({
                classes: {
                    'ui-dialog': 'popUpDebutTour no-close ui-corner-all',
                    'ui-dialog-titlebar': 'no-header'
                },
                draggable: false,
                resizable: false,
                modal: true,
                height: 80,
                width: 400,
                hide: 'fade',
                show: 'fade'
            });
        }

        //Fonction qui affiche un popUp contenant les règles du jeu.
        function popUpRegle() {
            $(divRegle).dialog({
                classes: {
                    'ui-dialog': 'popUpRegle no-close ui-corner-all',
                    'ui-dialog-titlebar': 'no-header'
                },
                draggable: false,
                resizable: false,
                modal: true,
                height: 575,
                width: 1150,
                hide: 'fade',
                show: 'fade'
            });
        }

        //Fonction qui affiche un popUp contenant les crédits.
        function popUpCredits() {
            $(divCredits).dialog({
                classes: {
                    'ui-dialog': 'popUpRegle no-close ui-corner-all',
                    'ui-dialog-titlebar': 'no-header',
                    'ui-dialog-buttonset': 'buttonJeu'
                },
                draggable: false,
                resizable: false,
                modal: true,
                height: 575,
                width: 1150,
                hide: 'fade',
                show: 'fade'
            });
        }

        //Fonction qui affiche un popUp pour la fin
        function popUpFin() {
            $(divFin).dialog({
                classes: {
                    'ui-dialog': 'popUpRegle no-close ui-corner-all',
                    'ui-dialog-titlebar': 'no-header',
                    'ui-dialog-buttonset': 'buttonJeu'
                },
                draggable: false,
                resizable: false,
                modal: true,
                height: 575,
                width: 1150,
                hide: 'fade',
                show: 'fade'
            });
        }

        //Fonction qui affiche un popup contenant le tableau d'aide des cartes.
        function popUpTableauCarte() {
            $(divTableauCarte).dialog({
                classes: {
                    'ui-dialog': 'popUpRegle no-close ui-corner-all',
                    'ui-dialog-titlebar': 'no-header',
                    'ui-dialog-buttonset': 'buttonJeu'
                },
                draggable: false,
                resizable: false,
                modal: true,
                height: 575,
                width: 1250,
                hide: 'fade',
                show: 'fade'
            });
        }

        //Fonction qui "update" les points-ressources du jeu.
        function updatePointsRessourcesJeu() {
            pointsRessourcesBase[numeroJoueurActif] = 5;
            pointsRessourcesSuplementaire[numeroJoueurActif] = pointsRessourcesAdditionel() + tableauRetention[numeroJoueurActif];
            tableauRetention[numeroJoueurActif] = 0;
            pointsRessourcesTotal[numeroJoueurActif] = pointsRessourcesBase[numeroJoueurActif] + pointsRessourcesSuplementaire[numeroJoueurActif];
            pointsRessourcesUtiliser[numeroJoueurActif] = 0;
            pointsRessourcesRestant[numeroJoueurActif] = pointsRessourcesTotal[numeroJoueurActif] - pointsRessourcesUtiliser[numeroJoueurActif];

            calculerPoints();
            updatePointsRessources();
        }

        //Fonction qui "update" l'affichage des images.
        function updateAffichageImage() {
            for (var i = 0; i < mains[numeroJoueurActif].length; i++) {
                var carteMain;
                if (document.getElementById('divCarte' + i) != null) {
                    carteMain = document.getElementById('divCarte' + i);
                    if (carteMain.children.length != 0) {
                        carteMain.removeChild(carteMain.firstChild);
                    }
                } else {
                    var li = document.createElement('li');
                    li.className = 'liMain';
                    li.id = 'liMain' + i;
                    document.getElementById('divMain').appendChild(li);

                    var divCarte = document.createElement('div');
                    divCarte.id = 'divCarte' + i;
                    divCarte.className = 'divCarte';
                    li.appendChild(divCarte);
                }

                //Update de la zone de main.
                if (mains[numeroJoueurActif][i] != null) {
                    var image = document.createElement('img');
                    var cloneImage = '<img class="imageTooltip" src="ressources/' + mains[numeroJoueurActif][i].nomImage + '">';
                    image.className = 'imageCarteMains';
                    image.src = 'ressources/' + mains[numeroJoueurActif][i].nomImage;
                    carteMain.appendChild(image);
                    $(image).tooltip({
                        items: 'img',
                        content: cloneImage,
                        position: { my: "right", at:"left" },
                        show: { delay: 1000 }
                    });
                }

                if (mains[numeroJoueurActif].length <= 6) {
                    $('.liMain').css('height', '180px')
                    $('.liMain').css('width', '118px')
                } else if (mains[numeroJoueurActif].length > 10) {
                    $('.liMain').css('height', '90px')
                    $('.liMain').css('width', '59px')
                } else if (mains[numeroJoueurActif].length > 8) {
                    $('.liMain').css('height', '120px')
                    $('.liMain').css('width', '79px')
                } else if (mains[numeroJoueurActif].length > 6) {
                    $('.liMain').css('height', '144px')
                    $('.liMain').css('width', '94px')
                }

                //Update l'affichage du paquet défausse.
                if (paquetDecharge.length != 0) {
                    if ($('#paquetDefausse').children().length > 0) {
                        $('#paquetDefausse').children().remove();
                    }
                    var imageDecharge = document.createElement('img');
                    imageDecharge.src = 'ressources/' + paquetDecharge.filter(function (value) { return value != null })[paquetDecharge.filter(function (value) { return value != null }).length - 1].nomImage;
                    imageDecharge.className = 'imageCarteJeu';
                    $('#paquetDefausse').append(imageDecharge);
                }
                if (paquetIntervention.length === 0) {
                    $('#paquetIntervention').children().remove();

                }
            }
            $(function () {
                $('.imageCarteMains').draggable({
                    start: function (evt) {
                        $(this).animate({
                            height: 90,
                            width: 58
                        }, { duration: 400, queue: false }
                        );
                        var id;
                        id = evt.target.parentNode.id.substr(evt.target.id.length - 1);

                        //Les if qui vont envoyer l'objet carte dans la variable.
                        carteDrag = mains[numeroJoueurActif][id];
                        carteDragNumero = id;
                        if (carteDrag == null) {
                            return false;
                        }
                    },
                    stop: function () {
                        $('.ui-tooltip').hide();
                    },
                    drag: function () {
                        $('.ui-tooltip').hide();
                    },
                    scroll: false,
                    revert: function (socketObj) {
                        return revertCarte(socketObj, this);
                    },
                    revertDuration: 400,
                    cursorAt: { top: 45, left: 29 }
                });
            });
        }

        //Fonction qui update les points-ressources après avoir joué une carte.
        function updatePointsRessources() {
            $('.divTextePointsRessource').html('<p class=titreRessource>Points-ressources de base&nbsp;: ' + pointsRessourcesBase[numeroJoueurActif] + '</p><p class=titreRessource>Points-ressources additionnels&nbsp;: ' + pointsRessourcesSuplementaire[numeroJoueurActif] + '</p><p class=titreRessource>Points-ressources totaux&nbsp;: ' + pointsRessourcesTotal[numeroJoueurActif] + '</p><p class=titreRessource>Points-ressources utilisés&nbsp;: ' + pointsRessourcesUtiliser[numeroJoueurActif] + '</p><p class=titreRessource><strong>Points-ressources restants&nbsp;: ' + pointsRessourcesRestant[numeroJoueurActif] + '</strong></p>');
        }

        //Fonction qui calcule les points de chaques joueurs.
        function calculerPoints() {
            //Remet les différents points à 0.
            pointsJoueur[0] = 0;
            pointsJoueur[1] = 0;
            pointsJoueur[2] = 0;
            pointsJoueur[3] = 0;

            for (var i = 0; i < 10; i++) {
                if (CarteJeu[0][i] != null) {
                    pointsJoueur[0] += CarteJeu[0][i].coutRessources;

                    if (exemplaireCarteJeu[0][i] > 1) {
                        pointsJoueur[0] + (exemplaireCarteJeu[0][i] - 1);
                    }
                }
                if (nombreJoueur >= 2) {
                    if (CarteJeu[1][i] != null) {
                        pointsJoueur[1] += CarteJeu[1][i].coutRessources;

                        if (exemplaireCarteJeu[0][i] > 1) {
                            pointsJoueur[1] + (exemplaireCarteJeu[1][i] - 1);
                        }
                    }
                }
                if (nombreJoueur >= 3) {
                    if (CarteJeu[2][i] != null) {
                        pointsJoueur[2] += CarteJeu[2][i].coutRessources;

                        if (exemplaireCarteJeu[2][i] > 1) {
                            pointsJoueur[2] + (exemplaireCarteJeu[2][i] - 1);
                        }
                    }
                }
                if (nombreJoueur >= 4) {
                    if (CarteJeu[3][i] != null) {
                        pointsJoueur[3] += CarteJeu[3][i].coutRessources;

                        if (exemplaireCarteJeu[3][i] > 1) {
                            pointsJoueur[3] + (exemplaireCarteJeu[3][i] - 1);
                        }
                    }
                }
            }
        }

        //fonction qui va update les points des joueurs.
        function updateZonePoints() {
            if (nombreJoueur === 4) {
                divTextePointsJoueurs.innerHTML = '<p class=titreEquipe><strong>Points</strong></p><ul class=listeUlEquipe><li class=listeEquipe>Équipe A&nbsp;: ' + pointsJoueur[0] + '</li><li class=listeEquipe>Équipe B&nbsp;: ' + pointsJoueur[1] + '</li><li class=listeEquipe>Équipe C&nbsp;: ' + pointsJoueur[2] + '</li><li class=listeEquipe>Équipe D&nbsp;: ' + pointsJoueur[3] + '</li></ul>';
            } else if (nombreJoueur === 3) {
                divTextePointsJoueurs.innerHTML = '<p class=titreEquipe><strong>Points</strong></p><ul class=listeUlEquipe><li class=listeEquipe>Équipe A&nbsp;: ' + pointsJoueur[0] + '</li><li class=listeEquipe>Équipe B&nbsp;: ' + pointsJoueur[1] + '</li><li class=listeEquipe>Équipe C&nbsp;: ' + pointsJoueur[2] + '</li></ul>';
            } else if (nombreJoueur === 2) {
                divTextePointsJoueurs.innerHTML = '<p class=titreEquipe><strong>Points</strong></p><ul class=listeUlEquipe><li class=listeEquipe>Équipe A&nbsp;: ' + pointsJoueur[0] + '</li><li class=listeEquipe>Équipe B&nbsp;: ' + pointsJoueur[1] + '</li></ul>';
            } else if (nombreJoueur === 1) {
                divTextePointsJoueurs.innerHTML = '<p class=titreEquipe><strong>Points</strong></p><ul class=listeUlEquipe><li class=listeEquipe>Équipe A&nbsp;: ' + pointsJoueur[0] + '</li></ul>';
            }
        }

        //Fonction qui va update le plateau
        function updatePlateau() {
            //Crée les cartes qui sont sur le platea.
            for (var i = 0; i < nombreJoueur; i++) {//Boucle pour chaque joueur.
                for (var j = 0; j < CarteJeu[i].length; j++) {//Boucle dans les 10 emplacements.
                    $('#emplacementJoueur' + lettreJoueur(i) + j).children().remove();

                    if (CarteJeu[i][j] != null) {//Si la carte n'est pas null.
                        for (var k = 0; k < exemplaireCarteJeu[i][j]; k++) {//Boucle dans le nombre d'exemplaire.
                            var image = document.createElement('img');
                            image.className = 'imageCarteJeu';
                            image.setAttribute('src', 'ressources/' + CarteJeu[i][j].nomImage);
                            $(image).css('margin-top', k * 10);
                            $('#emplacementJoueur' + lettreJoueur(i) + j).append(image);
                        }
                        if (CarteJeu[i][j].perturber) {//Si la carte est perturber.
                            var lettre = lettreJoueur(i);
                            $('#emplacementJoueur' + lettre + j).addClass('ui-perturber-highlight');//Ajoute la classe perturber.
                            if (cartePerturbation[i][j] != null) {//Si il y a une carte perturbation à ajouter par dessus.
                                var image = document.createElement('img');
                                image.className = 'imageCarteJeu';
                                image.setAttribute('src', 'ressources/' + cartePerturbation[i][j].nomImage);
                                $(image).css('margin-top', exemplaireCarteJeu[i][j] * 10);
                                $('#emplacementJoueur' + lettre + j).append(image);
                            }
                        }
                    }
                }
            }
            $(function () {
                $('.imageCarteJeu').on({
                    click: function (evt, ui) {
                        onClickImage($(this).parent().attr("id"), ui);
                    }
                })
            });
        }