import React from 'react';
import Search from './Search';
import Card from './Card';
import './Dashboard.css';



const Dashboard = () => {
	return(
		<div className='center'>
			<h2 className=''>Task Tracking Dashboard</h2>
			<Search />
			<Card />
		</div>
	)
}


export default Dashboard;