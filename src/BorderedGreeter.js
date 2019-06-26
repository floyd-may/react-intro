import React from 'react'
import { Borderizationator } from './Borderizationator'
export function BorderedGreeter ({ name }) {
  return (<Borderizationator>
    Hello, {name}!
  </Borderizationator>)
}
