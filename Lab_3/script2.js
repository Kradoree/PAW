(function () {
    const apiKey = 'YficRLDXLYWdjUlpKSTKiSfLKzWNrPwk';
    const cw1 = document.getElementById('SearchCap');
    const answer = document.getElementById('StationData');
    const fetchStationData = async () => {
        const response = await fetch("https://www.ncei.noaa.gov/cdo-web/api/v2/stations",{
            headers: {"token" : apiKey}
        });
        const data = await response.json();
        console.log(data)
        data.results.forEach(station => {
            const row = `<tr>
                <td>${station.id}<td/>
                <td>${station.name}<td/>
                <td>${station.state}<td/>
                <td>${station.latitude}<td/>
                <td>${station.longitude}<td/>
            <tr/>`
            answer.innerHTML+=row;
        });
    }
    cw1.addEventListener("click",fetchStationData)

  })();