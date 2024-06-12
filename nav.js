document.addEventListener('DOMContentLoaded', function() {
  var activator = document.querySelector('#nav-active');
  var nav = document.querySelector('#nav');
  var close = document.querySelector('#close');

  activator.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  close.addEventListener('click', () => {
     nav.classList.toggle('active');
  });
});

const $ = (query) => {
  return document.querySelector(query);
};

console.log($('#nav'));