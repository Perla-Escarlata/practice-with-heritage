import { useState, useEffect } from 'react';
import { heritageList } from './heritageList';
import ImageComponent from './ImageComponent';
import './App.css';


export const TopPage = () => {
    const [index, setIndex] = useState((() => {
      const storedIndex = localStorage.getItem("index");
      return storedIndex ? JSON.parse(storedIndex) : 0;
    })());
  
    // 選択写真のindexを、ローカルストレージに保持する
    useEffect(() => {
      localStorage.setItem("index", JSON.stringify(index));
    }
    , [index]);

  
    // 選択写真をリストから取得する
    const heritage = heritageList[index];


    // お気に入り選択を保持する
    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(heritage.favorite));
    }, [heritage.favorite]);

    // favoriteのチェック状態を反映する
    const [isChecked, setIsChecked] = useState(heritage.favorite);

  
  
    function handleNextClick() {
      if (index<heritageList.length-1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }
  
    function handlePreviousClick() {
      if (index>0) {
        setIndex(index - 1);
      } else {
        setIndex(heritageList.length - 1);
      }
    }
  
    function handleRandomClick() {
      const randomIndex = Math.floor(Math.random() * heritageList.length);
      setIndex(randomIndex);
    }

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
        heritage.favorite = !heritage.favorite;
    }
  
    return (
      <>
        <div>
            {/*URLつき画像 */}
          <a href={heritage.url} target="_blank">
            <ImageComponent src={heritage.image} alt={heritage.name} className="heritage" />
          </a>
        </div>
        {/* 写真を変える */}
        <button onClick={handlePreviousClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button><br />
        <button onClick={handleRandomClick}>Random</button>
              <h1>{heritage.name}</h1>
              {/* お気に入りチェックボックス */}
              <input type="checkbox" checked={heritage.favorite} onChange={handleCheckboxChange} />
                <label className="checkbox" htmlFor="checkbox">Add to favorites</label>
                <br />
                {/* 詳しい説明 */}
              <h2>{heritage.location}</h2>
        <p className="description" >{heritage.description}</p>
        <p><b>Year: {heritage.year}</b></p>
        <p><b>Type: {heritage.type}</b></p>
        
      </>
    )
  }