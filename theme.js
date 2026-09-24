// Light is the default; dark is used only if the visitor picked it before.
(function () {
  var root = document.documentElement;

  try {
    if (localStorage.getItem('theme') === 'dark') root.dataset.theme = 'dark';
  } catch (e) {}

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.theme-toggle');
    if (!button) return;

    button.addEventListener('click', function () {
      var theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = theme;
      try {
        localStorage.setItem('theme', theme);
      } catch (e) {}
    });
  });
})();
