export default function LocationForm({ getLocation, handleChange }) {
  return (
    <form onSubmit={getLocation} className="locationForm">
      <label for="locationInput">CITY: </label>
      <input onChange={handleChange} type="text" name="locationInput" />
      <button className="locationSubmit">SUBMIT</button>
    </form>
  );
}
