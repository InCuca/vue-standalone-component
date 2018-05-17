# {{ name }}

> {{ description }}

## Installation

### Using yarn

`yarn add {{ name }}`

### Using npm

`npm i --save {{ name }}`

## Demo and Docs

`npm run serve`

## Usage

### ES6 Modules / CommonJS

```js
import {{ camelcase name }} from '{{ name }}';
import '{{ name }}/dist/{{ name }}.min.css';

Vue.component('{{ name }}', {{ camelcase name }}.default);
```

```html
<{{name}} text="Hello World!"></{{name}}>
```

### UMD

```html
<{{name}} text="Hello World!"></{{name}}>

<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script src="./dist/umd/{{ name }}.min.js" charset="utf-8"></script>
<link rel="stylesheet" type="text/css" href="./dist/umd/{{ name }}.min.css">

<script type="text/javascript">
  Vue.component('{{ name }}', window.{{ camelcase name }}.default);
</script>
```

## Build

Build configuration is located in the `poi.config.js` file, to build just run: `npm run build`, it will build to `cjs` and `umd` directories.

## Tests

This template uses karma with chai by default, you can change test settings in poi.config.js

`npm run test`
`npm run test:watch`
`npm run test:cov`

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
