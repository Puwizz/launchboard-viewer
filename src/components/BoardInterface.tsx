import React from 'react'
import styled from '@emotion/styled'
import {useObserver} from 'mobx-react-lite'

import {useBoard} from '../store'

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 80px);
  grid-template-columns: repeat(8, 80px);
  grid-gap: 20px;

  padding: 100px 0;
`

let offColor = '#bdc3c7'

const Button = styled.button`
  width: 80px;
  height: 80px;
  border: none;

  box-shadow: 0 0 25px ${props => props.color || 'rgba(255, 255, 255, 0.3)'};

  background: ${props => props.color || offColor};
`

export function BoardInterface() {
  const board = useBoard()

  const tap = (i: number) => board.trigger(String(i))

  return useObserver(() => (
    <Container>
      {board.uiScene.map((color, i) => (
        <Button key={i + 1} color={color} onClick={() => tap(i + 1)} />
      ))}
    </Container>
  ))
}
