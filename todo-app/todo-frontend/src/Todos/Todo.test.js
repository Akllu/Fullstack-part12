import React from 'react'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

describe('<Blog />', () => {
  const testTodo = {
    text: 'Increase the number of tools in my toolbelt',
    done: false
  }
  const mockHandler = jest.fn()

  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button onClick={mockHandler}> Delete </button>
      </span>
    </>
  )

  const notDoneInfo = (
    <>
      <span>
        This todo is not done
      </span>
      <span>
        <button onClick={mockHandler}> Delete </button>
        <button onClick={mockHandler}> Set as done </button>
      </span>
    </>
  )

  test('renders the text and done info', () => {
    render(
      <Todo todo={testTodo} doneInfo={doneInfo} notDoneInfo={notDoneInfo} />
    )

    expect(screen.getByText('Increase the number of tools in my toolbelt')).toBeVisible()
    expect(screen.getByText('This todo is not done')).toBeVisible()
  })
})