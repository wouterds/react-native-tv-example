# react-native-tv-example

[![code-review](https://github.com/wouterds/react-native-tv-example/workflows/code-review/badge.svg)](https://github.com/wouterds/react-native-tv-example/actions/workflows/code-review.yml)

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

## Running

```bash
# starting metro bundler for debug
yarn start

# ios debug
yarn ios

# ios release
yarn ios:release

# tvos debug
yarn tvos

# tvos release
yarn tvos:release

# android (TV) debug
yarn android

# android (TV) release
yarn android:release
```
