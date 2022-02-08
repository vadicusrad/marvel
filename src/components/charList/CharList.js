import "./charList.scss";
import abyss from "../../resources/img/abyss.jpg";
import MarvelService from "../../services/MarvelService";
import { useEffect, useState } from "react";

const CharList = (props) => {
  const [chatList, setCharList] = useState([]);

  const marvelSevice = new MarvelService();

  useEffect(() => {
    marvelSevice.getAllCharacters().then((res) => setCharList(res));
  }, []);

  return (
    <div className="char__list">
      <ul className="char__grid">
        {chatList.map((item) => {
          let imgStyle = { objectFit: "cover" };
          if (
            item.thumbnail ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
          ) {
            imgStyle = { objectFit: "contain" };
          }
          return (
            <li
              key={item.id}
              onClick={() => props.onCharSelected(item.id)}
              className="char__item"
            >
              <img src={item.thumbnail} alt="img" style={imgStyle} />
              <div className="char__name">{item.name}</div>
            </li>
          );
        })}
      </ul>
      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharList;
