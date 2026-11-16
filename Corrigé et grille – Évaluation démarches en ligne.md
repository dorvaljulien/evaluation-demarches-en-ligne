# Corrigé et grille — Évaluation « Démarches en ligne et identité numérique »

*1ère SAPAT, informatique (TIM). Fichier élève : `evaluation-demarches.html` (version 1.2, 16/11/2026). Ce document sert à corriger les copies exportées (`.json`). Il ne doit jamais être donné aux élèves.*

## 0. Mode d'emploi pour la correction

- Chaque copie est un fichier JSON. Champs utiles : `variante` (A ou B), `idCopie`, `reponses` (parties 1A à 2D), `simulateur.resultats` (réflexes du 2D, déjà calculés), `simulateur.evenements` (frise des clics), `simulateur.compteurs`.
- Les items sont repérés par un identifiant stable (`A1`…`A7`, `B1`…`B7`, `m1`, `m2`, `m3`, `m5`, `m6`, `c1`…`c8`). L'ordre d'affichage (`ordreAffiche`) change d'une copie à l'autre et ne compte pas.
- Réponse vide = 0. On ne pénalise pas l'orthographe. Une justification juste mais maladroite compte, à condition qu'elle s'appuie sur un indice ou une idée du cours.
- Barème sur 20 : 1A 3,5 · 1B 4,5 · 2A 1,5 · 2B 1,5 · 2C 2 · 2D 7.

## 1. Écarts avec le cahier des charges (décidés le 15/11/2026)

- **1A, carte « officiel mais payant »** : remplacée dans les deux variantes, pour ne plus donner d'indice sur le 1B. A3 du cahier (carte grise, taxe régionale) devient A6 « Permis de conduire perdu : duplicata — timbre fiscal de 25 € » (permisdeconduire.ants.gouv.fr). Le timbre fiscal du passeport à 86 € devient B6 « Carte d'identité perdue ou volée : timbre fiscal de 25 € » (timbres.impots.gouv.fr). Les deux montants ont été vérifiés : 25 € dans les deux cas.
- **2C, variante A** : « code à 6 chiffres reçu par mail » devient « code à 6 chiffres reçu par **SMS** ».
- **1B** : la « situation 3 » du cahier des charges s'affiche **« Situation 2 »** pour les élèves. Dans l'export, la clé est `situation2`.

### Version 1.1 (15/11/2026, après la passation test)

