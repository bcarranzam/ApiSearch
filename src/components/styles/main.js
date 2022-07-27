import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    padding: 0px 20px;
    height: 150px;
    justify-content: flex-start;
    flex-direction: column;
`;

export const Search = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    background: #ccc;
`;

export const SearchContent = styled.div`
     max-height:100px;
img{
    width: 100px;
    border-radius: 50%;
}
div{
    display:flex;
}
`;


export const SearchBtn = styled.button`
    padding: 10px; color: #fff; background: #41B450;
    margin-left:10px;
    border:none;
    border-radius:5px;
    width:100px;
`;

