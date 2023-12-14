import styled from "styled-components";

const ListItem = ({ issueData }) => {
  // console.log(issueData);

  if (!Array.isArray(issueData)) {
    console.log("issueData is not an array:", issueData);
    return null;
  }
  return (
    <>
      {issueData &&
        issueData.map((issue, index) => (
          <Styled.ListInfo key={index}>
            <Styled.ContentsInfo>
              <Styled.Title>{issue.title}</Styled.Title>
              <Styled.WrittenInfo>
                <Styled.Author>{issue.user.login}</Styled.Author>
                <Styled.CreateAt>{issue.created_at}</Styled.CreateAt>
              </Styled.WrittenInfo>
              <Styled.Content>{issue.body}</Styled.Content>
            </Styled.ContentsInfo>
            <Styled.IssueNumber>{issue.number}</Styled.IssueNumber>
            <Styled.Comments>{issue.comments}</Styled.Comments>
          </Styled.ListInfo>
        ))}
    </>
  );
};
export default ListItem;

const ListInfo = styled.div`
  border: 1px solid black;
`;
const ContentsInfo = styled.div``;
const IssueNumber = styled.div``;
const Title = styled.h3``;
const WrittenInfo = styled.div``;
const Author = styled.p``;
const CreateAt = styled.p``;
const Content = styled.p``;
// const Comments = styled.img``;

const Styled = {
  ListInfo,
  ContentsInfo,
  IssueNumber,
  Title,
  WrittenInfo,
  Author,
  CreateAt,
  Content,
  // Comments,
};
