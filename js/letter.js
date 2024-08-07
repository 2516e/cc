onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
  
      const titles = ("Une lettre à Hiba.").split('')
      const titleElement = document.getElementById('title');
      let index = 0;
  
      function appendTitle() {
        if (index < titles.length) {
          titleElement.innerHTML += titles[index];
          index++;
          setTimeout(appendTitle, 200); // 1000ms delay
        }
      }
  
      appendTitle();
  
      clearTimeout(c);
  
    }, 900);
};

setTimeout(() => {

  document.getElementById('loaded').style.opacity = '100%'
  document.getElementById('loaded').style.transition = 'all 12s'
},1500)