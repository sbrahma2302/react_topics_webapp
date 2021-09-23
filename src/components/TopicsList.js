import { useState } from "react";
import { StyledHeading } from "./StyledComponents";
import { useGetData } from "../Services/GitApiservice";
import { TopicsTable } from "./TopicsTable";

export const TopicsList = () => {
    const DEFAULT_TOPIC = 'react'
    const [ topic, setTopic ] = useState(DEFAULT_TOPIC)

    const updateTopic = (obj) => {
        setTopic(obj.name)
    }
    const { data, loading, error } = useGetData(topic)

    if (loading) return <h2 className = "text-center"> Loading data ...</h2>
    if (error) return <h2 className = "text-center"> Something went wrong</h2>
    return data && <> 
        <StyledHeading > Selected Topic: {topic}</StyledHeading>
        <TopicsTable data={data && data.topic && data.topic.relatedTopics} rowClickHandler={updateTopic} />
    </>
}

