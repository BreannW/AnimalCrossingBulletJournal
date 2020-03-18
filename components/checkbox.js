import React from 'react'
import styled from 'styled-components'
import Item from './item'
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`



const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? '#2d6895' : 'white')};
  border-radius: 50%;
  transition: all 150ms;

  
`

const SpanLabel = styled.div `
 color: ${props => (props.checked ? '#2d6895' : 'white')};
 text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
 font-style: ${props => (props.checked ? 'italic' : 'none')};
 display: inline-block;
 margin-left: 8px;

`


const Checkbox = ({ className, checked, ...props }) => (


  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} />
    <SpanLabel checked={checked} >{props.name}</SpanLabel> 
  </CheckboxContainer>
)


export default Checkbox
