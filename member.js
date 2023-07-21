function skillmember()  {
    var member = document.getElementById("member");
    var member = member.options[member.selectedIndex].value;
    if (member == "1") {
        document.getElementById("skillmember").style.display = "block";
    } else {
        document.getElementById("skillmember").style.display = "none";
    }
}  