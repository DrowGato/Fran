
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('"Hay muchos momentos hermosos en la vida pero sin duda el mejor de ellos, fue cuando te conoci🖤"').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
