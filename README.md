# Cévia — site artiste peintre

Site statique (HTML/CSS/JS, sans build) pour présenter et faire découvrir le travail de Cévia (Chantal Vigne), artiste peintre : bio, galerie de toiles, expositions, presse, contact.

## Structure

- `index.html` — page unique, toutes les sections (hero, artiste, galerie, expositions, presse, contact)
- `css/style.css` — styles
- `js/gallery-data.js` — **le fichier à modifier pour ajouter une nouvelle toile** (voir commentaire en haut du fichier)
- `js/main.js` — rendu de la galerie, menu mobile, animations au scroll
- `img/` — images (toiles)
- `success.html` — page affichée après envoi du formulaire de contact
- `netlify.toml` — configuration du déploiement Netlify

## Ajouter une toile à la galerie

1. Déposez l'image dans `img/` (idéalement en `.jpg`, ~1200px de large).
2. Ouvrez `js/gallery-data.js`.
3. Copiez un bloc `{ ... }` du tableau `GALLERY`, remplissez les champs (titre, technique, dimensions, année, statut, image, description).
4. Enregistrez, commitez, poussez — Netlify redéploie automatiquement.

## Ajouter une exposition

Dans `index.html`, section `#expositions`, dupliquez un bloc `.timeline-item` et remplissez la date, le lieu et la description.

## Déploiement

Le site est déployé via Netlify, connecté au dépôt GitHub `Bernardobest/cevia`. Chaque push sur `main` déclenche un redéploiement automatique.

## À compléter

- Email de contact public (actuellement le site s'appuie uniquement sur le formulaire Netlify Forms — les messages arrivent dans l'onglet "Forms" du tableau de bord Netlify).
- Nom de domaine personnalisé (à ajouter dans Netlify une fois le domaine réservé par Bertrand).
- Photo de portrait de l'artiste (actuellement un monogramme "C." en attendant).
- Titres, dimensions et prix réels des toiles (actuellement des valeurs indicatives à ajuster).
