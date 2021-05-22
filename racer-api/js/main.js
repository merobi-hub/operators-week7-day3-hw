


// Form submission
let form = document.querySelector('#testDataForm')
console.log(form)


// add event listener for form data
form.addEventListener('submit', (event) => {

    event.preventDefault();
    let query_season = document.querySelector('#season').value
    let query_round = document.querySelector('#round').value

    console.log(query_season, query_round)

    api_data(query_season,query_round);
});

// Get data from API
const api_data = async (season,round) => {
    
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    console.log(response.data)
    return load_data(response.data)
}

// create Constant to hold dom elements
const DOM_ELEMENTS = {
    racer_table : '.racer-list'
};

// create Racer list
const create_list = (racer1,racer2,racer3,racer4,racer5,racer6,racer7) => {

    // clear table if exists
    document.querySelector(DOM_ELEMENTS.racer_table).innerHTML = '';

    // populate table with data
    var row7 = document.querySelector(DOM_ELEMENTS.racer_table).insertRow(0);
    var cellG0 = row7.insertCell(0);
    var cellG1 = row7.insertCell(1);
    var cellG2 = row7.insertCell(2);
    var cellG3 = row7.insertCell(3);
    var cellG4 = row7.insertCell(4);
    cellG0.innerHTML = `${racer7["position"]}`;
    cellG1.innerHTML = `${racer7["name"]}`;
    cellG2.innerHTML = `${racer7["nationality"]}`;
    cellG3.innerHTML = `${racer7["sponsor"]}`;
    cellG4.innerHTML = `${racer7["points"]}`;

    var row6 = document.querySelector(DOM_ELEMENTS.racer_table).insertRow(0);
    var cellF0 = row6.insertCell(0);
    var cellF1 = row6.insertCell(1);
    var cellF2 = row6.insertCell(2);
    var cellF3 = row6.insertCell(3);
    var cellF4 = row6.insertCell(4);
    cellF0.innerHTML = `${racer6["position"]}`;
    cellF1.innerHTML = `${racer6["name"]}`;
    cellF2.innerHTML = `${racer6["nationality"]}`;
    cellF3.innerHTML = `${racer6["sponsor"]}`;
    cellF4.innerHTML = `${racer6["points"]}`;

    var row5 = document.querySelector(DOM_ELEMENTS.racer_table).insertRow(0);
    var cellE0 = row5.insertCell(0);
    var cellE1 = row5.insertCell(1);
    var cellE2 = row5.insertCell(2);
    var cellE3 = row5.insertCell(3);
    var cellE4 = row5.insertCell(4);
    cellE0.innerHTML = `${racer5["position"]}`;
    cellE1.innerHTML = `${racer5["name"]}`;
    cellE2.innerHTML = `${racer5["nationality"]}`;
    cellE3.innerHTML = `${racer5["sponsor"]}`;
    cellE4.innerHTML = `${racer5["points"]}`;

    var row4 = document.querySelector(DOM_ELEMENTS.racer_table).insertRow(0);
    var cellD0 = row4.insertCell(0);
    var cellD1 = row4.insertCell(1);
    var cellD2 = row4.insertCell(2);
    var cellD3 = row4.insertCell(3);
    var cellD4 = row4.insertCell(4);
    cellD0.innerHTML = `${racer4["position"]}`;
    cellD1.innerHTML = `${racer4["name"]}`;
    cellD2.innerHTML = `${racer4["nationality"]}`;
    cellD3.innerHTML = `${racer4["sponsor"]}`;
    cellD4.innerHTML = `${racer4["points"]}`;

    var row3 = document.querySelector(DOM_ELEMENTS.racer_table).insertRow(0);
    var cellC0 = row3.insertCell(0);
    var cellC1 = row3.insertCell(1);
    var cellC2 = row3.insertCell(2);
    var cellC3 = row3.insertCell(3);
    var cellC4 = row3.insertCell(4);
    cellC0.innerHTML = `${racer3["position"]}`;
    cellC1.innerHTML = `${racer3["name"]}`;
    cellC2.innerHTML = `${racer3["nationality"]}`;
    cellC3.innerHTML = `${racer3["sponsor"]}`;
    cellC4.innerHTML = `${racer3["points"]}`;

    var row2 = document.querySelector(DOM_ELEMENTS.racer_table).insertRow(0);
    var cellB0 = row2.insertCell(0);
    var cellB1 = row2.insertCell(1);
    var cellB2 = row2.insertCell(2);
    var cellB3 = row2.insertCell(3);
    var cellB4 = row2.insertCell(4);
    cellB0.innerHTML = `${racer2["position"]}`;
    cellB1.innerHTML = `${racer2["name"]}`;
    cellB2.innerHTML = `${racer2["nationality"]}`;
    cellB3.innerHTML = `${racer2["sponsor"]}`;
    cellB4.innerHTML = `${racer2["points"]}`;

    var row1 = document.querySelector(DOM_ELEMENTS.racer_table).insertRow(0);
    var cellA0 = row1.insertCell(0);
    var cellA1 = row1.insertCell(1);
    var cellA2 = row1.insertCell(2);
    var cellA3 = row1.insertCell(3);
    var cellA4 = row1.insertCell(4);
    cellA0.innerHTML = `${racer1["position"]}`;
    cellA1.innerHTML = `${racer1["name"]}`;
    cellA2.innerHTML = `${racer1["nationality"]}`;
    cellA3.innerHTML = `${racer1["sponsor"]}`;
    cellA4.innerHTML = `${racer1["points"]}`;

    var row0 = document.querySelector(DOM_ELEMENTS.racer_table).insertRow(0);
    var cell0 = row0.insertCell(0);
    var cell1 = row0.insertCell(1);
    var cell2 = row0.insertCell(2);
    var cell3 = row0.insertCell(3);
    var cell4 = row0.insertCell(4);
    cell0.innerHTML = "Position";
    cell1.innerHTML = "Driver";
    cell2.innerHTML = "Nationality";
    cell3.innerHTML = "Constructor";
    cell4.innerHTML = "Points";
}

