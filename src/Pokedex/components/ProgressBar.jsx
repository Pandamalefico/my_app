import { useEffect, useState } from "react"

const ProgressBar = ({ name, value }) => {
  const [val, setVal] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (val < value) setVal(val + 1)
    }, 7)
  }, [val])

  return (
    <>
      <label
        htmlFor={`${name}-bar`}
        className='progress_label'
      >
        {name}
      </label>
      <span>{val}</span>
      <progress
        id={`${name}-bar`}
        value={val}
        max='100'
        className={`progress ${value <= 50 ? "red" : "green"}`}
      >
        {val}
      </progress>
    </>
  )
}
export default ProgressBar
