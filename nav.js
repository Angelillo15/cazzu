const $ = (query) => {
  return document.querySelector(query);
};

const partial_nav = `
      <ul class="navbar flex flex-wrap bg-stone-900 justify-center p-2 rounded-xl gap-x-16 gap-y-4 p-4" id="nav">
        <li class="navitem">
          <a class="text-3xl" href="index.html"><b> Inicio </b></a>
        </li>
        <li class="navitem">
          <a class="text-3xl" href="biografia.html"><b> Biografia </b></a>
        </li>
        <li class="navitem">
          <a class="text-3xl" href="index.html"><b> Discografia </b></a>
        </li>
        <li class="navitem">
          <a class="text-3xl" href="index.html"><b> Hits globales </b></a>
        </li>
        <li class="navitem">
          <a class="text-3xl" href="index.html"><b> Movistar Arena </b></a>
        </li>
        <li class="navitem">
          <a class="text-3xl" href="index.html"><b> Premios </b></a>
        </li>
        <hr>
        <li>
          <button class="text-3xl text-[#D080EC] hover:text-white navitem font-bold" id="close">
            Cerrar
          </button>
        </li>
      </ul>
`

document.addEventListener('DOMContentLoaded', function() {
  const nav = $('#nav');
  nav.innerHTML = partial_nav;
  const activator = $('#nav-active');
  const close = $('#close')
  
  close.addEventListener('click', () => {
    nav.classList.toggle('active');
  });  

  activator.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});