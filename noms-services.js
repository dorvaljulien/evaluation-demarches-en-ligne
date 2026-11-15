/* =====================================================================
   NOMS ET ADRESSES DES SERVICES INVENTÉS
   Évaluation « Démarches en ligne et identité numérique »
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
    // Services officiels (fictifs)
    'Fiscalis': 'Fiscalis',                 // impôts (rôle réel : impots.gouv.fr)
    'Santéa': 'Santéa',                     // assurance maladie (ameli.fr)
    'IdentiPass': 'IdentiPass',             // connexion unique (FranceConnect) ; « IdentiPass+ » suit tout seul
    'NumérID': 'NumérID',                   // identité numérique (L'Identité Numérique La Poste)
    'CartID': 'CartID',                     // identité avec la carte d'identité (France Identité)
    'HabitatAdapt': 'HabitatAdapt',         // aide pour adapter son logement (MaPrimeAdapt')

    // Moteur de recherche
    'Trouvo': 'Trouvo',

    // Intermédiaire payant
    'Adapt\'Senior Dossier': 'Adapt\'Senior Dossier',

    // Sites annexes des résultats de recherche
    'Maison & Confort': 'Maison & Confort',
    'Forum Seniors Bretagne': 'Forum Seniors Bretagne'
  },

  /* ---------- ADRESSES (barre d'adresse, liens, adresses mail) ---------- */
  adresses: {
    'identipass.sim': 'identipass.sim',
    'trouvo.sim': 'trouvo.sim',
    'habitat-adapt.gouv.sim': 'habitat-adapt.gouv.sim',
    'habitat-adapt-frais.com': 'habitat-adapt-frais.com',        // faux SMS (variante A) : imiter la vraie adresse
    'habitatadapt-validation.net': 'habitatadapt-validation.net', // faux SMS (variante B)
    'adapt-senior-dossier.fr': 'adapt-senior-dossier.fr',
    'maison-confort-blog.fr': 'maison-confort-blog.fr',
    'forum-seniors-bzh.fr': 'forum-seniors-bzh.fr'
  }
};
