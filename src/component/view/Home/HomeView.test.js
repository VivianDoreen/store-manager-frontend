import React from 'react';
import configureMockStore from 'redux-mock-store'
import sinon from 'sinon';
import { shallow } from 'enzyme';
import {mapStateToProps, HomeView } from '../Home/HomeView';

let props = {
  errors: "",
  data: "",
  onChange: jest.fn(),
  onSubmit: jest.fn(),
};

describe(`LoginView`, () => {
  
  let wrapper;
  const mockLoginfn = jest.fn()

  beforeEach(() => {
      wrapper = shallow(<HomeView {...props} signupAction={mockLoginfn}/>)
  })
  it("Login form should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('When the form is submitted', () => {
      it('should call the mock sign up function', () => {
          wrapper.find('SignupForm').dive().find('#user-form').simulate('submit',
              { preventDefault() { } }
          )
          expect(mockLoginfn.mock.calls.length).toBe(1);
      })
      it('should be called with the email and password in the state as arguments', () => {
          const simulator = (name, value) => (
              wrapper.find('SignupForm').dive().find('#user-form').simulate(
                  'change',
                  {
                      target:
                          { name: name, value: value }
                  }
              )
          )
      })
    
      it('should will recieve error login props', () => {
        const newState = { errors: {data: "efgrt"}, data: "",value: ""} 
          wrapper.setProps(newState)
          
          expect(wrapper.state()).toEqual({"data": "","errors": "efgrt","value": "",})
      })

      it('should will recieve data signup props', () => {
        const newState = { data: "efgrt", "errors":"", "value":"",} 
          wrapper.setProps(newState)
          expect(wrapper.state()).toEqual({"errors": {},"data": "efgrt","value": "",})
      })

      it( 'handles the state changes on the Signup Form', () => {
        
        const emailField =  wrapper.find('SignupForm').dive().find('#user-form')
        emailField.value = 'testuser@app.com';
        const event = { target: { name: 'testName', value: 'testValue' } };
        emailField.simulate( 'change', event );
        expect( emailField.value ).toEqual( 'testuser@app.com' );
      } );

  })


describe('tests for <LoginView> container', () => {
  it('call signup once', () => {
      const spy = sinon.spy(HomeView .prototype, 'componentWillReceiveProps');
      const wrapper = shallow(<HomeView error={{}} />);
      expect(spy).toHaveProperty('callCount', 0);
      wrapper.setProps({
          error:
          {
              error: {
                  username: "wrong id",
                  password: "",
                  email: "",
              }
          }
      });
      expect(spy).toHaveProperty('callCount', 1);
  })
  it('mapStateToProps should return the right value', () => {
    const mockedState = {
        signup: {
        errors: {},
        data:'signup'
      }
    };
    const state = mapStateToProps(mockedState);
    expect(state.data).toEqual('signup');
  });
});
})
