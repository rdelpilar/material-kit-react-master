import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class DirectTrendChart extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.paddingRight = 20;

    chart.data = [
      {
        date: new Date(2019, 7, 20),
        value: 90,
        value2: 45
      },
      {
        date: new Date(2019, 7, 21),
        value: 102,
        value2: 90
      },
      {
        date: new Date(2019, 7, 22)
      },
      {
        date: new Date(2019, 7, 23),
        value: 125
      },
      {
        date: new Date(2019, 7, 24),
        value: 55,
        value2: 90
      },
      {
        date: new Date(2019, 7, 25),
        value: 81,
        value2: 60
      },
      {
        date: new Date(2019, 7, 26)
      },
      {
        date: new Date(2019, 7, 25),
        value: 63,
        value2: 87
      },
      {
        date: new Date(2019, 7, 25),
        value: 113,
        value2: 62
      }
    ];

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.renderer.grid.template.location = 0.5;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.5;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "value";
    series1.dataFields.dateX = "date";
    series1.strokeWidth = 3;
    series1.tensionX = 0.8;
    series1.bullets.push(new am4charts.CircleBullet());
    series1.connect = false;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "value2";
    series2.dataFields.dateX = "date";
    series2.strokeWidth = 3;
    series2.tensionX = 0.8;
    series2.bullets.push(new am4charts.CircleBullet());

    // Tooltip 1
    var circleBullet1 = series1.bullets.push(new am4charts.CircleBullet());
    circleBullet1.circle.radius = 5;
    circleBullet1.circle.stroke = am4core.color("#fff");
    circleBullet1.circle.strokeWidth = 1;
    circleBullet1.tooltipText = "{date}\nValue: [bold]{value}[/]";

    // Tooltip 2
    var circleBullet2 = series2.bullets.push(new am4charts.CircleBullet());
    circleBullet2.circle.radius = 5;
    circleBullet2.circle.stroke = am4core.color("#fff");
    circleBullet2.circle.strokeWidth = 1;
    circleBullet2.tooltipText = "{date}\nValue: [bold]{value}[/]";

    chart.responsive.enabled = true;
    chart.responsive.useDefault = false;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div
        id="chartdiv"
        style={{
          width: "100%",
          height: "300px",
          marginLeft: "50px",
          marginRight: "50px"
        }}
      ></div>
    );
  }
}

export default DirectTrendChart;
