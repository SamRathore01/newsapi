import React from 'react';

import { Typography } from 'antd';
import Business from './Business';
import Crypto from './Crypto';
import Sports from './Sports';
import Covid from './Covid';
import Australia from './Australia';
import { Link } from 'react-router-dom';
import '../App.css';
const Main = () => {

    const { Title } = Typography;

  return <div>
    
        <div className="home-heading-container">
        <Title level={1} className="home-title">Latest Business News</Title>
        <Title level={3}><Link to="/business">Show more</Link></Title>
      </div>
      <Business simplified />
      <div className="home-heading-container">
        <Title level={1} className="home-title">Australian News</Title>
        <Title level={3}><Link to="/business">Show more</Link></Title>
      </div>
      <Australia simplified />
      <div className="home-heading-container">
        <Title level={1} className="home-title">Top 3 Crypto currency news</Title>
        <Title level={3} className="show-more"><Link to="/crypto">Show more</Link></Title>
      </div>
      <Crypto simplified />
      
      <div className="home-heading-container">
        <Title level={1} className="home-title">Sports Section</Title>
        <Title level={3}><Link to="/sports">Show more</Link></Title>
      </div>
      <Sports simplified />
      <div className="home-heading-container">
        <Title level={1} className="home-title">Global covid News</Title>
        <Title level={3}><Link to="/covid">Show more</Link></Title>
      </div>
      <Covid simplified />
  </div>;
};

export default Main;
