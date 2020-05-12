let appName = "Quarantine Challenge";
let appBody = document.getElementById('app');

let appTitle = document.createElement("h1");
appTitle.innerText = appName;

appBody.append(appTitle);

console.log(`${appName}`);