const SyncGet = require("./SyncGet.js");

const syncGetWorker = SyncGet.startWorker();
try {
  let response = syncGetWorker.get(
    // "https://package.elm-lang.org/all-packages"
    "https://package.elm-lang.org/all-packages/since/12970"
    // "https://package.elm-lang.org/packages/elm/random/1.0.0/elm.json"
  );
  console.log(response);
} catch (err) {
  console.error(err);
}
syncGetWorker.shutDown();
