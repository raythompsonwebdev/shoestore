# Getting Started with Next JS

Install next, react and react-dom in your project:

`npm install next react react-dom`

# or

`yarn add next react react-dom`

# or

`pnpm add next react react-dom`

Open package.json and add the following scripts:

```"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint"
}
```

dev - Runs next dev to start Next.js in development mode
build - Runs next build to build the application for production usage
start - Runs next start to start a Next.js production server
lint - Runs next lint to set up Next.js' built-in ESLint configuration

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Learn More

You can learn more in the [Next.js documentation](https://nextjs.org/docs/getting-started).

To learn React, check out the [Next.js documentation](https://nextjs.org/).
