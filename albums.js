// @ts-check

/**
 * Returs the album html
 * @param {Album} album the album object 
 * @param {string} id the id of the album
 * @returns {string} the album html
 */
const getAlbum = (album, id) => {
  return `
      <div class="flex flex-col justify-center align-center bg-stone-800 p-2 rounded-xl cursor-pointer" id="nav-active" data-toggle=".nav-${id}">
        <img src="${album.image}" class="w-[350px] rounded-xl">
        <h3 class="text-center text-2xl mt-2"> ${album.title} </h3>
      </div>
      <div class="modal nav-${id}">
        <div>
          <ul class="flex flex-wrap flex-col bg-stone-900 min-w-[90vw] max-w-[90vw] md:min-w-[30vw] justify-center p-2 rounded-xl gap-x-16 gap-y-4 p-4">
            ${getAlbumSongsList(album)}
            <li>
              <a href="${album.url}" target="_blank" class="flex justify-center">
                <img class="h-24" src="assets/spotify.png">
              </a>
            </li>
            <li>
              <button class="text-3xl text-[#D080EC] hover:text-white navitem font-bold" id="close" data-toggle=".nav-${id}">
                Cerrar
              </button>
            </li>
          </ul>
        </div>
      </div>
  `;
};

/**
 * Get the songs list of an album as html
 * @param {Album} album 
 * @returns {string} the songs list as html
 */
const getAlbumSongsList = (album) => {
  var sb = "";

  if (album.songs === null || album.songs === undefined) {
    return "<li>Canciones no especificadas </li>";
  }

  album.songs.forEach((item) => {
    sb =
      sb +
      `
      <li class="flex flex-row">
        <img src="${album.image}" class="w-12 h-12 rounded-md mr-4">
        <div>
          <p class="text-2xl"> ${item.name} </p>
          <p class="text-xl text-gray-300"> ${item.authors} </p>
        </div>
      </li>
    `;
  });

  return sb;
};

document.addEventListener("DOMContentLoaded", function () {
  // @ts-ignore
  const albumContainer = $(".album-container");

  albums.forEach((album) => {
    const node = document.createElement("div");
    // @ts-ignore
    node.innerHTML = getAlbum(album, album.title.replaceAll(" ", "-"));
    albumContainer.appendChild(node);
  });
});
