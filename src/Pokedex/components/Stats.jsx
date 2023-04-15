import ProgressBar from "./ProgressBar"

const Stats = ({ stats }) => {
  return (
    <ul className='progress_list'>
      {stats.map((stat) => {
        const stat_name = stat.stat.name
        const stat_value = stat.base_stat
        return (
          <li key={stat_name}>
            <ProgressBar
              name={stat_name}
              value={stat_value}
            />
          </li>
        )
      })}
    </ul>
  )
}
export default Stats
