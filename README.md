# react-native-tv-example

![linting](https://github.com/wouterds/react-native-tv-example/workflows/linting/badge.svg)

![react-native-tv-example](https://repository-images.githubusercontent.com/520076519/5f7da859-9b46-4f96-ae2b-e74bd32c6180)

## Setup

```bash
# switch node version
nvm install

# install dependencies
yarn

# switch ruby version
rbenv install --skip-existing

# iOS dependencies
yarn pods

# .env
cp .env.example .env
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

## Running

```bash
# starting metro bundler for debug
yarn start

# ios debug
yarn ios

# ios release
yarn ios:release

# android debug
yarn android

# android release
yarn android:release
```
