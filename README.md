# react-native epg

![linting](https://github.com/wouterds/react-native-epg/workflows/linting/badge.svg)

## Setup

```bash
# switch node version
nvm install

# install dependencies
yarn

# for iOS development install native dependencies too
npx pod-install
```

### VSCode

#### Plugins

- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

#### Workspace settings

```javascript
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
}
```
