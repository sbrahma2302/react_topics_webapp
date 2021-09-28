import { StyledTh, StyledTr } from "./StyledComponents"

export const TopicsTable = ({ relatedTopics, onTopicChange }) => {
    return <div>
        <table className="table table-hover">
            <StyledTh>
                <tr>
                    <th>Name</th>
                    <th>Count</th>
                </tr>
            </StyledTh>
            <tbody>
                {(relatedTopics && relatedTopics.length) ? relatedTopics.map((relatedTopic, index) => {
                    return <TopicsRow onTopicChange={onTopicChange} key={index} relatedTopic={relatedTopic} />
                }) : <NoTopics />
                }

            </tbody>
        </table>
    </div>
}


export const TopicsRow = ({ relatedTopic, onTopicChange }) => {
    return <StyledTr onClick={() => onTopicChange(relatedTopic)}>
        <td> {relatedTopic.name} </td>
        <td> {relatedTopic.stargazers.totalCount} </td>
    </StyledTr>
}


const NoTopics = () => {
    return <div><h1>No data found</h1></div>
}