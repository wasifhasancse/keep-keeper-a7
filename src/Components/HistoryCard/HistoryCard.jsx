
const HistoryCard = () => {
  return (
    <div className="space-y-3">
      {["Text", "Meetup", "Video", "Text"].map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="border-t border-zinc-100 pt-3 flex items-center justify-between text-zinc-600"
        >
          <div>
            <p className="font-medium text-zinc-700">{item}</p>
            <p className="text-sm text-zinc-500">Asked for career advice</p>
          </div>
          <p className="text-sm">Jan 28, 2026</p>
        </div>
      ))}
    </div>
  );
};

export default HistoryCard;
