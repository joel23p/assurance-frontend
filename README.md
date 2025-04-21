# Action' elles assurance


## Introduction

Ce projet est l'application  frontend du test technique  .

## Technologies utilisées

- Angular (
- TypeScript
- HTML/CSS
- Bootstrap 
- primeng
- Angular CLI


### 1. Cloner le projet

git clone https://github.com/joel23p/assurance-frontend.git


### 2. Installation des dépendances du frontend

cd frontend
npm install


### 3. Démarrage frontend

cd frontend
npm start

### 4. Architecture frontend

frontend/
├── src/
│   └── app/
│       ├── environment/
│       │   └── environment.ts          # Fichier de configuration des URL backend
│       ├── modules/
│       │   ├── accueil/                # Composants et vues pour la page d'accueil
│       │   ├── simulation/             # Logique et formulaire de simulation d’assurance
│       │   ├── recapitulatif/          # Récapitulatif de la simulation avant validation
│       │   └── souscription/           # Finalisation de la souscription
│       └── shared-assurance/
│           ├── component/              # Composants réutilisables comme la navbar
│           ├── model/                  # Interfaces & modèles de typage TypeScript
│           └── service/                # Services pour la communication avec l'API backend
