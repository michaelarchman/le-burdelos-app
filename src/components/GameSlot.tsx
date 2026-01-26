import type { Component } from "solid-js";

type GamePanelProps = {
  name: string;
  slotsCount: number;
}

const GamePanel: Component<GamePanelProps> = (
    props: GamePanelProps
) => {
  
  return (
    <div class='gamePanel'>
      <h3>Game: {props.name}</h3>
      <p>There are some awesome games</p>
      <span>Slots available: {props.slotsCount}</span>
    </div>
  )
}

export default GamePanel