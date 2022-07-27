import Reaact, { useState } from 'react'
import Axios from 'axios'
import '../App.css';
import { Main, Search, SearchBtn, SearchContent } from './styles/main'

const Apisearch = () => {

    const [api, setApi] = useState({
        data: [],
        loading: true,
    })

    const [searchText, setSearchText] = useState('');

    const onChangeText = (event) => {
        setSearchText(event.target.value);
    }

    const hanldleSearchButton = async () => {
        const response = await Axios.get(`https://api.github.com/search/users?page=1&per_page=10&q=${searchText}` );

        console.log(response)
        setApi({
            data: response.data.items,
            loading: false,
        });
    }

    return (
        <Main>
            <Search>
                <input
                    className="inputSearch"
                    type="text"
                    placeholder="Search"
                    name="searchbar"
                    onChange={ (e) => onChangeText(e) }
                />
                <SearchBtn onClick={() => { hanldleSearchButton() }}> Search </SearchBtn>
            </Search>

            <SearchContent>
                {api.data.map(item => (

                    <div className="row" key={item.id}>

                        <img
                            src={item.avatar_url}
                        />

                        <ul className="dataInfo">
                            <li>{item.login}</li>

                            <li>Orlando, FL</li>
                        </ul>

                    </div>

                ))}
            </SearchContent>

        </Main>
    )
};

export default Apisearch;