import { series } from './data.js';
function renderSeriesInTable(seriesList) {
    var tableBody = document.getElementById("seriesTable");
    tableBody.innerHTML = "";
    seriesList.forEach(function (serie) {
        var row = document.createElement("tr");
        row.innerHTML = "\n      <th scope=\"row\">".concat(serie.id, "</th>\n      <td>").concat(serie.name, "</td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        row.addEventListener("click", function () { return showSeriesDetail(serie); });
        tableBody.appendChild(row);
    });
    var totalSeasons = seriesList.reduce(function (sum, s) { return sum + s.seasons; }, 0);
    var average = (totalSeasons / seriesList.length).toFixed(0);
    document.getElementById("average").textContent = "Seasons average: ".concat(average);
}
function showSeriesDetail(serie) {
    var detailDiv = document.getElementById("seriesDetail");
    detailDiv.innerHTML = "\n    <div class=\"card\" style=\"width: 100%;\">\n      <img class=\"card-img-top\" src=\"".concat(serie.image, "\" alt=\"").concat(serie.name, "\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <p><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.link, "</a></p>\n      </div>\n    </div>\n  ");
}
renderSeriesInTable(series);
//# sourceMappingURL=main.js.map