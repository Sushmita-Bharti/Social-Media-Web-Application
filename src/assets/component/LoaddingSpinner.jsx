const LoaddingSpinner = () => {
  return (
    <center className="spinner">
      <h1>Loading...</h1>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
};
export default LoaddingSpinner;
