USE m2l_db;

UPDATE PAIEMENT, PRODUITS
SET total = PRODUITS.prix * PAIEMENT.qte
WHERE PAIEMENT.id_produit = PRODUITS.id;