import { FC } from 'react'

import { SearchItem } from './QuickSearchItemElements'

import { QuickSearchItemType as result } from '../../pages/home/Home'

type QuickSearchItemProps = {
    result: result
}

const QuickSearchItem: FC<QuickSearchItemProps> = ({ result }) => {

    const { login, avatar_url } = result

    return (
        <SearchItem>
            <img src={avatar_url} alt="" />
            <h4>{login}</h4>
        </SearchItem>
    )
}

export default QuickSearchItem
