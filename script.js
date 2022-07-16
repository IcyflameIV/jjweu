function ClearScreen()
{
    var len=document.getElementById("txt").value
    document.getElementById("txt").value= len.substring(0, len.length-1);
}
function display(value)
{
    
    document.getElementById("txt").value+=value
}
