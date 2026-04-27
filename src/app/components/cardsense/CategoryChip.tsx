export function CategoryChip({
  emoji,
  label,
  onClick
}: {
  emoji: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
    >
      <span className="text-xl">{emoji}</span>
      <span className="font-medium text-gray-800">{label}</span>
    </button>
  );
}
