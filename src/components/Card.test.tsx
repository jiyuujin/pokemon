import React from 'react'
import renderer from 'react-test-renderer'

import { Card } from './Card'

test('Render component', () => {
    const component = renderer.create(
        <Card
            pokemon={{
                name: 'unown',
                url: 'https://pokeapi.co/api/v2/pokemon/201/',
            }}
        />
    )
    expect(component).toMatchSnapshot()
})
