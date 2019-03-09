import firebase from 'firebase';

export function capitalize(rawWord) {
  const word = rawWord.replace('_', ' ');
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function getHostname() {
  let hostname = `${window.location.hostname}:5000`;
  if (hostname === 'vitaes.io:5000') {
    hostname = 'renderer.vitaes.io';
  }
  return hostname;
}

export function copyElement(element) {
  return JSON.parse(JSON.stringify(element));
}

export function removeDisabled(rawCv) {
  const cv = copyElement(rawCv);
  Object.keys(cv).forEach((key) => {
    if (Array.isArray(cv[key])) {
      cv[key] = cv[key].filter(element => !element.disable);
    }
  });
  return cv;
}

export function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

export function facebookLogin() {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

export function githubLogin() {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

export function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function validateDate(dateStr) {
  const date = new Date(dateStr);
  const day = Number(dateStr[8] + dateStr[9]);
  const month = Number(dateStr[5] + dateStr[6]);
  const year = Number(dateStr[0] + dateStr[1] + dateStr[2] + dateStr[3]);
  if (
    date.getMonth() + 1 !== month
    || date.getDate() + 1 !== day
    || date.getFullYear() !== year
  ) {
    return false;
  }
  return true;
}
