import React from 'react'
import renderer from 'react-test-renderer'

import { Search } from './Search'

test('Render component', () => {
    const component = renderer.create(
        <Search text={'unown'} setText={() => {}} />
    )
    expect(component).toMatchSnapshot()
})
