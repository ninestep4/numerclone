import { i } from 'mathjs';
import React,{useState} from 'react';
import { Component} from "react";
import { Link } from 'react-router-dom';
import { InputGroup, InputGroupAddon, Input, Table, Card } from 'reactstrap';
import { evaluate, parse } from 'mathjs';
import reactDom from "react-dom";
import { render } from "@testing-library/react";
import './style.css'
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

class Falseposition extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      xl: [],
      xr: [],
      xm: [],
      error: [],
      fxr: [],
      fxl: [],
      fxm: [],
      a: "",
      data: "",
      value: "",
      movie: ""
    };

    this.FP = this.FP.bind(this);
    this.xl = this.xl.bind(this);
    this.xr = this.xr.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.plot = this.plot.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ data: value });
    console.log(this.state.data);
  }

  xl({ target: { value } }) {
    //thi.setState({x[0]:value})
    this.state.xl[0] = parseFloat(value);
  }
  xr({ target: { value } }) {
    this.state.xr[0] = parseFloat(value);
  }
  FP = e => {
    var value = this.state.data;
    var xl = parseFloat(this.state.xl);
    var xr = parseFloat(this.state.xr);
    console.log(xl, xr);
    console.log("this is value", value);
    var xm = 0,
      xm_old = 0,
      error = 0,
      fxl = 0,
      fxr = 0,
      fxm = 0;
    var j = 0,
      fx = "",
      cal;

    if (value != "" && xl != "" && xr != "") {
      do {
        let scp = {
          x: xl
        };
        console.log(value);
        cal = evaluate(value, scp);
        console.log("this is fxl:", cal);
        fx = "";
        fxl = 0;
        fxl = parseFloat(cal);
        this.state.fxl[j] = fxl;
        console.log(fxl);
        cal = 0;

        let scp1 = {
          x: xr
        };
        console.log(value);
        cal = evaluate(value, scp1);
        console.log(cal);
        fx = "";
        fxr = 0;
        fxr = parseFloat(cal);
        this.state.fxr[j] = fxr;
        cal = 0;

        xm = xr - ((fxr * (xl - xr)) / (fxl - fxr));

        let scp2 = {
          x: xm
        };
        console.log(value);
        cal = evaluate(value, scp2);
        console.log(cal);
        fx = "";
        fxm = 0;
        fxm = parseFloat(cal);
        this.state.fxm[j] = fxm;
        cal = 0;

        this.state.xm[j] = xm;
        error = Math.abs((xm - xm_old) / xm);
        this.state.error[j] = error;
        console.log("error = ", error);
        xm_old = xm;
        console.log("fxl = ", fxl, "fxm = ", fxm, "fxr = ", fxr);
        console.log(fxm * fxr);
        j++;

        if (error >= 0.00001) {
          if (fxl * fxr < 0) {
            this.state.xl[j] = xm;
            this.state.xr[j] = xr;
            xl = xm;
          } else if (fxl * fxr > 0) {
            this.state.xr[j] = xm;
            this.state.xl[j] = xl;
            xr = xm;
          }
        }

        console.log(
          "xl =",
          this.state.xl[j],
          "xm = ",
          this.state.xm[j - 1],
          "xr = ",
          this.state.xr[j]
        );
      }
      while (error >= 0.00001);
      this.setState({ data: "" });
    }
    this.plot();
    e.preventDefault();
  };
  FP_API = e => {
    var value = this.state.data;
    var xl = parseFloat(this.state.xl);
    var xr = parseFloat(this.state.xr);
    console.log(xl, xr);
    console.log("this is value", value);
    var xm = 0,
      xm_old = 0,
      error = 0,
      fxl = 0,
      fxr = 0,
      fxm = 0;
    var j = 0,
      fx = "",
      cal;

    if (value != "" && xl != "" && xr != "") {
      do {
        let scp = {
          x: xl
        };
        console.log(value);
        cal = evaluate(value, scp);
        console.log("this is fxl:", cal);
        fx = "";
        fxl = 0;
        fxl = parseFloat(cal);
        this.state.fxl[j] = fxl;
        console.log(fxl);
        cal = 0;

        let scp1 = {
          x: xr
        };
        console.log(value);
        cal = evaluate(value, scp1);
        console.log(cal);
        fx = "";
        fxr = 0;
        fxr = parseFloat(cal);
        this.state.fxr[j] = fxr;
        cal = 0;

        xm = xr - ((fxr * (xl - xr)) / (fxl - fxr));

        let scp2 = {
          x: xm
        };
        console.log(value);
        cal = evaluate(value, scp2);
        console.log(cal);
        fx = "";
        fxm = 0;
        fxm = parseFloat(cal);
        this.state.fxm[j] = fxm;
        cal = 0;

        this.state.xm[j] = xm;
        error = Math.abs((xm - xm_old) / xm);
        this.state.error[j] = error;
        console.log("error = ", error);
        xm_old = xm;
        console.log("fxl = ", fxl, "fxm = ", fxm, "fxr = ", fxr);
        console.log(fxm * fxr);
        j++;

        if (error >= 0.0000001) {
          if (fxl * fxr < 0) {
            this.state.xl[j] = xm;
            this.state.xr[j] = xr;
            xl = xm;
          } else if (fxl * fxr > 0) {
            this.state.xr[j] = xm;
            this.state.xl[j] = xl;
            xr = xm;
          }
        }

        console.log(
          "xl =",
          this.state.xl[j],
          "xm = ",
          this.state.xm[j - 1],
          "xr = ",
          this.state.xr[j]
        );
      }
      while (error >= 0.0000001);
      this.setState({ data: "" });
    }
    e.preventDefault();
  };
  plot() {
    const xl_plot = this.state.xl;
    const yl_plot = this.state.fxl;
    const xr_plot = this.state.xr;
    const yr_plot = this.state.fxr;

    var data = [
      {
        type: "scatter",
        x: xl_plot,
        y: yl_plot,
        marker: {
          color: "#FF3300"
        },
        name: "XL"
      },
      {
        type: "scatter",
        x: xr_plot,
        y: yr_plot,
        marker: {
          color: "#00FF00"
        },
        name: "XR"
      }
    ];

    return data;
  }
  render() {
    let data = this.plot();
    var i = 0;
    var xl = this.state.xl;
    var xr = this.state.xr;
    var xm = this.state.xm;
    var fxl = this.state.fxl;
    var fxr = this.state.fxr;
    var fxm = this.state.fxm;
    var error = this.state.error;
  return (
    //??????????????????????????? ??????????????????????????????????????????
    <div class="condiv"> 
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
          <form >
          <header className="header">
            <div className="container">
              <div className="header_area1">
                <h1>False-position Method</h1>
              </div>
            </div>
          </header>
            <div className="mb-3">
          <label for="exampleInputnumber" className="form-label">Please input you Equation</label>
          <input type="Equation" className="form-control" id="exampleInputnumber"onChange={this.handleChange} placeholder="Your Equation.."  
          />
          <label for="exampleInputnumber" className="form-label">Please input you XL</label>
          <input type="XL" className="form-control" id="exampleInputnumber"onChange={this.xl} placeholder="Your XL.."
          />
          <label for="exampleInputnumber" className="form-label">Please input you XR</label>
          <input type="XR" className="form-control" id="exampleInputnumber"onChange={this.xr} placeholder="Your XR.."
          />
            </div>
            <button type="submit" onClick={this.FP}className="btn btn-primary">Submit</button>
            
          </form>
        </div>
      </div>
      <h2 className="mt-4">Table</h2>
      <Table striped style={{ fontWeight: "bold", fontSize: "18px", color: "black" ,backgroundColor: '#9a9b9c' }}>
            <thead>
              <tr>
                <th>Iteration</th>&nbsp;&nbsp;
                <th>XL</th>&nbsp;&nbsp;
                <th>XR</th>&nbsp;&nbsp;
                <th>XM</th>&nbsp;&nbsp;
                <th>f(XL)</th>&nbsp;&nbsp;
                <th>f(XR)</th>&nbsp;&nbsp;
                <th>f(XM)</th>&nbsp;&nbsp;
                <th>Error</th>&nbsp;&nbsp;
              </tr>
            </thead>
            <tr>
              <td>
                {xr.map(x => (<div>{++i}</div>), this)}
              </td>&nbsp;&nbsp;
              <td>
                {xl.map(xl => (<div>{xl.toFixed(6)}</div>))}
              </td>&nbsp;&nbsp;
              <td>
                {xr.map(xr => (<div>{xr.toFixed(6)}</div>), this)}
              </td>&nbsp;&nbsp;
              <td>
                {xm.map(xm => (<div>{xm.toFixed(6)}</div>), this)}
              </td>&nbsp;&nbsp;
              <td>
                {fxl.map(fxl => (<div>{fxl.toFixed(6)}</div>), this)}
              </td>&nbsp;&nbsp;
              <td>
                {fxr.map(fxr => (<div>{fxr.toFixed(6)}</div>), this)}
              </td>&nbsp;&nbsp;
              <td>
                {fxm.map(fxm => (<div>{fxm.toFixed(6)}</div>), this)}
              </td>&nbsp;&nbsp;
              <td>
                {error.map(er => (<div>{er.toFixed(6)}</div>), this)}
              </td>&nbsp;&nbsp;
            </tr>
          </Table>
          <h2 className="mt-4">Chart</h2>
          <div
            style={{ width: "100%", height: "550px", float: "middle" }}
          >
            <PlotlyComponent className="whatever" data={data} />
          </div>
    </div>
  );
};
}
export default Falseposition;