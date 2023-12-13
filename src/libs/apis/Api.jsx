import axios from "axios";
import List from "../../pages/list/List";
import { useState } from "react";

export const baseUrl = "https://api.github.com/repos";
export const githubToken = "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";
export const repoOwner = "angular";
export const repoName = "angular-cli";

const GitApiPage = async () => {
    const [issueData, setIssueData] = useState([]);
    const perPage = 10;

    //axios
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
                page: 20,
            },
        }
    );
    console.log(response.data);
    return <List issueData={response} />;
};
export default GitApiPage;
