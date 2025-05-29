import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import VolumeControls from '../components/VolumeControls';

test('renders VolumeControls', () => {
    const { container } = render(<VolumeControls
    setVolume={() => {}}
    ></VolumeControls>);
    expect(container).toMatchSnapshot();
})