# gatsby-starter-default
The default Gatsby starter.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
gatsby new gatsby-example-site
```

Then you can run it by:
```sh
cd gatsby-example-site
gatsby develop
```

## Deploy


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
# .env.firebase
FIREBASE_TOKEN=[TOKEN REDACTED]
```

```bash
jet encrypt .env.firebase .env.firebase.encrypted
```
