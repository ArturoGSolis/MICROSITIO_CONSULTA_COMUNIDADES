document.addEventListener("DOMContentLoaded", function () {
  // function pointClick() {
  //   alert("I am an alert box!");
  // }

  Highcharts.mapChart("mapa", {
    chart: {
      backgroundColor: "rgba(255,255,255,0)",
    },

    title: {
      text: "",
    },

    legend: {
      enabled: false,
    },

    credits: {
      enabled: false,
    },

    tooltip: {
      shared: true,
      useHTML: true,
      headerFormat:
        "<div class='tooltipHighcharts'><span><strong>ID: </strong>{point.y}<br><strong>Municipio: </strong>{point.key}</span><br><table><thead><tr><th>Comunidades</th></tr></thead><tbody>",
      pointFormat: "{point.comunidades}",
      footerFormat: "</tbody></table></div>",
      backgroundColor: "rgba(255,255,255,1)",
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    plotOptions: {
      series: {
        point: {
          events: {
            select: function () {
              const text =
                  "<div class='labelHighcharts'><strong>ID: </strong>" +
                  this.y +
                  "<br><strong>Municipio: </strong>" +
                  this.name +
                  "<br><br><table class='tableHighcharts'><thead><tr><th><strong>Comunidades</strong></th></tr></thead>" +
                  "<tbody>" +
                  this.comunidades +
                  "</tbody>" +
                  "</table></div>",
                chart = this.series.chart;
              if (!chart.selectedLabel) {
                chart.selectedLabel = chart.renderer
                  .label(text, 40, 0, null, true, null, true)
                  .add();
              } else {
                chart.selectedLabel.attr({
                  text: text,
                });
              }
            },
          },
        },
      },
    },

    series: [
      {
        type: "map",
        joinBy: "id",
        mapData: pathMapa,
        data: dataMapa,
        cursor: "pointer",
        color: "#ce788e",
        borderWidth: 1,
        borderColor: "#ffffff",
        allowPointSelect: true,

        states: {
          hover: {
            enabled: true,
            color: "#ac4f66",
            borderWidth: 2,
            borderColor: "#ffffff",
          },
          select: {
            color: "#ac4f66",
            borderWidth: 2,
            borderColor: "#ffffff",
          },
        },

        dataLabels: [
          {
            format: "{point.id}<br>",
            enabled: true,
            y: -5,
          },
          {
            enabled: true,
            format: "{point.name}",
            y: 11,
          },
        ],
      },
    ],
  });
});
