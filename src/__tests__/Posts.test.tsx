import { test, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import Post from '../components/Post';
import { server } from '../components/mocks';
import '@testing-library/jest-dom';



// Start server before all tests run
beforeAll(() => {
  server.listen();
});

// Reset between tests to gaurantee test always start in the same state
afterEach(() => {
  server.resetHandlers();
});

// Shutdown at the end of tests
afterAll(() => {
  server.close();
});

test("Test Post", async () => {
  // Arrange
  render(<Post id={1} />);

  // Act
  const heading = await screen.findByRole("heading");
  const body = await screen.findByTestId("post-body");

  // Assert
  expect(heading).toHaveTextContent("Lorem Ipsum");
  expect(body).toHaveTextContent("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
});
