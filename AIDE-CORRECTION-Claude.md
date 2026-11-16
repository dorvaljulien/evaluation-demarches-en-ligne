# Aide à la correction — Évaluation « Démarches en ligne et identité numérique » (v1.2)

> Document de référence pour corriger les copies exportées (fichiers `.json`).
> **Important** : cette version (1.2) diffère de la version de base (1.1) uniquement sur les **noms affichés** aux élèves. La structure pédagogique, les identifiants d'items et le format d'export JSON sont **identiques**. Ne pas chercher les anciens noms fictifs dans les copies.

---

## 1. Ce qui a changé par rapport à la version de base

### 1.1 Noms des services : fictifs → réels

Les élèves voient désormais les **vrais noms**. Leurs réponses écrites contiendront donc les noms réels, qu'il faut accepter comme équivalents des anciens noms fictifs.

| Clé interne (export, inchangée) | Ancien nom (v1.1) | Nom actuel (v1.2) |
|---|---|---|
| `trouvo` | Trouvo (moteur de recherche) | **Google** |
| `habitatAdapt` | HabitatAdapt | **MaPrimeAdapt'** |
| `identipass` | IdentiPass | **FranceConnect** |
| `identipassPlus` | IdentiPass+ | **FranceConnect+** |
| `numerid` | NumérID | **L'Identité Numérique La Poste** |
| `cartid` | CartID | **France Identité** |
| `fiscalis` | Fiscalis (impôts) | **impots.gouv.fr** |
| `santea` | Santéa (assurance maladie) | **ameli.fr** |
| `adaptSenior` | Adapt'Senior Dossier | Adapt'Senior Dossier *(inchangé, piège)* |
| `maisonConfort`, `forumSeniors` | Maison & Confort, Forum Seniors Bretagne | inchangés |

### 1.2 Adresses : fictives → réelles

Les adresses affichées dans le navigateur du simulateur sont maintenant les vraies :

| Service | Adresse affichée (v1.2) |
|---|---|
| Google | `google.fr` |
| MaPrimeAdapt' | `maprimeadapt.gouv.fr` |
| FranceConnect / FranceConnect+ | `franceconnect.gouv.fr` |

impots.gouv.fr, ameli.fr et L'Identité Numérique La Poste n'apparaissent que comme **noms** (notifications du téléphone, carte de Mme Prigent) : aucun site n'est visité à leur adresse.

Les **faux SMS de frais** imitent la vraie adresse : `maprimeadapt-frais.com` (variante A, 12,90 €) / `maprimeadapt-validation.net` (variante B, 14,50 €). L'intermédiaire payant (`adapt-senior-dossier.fr`) et les sites annexes (`maison-confort-blog.fr`, `forum-seniors-bzh.fr`) restent inventés.

### 1.3 Question 3 de la partie 2D : supprimée

- Dans la v1.1, la question 3 (0,25 pt) demandait d'associer « NumérID → L'Identité Numérique La Poste » et « CartID → France Identité ».
- En v1.2, cette question n'a plus d'objet (les vrais noms sont affichés à l'écran) : **elle est supprimée**.
- Ses 0,25 pt sont **reversés sur Q1** : l'élément « il lui faut une identité numérique vérifiée » passe de 0,5 à **0,75 pt**.
- Dans l'export, `questionsFin.q3` est désormais un objet vide `{}` → **l'ignorer** (ne rien compter, ne rien pénaliser).

---

## 2. Ce qui n'a PAS changé (ne pas se tromper)

- **Clés internes de l'export** : `demandePirate.service` vaut toujours `fiscalis` (variante A) ou `santea` (variante B). Ces clés ne sont pas des noms affichés.
- **Identifiants d'items** : `A1`…`A7`, `B1`…`B7`, `m1 m2 m3 m5 m6`, `c1`…`c8`.
- **Structure de l'export** : `variante`, `idCopie`, `reponses`, `simulateur.resultats` (réflexes calculés), `simulateur.evenements` (journal des clics), `simulateur.compteurs`.
- **Barème total : 20 points** (voir ci-dessous).

---

## 3. Barème (v1.2)

| Partie | Points |
|---|---|
| 1A — Site officiel ou à éviter | **3,5** (7 cartes × 0,5 : choix 0,25 + justification 0,25) |
| 1B — Que dire à la personne ? | **4,5** (situation 1 : 2 · question flash : 0,5 · situation 2 : 2) |
| 2A — Mots de passe | **1,5** (classement : 4 paires × 0,25 = 1 · justification : 0,5) |
| 2B — Définir la double authentification | **1,5** (3 × 0,5) |
| 2C — Est-ce de la double authentification ? | **2** (8 × 0,25) |
| 2D — Simulateur | **7** |
| **Total** | **20** |

### Partie 2D (7 pts)

- **Prédiction (1 pt)** :
  - L'Identité Numérique La Poste va fonctionner (identité numérique vérifiée) — 0,4
  - impots.gouv.fr et ameli.fr ne marchent pas (comptes à mot de passe refusés par FranceConnect+) — 0,3
  - France Identité impossible (carte d'identité ancien modèle) — 0,3
- **Réflexes (3,5 pts)** — lire `simulateur.resultats` :
  - site officiel atteint sans payer l'intermédiaire — 0,5
  - identité numérique choisie avec ≤ 1 essai raté — 0,5 (0,25 si 2+ essais)
  - numéro fiscal correct — 0,25
  - demande pirate refusée — 0,75 (ignoree 0,25 · confirmee 0)
  - code non lu au faux conseiller — 0,75 (code-lu → 0)
  - frais du SMS non payés — 0,5
  - déconnexion — 0,25
- **Q1 (1,5 pt)** :
  - compte à mot de passe non accepté par FranceConnect+ — 0,5
  - il faut une identité numérique vérifiée (L'Identité Numérique La Poste ou France Identité) — **0,75**
  - sinon par courrier / accompagnement — 0,25
- **Q2 (1 pt)** : refus clair (0,25) · identité personnelle (0,25) · faire avec, pas à la place (0,25) · Aidants Connect / solution légale (0,25)

---

## 4. Points d'attention pour corriger

1. **Accepter les vrais noms** dans les réponses libres : « impots.gouv.fr », « ameli.fr », « FranceConnect+ », « L'Identité Numérique La Poste », « France Identité », « MaPrimeAdapt' », « Google » sont les réponses attendues (équivalents des anciens noms fictifs).
2. **Ne pas chercher de réponse à la question 3** : elle est supprimée ; `questionsFin.q3` vaut `{}`.
3. **Les réflexes (`simulateur.resultats`)** se lisent exactement comme avant : mêmes clés, mêmes valeurs (`"refusee"`, `"code-lu"`, `"paye": false`, etc.).
4. **`demandePirate.service`** = `fiscalis` (A) ou `santea` (B), comme avant.

---

## 5. Corrigé complet

Le corrigé détaillé (grille complète, cas limites, copie test) est dans le fichier :
`Corrigé et grille – Évaluation démarches en ligne.md`
Il est à jour pour la v1.2.
