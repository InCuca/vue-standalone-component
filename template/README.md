# {{ name }}

> {{ description }}

# Usage

## ES6 Modules / CommonJS

```bash
$ npm run build
```

```js
import {{ camelcase name }} from 'dist/{{ name }}';

Vue.component('{{ name }}', {{ camelcase name }});
```

```html
<{{name}} text="Hello World!"></{{name}}>
```

## UMD

```bash
$ npm run build:umd
```

```html
<{{name}} text="Hello World!"></{{name}}>

<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script src="./dist/{{ name }}.min.js" charset="utf-8"></script>

<script type="text/javascript">
  Vue.component('{{ name }}', window.{{ camelcase name }});
</script>
```

## Installation

### Using yarn

`yarn add {{ name }}`

### Using npm

`npm i --save {{ name }}`

## Demo and Docs

`npm run serve`

## Tests

This template uses karma with chai by default, you can change test settings in poi.config.js

`npm run test`
`npm run test:watch`
`npm run test:cov`

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
