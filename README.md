# Stripe-Firebase-Function

Example project demonstrating stripe backend setup using Firebase functions.

## Quick start

#### Install firebase tools for deployment.

`npm install -g firebase-tools`

#### Login to firebase account using firebase tools.

`firebase login`

#### Associate respective firebase project with the local project.

`firebase use --add`

#### Add required secrets.

`firebase functions:config:set stripe.token="SECRET_STRIPE_TOKEN_HERE"`

#### Deploy the firebase functions.

`cd functions && npm run deploy`
