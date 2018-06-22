# vue-standalone-component
[![Travis](https://img.shields.io/travis/InCuca/vue-standalone-component/master.svg)](https://travis-ci.org/InCuca/vue-standalone-component/branches)

Vuejs standalone component template using karma for testing

> Build your standalone components using this tiny template.

> This template is Vue 2.x **only**.

![](https://lh3.googleusercontent.com/tYVDDLYMopULiC3h_Pwiw69RZ85gLSpQQYh5cpOgfvYyMqzZo9Z8cpHLiZ7Jt-Kpnyfa_SNpZSwtokQSTI71r9d9QqH4bymxreVOY0unvKEd0aqCY5YLCwsF_oSvC7sHPEHKsSwJLs4FbneoXd6eZQ4F_Kv7EC_sYTc1KeuoSZrbroh5RwlFw7t2iZDhQnp4rV-STc9plH6hLg1QyPm0ehV6C54szgSoi5PUWXTiIbG63DNXTn3zizkOLpk-BOE-E_uhRmLiNbaggVrfjw-zInqWgouaqV2fQfLkWPs7W6SJHn8IaS9jKVJBF5CN6rv9eQNs7sFr_u9ZwBvU7yVAJq2gLrAD033JdHjx-LZbQI_kCGvXV98yEP7C2OHsIx-IT8n90nbFnAXp7tlAc-mGQeUnEIdnfe4GdILEDP5tYPmu-nKeN7tL6_E-kpN8oIT6tdm2yCEivhQx6CcvDJlpAIG9eGWduwtf2c2Kfx6U0k4bWgCid7X_39KkgDmCbUMt2fdMMfcDVHrGOMWiOVzBbFuKxMbIxbd7J0ty_ZKKa8dFIfhLYdUtRK4bCjf7ZKIqNUy9wwKY=w1600-h794)

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

```bash
$ npm install -g vue-cli
$ vue init InCuca/vue-standalone-component my-component
$ cd my-component
$ npm install
$ npm run serve
```

The generated output in ./dist can be used with node and the browser.

PS: to build to UMD run `npm run build:umd`

### What's Included

- Karma for testing
- Demo and documentation page from [vue-styleguidist](https://github.com/vue-styleguidist/vue-styleguidist/)
- [Release it!](https://github.com/webpro/release-it) support
- [Babel](https://babeljs.io/) and [ESLint](https://eslint.org/)

### Linting

```bash
$ npm run lint
```

### Testing & Test Coverage

```bash
$ npm run test
$ npm run test:watch
$ npm run test:cov
```

### Building

#### ES6 Modules / CommonJS

```bash
$ npm run build
```

```js
import myCmp from 'dist/my-cmp';

Vue.component('my-cmp', myCmp);
```

#### UMD

```bash
$ npm run build:umd
```

```html
<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script src="./dist/my-cmp.min.js" charset="utf-8"></script>

<div id="app"></div>

<script type="text/javascript">
  Vue.component('my-cmp', window.MyCmp.default);
  new Vue({
    el: '#app',
    template: '<my-cmp text="Hello World!"></my-cmp>',
  });
</script>
```
