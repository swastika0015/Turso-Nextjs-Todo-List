# To-Do List App
A To-Do List app using [Turso](https://chiselstrike.com/) and [Nextjs](https://nextjs.org/)

## Setting up the Turso database
Installation:
```
# On macOS or Linux with Homebrew
Brew install chiselstrike/tap/turso

# Manual scripted installation
curl -sSfL https://get.tur.so/install.sh | bash
```

Create a new Turso database using CLI:

```
turso db create [DATABASE_NAME]
```

Open the database using the Turso CLI’s SQL shell:
```
turso db shell [DATABASE_NAME]
```

Get the unique access token using the following command
```
turso db show --url [DATABASE_NAME]
```

Now, rename the .env_sample.env file to .env.

Assign the database URL to the NEXT_PUBLIC_DB_URL environment variable

```
NEXT_PUBLIC_DB_URL={Turso database URL} 
```

#Create the newsletters table

Run the following command to create the table:
```
CREATE TABLE IF NOT EXISTS todos (

id integer primary key,
text text not null
);
```

# Project Structure

This project is using Next.js and Turso.
Inside your project, you'll see the following directory structure:

```
├── README.md
├── next.config.js
├── node_modules
├── package.json
├── yarn-error.log
├── yarn.lock
└──src 
|── pages
│   ├── _app.js
│   ├── _document.js
│   ├── api
│   │   ├── turso.js
│   │   └── todos
│   │       ├── add.js
│   │       ├── delete.js
│   │       └── index.js
│   └── index.js
├── styles
│   ├── Home.module.css
│   └── global.css
└── utils
    └── index.js
```


# Running locally
Development mode uses Vite's development server. During development, the dev command will server-side render (SSR) the output.

```
npm run start # or `yarn start`
```

# Preview

The preview command will create a production build of the client modules, and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.
```
npm run preview # or `yarn preview`
```
Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

# Production

The production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code.

npm run build # or `yarn build`

# License
This code is open sourced under the [MIT license](https://en.wikipedia.org/wiki/MIT_License).