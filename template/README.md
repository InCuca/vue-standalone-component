# {{ name }}

> {{ description }}

# Usage

```js
import Component from '{{name}}'

Vue.component('{{name}}', Component);
```

    <{{name}} text="Hello World!"></{{name}}>

PS: You can also build to UMD with `npm run build:umd`, the component will be
available in the window['{{name}}'] variable.

## Installation

### Using yarn

`yarn add {{ name }}`

### Using npm

`npm i --save {{ name }}`

## Demo and Docs

`npm run serve`

## Tests

This template uses karma by default, you can change test settings in poi.config.js

`npm run test`
`npm run test:watch`
`npm run test:cov`

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
