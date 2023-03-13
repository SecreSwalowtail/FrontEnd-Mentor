import SearchBar from "./SearchBar"
import Info from "./Info"
import { useState } from 'react'
import getData from "../utils/GithubApi"
import formatData from "../utils/FormatData"
import formatUrl from "../utils/FormatUrl"


function Search(props) {
    const [name, setName] = useState()
    const [avatar, setAvatar] = useState()
    const [profileName, setProfileName] = useState()
    const [tag, setTag] = useState()
    const [joinedDate, setJoinedDate] = useState()
    const [bio, setBio] = useState()
    const [repos, setRepos] = useState()
    const [followers, setFollowers] = useState()
    const [following, setFollowing] = useState()
    const [location, setLocation] = useState()
    const [url, setUrl] = useState()
    const [twitter, setTwitter] = useState()
    const [company, setCompany] = useState()

    const updateName = (e) => {
        setName(e.target.value)
    }

    const handleData = async () => {
        try {
            const data = await getData(name)
            setAvatar(data.avatar_url)
            setProfileName(data.name)
            setTag(data.login)
            setJoinedDate(formatData(data.created_at))
            setBio(data.bio === null ? "This profile has no bio" : data.bio)
            setRepos(data.public_repos)
            setFollowers(data.followers)
            setFollowing(data.following)
            setLocation(data.location === null ? "Not Available" : data.location)
            setCompany(data.company === null ? "Not Available" : data.company)
            setUrl(data.blog === null ? "Not Available" : formatUrl(data.blog))
            setTwitter(data.twitter_username === null ? "Not Available" : data.twitter_username)

            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main>
            <SearchBar theme={props.theme} updateName={updateName} handleData={handleData}/>
            <Info theme={props.theme} avatar={avatar} name={profileName} tag={tag} date={joinedDate} bio={bio}
            repos={repos} followers={followers} following={following} location={location} company={company}
            url={url} twitter={twitter}/>
        </main>
    )
}

export default Search