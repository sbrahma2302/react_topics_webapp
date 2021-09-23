import { StyledTh, StyledTr } from "./StyledComponents"

export const TopicsTable = ({ data, rowClickHandler }) => {
    return <div>
        <table className = "table table-hover">
            <StyledTh>
                <tr>
                    <th>Name</th>
                    <th>Count</th>
                </tr>
            </StyledTh>
            <tbody>
                {data ? data.map(obj => {
                    return <StyledTr key = {Math.random()} onClick = {() => rowClickHandler(obj)}>
                            <td> {obj.name} </td>
                            <td> {obj.stargazers.totalCount} </td>
                        </StyledTr>
                    }):<div><h1>No data found</h1></div>
                }

            </tbody>
        </table>
    </div>
}