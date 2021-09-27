import styled from 'styled-components'
interface GetClicked {
    clicked: boolean
}

export const LeftBar = styled.nav<GetClicked>`
    width: ${(props) => (props.clicked ? '350px' : '50px')};
    padding: ${(props) => (props.clicked ? '0' : '10px')};
    transition: all .2s;
    z-index: 99;
`

export const TitleWrapper = styled.div<GetClicked>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${(props) => (props.clicked ? '10px 10px 0' : '')};
    & a{
        display: ${(props) => (props.clicked ? 'flex' : 'none')};
        text-decoration: none;
    }
`

export const LinkWrapper = styled.div`
    background: #fff;
    padding: 20px;
`

export const Logo = styled.div`
    background-image: url('https://uploads-ssl.webflow.com/5ebd6900d5c27041698314e4/5f43a40a7b59dbeb8c5b8b3a_LogoOriginalKlein.svg');
    background-size: contain;
    background-repeat: no-repeat;
    width: 138px;
    height: auto;
`

export const Title = styled.div`
    color: red;
    font-size: 25px;
    font-weight: 600;
    margin: 1.5px 10px;
`
export const SummaryScheduleButton = styled.button`
    background-image: url('https://user-images.githubusercontent.com/71132893/103125964-2e5e3580-46d0-11eb-9cdd-15ce0c5ca318.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 16px;
    height: 16px;
    border: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top:-0;
    cursor: pointer;
    background-color: transparent;
    display: none;
    filter: opacity(0.5) drop-shadow(0 0 0 white);
`