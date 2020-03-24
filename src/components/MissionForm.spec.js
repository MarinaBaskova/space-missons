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

test('Component transitions to loading state when isFetching is true', () => {
  const mockGetDataFn = jest.fn();
  const { getByText, queryByText, rerender } = render(
    <MissionForm getData={mockGetDataFn} isFetchingData={false} />
  );
  // test that the btn is rendered and loading is not
  getByText(/get data/i);
  expect(queryByText(/we are fetching data/i)).toBeNull();

  // re-render the component because isFetchingData has been changed to true
  rerender(<MissionForm getData={mockGetDataFn} isFetchingData={true} />);
  getByText(/we are fetching data/i);
  expect(queryByText(/get data /i)).toBeNull();
});
