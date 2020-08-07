import React, { Component } from 'react';
import '../css/About.css';
import Panel from './Panel.js';
import Sections from './Sections.js';

class About extends Component
{
    constructor()
    {
        super();
        this.state={
            value:"intro"

        }
        this.handleTrigger1=this.handleTrigger1.bind(this);
        this.handleTrigger2=this.handleTrigger2.bind(this);
        this.handleTrigger3=this.handleTrigger3.bind(this);
    }

    handleTrigger1()
    {
            this.setState(
                {
                    value:"tech"
                }
            )
    }



    handleTrigger2()
    {
            this.setState(
                {
                    value:"cp"
                }
            )
    }

    handleTrigger3()
    {
            this.setState(
                {
                    value:"crtf"
                }
            )
    }

    render()
    {

        return(

            <div className="About" id="about">
               <Panel  func1={this.handleTrigger1} func2={this.handleTrigger2} func3={this.handleTrigger3} />
               <Sections prop={this.state.value}/>
            </div>
    
    
        );
    }
   
}

export default About;