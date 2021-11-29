import App from './App.svelte'

import * as argon2 from 'argon2';

const app = new App({
  target: document.getElementById('app')
})

argon2.hash('asdf');

export default app
