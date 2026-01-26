import type { Component, JSX } from "solid-js"

interface ContentProps {
  title: string
  description: string
  content: JSX.Element
}

const Content: Component<ContentProps> = (props) => {
  return (
    <div class="content-component">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div class="content-body">
        {props.content}
      </div>
    </div>
  )
}

export default Content
