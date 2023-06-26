type PaginationsProps = {
  onPaginate: () => void;
};
const Pagination = ({ onPaginate }: PaginationsProps) => {
  return (
    <div className="pagination">
      {Array(3)
        .fill("")
        .map((page, index) => {
          return (
            <span
              onClick={() => onPaginate(index + 1)}
              className="pagination__itrms"
            >
              1
            </span>
          );
        })}
      <span>2</span>
      <span>4</span>
    </div>
  );
};
export default Pagination;
