import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Hom.module/css';

const Home=(props)=>{
    return(
    <Card className={classes.home}>
    <h1>Welcome...!!</h1>
    </Card>
    );
};

export default Home;