// create arrays of data from API
const load_data = async (racers_data) => {

    var racer1Thread = racers_data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]
    var racer2Thread = racers_data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1]
    var racer3Thread = racers_data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2]
    var racer4Thread = racers_data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3]
    var racer5Thread = racers_data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4]
    var racer6Thread = racers_data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5]
    var racer7Thread = racers_data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6]

    var racer1 = {
        "position":`${racer1Thread.position}`,
        "name":`${racer1Thread.Driver.givenName}` + ' ' + `${racer1Thread.Driver.familyName}`,
        "nationality":`${racer1Thread.Driver.nationality}`,
        "sponsor":`${racer1Thread.Constructors[0].name}`,
        "points":`${racer1Thread.points}`
    }

    var racer2 = {
        "position":`${racer2Thread.position}`,
        "name":`${racer2Thread.Driver.givenName}` + ' ' + `${racer2Thread.Driver.familyName}`,
        "nationality":`${racer2Thread.Driver.nationality}`,
        "sponsor":`${racer2Thread.Constructors[0].name}`,
        "points":`${racer2Thread.points}`
    }

    var racer3 = {
        "position":`${racer3Thread.position}`,
        "name":`${racer3Thread.Driver.givenName}` + ' ' + `${racer3Thread.Driver.familyName}`,
        "nationality":`${racer3Thread.Driver.nationality}`,
        "sponsor":`${racer3Thread.Constructors[0].name}`,
        "points":`${racer3Thread.points}`
    }

    var racer4 = {
        "position":`${racer4Thread.position}`,
        "name":`${racer4Thread.Driver.givenName}` + ' ' + `${racer4Thread.Driver.familyName}`,
        "nationality":`${racer4Thread.Driver.nationality}`,
        "sponsor":`${racer4Thread.Constructors[0].name}`,
        "points":`${racer4Thread.points}`
    }

    var racer5 = {
        "position":`${racer5Thread.position}`,
        "name":`${racer5Thread.Driver.givenName}` + ' ' + `${racer5Thread.Driver.familyName}`,
        "nationality":`${racer5Thread.Driver.nationality}`,
        "sponsor":`${racer5Thread.Constructors[0].name}`,
        "points":`${racer5Thread.points}`
    }

    var racer6 = {
        "position":`${racer6Thread.position}`,
        "name":`${racer6Thread.Driver.givenName}` + ' ' + `${racer6Thread.Driver.familyName}`,
        "nationality":`${racer6Thread.Driver.nationality}`,
        "sponsor":`${racer6Thread.Constructors[0].name}`,
        "points":`${racer6Thread.points}`
    }

    var racer7 = {
        "position":`${racer7Thread.position}`,
        "name":`${racer7Thread.Driver.givenName}` + ' ' + `${racer7Thread.Driver.familyName}`,
        "nationality":`${racer7Thread.Driver.nationality}`,
        "sponsor":`${racer7Thread.Constructors[0].name}`,
        "points":`${racer7Thread.points}`
    }

    // console.log(racer1)
    // console.log(racer2)
    // console.log(racer3)
    // console.log(racer4)
    // console.log(racer5)
    // console.log(racer6)
    // console.log(racer7)

    return create_list(racer1,racer2,racer3,racer4,racer5,racer6,racer7) 
}

