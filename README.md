# APIArticleExpressJS

Projet évalué.

Une API REST basique en Node.js / Express pour gérer des articles (création, récupération, etc.). Utilise Express comme framework HTTP et une architecture services/DAO pour la persistance.

## 🚀 Fonctionnalités

- Création d’articles avec un UUID unique
- Structure modulaire avec routes, services et DAO
- Intégration d’un ORM (Sequelize ou autre) pour gérer la base de données
- Tests avec Jest
- Logging possible avec Winston

## 📦 Prérequis

Assure-toi d’avoir installé :

- **Node.js** (>= v14)
- **npm**
- Une base SQL si nécessaire (MySQL, SQLite, etc.)
- Si tu veux utiliser Sequelize, installe le client adapté

## 🛠️ Installation

Clone le projet :
``` bash
git clone https://github.com/Yndral-c/APIArticleExpressJS.git
cd APIArticleExpressJS
```

Installe les dépendances :
``` bash
npm install
```

Tu peux aussi réinitialiser proprement avec :
``` bash
npm ci
```

## ⚙️ Configuration

Crée un fichier .env (si tu utilises des variables d’environnement) et configure :

- La connexion DB (host, user, password, database)
- Le port du serveur

Noter que le README existant mentionne dotenv, Sequelize, Winston, UUID et Jest comme dépendances principales.

## 🧠 Usage
## 📌 Lancer le serveur
``` bash
npm start
```

## 📡 Endpoints

| Méthode |	Endpoint|	Description|
|-|-|-|
| POST    |	/create-article|	Crée un nouvel article|
| GET     |	/articles|	Récupère tous les articles|
| GET     |	/articles/:id|	Récupère un article par ID|

## 🧪 Tests

Le projet intègre Jest pour les tests unitaires :
``` bash
npm test
```


⚠️ Note : si tu as des erreurs liées à ESM / modules (par ex. avec uuid), utilises uuid@8 plutôt que la v9 dans ce contexte. (Cf erreur Jest) — je peux te montrer comment faire si besoin.

## 📁 Architecture
``` bash
src
├── services/       # Logique métier (fonctions de traitement)
├── routes/         # Définition des points de terminaison (endpoints)
├── dao/            # Accès aux bases de données
├── .env            # Variables d'environnement (non suivi par git)
├── app.js          # Point d'entrée de l'application
└── package.json    # Dépendances et scripts
```

## 📄 Licence

Projet open-source / pas de licence définie dans le repo.

