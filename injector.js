(function() {
  function addScript( src, callback ) {
    var s = document.createElement( 'script' );
    s.setAttribute('src', src);
    s.addEventListener("load", callback);
    s.async = false
    document.head.appendChild(s);
  }

  function viewerInit() {
    const viewers = document.querySelectorAll('.ba-memorial-lobby-viewer')
    for (let i = 0; i < viewers.length; i++) {
        const viewer = viewers[i];

        const character = viewer.dataset.character;
        const atlasName = viewer.dataset.atlasName;
        const skelName = viewer.dataset.skelName;
        const bgAtlasName = viewer.dataset.bgAtlasName;
        const bgSkelName = viewer.dataset.bgSkelName;

        const customElement = document.createElement('ba-memorial-lobby-viewer')
        if (character) customElement.setAttribute('character', character)

        if (atlasName) customElement.setAttribute('atlasName', atlasName)
        if (skelName) customElement.setAttribute('skelName', skelName)
        if (bgAtlasName) customElement.setAttribute('bgAtlasName', bgAtlasName)
        if (bgSkelName) customElement.setAttribute('bgSkelName', bgSkelName)

        customElement.setAttribute('basePath', 'https://cdn.jsdelivr.net/gh/WalkQuackBack/ba-memorial-lobby-viewer/assets/spines/lobbies/')
        viewer.replaceWith(customElement)
    }
  }

  addScript("https://cdn.jsdelivr.net/gh/WalkQuackBack/ba-memorial-lobby-viewer/dist/ba-memorial-lobby-viewer.umd.js", viewerInit);
})()