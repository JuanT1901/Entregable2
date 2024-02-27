import "./Loader.css"

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-2xl">
      <img src="/Loader.png" alt="" />
      <span>Weather app</span>
      <span>Loading...</span>
    </div>
  )
}
export default Loader