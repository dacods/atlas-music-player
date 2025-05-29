import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import PlayListItem from '../components/PlayListItem';

test('renders PlayListItem', () => {
    const { container } = render(<PlayListItem
    title='Song 1'
    artist='Artist 1'
    length='3:41'
    selected={false}
    onClick={() => {}}
    ></PlayListItem>)
    expect(container).toMatchSnapshot();
})