# storybook-react-live

[react-live](https://github.com/FormidableLabs/react-live) decorator for [Storybook](https://storybook.js.org/) v6+

[![npm](https://img.shields.io/npm/v/storybook-react-live-decorator)](https://www.npmjs.com/package/storybook-react-live-decorator)
[![NPM](https://img.shields.io/npm/l/storybook-react-live-decorator)](https://www.npmjs.com/package/storybook-react-live-decorator)

## Screenshot

![Screenshot](https://raw.githubusercontent.com/sanusart/storybook-react-live-decorator/main/images/show.png)

## [Demo](https://sanusart.github.io/storybook-react-live-decorator)

## Installation

`npm i -D storybook-react-live-decorator`

## Usage

```jsx
// Component.stories.js

import { ReactLiveDecorator } from 'storybook-react-live-decorator';

const code = `() => (
  <Wrapper>
    <Button type="primary" size="large">
      Default
    </Button>
  </Wrapper>
)`;

export const LiveEdit = {
    decorators: [ReactLiveDecorator({ code, scope: { Button, Wrapper } })]
};

```

## Props of `ReactLiveDecorator`

All props accepted by [\<LiveProvider /\>](https://github.com/FormidableLabs/react-live#liveprovider-) and:

| Name       | PropType         | Description                                                                                                                               |
|------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| code       | PropTypes.string | Code string                                                                                                                               
| scope      | PropTypes.object | scope object                                                                                                                              
| theme      | PropTypes.object | A `prism-react-renderer` existing theme or theme object. See more [here](https://github.com/FormidableLabs/prism-react-renderer#theming)  
| fontFamily | PropTypes.string | css font-family to use in the edirot default `monospace`                                                                                  
| debug      | PropTypes.bool   | Logs whatever goes through decorator into _console.log_                                                                                   

## Extend globally via `.storybook/preview.js`

Add property `reactLive` to `parameters` object. Accepts: `scope` and `theme`

```js
const preview = {
    parameters: {
        reactLive: {
            theme: themes.dracula, // import from `prism-react-renderer`
            scope: {Button, Wrapper},
            debug: false,
            fontFamily: 'monospace'
        }
    }
};

export default preview;
```

:)
