import { useField, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import styled from 'styled-components'
interface Props {
  label: string
  name: string
  [x: string]: any
}
const StyledToggle = styled.label`
  .toggle {
    margin: 5px 0 5px 0;
    cursor: pointer;
    display: inline-block;
  }

  .toggle-switch {
    display: inline-block;
    background: #ccc;
    border-radius: 16px;
    width: 58px;
    height: 32px;
    position: relative;
    vertical-align: middle;
    transition: background 0.25s;
  }
  .toggle-switch:before,
  .toggle-switch:after {
    content: '';
  }
  .toggle-switch:before {
    display: block;
    background: linear-gradient(to bottom, #fff 0%, #eee 100%);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    width: 24px;
    height: 24px;
    position: absolute;
    top: 4px;
    left: 4px;
    transition: left 0.25s;
  }
  .toggle:hover .toggle-switch:before {
    background: linear-gradient(to bottom, #fff 0%, #fff 100%);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  }
  .toggle-checkbox:checked + .toggle-switch {
    background: #56c080;
  }
  .toggle-checkbox:checked + .toggle-switch:before {
    left: 30px;
  }

  .toggle-checkbox {
    position: absolute;
    visibility: hidden;
  }

  .toggle-label {
    display: block;
    margin-bottom: 5px;
    position: relative;
    top: 2px;
  }
`
export const Switch = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' })
  return (
    <StyledToggle>
      <label className="toggle">
        <span className="toggle-label Form__label--pyme">{label}</span>
        <input
          type="checkbox"
          {...field}
          {...props}
          className="toggle-checkbox"
        />
        <div className="toggle-switch"></div>
      </label>
      <ErrorMessage
        name={props.name}
        component="label"
        className="Form__text-error"
      />
    </StyledToggle>
  )
}
