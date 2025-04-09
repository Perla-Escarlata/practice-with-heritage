import { heritageList } from "./heritageList"


export const Profile = () => {
    // お気に入りのリストを作る(filter関数)
    const favoriteList = heritageList.filter((heritage) => heritage.favorite === true);

    // 一つずつ表示する(map関数)
    const list = favoriteList.map(favoriteList => <li><a href={favoriteList.url}>{favoriteList.name}</a>&nbsp;|&nbsp;{favoriteList.location}&nbsp;|&nbsp;{favoriteList.year}</li>)

    return (
        <div>
            <h2>Your Favorite</h2>
            <ul>{list}</ul>
        </div>
    )
}
