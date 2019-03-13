import NavBar from '../NavBar/NavBar';
import React, { Component } from 'react';

export class Attendant extends Component {
    render() {
        return (
            <div id="main_div">
            <section>
                <NavBar/>
              <article>
                <div id="general_content">
                    Store Manager is a web application that helps store owners manage sales and product inventory records. This application is meant for use in a single store.
                </div>
              </article>
            </section>
          </div>
        );
    }
}

export default Attendant;
