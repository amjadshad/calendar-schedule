import React from 'react'
import { Link } from 'react-router-dom'
import { useReactiveVar } from '@apollo/client'
import AddScheduler from '../../molcules/AddScheduler/AddScheduler'
import Summary from '../../molcules/Summary/Summary'
import { navBarClicked,onClickDelete } from '../../../stores/store'
import * as S from './style'

const Lefter: React.FunctionComponent = () => {
	const navBarClickedProps = useReactiveVar(navBarClicked)

	return(
		<S.LeftBar clicked={navBarClickedProps}>
			<S.TitleWrapper clicked={navBarClickedProps}>
				<S.LinkWrapper>
					<Link to='/'>
						<S.Logo />
						<S.Title>Schedule</S.Title>
					</Link>
				</S.LinkWrapper>
			</S.TitleWrapper>
			<AddScheduler />
			<Summary />
		</S.LeftBar>
	)
}

export default Lefter
