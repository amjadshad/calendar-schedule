import React, { useState, useEffect } from 'react'
import moment from 'moment'

import * as S from './style'
import { Link, useHistory } from 'react-router-dom'


const Header: React.FunctionComponent = () => {
	const m = moment()
	const history = useHistory()

	const [timeDetail, setTimeDetail] = useState<string>(m.format('HH:mm:ss'))
	const [path, setPath] =useState<string>('')

	useEffect(()=>{
		const timer = setInterval(()=>{
			setTimeDetail(m.format('HH:mm:ss') + '')
		}, 1000)
		return () => clearInterval(timer)
	},[timeDetail])

	useEffect(()=>{
		setPath(history.location.pathname)
	},[])

	return (
		<S.MainCalendarHead>
			{timeDetail}
		</S.MainCalendarHead>
	)
}
export default Header
