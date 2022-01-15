import { useContext } from "react"
import {PickerContext} from "../context/pickerContext"

function usePicker() {
  const context = useContext(PickerContext)
  return context
}

export default usePicker
