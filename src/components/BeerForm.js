import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';


const BeerForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();

    };

    return (
        <> 
            { props.isFetchingData ? ( 
            
            <div>**Please hold while we fetch the data!**</div>

            ) : (

            <button onClick = { handleGetData }> get Data! </button>

            )}  
        </>
    );
};

const mapStateToProps = state => {

    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(mapStateToProps, { getData })(BeerForm); 