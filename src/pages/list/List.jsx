// import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import GitApiPage from "../../libs/apis/Api";

//domy
const ListPage = () => {
  console.log(GitApiPage(), "gitApiPage");

  return (
    <>
      <ListItem issueData={GitApiPage()} />
    </>
  );
};
export default ListPage;

/* const ListPage = () => {
  const issueList = useSelector((state) => state.issues.issueList);
  return (
    <>
      <h2>Issue List</h2>
      {issueList.length > 0 ? (
        <ListItem issueData={issueList} />
      ) : (
        <p>No issues found.</p>
      )}
    </>
  );
};
export default ListPage;
 */
