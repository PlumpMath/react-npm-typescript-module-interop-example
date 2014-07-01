import React from 'react';
import ReactRouter from 'react-nested-router';

import Spike from 'spike';

var Snake = Spike.Snake;
var Link = ReactRouter.Link;

var Dashboard = React.createClass({
    componentDidMount: function() {
      console.log("call into the TS library now...");
      var sam = new Snake("Sammy the Python");
      sam.move();
      console.log("DONE w/ the TS call");
    },
    render: function() {
        return (
          <div>
            <h1>Dashboard!</h1>
            <ul>
              <li><Link to="inbox">Inbox</Link></li>
            </ul>
            {this.props.activeRoute}
          </div>
        );
    }
});

export default Dashboard;
