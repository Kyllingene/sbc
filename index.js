var r = document.querySelector(':root');
  
// these two functions modified from
//  stackoverflow.com/questions/51312980/how-to-get-and-set-cookies-in-javascript
function setDark(value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = ";secure; samesite=none; expires=" + date.toUTCString();
  }
  document.cookie = "darkmode" + "=" + (value || "false") + expires + "; path=/";
  
  setColors(value);
}

function getDark() {
  return document.cookie.includes('true');
}

function setColors(dark) {
  if (dark) { // enable darkmode
    r.style.setProperty('--emphasis', 'var(--dark-emphasis)');
    r.style.setProperty('--bg-color', 'var(--dark-bg-color)');
    r.style.setProperty('--text-color', 'var(--dark-text-color)');

    r.style.setProperty('--link-normal', 'var(--dark-link-normal)');
    r.style.setProperty('--link-hover', 'var(--dark-link-hover)');
    r.style.setProperty('--link-background', 'var(--dark-link-background)');
    
    var button = document.getElementById("darkmode");
    button.style.setProperty('background', 'var(--sun) center no-repeat');
    button.style.setProperty('background-color', 'var(--dark-text-color)');
  } else { // disable darkmode
    r.style.setProperty('--emphasis', 'var(--light-emphasis)');
    r.style.setProperty('--bg-color', 'var(--light-bg-color)');
    r.style.setProperty('--text-color', 'var(--light-text-color)');

    r.style.setProperty('--link-normal', 'var(--light-link-normal)');
    r.style.setProperty('--link-hover', 'var(--light-link-hover)');
    r.style.setProperty('--link-background', 'var(--light-link-background)');
    
    var button = document.getElementById("darkmode");
    button.style.setProperty('background', 'var(--moon) center no-repeat');
    button.style.setProperty('background-color', 'var(--light-text-color)');
  }
}

function darkmode() {
  setDark(!getDark(), 730);
}