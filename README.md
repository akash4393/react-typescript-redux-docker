# React-Typescript-Redux-Docker Boilerplate
React-Typescript-Redux boilerplate with docker to run the code in isolated docker env. Folder structure added to get started with basic web-applications. Docker setup to cache node_modules and reinstall packages when package.json changes. Using Chokidar to ensure HMR works with docker.

## Technologies
* Docker
    * Docker Compose
* Chokidar (hot reloading)
* React biolerplate with Typescript ```create-react-app```
* Redux (Thunk)
* Nginx (prod)
* Prettier
* ESLint

## Build Instructions
### Pull Code
* ```git clone git@github.com:akash4393/react-typescript-redux-docker.git```
* ```cd ./react-typescript-redux-docker```
### Start (Dev)
* ```docker compose up --build```
* Go to <http://localhost:3000>

### Start (prod)
* ```docker compose -f docker-compose.prod.yml up --build```
* Go to <http://localhost:1337>

### Stop
* Stop process ```Cmd + C```
* ```docker compose down```

### Run Linter
* ```npm run lint``` (Auto runs on build & --fix on commit)

### Setting up vscode
* Add the following to vscode settings.json
```javascript
"[typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.insertSpaces": true,
    "editor.tabSize": 2,
},
"[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.insertSpaces": true,
    "editor.tabSize": 2,
},
```

## Troubleshoot
* Network timeout error on docker compose up 
    * Rerun docker compose command

