
function ShowMenu(){
  let navState=document.getElementById("navlinks");
  navState.style.right="0"
}
function HideMenu(){
  let navState=document.getElementById("navlinks");
  navState.style.right="-300px"
  navState.classList.toggle("hide")
}
var state= true;
function MoreServices(){
  let drop=document.getElementById("dropdown-menu");
  if (state){
    drop.style.display= "block";
  }
  else{
    drop.style.display= "none";
  }
  state = !state;
}

              
              function sendSnack1(){
               let No_of_Items = document.getElementById("Clips").value;
                No_of_Items = Number(No_of_Items);
                let Total_Amount = No_of_Items * 300;
                htmlString=  "<h4>Clips.......*" + No_of_Items + "@300=ksh. " + Total_Amount +"</h4>";
                // localStorage.setItem("C", htmlString);
                // document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += localStorage.getItem("C");
                // return false;
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
                total1+=Total_Amount;
                document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
                document.getElementById("AddItem10").innerHTML="Added to the cart";
              }
              function sendSnack2(){
                let No_of_Items = document.getElementById("Cookie").value;
                No_of_Items = Number(No_of_Items);
                let Total_Amount = No_of_Items * 200;
                htmlString=  "<h4>Cookie.....*" + No_of_Items + "@200=ksh. " + Total_Amount +"</h4>";
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
                total1+=Total_Amount;
                document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
                document.getElementById("AddItem11").innerHTML="Added to the cart";
              }
              function sendSnack3(){
                let No_of_Items = document.getElementById("Ice cream").value;
                No_of_Items = Number(No_of_Items);
                let Total_Amount = No_of_Items * 100;
                htmlString=  "<h4>IceCream.*" + No_of_Items + "@100=ksh." + Total_Amount +"</h4>";
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
                total1+=Total_Amount;
                document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
                document.getElementById("AddItem12").innerHTML="Added to the cart";
              }
              function sendSnack4(){
                let No_of_Items = document.getElementById("Chips").value;
                No_of_Items = Number(No_of_Items);
                let Total_Amount = No_of_Items * 600;
                htmlString=  "<h4>Chips.......*" + No_of_Items + "    @600=ksh. " + Total_Amount +"</h4>";
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
                total1+=Total_Amount;
                document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
                document.getElementById("AddItem13").innerHTML="Added to the cart";
              }
              function sendSnack5(){
                let No_of_Items = document.getElementById("Toast").value;
                No_of_Items = Number(No_of_Items);
                let Total_Amount = No_of_Items * 400;
                htmlString=  "<h4>Toast......*" + No_of_Items + "@400=ksh. " + Total_Amount +"</h4>";
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
                total1+=Total_Amount;
                document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
                document.getElementById("AddItem14").innerHTML="Added to the cart";
              }
              function sendSnack6(){
                let No_of_Items = document.getElementById("HamburgerID").value;
                No_of_Items = Number(No_of_Items);
                let Total_Amount = No_of_Items * 600;
                htmlString=  "<h4>Hamburger......*" + No_of_Items + "@600=ksh. " + Total_Amount +"</h4>";
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
                total1+=Total_Amount;
                document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
                document.getElementById("AddItem15").innerHTML="Added to the cart";
              }
              function sendSnack7(){
                let No_of_Items = document.getElementById("PitsaID").value;
                No_of_Items = Number(No_of_Items);
                let Total_Amount = No_of_Items * 1500;
                htmlString=  "<h4>Pizza......*" + No_of_Items + "@1500=ksh. " + Total_Amount +"</h4>";
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
                total1+=Total_Amount;
                document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
                document.getElementById("AddItem16").innerHTML="Added to the cart";
              }
          // ....................................................................................................................
          let total1=0;
               function SendFood1(){
                let No_of_Items = document.getElementById("Fish").value;
                No_of_Items = Number(No_of_Items);
                let Total_Amount = No_of_Items * 1500;
                htmlString=  "<h4>Fish......*" + No_of_Items + "@1500=ksh. " + Total_Amount +"</h4>";
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
                total1+=Total_Amount;
                document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
                document.getElementById("AddItem1").innerHTML="Added to the cart";
              }
              function SendFood2(){
                let No_of_Items = document.getElementById("pilau").value;
                No_of_Items = Number(No_of_Items);
                let Total_Amount = No_of_Items * 1200;
                htmlString=  "<h4>Pilau.....*" + No_of_Items + "@1200=ksh. " + Total_Amount +"</h4>";
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
                total1+=Total_Amount;
                document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
                document.getElementById("AddItem2").innerHTML="Added to the cart";
              }
              function SendFood3(){
                let No_of_Items = document.getElementById("indomie").value;
                No_of_Items = Number(No_of_Items);
                let Total_Amount = No_of_Items * 1000;
                htmlString=  "<h4>Indomie...*" + No_of_Items + "@1000=ksh." + Total_Amount +"</h4>";
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
                total1+=Total_Amount;
                document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
                document.getElementById("AddItem3").innerHTML="Added to the cart";
              }
              function SendFood4(){
                let No_of_Items = document.getElementById("Ugali S.").value;
                No_of_Items = Number(No_of_Items);
                let Total_Amount = No_of_Items * 2000;
                htmlString=  "<h4>Ugali S... *" + No_of_Items + "    @2000=ksh. " + Total_Amount +"</h4>";
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
                total1+=Total_Amount;
                document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
                document.getElementById("AddItem4").innerHTML="Added to the cart";
              }
              function SendFood5(){
                let No_of_Items = document.getElementById("Beef").value;
                No_of_Items = Number(No_of_Items);
                let Total_Amount = No_of_Items * 3000;
                htmlString=  "<h4>Beef......*" + No_of_Items + "@3000=ksh. " + Total_Amount +"</h4>";
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
                total1+=Total_Amount;
                document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
                document.getElementById("AddItem5").innerHTML="Added to the cart";
              }
              function SendFood6(){
                let No_of_Items = document.getElementById("Beef").value;
                No_of_Items = Number(No_of_Items);
                let Total_Amount = No_of_Items * 3000;
                htmlString=  "<h4>Beef......*" + No_of_Items + "@3000=ksh. " + Total_Amount +"</h4>";
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
                total1+=Total_Amount;
                document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
                document.getElementById("AddItem6").innerHTML="Added to the cart";
              }
              function SendFood7(){
                let No_of_Items = document.getElementById("Beef").value;
                No_of_Items = Number(No_of_Items);
                let Total_Amount = No_of_Items * 3000;
                htmlString=  "<h4>Beef......*" + No_of_Items + "@3000=ksh. " + Total_Amount +"</h4>";
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
                total1+=Total_Amount;
                document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
                document.getElementById("AddItem7").innerHTML="Added to the cart";
              }
            // ........................................Drinks Functions........................................................................

            function SendDrink1(){
              let No_of_Items = document.getElementById("CoffeeID").value;
              No_of_Items = Number(No_of_Items);
              let Total_Amount = No_of_Items * 250;
              htmlString=  "<h4>Coffee......*" + No_of_Items + "@250=ksh. " + Total_Amount +"</h4>";
              document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
              total1+=Total_Amount;
              document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
              document.getElementById("AddItem20").innerHTML="Added to the cart";
            }
            function SendDrink2(){
              let No_of_Items = document.getElementById("StrawBerryID").value;
              No_of_Items = Number(No_of_Items);
              let Total_Amount = No_of_Items * 350;
              htmlString=  "<h4>StrawBerry Juice.....*" + No_of_Items + "@350=ksh. " + Total_Amount +"</h4>";
              document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
              total1+=Total_Amount;
              document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
              document.getElementById("AddItem21").innerHTML="Added to the cart";
            }
            function SendDrink3(){
              let No_of_Items = document.getElementById("CocktailID").value;
              No_of_Items = Number(No_of_Items);
              let Total_Amount = No_of_Items * 400;
              htmlString=  "<h4>Cocktail...*" + No_of_Items + "@400=ksh." + Total_Amount +"</h4>";
              document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
              total1+=Total_Amount;
              document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
              document.getElementById("AddItem22").innerHTML="Added to the cart";
            }
            function SendDrink4(){
              let No_of_Items = document.getElementById("JuiceID").value;
              No_of_Items = Number(No_of_Items);
              let Total_Amount = No_of_Items * 200;
              htmlString=  "<h4>Juice........ *" + No_of_Items + "    @200=ksh. " + Total_Amount +"</h4>";
              document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
              total1+=Total_Amount;
              document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
              document.getElementById("AddItem23").innerHTML="Added to the cart";
            }
            function SendDrink5(){
              let No_of_Items = document.getElementById("PineappleID").value;
              No_of_Items = Number(No_of_Items);
              let Total_Amount = No_of_Items * 250;
              htmlString=  "<h4>Pineapple Juice......*" + No_of_Items + "@250=ksh. " + Total_Amount +"</h4>";
              document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
              total1+=Total_Amount;
              document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
              document.getElementById("AddItem24").innerHTML="Added to the cart";
            }
            function Book6(){
              alert
            }

            function SendDrink6(){
              let No_of_Items = document.getElementById("SodaID").value;
              No_of_Items = Number(No_of_Items);
              let Total_Amount = No_of_Items * 100;
              htmlString=  "<h4>Soda......*" + No_of_Items + "@100=ksh. " + Total_Amount +"</h4>";
              document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
              total1+=Total_Amount;
              document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
              document.getElementById("AddItem25").innerHTML="Added to the cart";
            }
            function SendDrink7(){
              let No_of_Items = document.getElementById("EnergyID").value;
              No_of_Items = Number(No_of_Items);
              let Total_Amount = No_of_Items * 300;
              htmlString=  "<h4>Energy Drink......*" + No_of_Items + "@300=ksh. " + Total_Amount +"</h4>";
              document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML += htmlString;
              total1+=Total_Amount;
              document.getElementById("totology").innerHTML="Total......................=Ksh."+total1;
              document.getElementById("AddItem26").innerHTML="Added to the cart";
              
            }
             // ........................................End of Drinks Functions........................................................................

             
            // .........................................Erase and submit buttons........................................
            function Erase(){
              if(total1==0){
                let results=window.confirm("No items added!");
    
              }
              else{
              if(window.confirm("Are you sure you want to delete?")){
                document.getElementById("order_table").getElementsByTagName("section")[0].innerHTML = " ";
                document.getElementById("totology").innerHTML=" ";
                total1=0;
              }
              else{
                window.alert("No item deleted");
              }
            }
          }

            function Submit(){
              if(total1==0){
              window.alert("No items added!");
              }
              else{
                if(window.confirm("Are you sure you want to Submit?")){
                   Window.alert("Submitted")
                 }
                 else{
                  window.alert("Not submitted");
                 } 
              }
            }

            
            // .........................................End of Erase and submit buttons........................................

            function cartNumber(){

            }