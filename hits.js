// @ts-check

/**
 * @typedef {Object} Hit
 * @property {string} name
 * @property {string} authors
 * @property {string} image
 * @property {string} url
 * @property {string} content
 */

/**
 * Get the hit html content
 * @param {Hit} hit 
 * @param {string} id 
 * @returns {string} The hit html content
 */
const getHit = (hit, id) => {
  return `
    <div class="flex flex-col justify-center align-center bg-stone-800 p-2 rounded-xl cursor-pointer" id="nav-active" data-toggle=".nav-${id}">
      <img src="${hit.image}" class="w-[350px] rounded-xl">
      <h3 class="text-center text-2xl mt-2"> ${hit.name} </h3>
    </div>
    <div class="modal nav-${id}">
      <div>
        <ul class="flex flex-wrap flex-col bg-stone-900 min-w-[90vw] max-w-[90vw] md:min-w-[30vw] md:max-w-[50vw] justify-center p-2 rounded-xl gap-x-16 gap-y-4 p-4">
          <li class="flex justify-center flex-col">
            <h1 class="text-[#D080EC] text-bold atomic text-4xl font-bold my-4 text-center"> ${hit.name.toLowerCase()} </h1>
            <a href="${hit.url}" target="_blank" class="flex justify-center">
              <img src="${hit.image}" class="w-[250px] rounded-xl">
            </a>
            <h2 class="text-gray-300 text-xl text-center"> ${hit.authors} </h2>
            <p class="text-center text-xl mt-4">
              ${hit.content}
            </p>
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
 * @type {Array<Hit>}
 * The hits data
 * 
 */
const hits = [
  {
    name: "Loca",
    authors: "Khea, Cazzu, Duki",
    image: "assets/hits/loca.jpg",
    url: "https://youtu.be/XQ0D_QD_DhM",
    content: `
      Loca es una canción lanzada en 2017 por los artistas argentinos Khea, Cazzu y Duki. <br> Este tema se destaca por ser uno de los primeros éxitos del trap latino en Argentina, marcando un hito en la escena musical del país. La canción mezcla trap y reguetón, creando un sonido pegajoso y rítmico que rápidamente capturó la atención del público joven.
    `,
  },
  {
    name: "Nada",
    authors: "Cazzu, Lyanno, Rauw Alejandro, Dalex",
    image: "assets/albums/5-error93.jpg",
    url: "https://youtu.be/XTZHCzwTYS0",
    content: `
      Nada es una canción de la artista argentina Cazzu, lanzada en 2019 como parte de su álbum "Error 93". <br> Esta canción es un claro ejemplo del estilo característico de Cazzu, combinando elementos de trap y reguetón con letras que reflejan emociones intensas y experiencias personales.
    `,
  },
  {
    name: "Tú y Tu",
    authors: "Los Angeles Azules, Santa Fe Klan, Cazzu",
    image: "assets/hits/tu-y-tu.jpg",
    url: "https://youtu.be/1_qRsCQdzuE",
    content: `
      Tú y Tú de Los Ángeles Azules, Santa Fe Klan y Cazzu fusiona magistralmente la esencia de la cumbia con los ritmos urbanos del rap y el trap.<br> Esta colaboración inesperada, estrenada en noviembre del 2023, ha conquistado a millones de personas alrededor del mundo, convirtiéndose en un verdadero himno de la música latina contemporánea.
    `
  },
  {
    name: "Mucha Data",
    authors: "Cazzu",
    image: "assets/albums/5-error93.jpg",
    url: "https://youtu.be/pJq7ZT0RZwc?si=hUMQyktGJhToy2Go",
    content: `
    Mucha Data de Cazzu: Un himno al empoderamiento femenino y al éxito. <br>

    Mucha Data es una canción de la trapera argentina Cazzu, lanzada en 2019 como parte de su álbum "Error 93". Se ha convertido en uno de sus temas más populares y representativos, y ha sido elogiada por su letra empoderadora, su ritmo contagioso y su videoclip provocativo.
    `
  },
  {
    name: "Brinca",
    authors: "Cazzu, Young Miko",
    image: "assets/hits/brinca.jpg",
    url: "https://youtu.be/fp9jKpLQ00w?si=VHg_qKP3rRAaNaNd",
    content: `
      Brinca es una canción de trap lanzada en 2023 por las artistas argentinas Cazzu y Young Miko. Forma parte del álbum "Nena Trampa" de Cazzu y ha logrado un gran éxito en plataformas digitales y en las discotecas de toda Latinoamérica.
    `
  }
]

document.addEventListener("DOMContentLoaded", function () {
  const hitsContainer = $(".hits-container");

  hits.forEach((hit) => {
    const node = document.createElement("div");
    // @ts-ignore
    node.innerHTML = getHit(hit, hit.name.replaceAll(" ", "-"));
    hitsContainer.appendChild(node);
  });
});
