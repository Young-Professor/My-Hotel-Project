var form = document.querySelector("#updaterooms")



form.addEventListener("submit", submitData);
function submitData(e){
  e.preventDefault();
  var Room_name = getInputVal("Room name")
  var RoomType= getInputVal("RoomType")
  var RoomAvailability = getInputVal("RoomAvailability")
  var RoomPrice = getInputVal("RoomPrice")
  var roomDescription = getInputVal("roomDescription")
  const userData={ROOM_NAME:Room_name,ROOM_TYPE:RoomType,ROOMS_AVAILABLE:RoomAvailability,ROOM_PRICE:RoomPrice,ROOM_DESC:roomDescription}

  fetch('http://localhost:3000/roomUpdate',{
    body:JSON.stringify(userData),
    method:'POST',
    headers:{
      "Content-type":"Application/json"
    }
  })

    form.reset();

}
function getInputVal(id){
  return document.getElementById(id).value
}