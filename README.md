# www.joshfreeman.io

This website is generated using the [Gatsby site generator](https://www.gatsbyjs.org)

## Install

```sh
# Make sure that you have the Gatsby CLI program installed:
# See: https://www.gatsbyjs.org
npm install -g gatsby

# Install dependencies
npm install
```

## Development

```bash
# Start the develoment server

npm start
```

## Deployments to Firebase

```bash
firebase login:ci

> Waiting for authentication...
>
> ✔  Success! Use this token to login on a CI server:
>
> [TOKEN REDACTED]
>
> Example: firebase deploy --token "$FIREBASE_TOKEN"
```

Place token into .env.firebase file and encrypt with jet

Acquire the Codeship AES Key from https://app.codeship.com/projects/288572/configure and place into `codeship.aes`


```txt
# .env.firebase, do not enclose in quotes
FIREBASE_TOKEN=[TOKEN REDACTED]
```

```bash
jet encrypt .env.firebase .env.firebase.encrypted
```
