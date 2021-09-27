import styled from 'styled-components'

export const Summary = styled.div`
    background-color: #292726;
    color:white;
    height: calc(100vh - 300px);
    position: relative;
`

interface LoadListProps {
    clicked:boolean
}

export const LoadList = styled.div<LoadListProps>`
    display: ${(props)=>(props.clicked ? 'blcok' : 'none')};
    padding: 20px;
    height: 520px;
    overflow-y: auto;
`

export const SummarySchedule = styled.div`
    margin-bottom: 15px;
    display: block;
    width: 100%;
    height: 1.7vh;
    position: relative ;

    &:hover button {
        display: block;
    }
`

export const SummaryScheduleButton = styled.button`
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/8/8f/Flat_cross_icon.svg');
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

interface SummaryScheduleColorProps {
    backgroundColor: string
}

export const SummaryScheduleColor = styled.div<SummaryScheduleColorProps>`
background-color: ${(props)=>props.backgroundColor};
margin-top: 6px;
position: absolute;
left: 3px;
width: 10px;
border-radius: 10px;
height: 10px;
`

export const SummaryScheduleTitle = styled.div`
line-height: 1;
float: left;
font-size: 20px;
margin-left: 17px;
width: 11.6vw;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
font-weight: 100;
color: white;
`

export const SummaryScheduleTimeLeft = styled.div`
line-height: 1.5;
position: absolute;
right: 60px;
overflow: noWrap;
font-size: 14px;
font-weight: 600;
color: gray;
`

export const SummaryScheduleTimeRight = styled.div`
line-height: 1.5;
position: absolute;
right:20px;
overflow: noWrap;
font-size: 14px;
font-weight: 600;
color: gray;
`

export const NoSchedule = styled.div`
color: gray;
font-size: 15px;
`

interface DateProps {
    color:string
}

export const Date = styled.div<DateProps>`
color:${(props)=>props.color};
font-weight: 600;
font-size: 18px;
margin-bottom: 10px;
`

export const Title = styled.div`
font-size: 16px;
font-weight: 600;
color: #fff;
padding: 20px 20px 0;
`

export const DayWrapper = styled.div``