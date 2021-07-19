import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

import { Search } from './Search'

test('Render component', () => {
    const component = renderer.create(
        <Search text={'unown'} setText={() => {}} />
    )
    expect(component).toMatchSnapshot()
})

test('Confirm text', () => {
    const component = render(<Search text={'unown'} setText={() => {}} />)
    expect(component.getAllByText('unown')).toHaveLength(1)
})
