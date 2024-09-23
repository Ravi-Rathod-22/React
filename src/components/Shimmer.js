const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill(10)
        .map((e, i) => (
          <div key={i} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
