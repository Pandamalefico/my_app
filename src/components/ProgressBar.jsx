import { useEffect, useState } from "react"

const ProgressBar = ({ name, value }) => {
  const [val, setVal] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (val <= value) {
        if (name == "total") {
          setVal(val + 5)
          return
        }
        setVal(val + 2)
      }
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
      <span>{value}</span>
      <progress
        id={`${name}-bar`}
        value={val}
        max={name == "total" ? "1000" : "255"}
        className={`progress`}
      >
        {val}
      </progress>
    </>
  )
}
export default ProgressBar
