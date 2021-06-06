import EpisodesComponent from './episodecomponent.js'
import useState from 'react'


function Episodes() {

    const [displayVar, toggleDisplay] = useState(false)

    const toggleViewHandler = () => {
        toggleDisplay(!displayVar)
    }    


    return (
    <div className="episodeContainer">
    <button className="episodestogglebtn" onClick={toggleViewHandler}><h1 className="title">Radio</h1></button>
    <EpisodesComponent title={"episode 8"} url="https://soundcloud.com/echoradioshow/echo-radio-008"/>
    <EpisodesComponent title={"episode 7"} url="https://soundcloud.com/echoradioshow/echo-radio-007"/>
    <EpisodesComponent title={"episode 6"} url="https://soundcloud.com/echoradioshow/echo-radio-006"/>
    <EpisodesComponent title={"episode 5"} url="https://soundcloud.com/echoradioshow/echo-radio-005"/>
    <EpisodesComponent title={"episode 4"} url="https://soundcloud.com/echoradioshow/echo-radio-004"/>
    <EpisodesComponent title={"episode 3"} url="https://soundcloud.com/echoradioshow/echo-radio-003"/>
    <EpisodesComponent title={"episode 2"} url="https://soundcloud.com/echoradioshow/episode-002"/>
    <EpisodesComponent title={"episode 1"} url="https://soundcloud.com/echoradioshow/episode-001"/>
</div>
    )

}

export default Episodes;
