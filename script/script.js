
$(document).ready(function () {
    setTimeout(function () {
      try{
        document.getElementById('copyright').innerHTML = `&#169; ${new Date().getFullYear()} Shogun Organics &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All rights reserved.`
        document.getElementById('copyright2').innerHTML = `&#169; ${new Date().getFullYear()} Shogun Organics<br>All rights reserved.`
      }
      catch(error){
        console.log(error)
      }
      }, 4000);
    AOS.init({
        duration: 600
      })
});
