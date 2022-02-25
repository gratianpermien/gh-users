import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faBookmark } from "@fortawesome/free-solid-svg-icons";

function Result({ item, addBookmark, hasBookmark }) {
  //handling of result display and toggler
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }
  const resultSchema = {
    image: item.avatar_url,
    id: item.id,
    link: item.html_url,
    name:
      item.login.length > 10
        ? item.login.substring(0, 9) + "..."
        : item.login.substring(0, 9),
  };

  return (
    <ResultWrapper>
      <BookmarkButton
        hasBookmark={hasBookmark}
        onClick={() => addBookmark(item)}
      >
        <FontAwesomeIcon icon={faBookmark} />
      </BookmarkButton>
      <BasicInfo>
        <Image visible={!toggle} src={resultSchema.image} alt="avatar" />
        <div>
          <Title>{resultSchema.name}</Title>
          <Subtitle>{resultSchema.id}</Subtitle>
        </div>
        <InfoButton onClick={handleToggle} visible={toggle}>
          <FontAwesomeIcon icon={faChevronRight} />
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
  color: ${(props) =>
    props.visible ? "var(--primary-color)" : "var(--tertiary-bg)"};
  transform: ${(props) => (props.visible ? "rotate(90deg)" : "rotate(0deg)")};
  &:hover {
    color: var(--primary-color);
    transform: rotate(90deg);
  }
`;

const BookmarkButton = styled(InfoButton)`
  color: ${(props) =>
    props.hasBookmark ? "var(--primary-color)" : "var(--tertiary-bg)"};
  position: absolute;
  top: -0.5em;
  left: 90%;
  &:hover {
    color: var(--primary-color);
    transform: rotate(2deg);
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
  padding-top: ${(props) => (props.visible ? "1em" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  padding-left: 1em;
  padding-right: 1em;
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
