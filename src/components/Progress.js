import React,{useState} from 'react';
import '../css/Progress.css';

export default function Progress(props) {

    const [style,setStyle]= useState({});

    setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${props.done}%`
		}
		
		setStyle(newStyle);
	},50);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{/* {props.done}% */}
			</div>
		</div>
	)
}
