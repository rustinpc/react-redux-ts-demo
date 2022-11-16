import { screen, render, act, fireEvent} from '@testing-library/react';
import Input from '.';

const onChangeFn = jest.fn();

describe('input component', () => {
  test('renders', () => {
    render(
      <Input inputValue="test" inputType="text" onInputChange={onChangeFn} />
    );
    
    const inputComponent = screen.getByTestId('input-component');
    expect(inputComponent).toBeInTheDocument();
    expect(inputComponent).toHaveValue('test');
  });

  test('calls onChange param when changed', () => {
    onChangeFn.mockClear();
    render(
      <Input inputValue="test" inputType="text" onInputChange={onChangeFn} />
    );

    const inputComponent = screen.getByTestId('input-component');

    fireEvent.change(inputComponent, { target: { value: 'tested' } });
    
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
});

