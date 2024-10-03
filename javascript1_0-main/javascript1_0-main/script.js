(function () {
  //TODO
  const ex1 = document.getElementById("ex1_button");
  ex1.addEventListener("click",(e)=>{
    document.getElementById("ex1_content").innerHTML = "0,1,2,3,4,5,6,7,8,9";
  })
  const ex2 = document.getElementById("ex2_text");
  let regex = /[a-zA-Z]/g;
  let regex2 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  ex2.addEventListener("input",(e)=>{
    if(e.target.value.length != 9){
      document.getElementById("ex2_content").innerHTML = "Długość numeru musi być równa 9";
    }
    else if (e.target.value.match(regex)) {
      document.getElementById("ex2_content").innerHTML = "Numer nie może zawierać liter";
    }
    else if (e.target.value.match(regex2)) {
      document.getElementById("ex2_content").innerHTML = "Numer nie może zawierać znaków specjalnych";
    }
    else{
      document.getElementById("ex2_content").innerHTML = "Numer telefonu jest poprawny";
    }
    
  })
})();