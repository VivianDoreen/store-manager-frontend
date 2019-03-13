import React, { Component } from 'react';
import {NavBar} from '../NavBar/NavBar';
import {shallow} from 'enzyme';

describe('Navabr', () =>{
    let wrapper;
    wrapper = shallow(<NavBar />)

    it('should render without crashing', () => {

        expect(wrapper).toMatchSnapshot();
    
      });

})