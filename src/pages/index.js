import { Octokit } from "https://cdn.skypack.dev/octokit";
const IssueList = async () => {
    const octokit = new Octokit({
        auth: "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",
        //process.env.REACT_APP_OKTOKIT_TOKEN
    });

    const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner: "angular",
        repo: "angular-cli",
        headers: {
            "X-GitHub-Api-Version": "2022-11-28",
        },
    });
    console.log(response.data);
};
export default IssueList;
