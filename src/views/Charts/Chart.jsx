import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const lastNdays = 7;
const min = Math.ceil(18);
const max = Math.floor(100);

class Chart extends Component {
  generateChartData(chart) {
    let data = [];

    for (var i = 0; i < lastNdays; i++) {
      data.push({
        date: new Date(new Date().setDate(new Date().getDate() - i)),
        value: Math.floor(Math.random() * (max - min + 1)) + min
      });
    }

    chart.data = data;
    return chart;

    // return (chart.data = [
    //   {
    //     date: new Date(2019, 7, 20),
    //     value: 90
    //   },
    //   {
    //     date: new Date(2019, 7, 21),
    //     value: 102
    //   },
    //   {
    //     date: new Date(2019, 7, 22),
    //     value: 56
    //   },
    //   {
    //     date: new Date(2019, 7, 23),
    //     value: 62
    //   },
    //   {
    //     date: new Date(2019, 7, 24),
    //     value: 55
    //   },
    //   {
    //     date: new Date(2019, 7, 25),
    //     value: 81
    //   },
    //   {
    //     date: new Date(2019, 7, 26),
    //     value: 95
    //   }
    // ]);
  }

  componentDidMount() {
    let chart = am4core.create(this.props.chartDivId, am4charts.XYChart);

    chart.paddingRight = 20;

    // let data = [];
    // let visits = 10;
    // for (let i = 1; i < 366; i++) {
    //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    //   data.push({
    //     date: new Date(2018, 0, i),
    //     name: "name" + i,
    //     value: visits
    //   });
    // }

    // chart.data = data;

    // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.grid.template.location = 0;

    // let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.tooltip.disabled = true;
    // valueAxis.renderer.minWidth = 35;

    // let series = chart.series.push(new am4charts.LineSeries());
    // series.dataFields.dateX = "date";
    // series.dataFields.valueY = "value";

    // series.tooltipText = "{valueY.value}";
    // chart.cursor = new am4charts.XYCursor();

    // let scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // chart.scrollbarX = scrollbarX;

    // this.chart = chart;

    this.generateChartData(chart);

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.labels.template.disabled = true;
    dateAxis.renderer.grid.template.disabled = true;
    //dateAxis.renderer.grid.push(new am4charts.Grid()).disabled = true;

    // Create value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    //valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.fontSize = 11;

    // Create series
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.name = "PA Trend (Last 7 days)";
    lineSeries.strokeWidth = 0;
    // lineSeries.tooltip.label.interactionsEnabled = true;
    // lineSeries.tooltip.keepTargetHover = true;

    // Add simple bullet
    var circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    circleBullet.circle.radius = 5;
    circleBullet.circle.stroke = am4core.color("#fff");
    circleBullet.circle.strokeWidth = 1;
    circleBullet.tooltipText = "{date}\nValue: [bold]{value}[/]";

    var labelBullet = lineSeries.bullets.push(new am4charts.LabelBullet());
    //labelBullet.label.text = "{value}";
    //labelBullet.label.dy = -20;

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
        id={this.props.chartDivId}
        style={{ width: "250px", height: "120px" }}
      ></div>
    );
  }
}

export default Chart;
