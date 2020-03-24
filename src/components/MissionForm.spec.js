import React from 'react';
import MissionForm from './MissionForm';
import { render } from '@testing-library/react';

test('Mission Form renders correctly', () => {
  const mockGetDataFn = jest.fn();
  const { getByText, queryByText } = render(
    <MissionForm getData={mockGetDataFn} isFetchingData={false} />
  );
  // test that the btn is rendered and loading is not
  getByText(/get data/i);
  // asertion that something is not rendered (like loading message)
  expect(queryByText(/we are fetching data/i)).toBeNull();
});
