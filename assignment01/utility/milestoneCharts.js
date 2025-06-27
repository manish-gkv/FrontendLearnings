function drawMilestoneChart(data) {
    let options = {
        series: [
            {
                name: 'value',
                data: data
            }
        ],
        chart: {
            type: 'bar',
            height: 280,
            width: 400,
        },
        xaxis: {
            categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val.toFixed(0);
                },
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "20%",
                borderRadius: 5,
            },
        },
        colors: ["#00E396"],
        grid: {
            show: true,
        },
        dataLabels: {
            enabled: false,
        }
    }
    document.querySelector("#milestone_chart").innerHTML = '';
    let chart = new ApexCharts(document.querySelector("#milestone_chart"), options);
    chart.render();
}

export default function milestone(optionSelected) {
    const options = {
        "1": [6, 20, 70, 40, 15, 60],
        "2": [15, 25, 35, 45, 55, 65],
        "3": [20, 30, 40, 50, 60, 70],
        "4": [25, 35, 45, 55, 65, 75],

    }
    drawMilestoneChart(options[optionSelected]);
}