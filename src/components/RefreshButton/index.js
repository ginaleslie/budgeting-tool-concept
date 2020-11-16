import React from "react"
import { Button } from "@indiefin/galaxy-button"

const RefreshButton = ({ click, disabled }) => {
  return (
    <Button
      kind="text"
      icon="refresh"
      handleClick={click}
      disabled={disabled}
      size="small"
    >
      Update transactions
    </Button>
  )
}
export default RefreshButton
