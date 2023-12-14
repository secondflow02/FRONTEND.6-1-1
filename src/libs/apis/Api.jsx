import axios from "axios";
import { useEffect, useState } from "react";
// import { ListPage } from "../../pages";
import styled from "styled-components";
import MoveBtn from "../../pages/list/MoveBtn";

const GitApiPage = () => {
  // const dispatch = useDispatch();
  const baseUrl = "https://api.github.com/repos";
  const githubToken = "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";
  const repoOwner = "angular";
  const repoName = "angular-cli";
  const [issueData, setIssueData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const perPage = 20;

  //컴포넌트가 마운트 된 후 비동기적으로 데이터 가져오기 => async await
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/${repoOwner}/${repoName}/issues`,
          // "GET/user/issues",
          {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
              Authorization: `Bearer ${githubToken}`,
            },
            // 옵션 (query parameter)
            params: {
              per_page: perPage,
              page: 1,
            },
          }
        );
        console.log(response, "response");
        setIssueData(response.data);
        setIsLoading(false);
        // dispatch(getAllIssue({ issueData: response.data }));
      } catch (error) {
        console.log("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [repoOwner, repoName, githubToken, perPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  /* useEffect(() => {
    const fetchRepoData = async () => {
      try {
        // Fetch issue data
        const issuseResponse = await axios.get(
          `https://api.github.com/repos/${repoOwner}/${repoName}/issues`,
          {
            headers: {
              Authorization: `Bearer ${githubToken}`,
            },
            params: {
              page: 1,
              per_page: perPage,
            },
          }
        );

        setIssueData(issuseResponse.data);
      } catch (error) {
        console.error("Error fetching repository data:", error);
      }
    };
    fetchRepoData();
  }, [repoOwner, repoName, githubToken]); */

  console.log(issueData, "issueData");
  console.log(issueData[0].title, "issueData_title");

  return (
    <>
      <MoveBtn />
      {issueData.map((issues, index) => (
        <>
          <Styled.ListInfo key={index}>
            <Styled.ContentsInfo>
              <Styled.Title>{issues.title}</Styled.Title>
              <Styled.WrittenInfo>
                <Styled.Author>{issues.user.login}</Styled.Author>
                <Styled.CreateAt>{issues.created_at}</Styled.CreateAt>
              </Styled.WrittenInfo>
            </Styled.ContentsInfo>
            <Styled.Content>{issues.body}</Styled.Content>
          </Styled.ListInfo>
        </>
      ))}
    </>
  );
};
export default GitApiPage;

// html,css 추후 적용
const ListInfo = styled.div`
  /* width: 80%; */
  height: 150px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 30px;
  margin: 15px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;
const ContentsInfo = styled.div`
  /* display: flex; */
`;
const IssueNumber = styled.div``;
const Title = styled.h2``;
const WrittenInfo = styled.div`
  width: 50%;
  float: right;
  display: flex;
  justify-content: space-between;
`;
const Author = styled.div``;
const CreateAt = styled.div``;
const Content = styled.div`
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Comments = styled.img``;

const Styled = {
  ListInfo,
  ContentsInfo,
  IssueNumber,
  Title,
  WrittenInfo,
  Author,
  CreateAt,
  Content,
  Comments,
};

/* 
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
*/
