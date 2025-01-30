import styled from "styled-components";
import {dataPropsType, JobTypePropsType} from "../types/listOfItmes.ts";


export const ListOfItems = ({data}: { data: dataPropsType[] }) => {
    return (
        <List>
            {data.map((job, index) => (
                <Item key={index}>
                    <ItemWrapper>
                        <Title>{job.title}</Title>
                        <Type type={job.type}>{job.type}</Type>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Details>
                            <JobCompany>{job.company}</JobCompany>
                            <JobLocation>{job.location}</JobLocation>
                        </Details>
                        <Dates>{job.dates}</Dates>
                    </ItemWrapper>
                </Item>
            ))}
        </List>
    )
}
const JobCompany = styled.span`
    font-weight: 500;
    font-size: 0.75rem; // 12px -> 0.75rem
    line-height: 1.75rem; // 28px -> 1.75rem
    letter-spacing: 0.0625rem; // 1px -> 0.0625rem
    color: #95a5a6;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const Item = styled.li`
    display: flex;
    flex-direction: column;
    padding: 0 0 0.9375rem 0.125rem; // 15px -> 0.9375rem, 2px -> 0.125rem
    margin-bottom: 0.625rem; // 10px -> 0.625rem
    border-bottom: 0.0625rem solid #ddd; // 1px -> 0.0625rem
    //background-color: #f9f9f9;
`;

const Title = styled.h3`
    font-size: 1.25rem; // 20px -> 1.25rem
    font-weight: 400;
    line-height: 1.75rem; // 28px -> 1.75rem
    letter-spacing: 0.0625rem; // 1px -> 0.0625rem
    color: #666666;
    margin-bottom: 0.3125rem; // 5px -> 0.3125rem
`;

const Details = styled.div`
    width: 46%;
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem; // 14px -> 0.875rem
    color: #7f8c8d;
    margin-bottom: 0.3125rem; // 5px -> 0.3125rem
`;

const Type = styled.span<JobTypePropsType>`
    padding: 0.3125rem 0.625rem; // 5px -> 0.3125rem, 10px -> 0.625rem
    background-color: ${(props) => (props.type === "Full Time" ? "#2ecc71" : "#f39c12")};
    color: white;
    border-radius: 0.25rem; // 4px -> 0.25rem
    font-weight: bold;
`;

const Dates = styled(JobCompany)`
    display: flex;
    align-self: flex-end;
`;

const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const JobLocation = styled(JobCompany)``;
