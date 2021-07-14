import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
    /* width: 100%; */
    border: none;
    outline: none;
    color: #ffff;
    padding: 6px 1em;
    font-size: ${({ size }) => size ? size + 'px' : '18px'};
    font-weight: 700;
    border-radius: 3px;
    background-color: #2a9d8f;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
        background-color: #228564;
    }

    &:focus {
        outline: none;
    }
`;

export function Button(props) {
    const { size } = props;
    return (
        <ButtonWrapper size={size} className={props.className}>
            {props.children}
        </ButtonWrapper>
    )
}