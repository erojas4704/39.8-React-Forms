import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Box from './Box';
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';
import TodoList from './TodoList';

test('renders app without crashing', () => {
  render(<App />);
});

test('renders box components without crashing', () => {
  render(<BoxList />);
  render(<Box />);
  render(<NewBoxForm />);
});

test('Matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment).toMatchSnapshot();
});

test('Submitting a form adds a new color', () => {
  const { getByLabelText, queryByTestId, getByTestId } = render(<App />);
  expect(queryByTestId("box")).not.toBeInTheDocument();

  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");
  const colorInput = getByLabelText("Color");
  const submit = getByTestId("box-submit");

  fireEvent.change(widthInput, { target: { value: "10" } });
  fireEvent.change(heightInput, { target: { value: "10" } });
  fireEvent.change(colorInput, { target: { value: "red" } });
  fireEvent.click(submit);
  expect(getByTestId("box")).toBeInTheDocument();
});

test("renders todo components without crashing", () => {
  render(<TodoList />);
});

test("Adding a task should work.", () => {
  const { getByLabelText, queryByTestId, getByTestId } = render(<App />);
  const taskInput = getByLabelText("Task:");
  const taskSubmit = getByTestId("task-submit");

  expect(queryByTestId("task")).not.toBeInTheDocument();
  fireEvent.change(taskInput, { target: { value: "test" } });
  fireEvent.click(taskSubmit);
  expect(queryByTestId("task")).toBeInTheDocument();
});

test("Fields should be blank after submitting", () => {
  const { getByLabelText, queryByTestId, getByTestId } = render(<App />);
  const taskInput = getByLabelText("Task:");

  expect(queryByTestId("task")).not.toBeInTheDocument();
  fireEvent.change(taskInput, { target: { value: "test" } });
  fireEvent.click(getByTestId("task-submit"));
  expect(taskInput).toHaveValue("");
});