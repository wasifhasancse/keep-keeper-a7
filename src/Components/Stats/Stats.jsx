const Stats = ({title, value}) => {
  return (
    <div className="stats shadow border-2 border-transparent hover:border-green-300 hover:shadow-green-300">
      <div className="stat text-center p-10 bg-white">
        <div className="stat-value">{value}</div>
        <div className="stat-desc text-lg">{title}</div>
      </div>
    </div>
  );
};

export default Stats;
