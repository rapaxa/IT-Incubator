import styled from "styled-components";

type JobTypePropsType = {
    type?: string;
}
type dataPropsType = {
    title: string
    company: string
    location?: string
    dates: string
    type: string
}

export const ListOfItems = ({ data }: { data: dataPropsType[] }) =>{
    return  (
        <List>
            {data.map((job, index) => (
                <Item key={index}>
                    <ItemWrapper>
                        <Title>{job.title}</Title>
                        <Type type={job.type}>{job.type}</Type>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Details>
                            <div>{job.company}</div>
                            <div>{job.location}</div>
                        </Details>
                        <Dates>{job.dates}</Dates>
                    </ItemWrapper>


                </Item>
            ))}
        </List>
    )
}
const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;
const Item = styled.li`
    display: flex;
    flex-direction: column;
    padding: 0 0 15px 2px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    //background-color: #f9f9f9;
`;
const Title = styled.h3`
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 1px;
    color: #666666;
    margin-bottom: 5px;
`;
const Details = styled.div`
    width: 46%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #7f8c8d;
    margin-bottom: 5px;
`;


const Type = styled.span<JobTypePropsType>`
    padding: 5px 10px;
    background-color: ${(props) => (props.type === "Full Time" ? "#2ecc71" : "#f39c12")};
    color: white;
    border-radius: 4px;
    font-weight: bold;
`;


const Dates = styled.p`
    display: flex;
    align-self: flex-end;
    font-size: 12px;
    color: #95a5a6;
    padding-right: 2px;
`;
const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
