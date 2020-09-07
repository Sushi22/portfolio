import React, { Component } from 'react';
import {Bar} from "react-chartjs-2";

export default class Data extends Component {
    constructor(props) {
        super(props)

        this.state = {
                hr_data:{
                    ps:0,
                    js:0,
                    py:0
                }
        }

    }

    componentDidMount() {
        fetch("https://django-hrapi.herokuapp.com/api/").then(res=>res.json()).then(
            (result)=>{
                this.setState(
                    {
                        hr_data:{
                            ps:Number(result['Problem Solving'].toString().split(" ")[0].split("%")[0]),
                            js:Number(result['10 Days of JS'].toString().split(" ")[0].split("%")[0]),
                            py:Number(result['Python'].toString().split(" ")[0].split("%")[0])
                        }
                    }
                )
            // console.log(Number(result['Problem Solving'].toString().split(" ")[0].split("%")[0]));
            console.log(this.state.hr_data);
            }
        )
        
    }

    render() {
        const data = {
            labels: ["Problem Solving", "JavaScript", "Python",],
            datasets: [
              {
                label: "Recent Activity",
                data: [this.state.hr_data.ps,this.state.hr_data.js,this.state.hr_data.py],
                fill: true,
                backgroundColor: 'rgba(24,90,157,0.6)',
                borderColor: "rgba(75,192,192,1)"
              }
            ]
          };
        return (
            <>
               <Bar
                data={data}
                width={400}
                height={250}
                />
            </>
        )
    }
}
