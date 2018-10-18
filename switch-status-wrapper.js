window.onload = function () {
    let languages = [{ 'name': 'CSS', 'color': '#563d7c', 'percentage': '39.4' },
    { 'name': 'JavaScript', 'color': '#f1e05a', 'percentage': '35.9' },
    { 'name': 'HTML', 'color': '#e34c26', 'percentage': '24.2' },
    { 'name': 'Ruby', 'color': '#701516', 'percentage': '0' },
    { 'name': 'Java', 'color': 'pink', 'percentage': '0' },
    { 'name': 'Shell', 'color': '#89e051', 'percentage': '0' },
    { 'name': 'Other', 'color': '#ffffff', 'percentage': '0.5' }
    ];
    let div = document.getElementById("summary-language");
    let colorDiv = document.getElementById("summary-color");
    div.innerHTML = "";
    colorDiv.innerHTML = "";

    languages.forEach(element => {
        if (element.percentage != '0') {
            div.innerHTML += `<div class="col d-flex justify-content-center align-items-center"><div class="rounded-circle p-1 m-1 " style='background-color:${element.color};'></div><a href="/search?l=${element.name}">${element.name}</a><span class="p-1 font-weight-bold text-secondary">${element.percentage}%</span></div>`;
            colorDiv.innerHTML += `<div style = 'width:${element.percentage}%; height:100%; background-color:${element.color}'></div>`;
        }
    });
}
