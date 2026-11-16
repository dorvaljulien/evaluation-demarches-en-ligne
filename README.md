# Évaluation « Démarches en ligne et identité numérique » (1ère SAPAT, TIM)

Évaluation de 60 min sur poste : parties 1A à 2C (sites officiels, conseils, mots de passe, double authentification) puis simulateur de connexion renforcée (2D). Tous les sites et données sont fictifs.

> Ce dépôt est issu du dossier `evaluation-demarches/` du dépôt `simulateur-identite-numerique`, dont il reprend le style et l'outil de renommage. Il est désormais indépendant (le dépôt du simulateur ne contient plus l'évaluation).

- Cahier des charges : dans le projet claude.ai « Cours informatique SAPAT ». Corrigé et grille : `Corrigé et grille – Évaluation démarches en ligne.md` (**à ne jamais donner aux élèves**).
- Livrable : `evaluation-demarches.html`, un seul fichier autonome, sans ressource externe. **Il est généré** : ne pas le modifier à la main.
- Sources dans `src/`, assemblées par `node build.js` (à relancer après chaque modification) :
  - `config.js` : `CONFIG` (codes de séance, code de remise à zéro, temps conseillés, réglages du simulateur, personnage, contenus des variantes A et B, choix du menu de la question 3). Aucune bonne réponse ici.
  - `services.js` : couleurs, icônes et logos des services inventés (les noms et adresses : `noms-services.js`).
  - `core.js` : état, sauvegarde `localStorage`, en-tête (progression, compte à rebours), navigation entre parties, export JSON, remise à zéro, accueil.
  - `parties.js` : parties 1A, 1B, 2A (glisser-déposer), 2B, 2C et écran de fin.
  - `simulateur.js` : partie 2D (prédiction, navigateur fictif, téléphone, journal des clics, questions de fin).
  - CSS : `eval.css`, `simulateur.css`.
- `noms-services.js` : noms et adresses des services inventés. `outils/remplacer-noms.js` : le remplacement, appelé par `build.js`.
- `logos/` : images facultatives des services, intégrées au fichier par `build.js` (mode d'emploi : `logos/LISEZMOI.md`).

Codes par défaut : `4172` → variante A, `8395` → variante B, `0000` ou Ctrl+Alt+R → tout effacer.

## Remplacer les noms et logos des services inventés

1. **Noms et adresses** : `noms-services.js`. On ne change que le texte de droite.
2. **Couleurs, lettres des icônes, slogans** : `src/services.js`.
3. **Logos (images)** : déposer `logos/<clé>.png` (ou `.svg`) et, pour les petites icônes carrées, `logos/<clé>-icone.png` (voir `logos/LISEZMOI.md`).

Puis `node build.js`. Dans les sources, les noms d'origine restent écrits tels quels : `build.js` les remplace au moment de générer le fichier. Si un nom change, penser à mettre à jour le tableau des correspondances du corrigé.

**Version 1.2** : les noms, adresses et logos **réels** sont affichés aux élèves (Google, impots.gouv.fr, ameli.fr, FranceConnect / FranceConnect+, L'Identité Numérique La Poste, France Identité, MaPrimeAdapt'), via `noms-services.js` et `logos/`. Les sources gardent les noms inventés d'origine : pour revenir à la version 1.1, remettre les noms d'origine à droite dans `noms-services.js`. La question 3 de la partie 2D (association « nom inventé → nom réel ») est supprimée, ses points sont reversés sur la question 1.

## Versions

- **v1.0** (15/11/2026, première version) : commit `f495464`.
- **v1.1** (15/11/2026, après la passation test, noms inventés) : commit `6c295c3` (et `1d50c64` dans l'historique rattaché).
- **v1.2** (16/11/2026, noms réels, question 3 supprimée) : commit « Évaluation démarches v1.2 ».

Pour récupérer une ancienne version : `git checkout 6c295c3 -- .` puis `node build.js` (ou télécharger le commit depuis GitHub). Les versions 1.0 et 1.1 ont d'abord été développées dans le dossier `evaluation-demarches/` du dépôt `simulateur-identite-numerique` : leur historique a été rattaché ici.

Aide à la correction des copies `.json` : `AIDE-CORRECTION-Claude.md` (résumé des changements v1.2) et le corrigé complet.

## Test local

Ouvrir `evaluation-demarches.html` directement, ou `python -m http.server 8765` puis `http://localhost:8765/evaluation-demarches.html`.
