// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'
import Counter from '../../components/counter'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// NOTE: this is a new requirement in React 18
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

test('counter increments and decrements when the buttons are clicked', async () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  render(<Counter />)
  //
  // 🐨 append the div to document.body (💰 document.body.append)
  //
  // 🐨 use createRoot to render the <Counter /> to the div
  // 🐨 get a reference to the increment and decrement buttons:
  const incrementButton = screen.getByRole('button', {name: /increment/i})
  const decrementButton = screen.getByRole('button', {name: /decrement/i})
  //   💰 div.querySelectorAll('button')
  // 🐨 get a reference to the message div:
  //   💰 div.firstChild.querySelector('div')
  //
  // 🐨 expect the message.textContent toBe 'Current count: 0'
  expect(screen.getByText('Current count: 0')).toBeVisible()

  await userEvent.click(incrementButton)
  expect(screen.getByText('Current count: 1')).toBeVisible()

  await userEvent.click(decrementButton)
  expect(screen.getByText('Current count: 0')).toBeVisible()
  // 🐨 click the increment button (💰 act(() => increment.click()))
  // 🐨 assert the message.textContent
  // 🐨 click the decrement button (💰 act(() => decrement.click()))
  // 🐨 assert the message.textContent
  //
  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */
