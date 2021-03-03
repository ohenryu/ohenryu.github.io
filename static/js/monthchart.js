var ctx = document.getElementById('monthchart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D' ],
        datasets: [{
            label: '2018',
            borderColor: '#1b1c1c',
            backgroundColor: "#6ad406",
            data: [4,9,5,4,5,11,15,10,5,11,5,5],
        },{
            label: '2019',
            borderColor: '#1b1c1c',
            backgroundColor: "#00b9ff",
            data: [2,7,2,1,9,11,8,4,9,3,3,0],
        },{
            label: '2020',
            borderColor: '#1b1c1c',
            backgroundColor: "#7b4fff",
            data: [5,4,4,0,5,7,18,12,11,8,7,5],
        }]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: 'Call-outs per Month (2018-2020)',
            fontFamily: "'Source Sans Pro', sans-serif",
            fontSize: 18,
            fontStyle: 'normal',
            fontColor: 'rgba(158, 162, 163)',
            
        },
        legend: {
            position: 'bottom',
            labels: {
                fontColor: 'rgba(158, 162, 163)',
            }
        },
        tooltips: {
            enabled: true,
            titleFontSize: 12,
            titleFontStyle: 'bold',
            titleFontColor: 'rgba(158, 162, 163)',
            bodyFontColor: 'rgba(158, 162, 163)'
        },
        hover :{
            animationDuration:0
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontSize:13,
                    fontColor: 'rgba(158, 162, 163)'
                },
                scaleLabel:{
                    display:false
                },
                gridLines: {
                    display: false,
                }, 
                stacked: true
            }],
            yAxes: [{
                gridLines: {
                    display:false,
                },
                ticks: {
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontSize:13,
                    fontColor: 'rgba(158, 162, 163)'
                },
                stacked: true
            }]
        },
    },
});