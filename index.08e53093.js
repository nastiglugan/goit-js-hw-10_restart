!function(){var e="https://api.thecatapi.com/v1";var n=document.querySelector(".breed-select");document.querySelector(".cat-info");n.addEventListener("change",(function(n){var t=n.target.value;console.log(n.target.value),(o=t,fetch("".concat(e,"/images/").concat(o,"?{\n  headers: {\n    x-api-key: 'live_FOG7aRLYWG9g0M7LDbCu7dQ7ewu5mSLwwAFxQjU5uUVgVOeYBl8W7znUpztVyjx8',\n  }")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((function(e){return function(e){console.log(e);e.url;var n=e.breeds;console.log(n)}(e)})).catch((function(e){return console.log(e)}));var o})),fetch("".concat(e,"/breeds? {\n  headers: {\n    x-api-key: 'live_FOG7aRLYWG9g0M7LDbCu7dQ7ewu5mSLwwAFxQjU5uUVgVOeYBl8W7znUpztVyjx8',\n  }")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){return t=e.map((function(e){var n=e.reference_image_id,t=e.name;return"<option value = ".concat(n,"> ").concat(t,"</option>")})).join(""),void n.insertAdjacentHTML("beforeend",t);var t})).catch((function(e){return console.log(e)}))}();
//# sourceMappingURL=index.08e53093.js.map
