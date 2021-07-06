export default function ReportTable(props) {
  let hours = props.hours && props.hours.map((hour) => <th>{hour}</th>)

  let reports = props.reports && props.reports.map((obj) => JSON.parse(obj.result)) || []

  return (
    <table>
      <thead>
        <tr>
          <th>Location</th>
          {hours}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody>
        {
          reports.map(obj =>
            <tr key={`${Date.now()}`}>
              <td>
                {obj.Location}
              </td>
              {obj.hourly_sales.map((sale) => <td className="pd-4">{sale}</td>)}
              <td>{obj["hourly_sales"].reduce((sum, num) => sum + num)}</td> {/*total*/}
            </tr>
          )
        }
      </tbody>
    </table>
  )
}