  function openNav() {    
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("closebtn").style.display = "none";
    document.addEventListener('keydown', (event) => {
      if (event.key ==='Escape'){
        const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
        if(isNotCombinedKey){
          closeNav();
        }
      }
    })
    }
  
  function closeNav() {    
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("closebtn").style.display = "block";
  }  