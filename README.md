# L'app

## Démarrer

Copier le fichier d'environnement (qui contient les variables secrètes comme les mots de passe)

```shell
cp .env.example .env
```

Et remplissez-le avec les données.  
Ensuite, installez les dépendances

```shell
npm i
```

Vous pouvez dès à présent lancer le serveur de dev

```shell
npm run dev
```

Pour ouvrir le navigateur en même temps :

```shell
npm run dev -- --open
```