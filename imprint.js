addCopyright();

function addCopyright() {

    let copyrightElement = document.getElementsByClassName("md-copyright")[0];
    copyrightElement.innerHTML = "";

    let impressumLink = document.createElement("a");
    impressumLink.href = "https://forum.turniptales.net/impressum/";
    impressumLink.innerHTML = "Impressum";
    copyrightElement.appendChild(impressumLink);
}