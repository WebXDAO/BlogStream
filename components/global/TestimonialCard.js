const ArticleCard = ({ article, id, index }) => {
  const { subject, author, pfpSrc, position } = article;

  return (
    <li
      className={`w-[25vw] flex justify-center m-[2.5vw] duration-1000 ${
        id === index + 2 ? "transform: -translate-y-20" : null
      }`}
    >
      <div className="border rounded-2xl shadow-md shadow-gray-200 pt-16 p-8 leading-8">
        <div className="flex justify-around pb-20">
          <img className="w-12 h-12 rounded-full" src={pfpSrc} />
          <div>
            <h2>{author}</h2>
            <h2>{position}</h2>
          </div>
        </div>
        <h1 className="mb-8">{subject}</h1>
      </div>
    </li>
  );
};

export default ArticleCard;
