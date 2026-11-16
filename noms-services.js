/* =====================================================================
   NOMS ET ADRESSES DES SERVICES
   Évaluation « Démarches en ligne et identité numérique »
   ---------------------------------------------------------------------
   Version 1.2 : les noms et adresses RÉELS sont affichés aux élèves
   (Google, impots.gouv.fr, FranceConnect+…). Pour revenir aux noms
   inventés de la version 1.1, remettre à droite le même texte qu'à gauche.
   ---------------------------------------------------------------------
   MODE D'EMPLOI
   1. Changer UNIQUEMENT le texte de DROITE (le nouveau nom).
      Le texte de gauche est le nom d'origine, tel qu'il est écrit dans le code : ne pas le toucher.
   2. Lancer, dans le dossier du dépôt :  node build.js
   3. Ouvrir evaluation-demarches.html et vérifier.

   Le remplacement est fait partout : pages des sites, SMS, mails, fiche
   professeur, mots-clés du moteur de recherche. Les versions en
   MAJUSCULES (IDENTIPASS, TROUVO…) suivent automatiquement.

   Interdit dans un nouveau nom : " ` \ $ < > (une apostrophe ' est
   acceptée, elle devient ’). Pour une adresse : lettres minuscules sans
   accent, chiffres, points et tirets seulement.

   Logos (images) : dossier logos/, voir logos/LISEZMOI.md.
   ===================================================================== */
module.exports = {

  /* ---------- NOMS ---------- */
  noms: {
    // Services officiels
    'Fiscalis': 'impots.gouv.fr',                 // impôts (rôle réel : impots.gouv.fr)
    'Santéa': 'ameli.fr',                     // assurance maladie (ameli.fr)
    'IdentiPass': 'FranceConnect',             // connexion unique (FranceConnect) ; « IdentiPass+ » suit tout seul
    'NumérID': 'L\'Identité Numérique La Poste',                   // identité numérique (L'Identité Numérique La Poste)
    'CartID': 'France Identité',                     // identité avec la carte d'identité (France Identité)
    'HabitatAdapt': 'MaPrimeAdapt\'',         // aide pour adapter son logement (MaPrimeAdapt')

    // Moteur de recherche
    'Trouvo': 'Google',

    // Intermédiaire payant
    'Adapt\'Senior Dossier': 'Adapt\'Senior Dossier',

    // Sites annexes des résultats de recherche
    'Maison & Confort': 'Maison & Confort',
    'Forum Seniors Bretagne': 'Forum Seniors Bretagne'
  },

  /* ---------- ADRESSES (barre d'adresse, liens, adresses mail) ---------- */
  adresses: {
    'identipass.sim': 'franceconnect.gouv.fr',
    'trouvo.sim': 'google.fr',
    'habitat-adapt.gouv.sim': 'maprimeadapt.gouv.fr',
    'habitat-adapt-frais.com': 'maprimeadapt-frais.com',        // faux SMS (variante A) : imiter la vraie adresse
    'habitatadapt-validation.net': 'maprimeadapt-validation.net', // faux SMS (variante B)
    'adapt-senior-dossier.fr': 'adapt-senior-dossier.fr',
    'maison-confort-blog.fr': 'maison-confort-blog.fr',
    'forum-seniors-bzh.fr': 'forum-seniors-bzh.fr'
  }
};
