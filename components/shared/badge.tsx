const Badge = ({ head, body }: { head: string; body: string }) => {
  return (
    <div className="inline-flex justify-between items-center py-1 px-1 pe-4 text-sm text-orange-700 bg-orange-100 rounded-full hover:bg-orange-200 cursor-default anim">
      <span className="text-xs bg-orange-600 rounded-full text-white px-4 py-1.5 me-3">
        {head}
      </span>{" "}
      <span className="text-sm font-medium">{body}</span>
    </div>
  );
};
export default Badge;
