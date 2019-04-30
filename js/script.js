function init(){
  //add your javascrip between these two lines of code
  var b = document.getElementById('entrybutton');
  b.addEventListener('click', function () {
    var message = document.getElementById('entryinput').value;
    alert("Dominique Nicholas: " + message);
    console.log(message);
    document.getElementById('textoutput').innerHTML = message;
})
};
window.addEventListener('load', init);
