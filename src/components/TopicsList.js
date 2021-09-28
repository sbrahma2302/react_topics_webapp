import { useState } from "react";
import { StyledHeading } from "./StyledComponents";
import { getRelatedTopics } from "../Services/GitApiservice";
import { TopicsTable } from "./TopicsTable";

export const TopicsList = () => {
    const DEFAULT_TOPIC = 'react'
    const [topic, setTopic] = useState(DEFAULT_TOPIC)

    const { data, loading, error } = getRelatedTopics(topic)

    if (loading) return <h2 className="text-center"> Loading topics ...</h2>
    if (error) return <h2 className="text-center"> Something went wrong</h2>
    return data && <>
        <StyledHeading > Selected Topic: {topic}</StyledHeading>
        <TopicsTable relatedTopics={data && data.topic && data.topic.relatedTopics} onTopicChange={(obj)=>setTopic(obj.name)} />
    </>
}

