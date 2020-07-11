# FederationDemo

Demonstrates webpack 5 Module Federation with Angular and the Angular Router.

![Workflow Designer](./result.png)

## Start

- ``npm run build``
- ``npm run serve:dist``
- Navigate to shell at http://localhost:5000
- Navigate to standalone microfrontend at http://localhost:3000

## Disclaimer

Module Federation is a brand-new technology that will come with webpack 5. As webpack 5 is currently in beta, it's not intended for production yet. Also, to make it work with Angular already today, my examples use a patched version of the Angular CLI and a custom webpack configuration. Once webpack 5 is final and the Angular CLI supports it, we won't need these workarounds anymore but have a more streamlined way for all of this. Nevertheless, investigating this technology already today gives us a sound idea of what's possible shortly.

For the same reason, this example does not support debug mode. Just build and serve it as mentioned above.