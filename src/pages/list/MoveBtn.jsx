import { useState, useRef } from "react";
import styled from "styled-components";
const MoveBtn = () => {
  const [setLend] = useState(false);
  const countRef = useRef(0);
  const [listPage] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  const onPageBtn = (e) => {
    const clickIndex = Array.from(e.currentTarget.parentNode.chlidren).indexof(
      e.currentTarget
    );
    countRef.current = clickIndex;
    setLend((prev) => !prev);
    console.log(countRef.current);
  };
  // const onPageBtn = (number) => {
  //   countRef.current = number;
  //   console.log(countRef.current);
  //   setLend((prev) => !prev);
  // };

  return (
    <Styled.BtnContain>
      <Styled.firstBtn></Styled.firstBtn>
      {listPage.map((number, index) => (
        <Styled.PageBtn key={index} vlaue={number} onClick={onPageBtn}>
          {number}
        </Styled.PageBtn>
      ))}
      <Styled.lastBtn></Styled.lastBtn>
    </Styled.BtnContain>
  );
};
export default MoveBtn;

const BtnContain = styled.div`
  width: 80px;
  height: 320px;
  float: right;
  margin-right: 40px;
  flex-direction: column;
  border: 1px solid;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const PageBtn = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  padding: 3px;
`;
const firstBtn = styled.a``;
const lastBtn = styled.a``;
const Styled = {
  BtnContain,
  PageBtn,
  firstBtn,
  lastBtn,
};
