# RISD Nav Demo

This repo demonstrates how to use the RISD Nav component.

## Usage

1. Install the required packages to your project: `npm i -S @risd/ui @risd/react-hydrator`
2. Import `themes` from the UI package and `hydrateComponents` from the React hydrator package into your script:

```js
import { themes } from "@risd/ui";
import { hydrateComponents } from "@risd/react-hydrator";

hydrateComponents(themes.default);
```

3. Add the component to your HTML:

```html
<div
  data-react-component="Nav"
  data-react-props='{
      "siteTitle": "RISD",
      "homepageUrl": "/",
      "hasSearch": false,
      "searchSwiftypeEngineKey": "TLLpGAeFx8mQDgPCy6t9",
      "searchMaxResults": 4,
      "searchInputPlaceholder": "Search",
      "items": [
        {
          "text": "Homepage",
          "url": "/"
        },
        {
          "text": "About",
          "url": "/about/"
        },
        {
          "text": "Section heading",
          "subitems": [
            {
              "text": "Subpage 1",
              "url": "/subpage-1/"
            }
          ]
        }
      ]
    }'
></div>
```

For more details and a list of all available props, you can take a closer look at the [Nav component](http://develop.styleguide.risd.systems/?path=/story/components-nav--sandbox) in the style guide.

## Running the demo

To run this demo, clone this repo and run `npm i` to install all dependencies. Then simply run `npm start` to spin up a dev server to view the Nav implementation.
