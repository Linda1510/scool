import IconChevronLeft from "./../assets/icons/chevron-left";
type PaginationsProps = {
  onPaginate: (page: number) => void;
  numberOfPages: number;
  activePage: number;
};
const Pagination = ({
  onPaginate,
  numberOfPages,
  activePage,
}: PaginationsProps) => {
  return (
    <div className="pagination">
      <span
        onClick={() => onPaginate(activePage - 1)}
        className={`pagination__item ${activePage === 1}`}
      >
        <IconChevronLeft />
      </span>
      {Array(numberOfPages)
        .fill("")
        .map((page, index) => {
          return (
            <span
              onClick={() => onPaginate(index + 1)}
              className={`pagination__item ${
                activePage >= numberOfPages ? "isDisabled" : ""
              }`}
            >
              {index + 1}
            </span>
          );
        })}
      <span>2</span>
      <span>4</span>
    </div>
  );
};
export default Pagination;
