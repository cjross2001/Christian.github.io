var textarea = document.getElementById("textarea");
function Big() {
    textarea.style.fontSize="24pt";
}
document.getElementsByName("fancify")[0].addEventListener("change",function() {
    textarea.style.fontWeight = "bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline"
    alert("styles change");
})
document.getElementsByName("fancify")[1].addEventListener("change",function() {
    textarea.style.fontWeight="normal";
    textarea.style.color="black";
    textarea.style.textDecoration="none"
    alert("styles removed");
})
function Moo() {
    textarea.style.textTransform="uppercase"
    var str = textarea.value.split(".");
    var part = str.join("-Moo");
    textarea.value = part;
}