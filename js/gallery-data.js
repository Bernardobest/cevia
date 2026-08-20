/* ============================================================
   GALERIE — CÉVIA
   ------------------------------------------------------------
   Pour ajouter une nouvelle toile : copiez un bloc { ... },
   ajoutez-le au tableau ci-dessous, et déposez l'image
   correspondante dans le dossier /img (idéalement en .jpg,
   largeur autour de 1200px pour un bon compromis qualité/poids).

   Champs :
   - titre     : nom de l'œuvre
   - technique : ex. "Huile sur toile", "Acrylique sur toile"
   - dimensions: ex. "60 x 60 cm"
   - annee     : année de réalisation (ou "" si inconnue)
   - statut    : "disponible" | "vendue" | "sur demande"
   - image     : chemin vers le fichier dans /img
   - description : quelques mots, le lieu/l'inspiration si connu
   ============================================================ */

const GALLERY = [
  {
    titre: "Lotus solaire",
    technique: "Huile sur toile",
    dimensions: "60 x 60 cm",
    annee: "",
    statut: "sur demande",
    image: "img/toile-lotus.jpg",
    description: "Un lotus aux pétales sombres et irisés, porté par un fond doré vibrant — jeu de matière entre lumière et profondeur."
  }
];
