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

