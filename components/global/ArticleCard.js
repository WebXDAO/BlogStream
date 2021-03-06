const ArticleCard = (props) => {
  const { subject, author, pfpSrc, position, url } = props.article;

  return (
    <li
      className={`w-[25vw] flex justify-center m-[2.5vw] hover:scale-110 duration-300`}
    >
      <a href={url} target="_blank">
        <div className="border rounded-2xl shadow-md shadow-gray-200 p-6 leading-8">
          <h1 className="mb-8">{subject}</h1>
          <div className="flex justify-around">
            <img className="w-12 h-12 rounded-full" src={pfpSrc} />
            <div>
              <h2>{author}</h2>
              <h2>{position}</h2>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ArticleCard;
