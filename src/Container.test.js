import React from 'react'
import { shallow } from 'enzyme'
import Container from './Container'

it('renders container correctly', () => {
    const wrapper = shallow(<Container />)
    expect(wrapper.find('#todo-textbox')).toHaveLength(1)
    expect(wrapper.find('#btn-add')).toHaveLength(1)
})