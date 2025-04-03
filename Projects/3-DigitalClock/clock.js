const time = document.querySelector('#clock');

setInterval(() => {
  let local_time = new Date().toLocaleTimeString();
  time.innerText = local_time;
}, 1000);
