import { render } from '@testing-library/react';

import MylibNext from './mylib-next';

describe('MylibNext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MylibNext />);
    expect(baseElement).toBeTruthy();
  });
});
