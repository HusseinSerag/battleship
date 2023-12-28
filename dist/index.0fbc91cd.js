// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aJ0Tr":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6e8a5cd20fbc91cd";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"fFaKF":[function(require,module,exports) {
var _startJs = require("./ui-components/start.js");
const Game = require("6032f6a29c0d1148");
let gamePlayBoard = _startJs.gamePlay();
let playerBoard;
let computerBoard;
let shipRendering = _startJs.renderPlaceShipsOnBoard();
let startGame = shipRendering.querySelector(".start-game");
let resetButton = shipRendering.querySelector(".reset-btn-options");
let startScreen = _startJs.renderStart();
document.body.appendChild(startScreen);
let startBtn = startScreen.querySelector(".start-button");
let correctBoard;
let coordinatesAndDirection = [];
startBtn.addEventListener("click", ()=>{
    _startJs.clearScreen();
    coordinatesAndDirection = [];
    document.body.appendChild(shipRendering);
    dragDrop();
});
function dragDrop() {
    let choiceContainer = document.querySelector(".choices");
    let choices = document.querySelectorAll(".choices .ship");
    let boardToBe = document.querySelectorAll(".board-start-container .board-start-div");
    let dragged;
    choices.forEach((choice)=>{
        choice.addEventListener("drag", (event)=>{
            dragged = event.target;
        });
    });
    for(let i = 0; i < boardToBe.length; i++){
        boardToBe[i].addEventListener("dragover", (e)=>{
            e.preventDefault();
            let choice = document.querySelector("input[type=checkbox]");
        });
        boardToBe[i].addEventListener("drop", (e)=>{
            console.log(i);
            e.preventDefault();
            let choice = document.querySelector("input[type=checkbox]");
            if (choice.checked) {
                if (_startJs.checkIfCorrectPlacement(i, dragged, 0, boardToBe) != false) {
                    let number;
                    if (String(i).length == 2) {
                        number = String(i).split("").map(Number);
                        coordinatesAndDirection.push({
                            row: number[0],
                            column: number[1],
                            direction: false,
                            length: Number(dragged.getAttribute("length"))
                        });
                    } else {
                        number = i;
                        coordinatesAndDirection.push({
                            row: 0,
                            column: number,
                            direction: false,
                            length: Number(dragged.getAttribute("length"))
                        });
                    }
                    for(let j = 0, z = 0; j < Number(dragged.getAttribute("length")); z = z + 10, j++){
                        let location = document.createElement("div");
                        location.classList.add("location");
                        boardToBe[i + z].appendChild(location);
                    }
                    choiceContainer.removeChild(dragged);
                }
            } else if (_startJs.checkIfCorrectPlacement(i, dragged, 1, boardToBe) != false) {
                let number;
                if (String(i).length == 2) {
                    number = String(i).split("").map(Number);
                    coordinatesAndDirection.push({
                        row: number[0],
                        column: number[1],
                        direction: true,
                        length: Number(dragged.getAttribute("length"))
                    });
                } else {
                    number = i;
                    coordinatesAndDirection.push({
                        row: 0,
                        column: number,
                        direction: true,
                        length: Number(dragged.getAttribute("length"))
                    });
                }
                for(let j = 0; j < Number(dragged.getAttribute("length")); j++){
                    let location = document.createElement("div");
                    location.classList.add("location");
                    boardToBe[i + j].appendChild(location);
                }
                choiceContainer.removeChild(dragged);
                console.log(coordinatesAndDirection);
            }
        });
    }
}
let isAllSunk = false;
function applyListeners() {
    startGame.addEventListener("click", ()=>{
        let boardToBe = document.querySelectorAll(".board-start-container .board-start-div");
        console.log(Array.from(boardToBe));
        _startJs.clearScreen();
        Game.startGame(coordinatesAndDirection);
        document.body.appendChild(gamePlayBoard);
        renderGame(gamePlayBoard);
    });
    resetButton.addEventListener("click", ()=>{
        let container = shipRendering.querySelector(".board-start-container");
        let choices = shipRendering.querySelector(".choices");
        shipRendering.removeChild(container);
        shipRendering.removeChild(choices);
        _startJs.renderBoardAndChoices(shipRendering, 100);
        container = shipRendering.querySelector(".board-start-container");
        choices = shipRendering.querySelector(".choices");
        shipRendering.removeChild(container);
        shipRendering.removeChild(choices);
        shipRendering.insertBefore(container, resetButton);
        shipRendering.insertBefore(choices, resetButton);
        dragDrop();
        coordinatesAndDirection = [];
    });
}
function renderGame() {
    console.log("here");
    playerBoard = gamePlayBoard.querySelectorAll(".player-container .board-start-container .board-start-div");
    computerBoard = gamePlayBoard.querySelectorAll(".computer-container .board-start-container .board-start-div");
    _startJs.populateBoard(playerBoard, Game.getPlayerBoard(), Game.getPlayerBoard().getShips());
    _startJs.populateBoard(computerBoard, Game.getEnemyBoard(), Game.getEnemyBoard().getShips());
    let chosenX, chosenY, result, sunk = false;
    let hit;
    for(let i = 0; i < computerBoard.length; i++)computerBoard[i].addEventListener("click", ()=>{
        if (isAllSunk == false) try {
            [hit, isAllSunk] = Game.playRound(i, "Player");
            if (hit) Array.from(computerBoard[i].children)[0].classList.add("visible");
            else {
                let div = document.createElement("div");
                div.classList.add("missed");
                computerBoard[i].appendChild(div);
            }
            if (isAllSunk) {
                gamePlayBoard = _startJs.gamePlay();
                isAllSunk = false;
                _startJs.clearScreen();
                const [containerDone, shadowDone] = _startJs.endGame(Game.getPlayer1());
                document.body.appendChild(containerDone);
                document.body.appendChild(shadowDone);
                document.querySelector(".reset-btn").addEventListener("click", ()=>{
                    _startJs.clearScreen();
                    document.body.appendChild(shipRendering);
                });
            } else if (sunk == false) {
                [chosenX, chosenY, result, sunk] = [
                    ...Game.AIMove()
                ];
                console.log(chosenX, chosenY, result, sunk);
                if (!result) {
                    if (chosenX == 0) {
                        let div = document.createElement("div");
                        div.classList.add("missed");
                        playerBoard[chosenY].appendChild(div);
                    } else {
                        let stringNumber = `${chosenX}${chosenY}`;
                        let number = Number(stringNumber);
                        console.log(number);
                        let div = document.createElement("div");
                        div.classList.add("missed");
                        playerBoard[number].appendChild(div);
                    }
                } else if (chosenX == 0) Array.from(playerBoard[chosenY].children)[0].classList.add("hit");
                else {
                    let stringNumber = `${chosenX}${chosenY}`;
                    let number = Number(stringNumber);
                    console.log(number);
                    Array.from(playerBoard[number].children)[0].classList.add("hit");
                }
                if (sunk) {
                    gamePlayBoard = _startJs.gamePlay();
                    sunk = false;
                    _startJs.clearScreen();
                    let [container, shadow] = _startJs.endGame(Game.getPlayer2());
                    document.body.appendChild(container);
                    document.body.appendChild(shadow);
                    document.querySelector(".reset-btn").addEventListener("click", ()=>{
                        _startJs.clearScreen();
                        document.body.appendChild(shipRendering);
                    });
                }
            }
        } catch (error) {}
    });
}
applyListeners();

},{"./ui-components/start.js":"eSf9I","6032f6a29c0d1148":"b9mUZ"}],"eSf9I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderStart", ()=>renderStart);
parcelHelpers.export(exports, "renderPlaceShipsOnBoard", ()=>renderPlaceShipsOnBoard);
parcelHelpers.export(exports, "renderBoardAndChoices", ()=>renderBoardAndChoices);
parcelHelpers.export(exports, "clearScreen", ()=>clearScreen);
parcelHelpers.export(exports, "gamePlay", ()=>gamePlay);
parcelHelpers.export(exports, "populateBoard", ()=>populateBoard);
parcelHelpers.export(exports, "endGame", ()=>endGame);
parcelHelpers.export(exports, "checkIfCorrectPlacement", ()=>checkIfCorrectPlacement);
var _startCss = require("../../styles/start.css");
function renderStart() {
    let container = document.createElement("div");
    container.classList.add("start-container");
    let h1 = document.createElement("h1");
    h1.classList.add("welcome-text");
    h1.textContent = "Welcome to Battleship!";
    let button = document.createElement("button");
    button.classList.add("start-button");
    button.textContent = "Start";
    container.appendChild(h1);
    container.appendChild(button);
    return container;
}
function renderPlaceShipsOnBoard(boardSize = 100) {
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("start-and-choice");
    renderBoardAndChoices(mainContainer, boardSize);
    let startGame = document.createElement("button");
    let reset = document.createElement("button");
    reset.textContent = "RESET CHANGES";
    reset.classList.add("reset-btn-options");
    startGame.classList.add("start-game");
    startGame.textContent = "START BATTLE";
    mainContainer.appendChild(reset);
    mainContainer.appendChild(startGame);
    return mainContainer;
}
function renderBoardAndChoices(mainContainer, boardSize) {
    let container = document.createElement("div");
    mainContainer.appendChild(renderBoard(container, boardSize));
    let choices = document.createElement("div");
    mainContainer.appendChild(renderChoices(choices));
}
function renderChoices(choices) {
    let ships = [
        {
            name: "Boat",
            length: 2
        },
        {
            name: "Submarine",
            length: 3
        },
        {
            name: "Destroyer",
            length: 3
        },
        {
            name: "Compressor",
            length: 4
        },
        {
            name: "Defender",
            length: 5
        }
    ];
    for(let i = 0; i < ships.length; i++){
        let div = document.createElement("div");
        div.classList.add("ship");
        div.draggable = true;
        div.textContent = `${ships[i].name} (${ships[i].length})`;
        div.setAttribute("length", ships[i].length);
        choices.appendChild(div);
    }
    choices.classList.add("choices");
    let label = document.createElement("label");
    let span = document.createElement("span");
    label.classList.add("label-element");
    let input = document.createElement("input");
    input.type = "checkbox";
    span.textContent = "rotate";
    label.appendChild(input);
    label.appendChild(span);
    choices.appendChild(label);
    return choices;
}
function renderBoard(container, boardSize) {
    container.classList.add("board-start-container");
    for(let i = 0, j = 64; i < 11; i++, j++){
        let boardDiv = document.createElement("div");
        if (i == 0) boardDiv.textContent = "";
        else boardDiv.textContent = String.fromCharCode(j);
        boardDiv.classList.add("board-start-div-letters");
        container.appendChild(boardDiv);
    }
    for(let i = 0; i < boardSize; i++){
        let boardDiv = document.createElement("div");
        boardDiv.classList.add("board-start-div");
        container.appendChild(boardDiv);
    }
    for(let i = 0, j = 0; i < 100; j++, i = i + 11){
        let boardDiv = document.createElement("div");
        boardDiv.classList.add("board-start-div-numbers");
        boardDiv.textContent = j + 1;
        container.insertBefore(boardDiv, Array.from(container.children)[i + 11]);
    }
    return container;
}
function clearScreen() {
    Array.from(document.body.children).forEach((child)=>{
        document.body.removeChild(child);
    });
}
function gamePlay() {
    Array.from(document.body.children).forEach((child)=>{
        document.body.removeChild(child);
    });
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("game-container");
    let player = document.createElement("div");
    player.classList.add("player-container");
    let Computer = document.createElement("div");
    Computer.classList.add("computer-container");
    player.appendChild(header("Your Fleet"));
    Computer.appendChild(header("Computer's Fleet"));
    let containerPlayer = document.createElement("div");
    let containerComputer = document.createElement("div");
    player.appendChild(renderBoard(containerPlayer, 100));
    Computer.appendChild(renderBoard(containerComputer, 100));
    mainContainer.appendChild(player);
    mainContainer.appendChild(Computer);
    return mainContainer;
}
function header(text) {
    let div = document.createElement("div");
    div.classList.add("player-fleet");
    div.textContent = text;
    return div;
}
function populateBoard(arrayOfDivs, gameBoard, ships) {
    let gameBoard1D = [];
    for(let i = 0; i < 10; i++)for(let j = 0; j < 10; j++)gameBoard1D.push(gameBoard.board[i][j]);
    for(let i = 0; i < gameBoard1D.length; i++)if (gameBoard1D[i]) {
        for(let j = 0; j < ships.length; j++)if (ships[j] == gameBoard1D[i]) {
            let picked = document.createElement("div");
            picked.classList.add(`picked-ball-${ships[j].getLength()}`);
            arrayOfDivs[i].classList.add(`picked-${ships[j].getLength()}`);
            arrayOfDivs[i].appendChild(picked);
        }
    }
}
function endGame(winner) {
    let container = document.createElement("div");
    container.classList.add("end-game");
    let shadow = document.createElement("div");
    shadow.classList.add("shadow");
    let resetButton = document.createElement("button");
    resetButton.classList.add("reset-btn");
    resetButton.textContent = "Reset";
    let winnerText = document.createElement("div");
    winnerText.classList.add("winner-text");
    winnerText.textContent = `${winner.playerUserName} has won the game!`;
    container.appendChild(winnerText);
    container.appendChild(resetButton);
    return [
        container,
        shadow
    ];
}
function checkIfCorrectPlacement(i, dragged, index, boardToBe) {
    let number;
    if (String(i).length == 2) number = Number(String(i).split("")[index]);
    else number = i;
    console.log(number);
    String(i).length == 1 && index;
    if (number + Number(dragged.getAttribute("length")) - 1 >= 10) {
        if (String(i).length == 1 && index == 0) ;
        else return false;
    }
    if (index == 0) {
        for(let j = 0, z = 0; j < Number(dragged.getAttribute("length")); z = z + 10, j++)if (Array.from(boardToBe[i + z].children).length != 0) {
            console.log("something is in the way");
            return false;
        }
    } else {
        for(let j = 0; j < Number(dragged.getAttribute("length")); j++)if (Array.from(boardToBe[i + j].children).length != 0) {
            console.log("something is in the way");
            return false;
        }
    }
}

},{"../../styles/start.css":"6Sw75","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Sw75":[function() {},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"b9mUZ":[function(require,module,exports) {
const Ship = require("acf9484dae5d6fcb");
const gameBoard = require("5f770be8a60ef873");
const Player = require("b0b09b7e9d1e80f7");
const game = function() {
    let shipLengths = [
        2,
        3,
        3,
        4,
        5
    ];
    let playerBoard;
    let enemyBoard;
    let player1;
    let player2;
    const startGame = (coordinatesAndDirection)=>{
        playerBoard = gameBoard.createGameBoard();
        enemyBoard = gameBoard.createGameBoard();
        playerBoard.initalizeBoard();
        enemyBoard.initalizeBoard();
        for(let i = 0; i < coordinatesAndDirection.length; i++){
            let ship = Ship.createShip(coordinatesAndDirection[i].length, 0, false);
            playerBoard.placeShip(ship, coordinatesAndDirection[i].direction, coordinatesAndDirection[i].row, coordinatesAndDirection[i].column);
        }
        let j = 0;
        let trueOrFalse = [
            true,
            false
        ];
        while(j < shipLengths.length)try {
            let ship = Ship.createShip(shipLengths[j], 0, false);
            enemyBoard.placeShip(ship, trueOrFalse[Math.floor(Math.random() * trueOrFalse.length)], Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
            j++;
        } catch (Error1) {}
        player1 = Player.createPlayer("", "P1");
        player2 = Player.createPlayer("AI", "P2");
        Player.setCurrentPlayer(player1);
    };
    const getPlayerBoard = ()=>playerBoard;
    const getEnemyBoard = ()=>enemyBoard;
    const playRound = (number, attacker)=>{
        let coord = String(number);
        if (coord.length == 1) coord = "0" + coord;
        let [row, column] = [
            ...coord.split("").map(Number)
        ];
        console.log(`${Player.getCurrentPlayer().playerUserName}'s turn`);
        if (Player.getCurrentPlayer() == player1 && attacker == "Computer") throw new Error("Wrong Board");
        else if (Player.getCurrentPlayer() == player2 && attacker == "Player") {
            Player.changeCurrentPlayer(player2, player1);
            throw new Error("Wrong Board");
        }
        if (attacker == "Player") try {
            let result = enemyBoard.receiveAttack([
                row,
                column
            ]);
            let isSunken = enemyBoard.didAllSink();
            Player.changeCurrentPlayer(player2, player1);
            return [
                result,
                isSunken
            ];
        } catch (err) {
            console.log(err);
            throw err;
        }
    };
    const getPlayer1 = ()=>player1;
    const getPlayer2 = ()=>player2;
    const AIMove = ()=>{
        while(true)try {
            let yCoord = Math.floor(Math.random() * 10);
            let xCoord = Math.floor(Math.random() * 10);
            let result = playerBoard.receiveAttack([
                xCoord,
                yCoord
            ]);
            let isSunken = playerBoard.didAllSink();
            console.log(playerBoard.board);
            console.log(playerBoard.getMissedHits());
            console.log(playerBoard.getHits());
            Player.changeCurrentPlayer(player2, player1);
            return [
                xCoord,
                yCoord,
                result,
                isSunken
            ];
        } catch  {
            console.log("didnt break");
        }
    };
    return {
        startGame,
        getPlayerBoard,
        getEnemyBoard,
        playRound,
        AIMove,
        getPlayer1,
        getPlayer2
    };
}();
module.exports = game;

},{"acf9484dae5d6fcb":"a8Mq4","5f770be8a60ef873":"leIKa","b0b09b7e9d1e80f7":"kCdT2"}],"a8Mq4":[function(require,module,exports) {
const Ship = function() {
    const createShip = (length, numberOfHits, isShipSunk)=>{
        let shipLength = length;
        let shipNumberOfHits = numberOfHits;
        let shipIsSunk = isShipSunk;
        const getLength = ()=>shipLength;
        const setLength = (newLength)=>{
            shipLength = newLength;
        };
        const getNumberOfHits = ()=>shipNumberOfHits;
        const setNumberOfHits = (newNumberOfHits)=>{
            shipNumberOfHits = newNumberOfHits;
        };
        const incrementNumberOfHits = ()=>shipNumberOfHits++;
        const getIsSunk = ()=>shipIsSunk;
        const setIsSunk = (newIsSunk)=>{
            shipIsSunk = newIsSunk;
        };
        const hit = ()=>{
            incrementNumberOfHits(getNumberOfHits());
        };
        const isSunk = ()=>{
            if (getNumberOfHits() == getLength()) setIsSunk(true);
            return getIsSunk();
        };
        return {
            getLength,
            setLength,
            getNumberOfHits,
            setNumberOfHits,
            getIsSunk,
            setIsSunk,
            hit,
            isSunk
        };
    };
    return {
        createShip
    };
}();
module.exports = Ship;

},{}],"leIKa":[function(require,module,exports) {
const gameBoard = function() {
    const createGameBoard = ()=>{
        const size = 10;
        let board = [];
        let missedHits = [];
        let ships = [];
        let shipHits = [];
        let allHits = [];
        const initalizeBoard = ()=>{
            for(let i = 0; i < size; i++)board.push([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]);
        };
        const clearBoard = ()=>{
            board = [];
        };
        const validatePlacement = (ship, isHorizontal, row, column)=>{
            for(let i = 0; i < ship.getLength(); i++)if (isHorizontal) {
                if (column + i > 9 || board[row][column + i] != 0) return false;
            } else {
                if (row + i > 9 || board[row + i][column] != 0) return false;
            }
            return true;
        };
        const placeShip = (ship, isHorizontal, row, column)=>{
            if (!validatePlacement(ship, isHorizontal, row, column)) throw new Error();
            for(let i = 0; i < ship.getLength(); i++)if (isHorizontal) board[row][column + i] = ship;
            else board[row + i][column] = ship;
            ships.push(ship);
            return board;
        };
        const receiveAttack = ([row, column])=>{
            allHits.forEach((hit)=>{
                let [a, b] = [
                    ...hit
                ];
                if (a == row && b == column) throw new Error();
            });
            if (board[row][column]) {
                shipHits.forEach((hit)=>{
                    let [a, b] = [
                        ...hit
                    ];
                    if (a == row && b == column) throw new Error();
                });
                board[row][column].hit();
                shipHits.push([
                    row,
                    column
                ]);
                allHits.push([
                    row,
                    column
                ]);
                return true;
            }
            missedHits.push([
                row,
                column
            ]);
            allHits.push([
                row,
                column
            ]);
            return false;
        };
        const getMissedHits = ()=>missedHits;
        const getHits = ()=>shipHits;
        const getShips = ()=>ships;
        const didAllSink = ()=>{
            for(let i = 0; i < ships.length; i++){
                if (!ships[i].isSunk()) return false;
            }
            return true;
        };
        return {
            placeShip,
            initalizeBoard,
            clearBoard,
            receiveAttack,
            getMissedHits,
            didAllSink,
            getHits,
            board,
            allHits,
            getShips
        };
    };
    return {
        createGameBoard
    };
}();
module.exports = gameBoard;

},{}],"kCdT2":[function(require,module,exports) {
const Player = function() {
    let currentPlayer;
    const setCurrentPlayer = (player)=>{
        currentPlayer = player;
    };
    const getCurrentPlayer = ()=>currentPlayer;
    const changeCurrentPlayer = (player, player2)=>{
        if (currentPlayer == player) currentPlayer = player2;
        else if (currentPlayer == player2) currentPlayer = player;
    };
    const createPlayer = (type, playerName)=>{
        const attack = (row, column)=>{
            return [
                row,
                column
            ];
        };
        let playerUserName = playerName;
        const randAttack = (sizeOfBoard)=>{
            let randomXcoordinate = Math.floor(Math.random() * sizeOfBoard);
            let randomYcoordinate = Math.floor(Math.random() * sizeOfBoard);
            return [
                randomXcoordinate,
                randomYcoordinate
            ];
        };
        if (type == "AI") return Object.assign({}, {
            randAttack,
            playerUserName
        });
        return Object.assign({}, {
            attack,
            playerUserName
        });
    };
    return {
        createPlayer,
        setCurrentPlayer,
        getCurrentPlayer,
        changeCurrentPlayer
    };
}();
module.exports = Player;

},{}]},["aJ0Tr","fFaKF"], "fFaKF", "parcelRequired10b")

//# sourceMappingURL=index.0fbc91cd.js.map
