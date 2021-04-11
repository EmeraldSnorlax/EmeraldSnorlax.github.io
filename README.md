# website
---

My website

Styles from [TailwindCSS](https://tailwindcss.com/)

Icons from [Material Icons](https://fonts.google.com/icons?selected=Material+Icons) and [Simple Icons](https://simpleicons.org/).


Deploying / running:

```
yarn install
# If you are deploying to production, **SET YOUR `NODE_ENV` TO `production`**!!!!
# If you are developing locally, set your NODE_ENV to whatever you want.
# Be sure to swap out the loaded CSS bundle.

yarn css # Build the CSS bundle.
yarn build # Build the JS bundle.
```

Then just point your webserver to serve from `dist/`, and `index.html`.
