import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Footer } from './Footer'

describe('Footer', () => {
    it('Can render Footer', () => {
        const { getByText } = render(<Footer />)
        expect(getByText('Coffee Delivery')).toBeInTheDocument()
    })
})