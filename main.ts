import { series } from './data.js';

function renderSeriesInTable(seriesList: any[]): void {
  const tableBody = document.getElementById("seriesTable")!;
  tableBody.innerHTML = "";

  seriesList.forEach(serie => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <th scope="row">${serie.id}</th>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;

    
    row.addEventListener("click", () => showSeriesDetail(serie));
    tableBody.appendChild(row);
  });

  const totalSeasons = seriesList.reduce((sum, s) => sum + s.seasons, 0);
  const average = (totalSeasons / seriesList.length).toFixed(0);
  document.getElementById("average")!.textContent = `Seasons average: ${average}`;
}

function showSeriesDetail(serie: any): void {
  const detailDiv = document.getElementById("seriesDetail")!;
  detailDiv.innerHTML = `
    <div class="card" style="width: 100%;">
      <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <p><a href="${serie.link}" target="_blank">${serie.link}</a></p>
      </div>
    </div>
  `;
}



renderSeriesInTable(series);
