import styled from 'styled-components'

export const MainCalendarHead = styled.div`
    padding:14px;
    height: 30px;
    position: relative;
    display: flex;
    min-width: 620px;
    line-height: 1.7;
`

export const MainCalendarHeadMid = styled.div`
    margin:0 auto;
    display: flex;
`

export const linkWrapper = styled.div`
    & a{
        cursor: pointer;
        color:black;
        height: 28px;
        border:1px solid white;
        background-color: rgb(201, 201, 201);
        border-radius: 7px;
        width: 80px;
        text-align: center;
        font-weight: 600;
        text-align: center;
        display: inline-block;
        text-decoration: none;
        &.clicked{
            color: white;
            transition: background-color .2s, color .2s;
            background-color: red !important;
        }
    }
`

export const TodayButton = styled.div`
position: absolute;
left: 14px;
line-height: 1.7;
    &.clicked{
        color: white;
        transition: background-color .2s, color .2s;
        background-color: red !important;
    }
`