// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDF7Td7GYQtwlwRcLcMFdKKN1PZOxfCgU8",
    authDomain: "angular-event-management.firebaseapp.com",
    databaseURL: "https://angular-event-management.firebaseio.com",
    projectId: "angular-event-management",
    storageBucket: "angular-event-management.appspot.com",
    messagingSenderId: "55621052759"
  }
};
