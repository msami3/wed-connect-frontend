import * as React from 'react';

import { request } from '../axios_helper';

export default class AuthContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : []
        };
    };

    componentDidMount() {
        request(
            "GET",
            "/messages",
            {}
        ).then((response) => {
            const receivedData = response.data;
            
            // 1. Check if receivedData is an Array
            if (Array.isArray(receivedData)) {
                this.setState({data : receivedData});
            } else {
                console.error("API returned non-array data:", receivedData);
                // Optionally set it to an empty array to be safe
                this.setState({data : []}); 
            }
        });
    };

    render() {
        return (
            <div>
                {this.state.data && this.state.data.map((line) => <p>{line}</p>)}
            </div>
        );
    };

 }