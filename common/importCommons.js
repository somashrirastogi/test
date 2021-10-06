const whiteNav = []
$(document).ready(function () {
fetch('./common/header.html').then(value => {
  const n = value.body.getReader();
  n.read().then(x => {
    try {
      var str = String.fromCharCode.apply(null, x['value']);
      var header = document.createElement('div');
      header.innerHTML = str
      document.querySelector('header').appendChild(header.querySelector('#header-wrapper'));
    } catch(error){
      console.log(e);
    }
  })
}).catch(e => {
  console.log(e);
  failureToast("Cannot get Content")
})

fetch('./common/footer.html').then(value => {
  const n = value.body.getReader();
  n.read().then(x => {
    try {
      var str = String.fromCharCode.apply(null, x['value']);
      document.querySelector('footer').innerHTML=str;
    } catch(error){
      console.log(e);
    }
  })
}).catch(e => {
  console.log(e);
  failureToast("Cannot get Content")
})
})