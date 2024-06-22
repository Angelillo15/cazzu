const get = (album, id) => {
  return `
      <div class="flex flex-col justify-center align-center bg-stone-800 p-2 rounded-xl cursor-pointer" id="nav-active" data-toggle=".nav-${id}">
        <img src="${album.image}" class="w-[350px] rounded-xl">
        <h3 class="text-center text-2xl mt-2"> ${album.title} </h3>
      </div>
      <div class="modal nav-${id}">
        <ul class="flex flex-wrap flex-col bg-stone-900 justify-center p-2 rounded-xl gap-x-16 gap-y-4 p-4">
          ${getList(album)}
          <li>
            <button class="text-3xl text-[#D080EC] hover:text-white navitem font-bold" id="close" data-toggle=".nav-${id}">
              Cerrar
            </button>
          </li>
        </ul>
      </div>
  `
};

const getList = (album)  => {
  var sb = '';

  if (album.songs === null || album.songs === undefined) {
    return "<li>Canciones no especificadas </li>"
  }

  album.songs.forEach((item) => {
    sb = sb + `
      <li class="flex flex-row">
        <img src="${album.image}" class="w-12 h-12 rounded-md mr-4">
        <div>
          <p class="text-2xl"> ${item.name} </p>
          <p class="text-xl text-gray-300"> ${item.authors} </p>
        </div>
      </li>
    `;
  })

  return sb;
}

const albums = [
  {
    image: 'assets/albums/1-nena-trampa-deluxe.jpg',
    title: 'Nena Trampa Deluxe',
    songs: [
      {
        name: 'Jefa',
        authors: 'Cazzu',
      },
      {
        name: 'Nena Trampa',
        authors: 'Cazzu',
      },
      {
        name: 'Isla Velde',
        authors: 'Cazzu',
      },
      {
        name: 'Yo Yo Yo',
        authors: 'Cazzu',
      },
      {
        name: 'Piensame',
        authors: 'Cazzu',
      },
      {
        name: 'Peli-Culeo',
        authors: 'Cazzu, De La Ghetto, Randy',
      },
      {
        name: 'Fulete',
        authors: 'Cazzu, Brray, Luar La L, Ankhal',
      },
      {
        name: 'La Trampa',
        authors: 'Cazzu',
      },
      {
        name: 'Maléfica',
        authors: 'Cazzu, Maria Becerra',
      },
      {
        name: 'Los Hombres no lloran',
        authors: 'Cazzu',
      },
      {
        name: 'Peli-Culeo - Remix',
        authors: 'Cazzu, De La Ghetto, Randy, Ñengo Flow',
      },
      {
        name: 'Brinca',
        authors: 'Cazzu, Young Miko',
      },
      {
        name: 'Glock',
        authors: 'Cazzu, La Joaqui',
      },
      {
        name: 'Piénsame - Mariachi',
        authors: 'Cazzu',
      },
      {
        name: 'Los Hombres No Lloran - Orquesta',
        authors: 'Cazzu',
      },
    ]
  },
  {
    image: 'assets/albums/2-nena-trampa.jpg',
    title: 'Nena Trampa'
  },
  {
    image: 'assets/albums/3-bonus-trap.jpg',
    title: 'Bonus trap'
  },
  {
    image: 'assets/albums/4-una-nina-inutil.jpg',
    title: 'Una niña inutil'
  },
  {
    image: 'assets/albums/5-error93.jpg',
    title: 'Error 93'
  },
  {
    image: 'assets/albums/6-maldades.jpg',
    title: 'Maldades'
  },
]

document.addEventListener("DOMContentLoaded", function () {
  const albumContainer = $(".album-container")
  
  albums.forEach((album) => {
    const node = document.createElement("div");
    node.innerHTML = get(album, album.title.replaceAll(' ', '-'));
    albumContainer.appendChild(node);
  })
});