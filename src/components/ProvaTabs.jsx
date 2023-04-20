import Tab from "./Tab"

const ProvaTabs = ({ children }) => {
  const tabs = children.maps((child) => <Tab />)
  return <div>ProvaTabs</div>
}
export default ProvaTabs
