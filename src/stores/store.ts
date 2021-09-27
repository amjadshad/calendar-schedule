import { makeVar } from '@apollo/client'
import StorageType from '../types/type'
import moment from 'moment'

const m = moment()
export const nowDay = makeVar<number>(m.date())
export const nowWeek = makeVar<number>(m.week())
export const nowMonth = makeVar<number>(m.month())
export const nowYear = makeVar<number>(m.year())
export const whatDay = makeVar<number>(-1)
export const yearStorage = makeVar<number>(m.year())
export const monthStorage = makeVar<number>(m.month())

export const storage = makeVar<StorageType[]>(JSON.parse(localStorage.getItem('storage') || '[]'))

export const navBarClicked = makeVar<boolean>(true)

export const onClickAdd = () => {
	navBarClicked(true)
}

export const onClickDelete = (e: any): void => {
	const filteredStorage = storage().filter((v: StorageType) => {
		return v.id !== e.target.parentNode.id
	})
	storage(filteredStorage)
}

export const setItemsInStorage = () => {
	storage(JSON.parse(localStorage.getItem('storage') || '[]'))
}

export const addStorage = (newItem: StorageType):void => {
	storage([...storage(),newItem])
}

export const isDuplicated = (blockStorage:StorageType):boolean => {
	if (storage().length !== 0) {
		for (let i = 0; i < storage().length; i++) {
			if (
				storage()[i].startHours === blockStorage.startHours &&
                storage()[i].startMinutes === blockStorage.startMinutes &&
                storage()[i].endHours === blockStorage.endHours &&
                storage()[i].endMinutes === blockStorage.endMinutes &&
                storage()[i].year === blockStorage.year &&
                storage()[i].month === blockStorage.month &&
                storage()[i].day === blockStorage.day
			) {
				return false
			}
		}
	}
	return true
}
