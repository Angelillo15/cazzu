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
          <a class="text-3xl" href="discografia.html"><b> Discografia </b></a>
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
          <button class="text-3xl text-[#D080EC] hover:text-white navitem font-bold" id="close" data-toggle="#nav">
            Cerrar
          </button>
        </li>
      </ul>
`;

document.addEventListener("DOMContentLoaded", function () {
  const nav = $("#nav");
  nav.innerHTML = partial_nav;
  const activators = document.querySelectorAll("#nav-active");
  const closers = document.querySelectorAll("#close");

  closers.forEach((el) => {
    el.addEventListener("click", () => {
      const elementQuery = el.dataset.toggle;
      const element = $(elementQuery);
      element.classList.toggle("active")
    })
  });

  activators.forEach((el) => {
    el.addEventListener("click", () => {
      const elementQuery = el.dataset.toggle;
      const element = $(elementQuery);
      element.classList.toggle("active")
    })
  });
});
