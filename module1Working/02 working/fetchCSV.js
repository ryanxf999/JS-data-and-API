//using chart.js
//https://www.chartjs.org/docs/latest/



chartIT();

async function chartIT(){
    //using the await function it doesnt build the chart until the getData function is complete.
    const data = await getData();
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',//line, bar, 
        data: {
            labels: data.xs, 
            datasets: [{
                label: 'Global Avg Temperature',
                data: data.ys,
                pointRadius: 1,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }],
            options: {
                scales: {
                    y: {
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return value + '°';
                            }
                        }
                    }
                }
            }
        },
    
    });
}


 

//async function 
async function getData(){
    const xs = [];
    const ys = [];

    
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    //console.log(data);

    //takes the data and 'splits' it into rows by giving it a '\n' (new line)
    //the .slice starting at index 1 takes everything starting at index 1 of the testdata.csv file
    //ultimatly stripping the header row
    const table = data.split('\n').slice(1);
    
    //foreach loop is used to seperate each element in the array by a comma
    table.forEach(row => {
        const columns = row.split(',');
        //***i comment the next line out because i dont want to see it in the final pull */
        //console.log(row);
        
        //takes the arrays and only uses the first 2 columns to display the year and temp
        const year = columns[0];
        xs.push(year);
        const temp = columns[1];
        //parsFloat takes the string in the .txt file and converts it to an int
       
        //convert to fahrenheit
        const ftemp = ((parseFloat(temp)+14)+32)*1.8;
        
        ys.push(ftemp);
        //ytemps.push(parseFloat(temp)+14);
        console.log(year,temp);
    });
    return {xs,ys}

    //from here i changed the input file to the large dataset file in line 8 where its declared.

}
