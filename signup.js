function getInputVal(id){
  return document.getElementById(id).value
}
var form = document.querySelector("#forms")



form.addEventListener("submit", submitData);
function submitData(e){
  e.preventDefault();
  var fname = getInputVal("fname")
  var lname= getInputVal("lname")
  var email = getInputVal("email")
  var psd = getInputVal("psd")

  const userData={FNAME:fname,LNAME:lname,EMAIL:email,PSD:psd}

  fetch('http://localhost:3000/signup',{
    body:JSON.stringify(userData),
    method:'POST',
    headers:{
      "Content-type":"Application/json"
    }
  })
    form.reset();
    window.location.href='login.html'
}