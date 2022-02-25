import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

function Result({ item }) {
  const [toggle, setToggle] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  function handleToggle() {
    setToggle(!toggle);
  }
  const resultSchema = {
    image: item.avatar_url,
    name: item.login,
    id: item.id,
    link: item.html_url,
  };

  function addToBookmarks(bookmarkedItems, id) {
    const inBookmarks = bookmarkedItems.includes(id);
    if (inBookmarks) {
      setBookmarkedItems(bookmarked.filter((item) => item.id !== id));
      setIsBookmarked(false);
    } else {
      setBookmarkedItems(...bookmarkedItems, id);
      setIsBookmarked(true);
    }
    console.log(bookmarkedItems);
  }

  return (
    <ResultWrapper>
      <BookmarkButton
        isBookmarked={isBookmarked}
        onClick={() => addToBookmarks(bookmarkedItems, resultSchema.id)}
      >
        <FontAwesomeIcon icon={faBookmark} />
      </BookmarkButton>
      <BasicInfo>
        <Image visible={!toggle} src={resultSchema.image} alt="avatar" />
        <div>
          <Title>{resultSchema.name}</Title>
          <Subtitle>{resultSchema.id}</Subtitle>
        </div>
        <InfoButton onClick={handleToggle}>
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </InfoButton>
      </BasicInfo>
      <AddtlInfo visible={toggle}>
        <a href={resultSchema.link}>Off to {resultSchema.name}'s profile!</a>
      </AddtlInfo>
    </ResultWrapper>
  );
}

export default Result;

const Title = styled.h2``;
const Subtitle = styled.h3``;
const Image = styled.img`
  width: 72px;
  height: auto;
  border-top-left-radius: 1em;
  border-bottom-left-radius: ${(props) => (props.visible ? "1em" : "0")};
`;

const BasicInfo = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`;

const InfoButton = styled.a`
  cursor: pointer;
  font-size: var(--icon-size);
  transition: all 0.2s;
  color: #4e95f1;
  &:hover,
  &:active {
    color: #3c74bd;
  }
`;

const BookmarkButton = styled(InfoButton)`
  color: ${(props) => (props.isBookmarked ? `#f18f4e` : `#f1e14e`)};
  position: absolute;
  top: -0.5em;
  left: 90%;
  &:hover,
  &:active {
    color: #c9bb40;
  }
`;
const AddtlInfo = styled.div`
  background: var(--tertiary-bg);
  color: #fff;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  height: ${(props) => (props.visible ? "1" : "0")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  padding-bottom: ${(props) => (props.visible ? "1em" : "0")};
  padding-left: 1em;
  padding-right: 1em;
  padding-top: ${(props) => (props.visible ? "1em" : "0")};
  /* transition: padding-bottom 600ms, padding-top 600ms, height 600ms,
    opacity 600ms; */
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  a {
    color: var(--primary-color);
    text-decoration: none;
  }
  a:hover {
    font-weight: 600;
  }
`;

const ResultWrapper = styled.div`
  position: relative;
  border-radius: 1em;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  background-color: var(--secondary-bg);
  flex-direction: column;
  margin: 1em;
`;
