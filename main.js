
document.getElementById("summary-color").addEventListener("click", changeSummary);

function changeSummary() {
    let element = document.getElementById("summary-wrapper-switch");
    element.classList.contains("summary-wrapper-switch") ?
        element.classList.remove('summary-wrapper-switch') :
        element.classList.add('summary-wrapper-switch');
}
