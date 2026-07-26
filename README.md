# asklootz.github.io

## A "github pages" website for my portfolio.
This a react website to diplay  my portfolio.  
It uses npm to manage all packages that can be seen in [package.json](package.json)

### How to run for development:
To start the application for local development, run the following commands:
```bash
npm i
npm run dev
```

### How to run for deployment:
To start the application for deploymeny, run the following commands:
```bash
npm i
npm run deploy
```

### Deployment to github pages:
When a push is made to the main branch github actions will be used to publish the web app for all to see. This makes it so it is not needed to push all npm packages, they will be installed in a running environment. 