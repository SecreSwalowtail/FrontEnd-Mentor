import { useState } from "react"
import formatTwitter from '../utils/FormatTwitter'
import pinWhite from '/src/assets/pin-white.svg'
import pinBlack from '/src/assets/pin.svg'
import urlWhite from '/src/assets/url-white.svg'
import urlBlack from '/src/assets/url.svg'
import twitterWhite from '/src/assets/twitter-white.svg'
import twitterBlack from '/src/assets/twitter.svg'
import officeWhite from '/src/assets/building-white.svg'
import officeBlack from '/src/assets/building.svg'


function Info(props) {
    const infoColor = props.theme === 'white' ? 'white' : '#1E2A47'
    const shadow = props.theme === 'white' ? '0px 16px 30px -10px rgba(70,95,187,0.25)' : 'none'

    const statsPanel = props.theme === 'white' ? '#F6F8FF' : '#141D2F'

    const bio = props.theme === 'white' ? '#4B6A9B' : 'white'
    const joinedDate = bio
    const bioTransparency = props.bio === 'This profile has no bio' ? '0.5' : '1.0'

    const profileTitle = props.theme === 'white' ? '#2B3442' : 'white'
    const profileNumbers = props.theme === 'white' ? '#2B3442' : 'white'
    const stats = bio
    const urlsColor = props.theme === 'white' ? '#4B6A9B' : 'white'

    const pinColor = props.theme === 'white' ? pinWhite : pinBlack
    const urlColor = props.theme === 'white' ? urlWhite : urlBlack
    const twitterColor = props.theme === 'white' ? twitterWhite : twitterBlack
    const officeColor = props.theme === 'white' ? officeWhite : officeBlack

    const location = props.location === 'Not Available' ? 'opacity(0.5)' : 'opacity(1.0)'
    const blog = props.url === 'Not Available' ? 'opacity(0.5)' : 'opacity(1.0)'
    const twitter = props.twitter === 'Not Available' ? 'opacity(0.5)' : 'opacity(1.0)'
    const company = props.company === 'Not Available' ? 'opacity(0.5)' : 'opacity(1.0)'


    return (
        props.avatar === undefined
            ? null
            : <div className="informations" style={{ backgroundColor: infoColor, boxShadow: shadow }}>
                <div className="informations-top">
                    <img src={props.avatar} className="profile-picture" />
                    <div className="profile-info">
                        <h1 className="profile-name" style={{ color: profileTitle }}>
                            {props.name}
                        </h1>
                        <h3 className="profile-tag">
                            {"@" + props.tag}
                        </h3>
                        <p className="joined-date" style={{ color: joinedDate }}>
                            {props.date}
                        </p>
                    </div>
                </div>
                <p className="bio" style={{ color: bio, opacity: bioTransparency}}>
                    {props.bio}
                </p>
                <div className="profile-stats" style={{ backgroundColor: statsPanel }}>
                    <div className="repos">
                        <p style={{ color: stats }} className="name">Repos</p>
                        <p style={{ color: profileNumbers }} className="number">{props.repos}</p>
                    </div>
                    <div className="followers">
                        <p style={{ color: stats }} className="name">Followers</p>
                        <p style={{ color: profileNumbers }} className="number">{props.followers}</p>
                    </div>
                    <div className="following">
                        <p style={{ color: stats }} className="name">Following</p>
                        <p style={{ color: profileNumbers }} className="number">{props.following}</p>
                    </div>
                </div>
                <div className="profile-links">
                    <div className="location">
                        <img src={pinColor} style={{filter: location}}/>
                        <p style={{ color: urlsColor, filter: location}}>{props.location}</p>
                    </div>
                    <div className="url">
                        <img src={urlColor} style={{filter: blog}}/>
                        <a style={{ color: urlsColor, filter: blog}} href={props.url}>{props.url}</a>
                    </div>
                    <div className="twitter">
                        <img src={twitterColor} style={{filter: twitter}}/>
                        <a style={{ color: urlsColor, filter: twitter }} href={formatTwitter(props.twitter)}>{props.twitter}</a>
                    </div>
                    <div className="office">
                        <img src={officeColor} style={{filter: company}}/>
                        <p style={{ color: urlsColor, filter: company}}>{props.company}</p>
                    </div>
                </div>
            </div>
    );
}

export default Info