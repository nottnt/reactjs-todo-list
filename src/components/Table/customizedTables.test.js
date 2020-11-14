import React from 'react'
import { shallow } from 'enzyme'

import CustomizedTables from './customizedTables'


it('renders table list correctly', () => {
    const wrapper = shallow(<CustomizedTables />)
    expect(wrapper.find('#table-container')).toHaveLength(1)
    expect(wrapper.find('#table-cell-no')).toHaveLength(1)
    expect(wrapper.find('#table-cell-title')).toHaveLength(1)
    expect(wrapper.find('#table-cell-date')).toHaveLength(1)
    expect(wrapper.find('#table-cell-action')).toHaveLength(1)
})

