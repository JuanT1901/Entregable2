const WeatherStatus = ({ property, value, unit }) => {
  return (
    <p>{property}: {value} {unit}</p>
  )
}
export default WeatherStatus