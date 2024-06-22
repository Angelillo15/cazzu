const $ = (query) => {
  return document.querySelector(query);
};

const pages = [
  "index.html",
  "biografia.html",
  "discografia.html",
  "hits.html",
  "movistar-arena.html",
  "premios.html",
];

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
          <a class="text-3xl" href="hits.html"><b> Hits globales </b></a>
        </li>
        <li class="navitem">
          <a class="text-3xl" href="movistar-arena.html"><b> Movistar Arena </b></a>
        </li>
        <li class="navitem">
          <a class="text-3xl" href="premios.html"><b> Premios </b></a>
        </li>
        <hr>
        <li>
          <button class="text-3xl text-[#D080EC] hover:text-white navitem font-bold" id="close" data-toggle="#nav">
            Cerrar
          </button>
        </li>
      </ul>
`;

const getNextPageWithCurrent = () => {
  var currentPage = window.location.pathname;
  currentPage = currentPage.split("/").pop();
  return getNextPage(currentPage);
}

const getPreviousPageWithCurrent = () => {
  var currentPage = window.location.pathname;
  currentPage = currentPage.split("/").pop();

  return getPreviousPage(currentPage);
}

const getNextPage = (currentPage) => {
  const currentPageIndex = pages.indexOf(currentPage);
  const nextPageIndex = currentPageIndex + 1;

  if (nextPageIndex >= pages.length) {
    return pages[0];
  }

  return pages[nextPageIndex];
};

const getPreviousPage = (currentPage) => {
  const currentPageIndex = pages.indexOf(currentPage);
  const previousPageIndex = currentPageIndex - 1;

  if (previousPageIndex < 0) {
    return pages[pages.length - 1];
  }

  return pages[previousPageIndex];
}

const partial_footer = `
  <hr>
  <div class="text-4xl self-center my-4 text-[#D080EC]">
    <a href="${getPreviousPageWithCurrent()}">
      <i class="fa-solid fa-arrow-left"></i>
    </a>
    <a href="index.html">
      <i class="fa-solid fa-house"></i>
    </a>
    <a href="${getNextPageWithCurrent()}">
      <i class="fa-solid fa-arrow-right"></i>
    </a>
  </div>
`;

document.addEventListener("DOMContentLoaded", function () {
  const nav = $("#nav");
  nav.innerHTML = partial_nav;

  const footer = $("#footer");
  footer.innerHTML = partial_footer;

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
