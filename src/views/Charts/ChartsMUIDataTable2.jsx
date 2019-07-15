import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Charts extends Component {
  componentDidMount() {
    // Create chart instance
    let chart = am4core.create(this.props.chartId, am4charts.XYChart);

    // Add data
    chart.data = [
      {
        date: new Date(2018, 3, 20),
        value: 90
      },
      {
        date: new Date(2018, 3, 21),
        value: 102
      },
      {
        date: new Date(2018, 3, 22),
        value: 65
      },
      {
        date: new Date(2018, 3, 23),
        value: 92
      },
      {
        date: new Date(2018, 3, 24),
        value: 95
      },
      {
        date: new Date(2018, 3, 25),
        value: 81
      }
    ];

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.name = "Sales";
    lineSeries.strokeWidth = 3;

    // Add simple bullet
    // let bullet = lineSeries.bullets.push(new am4charts.Bullet());
    // let image = bullet.createChild(am4core.Image);
    // image.href = "https://www.amcharts.com/lib/images/star.svg";
    // image.width = 30;
    // image.height = 30;
    // image.horizontalCenter = "middle";
    // image.verticalCenter = "middle";

    let circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    circleBullet.circle.stroke = am4core.color("#fff");
    circleBullet.circle.strokeWidth = 2;

    let labelBullet = lineSeries.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.text = "{value}";
    labelBullet.label.dy = -20;

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div
        id={this.props.chartId}
        style={{ width: "250px", height: "150px" }}
      />
    );
  }
}

export default Charts;
