import React, { Component } from 'react';

import styles from '../App.module.css';

import {  Cards, Chart, CountryPicker } from '../components';
import { fetchData } from '../api/index';

class home extends Component {

    state = {
        data: {},
        country:'',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        if(country==='global') {
            
            const fetchedData = await fetchData();
            this.setState({data: fetchedData, country: ''});
        }
        else{
            const fetchedData = await fetchData(country);
            
            this.setState({data: fetchedData, country: country});
        }
    }

    render() {

        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default home;
