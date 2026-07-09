(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#app`),t=`0.0.1`,n=[];function r(){e.innerHTML=`
    <main class="app-shell">
      ${i()}
      
      <section class="tool-card">
        <p> Currently, the only features available is a very rudamentary character input screen. More to come... </p>
        <p> That said, to those that read this- thank you for checking out what I'm working on! I really appreciate it more than I can convey through text </p>
      </section>
      ${o()}
    </main>
    
    `,s()}function i(){return`
    <h1> Exa's Writing Tools </h1>
    <section class="header-section">
      <button id="home-button" class="nav-button">Home</button>
      <button id="vault-button" class="nav-button">Lore Vault</button>
      <button id="writing-button" class="nav-button">Writing Desk</button>
      <button id="settings-button" class="nav-button">Settings</button>
    </section>
  `}function a(){return`
    <h1> The Lore Vault </h1>
      <section class="header-section">
        <button id="home-button" class="nav-button">Home</button>
        <button id="char-button" class="nav-button">Characters</button>
        <button id="locs-button" class="nav-button">Places</button>
        <button id="events-button" class="nav-button">Events</button>
        <button id="tags-button" class="nav-button">Tags</button>
        <button id="time-button" class="nav-button">Timeline</button>
        <button id="religion-button" class="nav-button">Religions</button>
        <button id="gods-button" class="nav-button">Gods/Higher Powers</button>
        <button id="nations-button" class="nav-button">Nations</button>
        <button id="factions-button" class="nav-button">Factions</button>
      </section>
  `}function o(){return`
    <section class="footer-card"><p>Exa's Writing Tools build-${t}</p></section>
  `}function s(){document.querySelector(`#home-button`).addEventListener(`click`,r),document.querySelector(`#vault-button`).addEventListener(`click`,l),document.querySelector(`#writing-button`).addEventListener(`click`,u),document.querySelector(`#settings-button`).addEventListener(`click`,d)}function c(){document.querySelector(`#home-button`).addEventListener(`click`,r),document.querySelector(`#char-button`).addEventListener(`click`,f),document.querySelector(`#locs-button`).addEventListener(`click`,m),document.querySelector(`#events-button`).addEventListener(`click`,h),document.querySelector(`#tags-button`).addEventListener(`click`,g),document.querySelector(`#time-button`).addEventListener(`click`,_),document.querySelector(`#religion-button`).addEventListener(`click`,v),document.querySelector(`#gods-button`).addEventListener(`click`,y),document.querySelector(`#nations-button`).addEventListener(`click`,b),document.querySelector(`#factions-button`).addEventListener(`click`,x)}function l(){e.innerHTML=`
    <main class="app-shell">
      ${a()}

      <section class="tool-card">
        <h1>Lore Vault</h1>
        <p class="subtitle">You may select your desired 'mode' at the top.</p>
      </section>
      ${o()}
    </main>
    `,c()}function u(){e.innerHTML=`
    <main class="app-shell">
      ${i()}
      <h1>Writing Desk</h1>
      <p class="subtitle">Unavailable at this stage, but I promise it'll be soon!</p>
    ${o()}
    </main>
  `,s()}function d(){e.innerHTML=`
    <main class="app-shell">
      ${i()}
      <br>
      <h1> Settings Page </h1>
      <p class="subtitle">Unavailable at this stage, will be made later on. </p>
    ${o()}
    </main>
  `,s()}function f(){e.innerHTML=`
    <main class="app-shell">
    ${a()}
    <br>
    <section class="tool-card-char-page">  
    <label>Character Name</label>
      <input class="field-input" id="charName">
      <br>
      <label>Character Nickname</label>
      <input class="field-input" id="charNickname">
      <br>
      <label>Age</label>
      <input class="field-input" id="charAge">
      <br>
      <label>Race</label>
      <input class="field-input" id="charRace">
      <br>
      <label>Description</label>
      <textarea class="field-input" id="charDesc"></textarea>
      <br><br>
      <button id="submit-button">Save (loosely)</button>
    </section>

    <section class="tool-card" id="characters-list"></section>

    ${o()}
  `,c(),document.querySelector(`#submit-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#charName`),t=document.querySelector(`#charNickname`),r=document.querySelector(`#charAge`),i=document.querySelector(`#charRace`),a=document.querySelector(`#charDesc`),o={name:e.value||`Missing Information`,nickname:t.value||`Missing Information`,age:r.value||`Missing Information`,race:i.value||`Missing Information`,description:a.value||`Missing Information`};n.push(o),console.log(n),p(1)})}function p(e){if(!Number.isInteger(e)){console.error(`formID must be an integer`);return}switch(e){case 1:document.querySelector(`#characters-list`).innerHTML=n.map((e,t)=>`
          <section class="character-card">
          <h2>Name: ${e.name}</h2>
          <hr class="card-custom-divider">
          <p>Nickname: ${e.nickname}</p>
          <p>Age: ${e.age}</p>
          <p>Race: ${e.race}</p>
          <p>Description: ${e.description}</p>
          <p>Index: ${t}</p>
          <button class="form-button" data-index="${t}">Edit</button> <button class="form-button" data-index="${t}">Delete</button>
          </section>
        `).join(``);break}document.querySelectorAll(`.form-button`).forEach(e=>{e.addEventListener(`click`,()=>{console.log(`Look the button says the ID is `+e.dataset.index)})})}function m(){e.innerHTML=`
    <main class="app-shell">
    ${a()}
    <br>
    <section class="tool-card">
      <p>Places page</p>
    </section>
  `,c()}function h(){e.innerHTML=`
    <main class="app-shell">
    ${a()}
    <br>
    <section class="tool-card">
      <p>CEvents page</p>
    </section>
  `,c()}function g(){e.innerHTML=`
    <main class="app-shell">
    ${a()}
    <br>
    <section class="tool-card">
      <p>Tags page</p>
    </section>
  `,c()}function _(){e.innerHTML=`
    <main class="app-shell">
    ${a()}
    <br>
    <section class="tool-card">
      <p>Timeline page</p>
    </section>
  `,c()}function v(){e.innerHTML=`
    <main class="app-shell">
    ${a()}
    <br>
    <section class="tool-card">
      <p>Religion page</p>
    </section>
  `,c()}function y(){e.innerHTML=`
    <main class="app-shell">
    ${a()}
    <br>
    <section class="tool-card">
      <p>Gods/Deities page</p>
    </section>
  `,c()}function b(){e.innerHTML=`
    <main class="app-shell">
    ${a()}
    <br>
    <section class="tool-card">
      <p>Nations page</p>
    </section>
  `,c()}function x(){e.innerHTML=`
    <main class="app-shell">
    ${a()}
    <br>
    <section class="tool-card">
      <p>Factions page</p>
    </section>
  `,c()}r();