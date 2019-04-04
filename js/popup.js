function popUP() {
    var txt;
    var person = prompt("Please enter your name", "Enter Name");
    if (person == null || person == "")
    {
      txt = "User cancelled the prompt.";
    }
    else {
      txt = "Hello " +  person +  "! How are you today?";
    }
    document.getElementById("prompter").innerHTML = txt;
}
