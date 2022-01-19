const textbox_country = document.getElementById('textbox_country');
const country_name = document.getElementById('country_name');
const active_cases = document.getElementById('active_cases');
const critical_cases = document.getElementById('critical_cases');
const total_cases = document.getElementById('total_cases');
const tests_done = document.getElementById('tests_done');
const total_deaths = document.getElementById('total_deaths');



const fetchData = async () => {
    var x;

    try {

        x = textbox_country.value;


        if (x == '') {
            alert('Please Provide Country Name');
        }
        else {
            const data = await fetch(`https://disease.sh/v3/covid-19/countries/${x}`);
            const res = await data.json();
            country_name.innerText = res.country;
            active_cases.innerText = res.active;
            critical_cases.innerText = res.critical;
            total_cases.innerText = res.cases;
            total_deaths.innerText = res.deaths;
            tests_done.innerText = res.tests; 

            textbox_country.value = '';

        }




    }
    catch (err) {
        console.log(err);
    }
}


const firstLoad = async () => {
    try {

        const data = await fetch(`https://disease.sh/v3/covid-19/countries/india`);
        const res = await data.json();
        country_name.innerText = res.country;
        active_cases.innerText = res.active;
        critical_cases.innerText = res.critical;
        total_cases.innerText = res.cases;
        total_deaths.innerText = res.deaths;
        tests_done.innerText = res.tests;



    } catch (err) {
        console.log(err);
    }

}
firstLoad();




