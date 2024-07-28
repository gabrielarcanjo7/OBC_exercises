import "core-js";
import "regenerator-runtime/runtime";

import SentryObjs from "./sentryObj";

async function listFetch() {
  let api = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY");
  let apiObj = await api.json();

  loadOnList(apiObj.near_earth_objects);
}

async function loadOnList(e) {
    let list = [];
    e.forEach((obj) => {
        list.push(obj);
        SentryObjs.id = obj.id;
        SentryObjs.name_limited = obj.name;
        SentryObjs.minYear = obj.close_approach_data.close_approach_date;
        SentryObjs.maxYear = obj.close_approach_data[0][1];
        
        let liElement = document.createElement("li")
        let text = `(${SentryObjs.id})${SentryObjs.name_limited}:risco de colisão entre ${SentryObjs.minYear} e ${SentryObjs.maxYear}`;
        let view = document.querySelector("#view");
        liElement.innerText = text;;
        view.appendChild(liElement)
    })
    
}

listFetch();