import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import SongTitle from '../components/SongTitle';

test('render SongTitle', () => {
    const song = { title: "Song 1", artist: "Artist 1" };
    const { container } = render(<SongTitle song={song}></SongTitle>);
    expect(container).toMatchSnapshot();
});