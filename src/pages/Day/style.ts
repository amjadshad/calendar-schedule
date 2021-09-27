import styled from 'styled-components'

export const DayLeft = styled.div`
  height: 100vh;
  width: 70px;
  float: left;
`

export const DayTable = styled.div`
  position: absolute;
  right: 50px;
  height: 900px;
  overflow-y: auto;
  overflow-x: hidden;
  @media screen and (max-width: 1550px) {
    & {
      display: none;
    }
  }
`

export const DateStorage = styled.div`
margin-left: 30px;
 height: 45px;
 position: relative
`

export const ScheduleCountWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  @media screen and (max-width: 1150px) {
    & {
      display: none;
    }
  }
`

export const ScheduleCount = styled.span`
font-size: 20px;
font-weight: 600;
`

export const ScheduleCountText = styled.span`
font-size: 13px;
font-weight: 600;
`

export const WeekStorage = styled.span`
  color: rgb(47, 72, 218);
  font-size: 15px;
  font-weight: 600;
`

export const TodayStorage = styled.span`
  margin-left: 20px;
  color: rgb(47, 72, 218);
  font-size: 40px;
  font-weight: 600;
`

export const MonthStorage = styled.span`
margin-left: 10px;
  color: black;
  font-size: 25px;
  font-weight: 600;
`

export const YearStorage = styled.span`
color: black;
 font-size: 25px;
  font-weight: 600;
`

export const TimeTable =styled.div`
  position: relative;
  float: left;
  height: 89vh;
  overflow-y: auto;
  overflow-x: hidden;
`

interface RedLineProps {
  top:string
}

export const RedLine = styled.div<RedLineProps>`
  z-index: 3;
  font-weight: 600;
  color: red;
  height: 0;
  border-bottom: 1px solid red;
  width: 100%;
  position: absolute;
  top:${(props)=>props.top};
`

export const TimeLineLeft = styled.div`
  color: gray;
  font-weight: 600;
  text-align: right;
  line-height: 7.6;
  float: left;
  height: 61px;
  width: 100%;
  border-right: 1px solid #e9e9e9;
`

export const TableWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  border: 1px solid #e9e9e9;
  background-color: mintcream;
`

export const TableTitle = styled.div`
  width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-bottom: 1px solid #e9e9e9;
  padding: 15px;
  font-weight: 600;
  font-size: 20px;
`

export const TableDeleteButton = styled.div`
  position: absolute;
  top: 12px;
  right: 15px;
  background-repeat: none;
  background-size: contain;
  width: 24px;
  height: 24px;
  background-image: url('https://user-images.githubusercontent.com/71132893/103125964-2e5e3580-46d0-11eb-9cdd-15ce0c5ca318.png');
  cursor: pointer;
`

export const TableTextWrapper = styled.div`
margin-bottom: 10px;
position: relative;
`

export const TableTextLeft = styled.span`
font-size: 17px;
font-weight: 600;
margin-right: 20px;
`

export const TableTextRigth = styled.span``

interface TableDisplayProps {
  backgroundColor: string;
}

export const TableDisplay = styled.div<TableDisplayProps>`
position: absolute;
top:0;
right:0;
width: 20px;
margin-right: 200px;
height: 20px;
background-color: ${(props)=>props.backgroundColor};
`

export const TimeLineRightWrapper = styled.div`
width: calc(100vw - 430px);
float: left;
`

export const TimeLineRight = styled.div`
float: left;
border-bottom: 1px solid #e9e9e9;
height: 60px;
width: 100%;
border-right: 1px solid #e9e9e9;
`

interface ScheduleWrapperProps {
  top:number
  height:number
}

export const ScheduleWrapper = styled.div<ScheduleWrapperProps>`
right: 0;
width: calc(100% - 71px);
position: absolute;
top:${(props)=>(`${props.top}px`)};
height:${(props)=>(`${props.height}px`)};
`

interface ScheduleBackProps {
  backgroundColor:string
}

export const ScheduleBack = styled.div<ScheduleBackProps>`
opacity: 0.5;
width: 100%;
height: 100%;
float: left;
background-color: ${(props)=>props.backgroundColor};
`

interface ScheduleTextWrapperProps {
  top:number
}

export const ScheduleTextWrapper = styled.div<ScheduleTextWrapperProps>`
position: relative;
font-size: 15px;
font-weight: 600;
color: black;
top: ${(props)=>(`${props.top}px`)};
`

interface ScheduleColorProps {
  backgroundColor:string
  height:number
}

export const ScheduleColor = styled.div<ScheduleColorProps>`
left: 0;
position: absolute;
width: 10px;
top:${(props)=>(`${props.height}px`)};
background-color:${(props)=>props.backgroundColor};
height:${(props)=>(`${props.height}px`)};
`

export const ScheduleText = styled.div`
margin-left: 10px
`