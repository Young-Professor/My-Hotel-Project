const proceedRooms = document.querySelector(".proceedRoom");

function BOOK1(){
    let RoomName1 = document.querySelector("#room1tag").textContent;
    let bei1 = document.querySelector("#pricetag1").textContent;
    document.querySelector("#RoomName").innerHTML = RoomName1;
    document.querySelector("#price").innerHTML = bei1;
    proceedRooms.showModal();
}

function BOOK2(){
    let RoomName2 = document.querySelector("#room2tag").textContent;
    let bei2 = document.querySelector("#pricetag2").textContent;
    document.querySelector("#RoomName").innerHTML =  RoomName2;
    document.querySelector("#price").innerHTML = bei2 ;
    proceedRooms.showModal();

}

function BOOK3(){
    let RoomName3 = document.querySelector("#room3tag").textContent;
    let bei3 = document.querySelector("#pricetag3").textContent;
    document.querySelector("#RoomName").innerHTML =  RoomName3;
    document.querySelector("#price").innerHTML = bei3 ;
    proceedRooms.showModal();

}

function BOOK4(){
    let RoomName4 = document.querySelector("#room4tag").textContent;
    let bei4 = document.querySelector("#pricetag4").textContent;
    document.querySelector("#RoomName").innerHTML =  RoomName4;
    document.querySelector("#price").innerHTML = bei4 ;
    proceedRooms.showModal();

}

function BOOK5(){
    let RoomName5 = document.querySelector("#room5tag").textContent;
    let bei5 = document.querySelector("#pricetag5").textContent;
    document.querySelector("#RoomName").innerHTML =  RoomName5;
    document.querySelector("#price").innerHTML = bei5 ;
    proceedRooms.showModal();

}

function BOOK6(){
    let RoomName6 = document.querySelector("#room6tag").textContent;
    let bei6 = document.querySelector("#pricetag6").textContent;
    document.querySelector("#RoomName").innerHTML =  RoomName6;
    document.querySelector("#price").innerHTML = bei6 ;
    proceedRooms.showModal();

}
function submit(){
    proceedRooms.close();
}