

// function police()
// {     
// var bold=document.getElementById("text");

// if(bold.style.fontWeight == "bold")
// {
//     bold.style.fontWeight = "normal" ;
// }else
// {    bold.style.fontWeight = "bold" ;
// }
// }
// function line()
// {     
// var lin=document.getElementById("text");

// if(lin.style.textDecoration == "underline")
// {
//     lin.style.textDecoration = "none" ;
// }else
// {    lin.style.textDecoration = "underline" ;
// }
// }
// function itali()
// {     
// var ital=document.getElementById("text");

// if(ital.style.fontStyle == "italic")
// {
//     ital.style.fontStyle= "normal" ;
// }else
// {    ital.style.fontStyle = "italic" ;
// }
// }
// function sizes(selectTag) {
//     var listValue = selectTag.value
//     document.getElementById("text").style.fontSize = listValue;
//   }
//   function family(selectTag) {
//     var listValue = selectTag.options[selectTag.selectedIndex].value;
//     document.getElementById("text").style.fontFamily = listValue;
//   }
//   $("button").css("opacity","0");



//   $(document).ready(function(){
//     $(".photo button").mouseenter(function(){
//       $(this).css("opacity", "0.5");
//     });
//     $(".photo button").mouseleave(function(){
//       $(this).css("opacity", "0");
//     });
//   });
var firebaseConfig = {
  apiKey: "AIzaSyB3DiH2_lnD5DMdojkJHGQeoY7c3GzBoGc",
  authDomain: "gomycode-a745a.firebaseapp.com",
  databaseURL: "https://gomycode-a745a.firebaseio.com",
  projectId: "gomycode-a745a",
  storageBucket: "",
  messagingSenderId: "411278169214",
  appId: "1:411278169214:web:981ca7236c90b119f1f42f"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messageRef=firebase.database().ref('gomycode');
  function submitForm(){
    event.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var track=document.getElementById('track').value;
    var number=document.getElementById('number').value;
saveMessage(name,email,track,number);
  }
  function saveMessage(name,email,track,number){
  var newMessageRef = messageRef.push();
newMessageRef.set(
{
  name:name,
  email:email,
 track:track,
 number:number
});
  }