- **En-tête** : progression plus lisible (« Partie 3 sur 6 », étapes cochées) et **compte à rebours** de la partie en gros (vert, orange la dernière minute, puis « dépassé de + mm:ss »). Temps total en minutes.
- **1B** : la ligne « questions » est reformulée (« Avant de la conseiller, il me manque des informations. Je lui pose deux questions ») avec **deux champs séparés** « Question 1 » / « Question 2 ». Dans l'export, `questions` est une liste de deux textes.
- **2A** : **cinq propositions** au lieu de six (`m4` fichier mdp.txt retirée), classement par **glisser-déposer** (plus de flèches), chaque proposition repérée par une **lettre de couleur** (A à E, tirée au hasard pour chaque copie ; la lettre est dans l'export).
- **2C** : la question « Est-ce de la double authentification ? » est écrite en toutes lettres dans un encadré et rappelée au-dessus de la colonne Oui/Non (bandeau qui reste visible). `c5` précise le **code de la carte à 4 chiffres tapé sur le terminal de paiement** (A) ou sur le distributeur (B) ; `c6` précise « on approche la carte du terminal, sans taper de code ».
- **2D** : il est écrit aux élèves qu'**IdentiPass+ correspond à FranceConnect+** (prédiction et bandeau du simulateur). La question 3 ne porte plus que sur NumérID et CartID, avec un **menu déroulant**.
- **Noms et adresses des services inventés** regroupés dans `noms-services.js` (racine du dépôt), logos dans le dossier `logos/` (voir le README) pour pouvoir les remplacer sans toucher au reste. Dans l'export, `demandePirate.service` vaut la clé du service (`fiscalis` ou `santea`).

### Version 1.2 (16/11/2026, noms réels)

- **Noms et logos réels** : les services inventés sont remplacés par les vrais noms et logos (Google, impots.gouv.fr, ameli.fr, FranceConnect / FranceConnect+, L'Identité Numérique La Poste, France Identité, MaPrimeAdapt'). Les mentions « EN VRAI » et « (fictif) » redondantes sont retirées. Les adresses affichées sont aussi les vraies (`google.fr`, `maprimeadapt.gouv.fr`, `franceconnect.gouv.fr`) ; les faux SMS de frais imitent la vraie adresse (`maprimeadapt-frais.com`, `maprimeadapt-validation.net`). L'intermédiaire payant (Adapt'Senior Dossier) et les sites annexes restent inventés. Les sources gardent les noms inventés : seuls `noms-services.js` et les logos ont changé.
- **Question 3 (2D) supprimée** : l'association « nom inventé → nom réel » n'a plus d'objet puisque les noms réels sont affichés à l'écran. Ses 0,25 pt sont reversés sur Q1 (l'élément « identité numérique vérifiée » passe de 0,5 à 0,75). La partie 2D reste à 7 pts, le total à 20.

## 2. Partie 1A — Site officiel ou site à éviter ? (3,5 pts)

Par carte : choix juste 0,25 + justification valable 0,25. Une justification n'est valable que si elle s'appuie sur un **indice** : l'extension, un organisme public connu, « Sponsorisé » + frais, l'urgence ou la menace, une adresse illisible. « L'IA dit que c'est officiel » ne suffit pas. Une justification fausse ou sans indice vaut 0, même si le choix est juste. Si le choix est faux, la justification ne rapporte rien.

| Compétence | Variante A | Variante B | Réponse | Indices valables |
|---|---|---|---|---|
| Organisme public en .fr | **A1** MSA, www.msa.fr | **B1** L'Assurance retraite, www.lassuranceretraite.fr | officiel | organisme public connu (MSA / Assurance retraite) ; « certains organismes publics sont en .fr » |
| SMS pressant | **A2** SMS permis, permis-renouvellement.info | **B2** SMS amende, amendes-paiement.net | à éviter | urgence/menace (72 h, amende, majoration) ; extension .info/.net ; on ne clique pas sur un SMS pressant |
| Intermédiaire sponsorisé | **A3** Sponsorisé, actes-naissance-express.fr, 29,90 € | **B3** Sponsorisé, casier-express-france.com, 24,90 € | à éviter | « Sponsorisé » ; frais ; pas en .gouv.fr ; la démarche officielle est gratuite (acte de naissance, extrait de casier) |
| IA qui donne le bon lien | **A4** IA → www.caf.fr | **B4** IA → www.francetravail.fr | officiel | la CAF / France Travail sont des organismes publics connus, ce qu'on peut vérifier (adresse, service-public.gouv.fr). **« L'IA le dit » seul = 0** |
| « gouv » dans le nom, mauvaise extension | **A5** groupe Facebook, prime-chauffage-gouv.fr | **B5** story Instagram, cheque-energie-gouv-aide.com | à éviter | « gouv » dans le nom ne suffit pas : l'extension (juste avant le premier « / ») est .fr/.com, pas .gouv.fr ; lien vu sur un réseau social |
| Officiel mais payant (timbre) | **A6** permisdeconduire.ants.gouv.fr, timbre 25 € | **B6** timbres.impots.gouv.fr, timbre 25 € | officiel | extension .gouv.fr ; il s'agit d'un timbre fiscal (taxe prévue par la loi), pas de « frais de dossier » |
| Adresse illisible | **A7** SMS, bit.ly/3kR9xQ | **B7** flyer, tinyurl.com/aide-senior26 | à éviter | lien raccourci : on ne voit pas la vraie adresse ; (A7 : SMS sur un dossier) ; (B7 : papier non officiel) |

Dans l'export, `choix` vaut `"officiel"` ou `"a-eviter"`.

**Cas limites (décidés le 15/11/2026, après la copie test) :**

- « L'adresse est bizarre » (A7/B7) : accepté (0,25), l'élève pointe bien l'adresse illisible.
- « Une emoji » / « il y a des emojis » (A5/B5 ; la carte A5 contient un 👉) : **0**. Un emoji seul n'est pas un indice de la liste. Accepter seulement si l'élève le relie à la forme du message (« post de réseau social, pas un site officiel », « ton publicitaire / urgent »).
- « Ça ne finit pas par gouv.fr » sur A1/B1 : choix faux, donc 0 ; c'est l'erreur visée par la carte (règle « .gouv.fr ou rien » appliquée à la lettre).

## 3. Partie 1B — Que dire à la personne ? (4,5 pts)

Clés d'export : `situation1` {dire, questions, ensuite}, `questionFlash`, `situation2` {dire, questions, ensuite}. `questions` est une liste de deux textes (« Question 1 », « Question 2 »).

### Situation 1 (2 pts) — « payant, donc arnaque ? »

- A : carte grise après l'achat d'une voiture d'occasion (changement de titulaire).
- B : refaire son passeport.

| Élément attendu | Pts |
|---|---|
| **Tout de suite** : ne tranche pas sans informations (« pas forcément », « on va vérifier ensemble ») | 0,5 |
| **Questions** (les deux pertinentes) : l'adresse du site ; le montant ; l'intitulé du paiement (taxe / timbre fiscal, ou « frais de dossier / de service ») ; comment le site a été trouvé (pub, résultat « Sponsorisé », SMS) | 0,5 (0,25 si une seule) |
| **Ensuite, selon les réponses** : site en .gouv.fr + taxe ou timbre = normal, on peut payer ; « frais de service » sur un autre site = site à éviter, on va sur le site officiel (par service-public.gouv.fr) | 1 (0,5 si un seul des deux cas) |

**Cas limite** : « C'est normal de payer » / « il faut payer la carte grise » dans « Tout de suite » vaut **0**, même si le fait est vrai : l'élève tranche avant de savoir sur quel site la personne a payé. C'est précisément le réflexe évalué.

Faits utiles : le changement de titulaire d'une carte grise est soumis à une taxe (régionale, selon la puissance) ; le timbre fiscal d'un passeport adulte coûte 86 €. Un élève qui cite ces faits montre une bonne maîtrise, mais ils ne sont pas exigés.

### Question flash (0,5 pt)

- A : « Il existe une liste des vrais sites ? » ; B : « Il y a un endroit où chercher ? »
- Attendu : **service-public.gouv.fr** (partir de là pour trouver le bon site). Accepter « service-public.fr » ou « le site Service public ». « Un site du gouvernement » ou « les .gouv » sans nommer le site : 0,25. « Sur Google » : 0.

### Situation 2 (2 pts) — « déjà payé, trop cher »

- A : passeport, 159 € payés en ligne. Le timbre officiel coûte 86 €, donc elle est passée par un site non officiel.
- B : changement d'adresse sur la carte grise, 44,90 € payés. C'est gratuit (jusqu'au 3e changement), donc elle est passée par un site non officiel.

| Élément attendu | Pts |
|---|---|
| Rassurer sans juger (« ça arrive souvent », « on va voir ensemble ») | 0,25 |
| Questions : sur quel site ; ce qui a été payé (intitulé) ; si la démarche a avancé ; si la carte bancaire a été donnée (les deux questions pertinentes) | 0,5 (0,25 si une seule) |
| Garder les preuves (mails, factures, captures) | 0,25 |
| Signaler sur SignalConso | 0,25 |
| Si la carte bancaire a été donnée à un site douteux : appeler la banque (opposition) ; accepter le 33700 pour signaler un SMS | 0,25 |
| Vérifier la démarche et, si besoin, la refaire sur le site officiel | 0,25 |
| Identifie que le montant ne correspond pas au prix officiel (86 € ; gratuit) | 0,25 |

**Cas limites** : « Le passeport, c'est gratuit » (variante A) est faux : 0 sur la ligne « montant », et pas de point « rassurer » si c'est la seule chose dite. « Signaler le problème » sans dire où : 0 sur la ligne SignalConso.

## 4. Partie 2A — Mots de passe (1,5 pt)

Cinq propositions (version 1.1). Identifiants : `m5` gestionnaire de mots de passe · `m3` recette · `m1` carnet à la maison · `m6` même mot de passe long partout · `m2` prénom de l'enfant + année partout. La lettre (A à E) vue par l'élève change d'une copie à l'autre : se fier à `item`, pas à `lettre`.

Seules les paires solides sont notées (1 pt, 0,25 chacune) :

- `m5` (gestionnaire) classé **1er** ;
- `m2` (prénom + année) classé **dernier** ;
- `m6` (même mot de passe partout) classé **sous** `m3` (recette) ;
- `m6` classé **sous** `m1` (carnet).

L'ordre entre `m3` et `m1` est libre.

Le champ `classementModifie: false` signale un élève qui n'a pas touché à l'ordre de départ (aléatoire).

Justification (0,5) : si un site est piraté ou si le mot de passe fuite, **tous les comptes** sont ouverts d'un coup (un seul mot de passe à trouver). 0,25 si l'idée est floue (« c'est moins sécurisé »).

**Cas limite** : la consigne est « Pourquoi utiliser le même mot de passe partout est-il dangereux ? ». « C'est facile à deviner » vaut **0** : l'élève confond avec `m2` (le mot de passe `m6` est long et compliqué, le risque n'est pas qu'on le devine).

## 5. Partie 2B — Définir la double authentification (1,5 pt)

| Élément | Pts |
|---|---|
| Il faut **deux preuves** pour se connecter | 0,5 |
| De **types différents** (ce que je sais / ce que j'ai / ce que je suis) | 0,5 |
| Exemple correct : mot de passe + code reçu par SMS sur son téléphone ; carte + code ; mot de passe + validation dans une appli | 0,5 |

« Deux mots de passe » comme exemple = exemple faux (0 sur la ligne exemple, et la ligne « types différents » n'est pas acquise si rien d'autre ne la montre).

**Réponses implicites** : « Il faut vérifier sur son téléphone » sans parler d'une première preuve n'acquiert **pas** la ligne « deux preuves ». Un exemple du type « je me connecte à Insta et je reçois un code par SMS » est accepté (0,5) : la connexion suppose le mot de passe.

## 6. Partie 2C — Est-ce de la double authentification ? (2 pts)

8 × 0,25. Pour les situations ★ (`c1` et `c5`), le point n'est donné que si la réponse **et** la justification sont justes (types de preuves).

| Id | Variante A | Variante B | Réponse | Raison |
|---|---|---|---|---|
| c1 ★ | Deux mots de passe différents | Mot de passe + code à 4 chiffres choisi | **Non** | deux choses que je **sais** : un seul type de preuve |
| c2 | Mot de passe + question secrète | Mot de passe + date de naissance | **Non** | deux choses que je sais (la date de naissance est en plus connue de beaucoup) |
| c3 | Mot de passe + « Je ne suis pas un robot » | idem | **Non** | la case vérifie qu'on est humain, elle ne prouve pas qui on est |
| c4 | Mot de passe + code à 6 chiffres reçu par SMS | Mot de passe + validation dans l'appli de la banque | **Oui** | ce que je sais + ce que j'ai (le téléphone) |
| c5 ★ | Payer en magasin avec sa carte, code à 4 chiffres tapé sur le terminal de paiement | Retirer au distributeur : carte + code à 4 chiffres | **Oui** | ce que j'ai (la carte) + ce que je sais (le code) |
| c6 | Payer sans contact (carte approchée du terminal, sans code) | idem | **Non** | une seule preuve (la carte) |
| c7 | Déverrouiller le téléphone avec l'empreinte | … avec le visage | **Non** | une seule preuve (ce que je suis) |
| c8 | Identité numérique : appli du téléphone + code secret | … appli du téléphone + empreinte | **Oui** | ce que j'ai (le téléphone) + ce que je sais (A) / ce que je suis (B) |

Dans l'export, `reponse` vaut `"oui"` ou `"non"`.

**Cas limite** : pour c1, « c'est pareil qu'un seul mot de passe » est accepté (l'idée « un seul type de preuve » est là).

## 7. Partie 2D — Simulateur FranceConnect+ (7 pts)

### Correspondances (v1.2 : les noms réels sont affichés aux élèves)

Les noms et logos réels sont désormais affichés directement aux élèves. Les **clés internes** de l'export ne changent pas (`demandePirate.service` vaut toujours `fiscalis` ou `santea`).

| Clé (export) | Nom affiché aux élèves |
|---|---|
| trouvo | Google (moteur de recherche) |
| habitatAdapt | MaPrimeAdapt' |
| identipass / identipassPlus | FranceConnect / FranceConnect+ |
| numerid | L'Identité Numérique La Poste |
| cartid | France Identité |
| fiscalis | impots.gouv.fr |
| santea | ameli.fr |
| adaptSenior | Adapt'Senior Dossier (intermédiaire payant, 49 €) |

Adresses affichées dans le navigateur (v1.2) : `google.fr`, `maprimeadapt.gouv.fr`, `franceconnect.gouv.fr`, `adapt-senior-dossier.fr` (intermédiaire, inventé), `maison-confort-blog.fr` et `forum-seniors-bzh.fr` (sites annexes, inventés). impots.gouv.fr, ameli.fr et L'Identité Numérique La Poste n'apparaissent que comme noms (notifications, carte de Mme Prigent), pas comme sites visités.

Données de Mme Prigent : numéro fiscal **99 38 471 205 316** ; code secret L'Identité Numérique La Poste **582914** ; carte d'identité ancien modèle (pas de France Identité possible). Demande pirate : **impots.gouv.fr** (A), **ameli.fr** (B) ; dans l'export, `demandePirate.service` vaut `fiscalis` ou `santea`. Ordre des incidents après le dépôt : A appel puis SMS ; B SMS puis appel. SMS de frais : A 12,90 €, maprimeadapt-frais.com ; B 14,50 €, maprimeadapt-validation.net.

### Prédiction (1 pt) — `reponses.2D.prediction`

| Élément | Pts |
|---|---|
| **L'Identité Numérique La Poste** va fonctionner : c'est une identité numérique vérifiée, sur son téléphone | 0,4 |
| impots.gouv.fr et ameli.fr ne marchent pas : ce sont des comptes à **mot de passe**, refusés par FranceConnect+ (« porte blindée ») | 0,3 |
| France Identité impossible : sa carte d'identité est l'**ancien modèle** cartonné | 0,3 |

### Réflexes (3,5 pts) — lire `simulateur.resultats`

| Réflexe | Pts | Où lire |
|---|---|---|
| Site officiel atteint sans payer l'intermédiaire | 0,5 | `siteOfficielAtteintSansPayer: true`. Cliquer sur la pub sans payer n'est pas pénalisé (voir `resultatSponsoriseClique`). |
| L'Identité Numérique La Poste choisie, au plus un essai raté avant | 0,5 | `numeridChoisi: true` et `essaisRatesAvantNumerid` ≤ 1 (essais ratés = « ancien identifiant » + France Identité). 0,25 si 2 essais ratés ou plus. |
| Numéro fiscal correct | 0,25 | `numeroFiscalCorrect: true` (espaces ignorés) |
| Demande pirate refusée | 0,75 | `demandePirate.reponse` : `"refusee"` 0,75 ; `"ignoree"` 0,25 (aucun dommage, mais pas de réaction) ; `"refusee"` avec `confirmeeAuMoinsUneFois: true` et sans code saisi : 0,5 ; `"confirmee"` 0 ; `"non-envoyee"` : voir plus bas. |
| Code non lu au faux conseiller | 0,75 | `appelFauxConseiller` : `"raccroche"`, `"rappel-plus-tard"`, `"refuse"`, `"sans-reponse"` → 0,75 ; `"code-lu"` → 0 |
| Frais du SMS non payés | 0,5 | `smsFrais.paye: false`. Cliquer sur le lien sans payer (`lienClique: true`) n'enlève pas de points, mais mérite une remarque. |
| Déconnexion | 0,25 | `deconnexion: true` (idéalement `deconnexionApresDepot: true`) |

**Démarche inachevée.** Si `demandeDeposee: false`, les incidents n'ont pas eu lieu (`"non-survenu"`). Les lignes numéro fiscal, code non lu et frais non payés valent alors 0 : ces réflexes n'ont pas été démontrés. La demande pirate n'arrive qu'une fois l'écran de consentement atteint. Si `"non-envoyee"`, la ligne vaut 0.

Le temps passé dans le simulateur est dans `dureeSimulateur` (secondes).

### Questions de fin (2,5 pts) — `reponses.2D.questionsFin`

**Q1 (1,5)** — A : M. Le Bris, compte impots.gouv.fr seulement ; B : Mme Tanguy, compte ameli.fr seulement.

| Élément | Pts |
|---|---|
| Son compte à mot de passe n'est **pas accepté** par FranceConnect+ pour cette démarche | 0,5 |
| Il lui faut une **identité numérique vérifiée** : L'Identité Numérique La Poste (appli + pièce d'identité + smartphone) ou France Identité (carte d'identité nouveau format + certification en mairie) | 0,75 |
| Sinon : faire la demande **par courrier** (ou se faire accompagner) | 0,25 |

**Q2 (1)** — A : Laura (aide à domicile) demande le code secret ; B : Sophie (sa fille) veut installer l'identité de sa mère sur son téléphone.

| Élément | Pts |
|---|---|
| Refus clair (« non ») | 0,25 |
| L'identité numérique est **personnelle**, liée à la personne et à **son** téléphone ; on ne donne jamais son code secret | 0,25 |
| **Faire avec, pas à la place** : l'aider à faire la démarche à côté d'elle | 0,25 |
| A : pour une professionnelle, **Aidants Connect** avec un mandat. B : toute solution légale citée (accompagner en sa présence, Aidants Connect par un professionnel, demande par courrier) | 0,25 |

**Cas limite** : « On ne doit pas faire à la place des gens » seul : 0,25 (ligne « faire avec ») + 0,25 (refus, implicite mais sans ambiguïté) = 0,5.

**Q3 — supprimée (v1.2).** L'association « nom inventé → nom réel » n'a plus d'objet : les noms réels sont affichés à l'écran. Ses 0,25 pt sont reversés sur Q1 (l'élément « identité numérique vérifiée » passe de 0,5 à 0,75). Les questions de fin restent à 2,5 pts (Q1 1,5 + Q2 1).

### Journal du simulateur (analyse, non noté)

Chaque clic sur un élément cliquable est enregistré dans `simulateur.evenements` : `t` (temps depuis l'ouverture du simulateur), `zone` (`navigateur`, `telephone`, `barre`), `cible`, `categorie`. Les touches du clavier du code secret et les clics dans les champs du formulaire ne sont pas enregistrés un par un : seuls les codes faux et le dépôt le sont. Les compteurs sont dans `simulateur.compteurs`.

- **utile** : étape du parcours attendu. `lancer-recherche`, `resultat-officiel` (et ses liens), `deposer-une-demande`, `ha-mon-espace`, `bouton-identipass-plus`, `identipass-numerid`, `numerid-confirmer`, `consentement-continuer`, `envoyer-demande`, `demande-pirate-refuser`, `appel-raccrocher`, `appel-demander-nom-rappeler`, `se-deconnecter`.
- **piege** : `resultat-sponsorise`, `paiement-intermediaire`, `ancien-identifiant`, `identipass-cartid`, `code-numerid-faux` (un par code faux), `demande-pirate-confirmer`, `appel-lire-le-code`, `lien-sms-frais`, `paiement-frais-sms`.
- **sans-objet** : menus et liens décoratifs (onglets Trouvo, actualités, blog, forum, menus et pied de page HabitatAdapt, avis de l'intermédiaire, applis Météo / Photos / Agenda / Radio / Réglages, anciens messages et appels, boutons du navigateur ☆ ⤓ 👤 ⋮). Un nombre élevé repère l'élève qui clique un peu partout. Non noté.
- **neutre** (ajouté au cahier des charges) : navigation sans enjeu. Précédent / suivant / actualiser, « Ma carte », ouverture des applis Messages / NumérID / Téléphone et des notifications, décrocher ou refuser l'appel, « J'ai terminé la démarche ».
- **evenement** (pas un clic) : faits marquants, avec parfois un `detail`. `paiement-intermediaire-49`, `demande-numerid-habitatadapt` (notification reçue), `numerid-habitatadapt-confirmee/refusee`, `numerid-bloquee`, `demande-pirate-fiscalis` / `demande-pirate-santea` (reçue), `demande-pirate-confirmee/refusee/code-saisi/ignoree`, `connexion-habitatadapt`, `formulaire-incomplet`, `demande-deposee` (avec l'exactitude du numéro fiscal), `sms-frais-recu`, `paiement-frais-sms`, `appel-entrant`, `appel-sans-reponse`, `appel-code-lu` / `appel-raccroche` / `appel-rappel-plus-tard`, `deconnexion`, `fin-demarche`.

## 8. Note pour le professeur

**Codes** (modifiables dans l'objet `CONFIG`, en tête du fichier) :

- `4172` → variante A ; `8395` → variante B.
- `0000` saisi dans le champ « Code de séance » → tout effacer (avec confirmation).
- **Ctrl+Alt+R** à tout moment → tout effacer (avec confirmation).

**Postes partagés.** Une copie commencée est sauvegardée dans le navigateur. Si l'onglet est fermé, l'élève ressaisit le code et clique sur « Reprendre la copie en cours ». Si un élève de l'autre groupe arrive sur un poste où une copie non exportée existe, le message « Appelez le professeur » s'affiche : exporter la copie si besoin, puis `0000`. Une copie déjà exportée est remplacée automatiquement. Le bouton « Terminer », après l'export, efface la copie du poste.

**Reprise dans le simulateur.** Après un rechargement, l'élève revient à la dernière page du navigateur. Les choix déjà faits et le journal sont conservés. Un appel en cours recommence à sonner.

**Réglages du simulateur** (`CONFIG.simulateur`) : notification NumérID 2 s ; demande pirate 8 s après l'écran de consentement (ou juste après le dépôt si l'élève a été plus rapide) ; blocage de NumérID 2 min après 3 codes faux ; premier incident 5 s après le dépôt, le second 6 s après la fin du premier ; si l'élève ne répond pas ou refuse l'appel, le faux conseiller rappelle une fois. Si l'élève clique sur « J'ai terminé la démarche » avant les incidents, ceux-ci se déclenchent tout de suite (« Votre téléphone vibre »).

**À tester avant le jour J :**

1. Ouvrir le fichier en local (double-clic) dans Chrome **et** Edge sur un poste du lycée, en plein écran, en 1366×768.
2. Taper `4172` puis `8395` : vérifier la variante (lettre affichée sur l'écran de fin, et identifiant de copie en haut à droite).
3. « Exporter ma copie » : vérifier que la fenêtre d'enregistrement s'ouvre et qu'on peut choisir le dossier commun. Si elle ne s'ouvre pas, le fichier part dans « Téléchargements » : prévoir de le déplacer. Vérifier que l'outil d'anonymisation accepte le `.json`.
4. Fermer l'onglet en cours de route, rouvrir, ressaisir le code : « Reprendre la copie en cours ».
5. Faire `0000` (ou Ctrl+Alt+R) entre les deux groupes.
6. Faire un parcours complet du simulateur (compter 10 à 15 min pour un élève).
7. 2A : le classement se fait par glisser-déposer (version 1.1, les flèches de la version 1.0 rendaient la liste peu lisible). Vérifier sur un poste du lycée que le glisser-déposer marche à la souris et au pavé tactile.
8. Prévoir le temps : la copie test (professeur qui connaît le parcours) a pris 32 min, dont 3 min de simulateur. Un élève fragile à l'écrit mettra nettement plus longtemps sur 1A, 1B et 2B.

## 9. Copie test (15/11/2026)

Copie `N7EP7HPC`, variante A, passée par le professeur en simulant un élève de niveau moyen bas. Note obtenue avec cette grille : **≈ 8,3 / 20** (1A 2,5 · 1B 1,5 · 2A 0,5 · 2B 0,5 · 2C 1 · 2D 2,3). Profil cohérent : règle « .gouv.fr ou rien » (A1 faux), « double authentification = code SMS » (2B, c2, c3, c5, c7), réflexes techniques acquis dans le simulateur mais pas les réflexes de méfiance (demande pirate confirmée, code lu, frais payés, pas de déconnexion). Compteurs du journal vérifiés : 8 utiles, 5 pièges, 12 neutres, 25 au total.
