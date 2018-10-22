
document.getElementById("summary-color").addEventListener("click", changeSummary);

function changeSummary() {
    let element = document.getElementById("summary-wrapper-switch");
    element.classList.contains("summary-wrapper-switch") ?
        element.classList.remove('summary-wrapper-switch') :
        element.classList.add('summary-wrapper-switch');
}

function filterFunction() {
    let input, filter, spanDiv, increment;
    input = document.getElementById("search-branch-tag");
    filter = input.value.toUpperCase();
    div = document.getElementById("dropdown-content");
    spanDiv = div.getElementsByTagName("span");
    for (increment = 0; increment < spanDiv.length; increment++) {
        if (spanDiv[increment].innerHTML.toUpperCase().indexOf(filter) > -1) {            
            spanDiv[increment].style.display = "block";
        } else {
            spanDiv[increment].style.display = "none";
        }
    }
}