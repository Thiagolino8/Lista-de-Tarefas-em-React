import { m } from 'framer-motion'

import { useStore } from '../store'
import Input from './Input'

const Search = () => {
	const { search, setSearch } = useStore()
	return (
		<m.div
			key='modal'
			initial={{ opacity: 0, scaleY: 0 }}
			animate={{ opacity: 1, scaleY: 1 }}
			exit={{ opacity: 0, height: 0 }}
		>
			<h2>Search</h2>
			<Input type='text' value={search} setValue={setSearch} />
		</m.div>
	)
}

export default Search
