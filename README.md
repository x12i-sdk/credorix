# @x12i/credorix-docs usage example

Credorix docs knowledge SDK — install as a devDependency only. Catalog, use cases, and markdown packs for humans and agents.

This consuming application demonstrates **list the bundled guides and read a use case** using the published npm package, pinned to `1.7.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

This is a documentation knowledge SDK. It is installed as a development dependency. The example lists its books and use cases, then reads the first available use-case guide from the package.

## When to use the package

- Install @x12i/credorix-docs as a development dependency so the product guides and package index are available to developers and coding assistants.
- Read the bundled credorix documentation or use-case catalog without requiring a live documentation website.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/credorix-docs)
- [Implementation monorepo](https://github.com/x12i/credorix)
- [Reviewed package source](https://github.com/x12i/credorix/tree/860e0eab139c54e2126a233d8c7b660c2390d3f4/packages/credorix-docs)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## @x12i/credorix runtime example

Credorix facade package for client applications.

Read a sanitized authentication profile through the facade package. This example consumes `@x12i/credorix@1.5.0`.

```sh
npm install --ignore-scripts
npm run example:credorix
```

Source: [`src/credorix-example.mjs`](src/credorix-example.mjs). The original documentation-package example remains available through `npm start`. Both examples are checked independently.
