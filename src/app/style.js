'use client'

import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    width: 100%;

    @media (min-width: 1300px) {
        width: var(--site-width);
    }

    display: flex;
    flex-direction: column;

    gap: 1.5em;
`

export const Header = styled.div`
    padding: 1em;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;

    align-items: center;

    width: 100%;
`

export const Title = styled.h1`
    margin: 0;
    font-size: 1.5em;
    color: var(--text);
`

export const ToggleButton = styled.button`
    width: fit-content;
    
    border-radius: 1em;
    border: none;

    cursor: pointer;

    background: var(--input);
    color: var(--text);

    font-size: 0.9em;
    font-weight: 500;

    padding: 0.5em 1.5em;
    box-sizing: border-box;
`

export const InputWrapper = styled.div`
    width: 100%;

    padding: 1em;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    gap: 1em;
`

export const InputTitle = styled.input`
    width: 100%;
    border: 1px solid var(--input);

    background: none;

    font-size: 0.9em;
    padding: 0.75em;
    box-sizing: border-box;

    border-radius: 1em;

    &:active, &:focus {
        outline: none;
        border: 2px solid var(--primary);
    }

    color: var(--text);
`

export const InputContent = styled.textarea`
    width: 100%;

    height: 24em;
    border: 1px solid var(--input);

    background: none;

    font-size: 0.9em;
    padding: 0.75em;
    box-sizing: border-box;

    border-radius: 1em;

    resize: none;

    &:active, &:focus {
        outline: none;
        border: 2px solid var(--primary);
    }

    color: var(--text);
`

export const Submit = styled.button`
    width: fit-content;

    @media (max-width: 768px) {
        width: 100%;
    }

    border-radius: 1em;
    border: none;

    cursor: pointer;

    background: var(--input);
    color: var(--text);

    font-size: 0.9em;
    font-weight: 500;

    padding: 0.5em 1.5em;
    box-sizing: border-box;

    &:disabled {
        cursor: no-drop;
        filter: brightness(0.65);
    }
`

export const MemoContent = styled.span`
    line-height: 1.5;
    font-size: 0.9em;

    color: var(--text);

    padding: 1em;
    box-sizing: border-box;

    width: 100%;

    white-space: pre-line;
`