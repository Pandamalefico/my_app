import ProgressBar from "./ProgressBar"

const Stats = ({ stats }) => {
  const tot = stats
    .map((obj) => obj.base_stat)
    .reduce((accumulator, current) => accumulator + current, 0)

  const totObj = {
    base_stat: tot,
    stat: {
      name: "total",
    },
  }
  const statistics = [...stats, totObj]

  return (
    <ul className='progress_list'>
      {statistics.map((stat) => {
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
