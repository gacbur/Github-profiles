import axios from 'axios'

import { useState, useEffect } from 'react'

import { GoSearch } from 'react-icons/go'

import { HomePage, SearchFormWrapper, SearchBar, QuickSearchResults, LoadingWrapper } from './HomeElements'

import Loading from '../../components/loading/Loading'
import QuickSearchItem from '../../components/quickSearchItem/QuickSearchItem'

export type QuickSearchItemType = {
    login: string,
    avatar_url: string,
}

const Home = () => {

    const [searchValue, setSearchValue] = useState<string>('')
    const [quickSearchResults, setQuickSearchResults] = useState<any>([])
    const [quickSearchResLoading, setQuickSearchResLoading] = useState<boolean>(false)

    useEffect(() => {

        const source = axios.CancelToken.source()

        const getQuickSearchResults = async (searchValue: string) => {
            setQuickSearchResLoading(true)
            try {
                setTimeout(async () => {
                    const response = await axios.get(`https://api.github.com/search/users?q=${searchValue}&per_page=8`, {
                        cancelToken: source.token
                    })
                    const results = await response.data
                    console.log(results)
                    setQuickSearchResults(results.items.map((item: QuickSearchItemType) => {
                        return {
                            login: item.login,
                            avatar_url: item.avatar_url
                        }
                    }))
                    setQuickSearchResLoading(false)
                }, 1500)
            } catch (err) {
                if (axios.isCancel(err)) {
                    setQuickSearchResLoading(false)
                    console.log('canceled')
                } else {
                    console.log(err)
                }

            }
        }
        if (searchValue !== "") {
            getQuickSearchResults(searchValue)
        }

        return () => {
            source.cancel()
        }

    }, [searchValue])

    useEffect(() => {
        if (searchValue === "" && quickSearchResults.length > 0) {
            const clearSearchValue = () => {
                setQuickSearchResults([])
            }
            clearSearchValue()
        }
    }, [searchValue, quickSearchResults.length])

    useEffect(() => {
        console.log(quickSearchResults)
    }, [searchValue])

    return (
        <HomePage>
            <SearchFormWrapper>
                <h1>
                    Search for user
                </h1>
                <SearchBar>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        >
                        </input>
                    </form>
                    {
                        searchValue.length > 0 &&
                        <QuickSearchResults>
                            {
                                quickSearchResLoading ?
                                    <LoadingWrapper>
                                        <Loading />
                                    </LoadingWrapper>
                                    :
                                    quickSearchResults.map((result: QuickSearchItemType, index: number) => {
                                        return <QuickSearchItem key={index} result={result} />
                                    })
                            }
                        </QuickSearchResults>
                    }
                </SearchBar>
            </SearchFormWrapper>
        </HomePage>
    )
}

export default Home
