//javascript:

setTimeout(() => {
  let btn = document.getElementById('play-btn');
  btn.click();
  setTimeout(() => {
    location.reload();
  }, 200);
}, 500);