(function () {
    const cw1 = document.getElementById('SearchCap');
    const answer = document.getElementById('CountryData');
    const cap = document.getElementById('cap').value;
    cw1.addEventListener("click",async function () {
        const cap = document.getElementById('cap').value;
      fetch(`https://restcountries.com/v3.1/capital/${cap}`)
        .then(response => response.json())
        .then(countrydata => {
        console.log(countrydata);
          const row = `<tr>
                <td>  ${countrydata[0].name.common} <td/>
                <td>  ${countrydata[0].capital[0]} <td/> 
                <td>  ${countrydata[0].population} <td/> 
                <td>  ${countrydata[0].region} <td/> 
                <td>  ${countrydata[0].subregion} <td/>  
            <tr/>`;
          answer.innerHTML = row;
          console.log("test");
        })
    })

  })();