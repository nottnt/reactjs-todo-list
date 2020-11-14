import React from 'react'
import { shallow } from 'enzyme'

import Nav from './nav'


it('renders Navigation Bar correctly', () => {
    const wrapper = shallow(<Nav />)
    expect(wrapper.text()).toEqual('To Do List.');
})

