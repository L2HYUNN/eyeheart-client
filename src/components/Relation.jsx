import moment from "moment";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getAnalysisRelation } from "../api/api";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 66rem;
  height: 145rem;
  padding-top: 2.5rem;
  grid-area: relation;
  @media ${({ theme }) => theme.size.small} {
    /* min-width: max-content; */
    width: 100vw;
    padding-left: 0rem;
    padding-top: 3rem;
    height: 130vh;
  }
`;
const RelationItems = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 140rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 2rem;
  padding: 2rem 4rem;
  @media ${({ theme }) => theme.size.small} {
    flex-direction: column;
    width: 90%;
    height: 100%;
    padding: 0;
  }
`;
const RelationItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const RelationContents = styled.div`
  display: flex;
  align-items: center;
  /* border-top: 1px solid rgba(0, 0, 0, 0.2); */
`;
const RelationImg = styled.img`
  width: 20rem;
  height: 20rem;
  margin-bottom: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  &:hover {
    border: 1px solid #ffc6ae;
  }
  @media ${({ theme }) => theme.size.small} {
    width: 14rem;
    height: 16rem;
  }
`;
const RelationLabel = styled.p`
  width: 20rem;
  height: 100%;
  font-size: 2.4rem;
  text-align: center;
  padding: 1rem 0;
  /* border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(0, 0, 0, 0.2); */
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.size.small} {
    width: 14rem;
    font-size: 1.8rem;
  }
`;
const RelationName = styled.p`
  font-size: 3.6rem;
  text-align: center;
  margin-bottom: 1rem;
  margin-right: 2rem;
  background-color: #ffc6ae;
  padding: 1rem;
  border-radius: 50%;
  @media ${({ theme }) => theme.size.small} {
    font-size: 2.6rem;
  }
`;
const RelationTexts = styled.div``;
const RelationText = styled.p`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1.5rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.4rem;
  }
`;

const date = moment(new Date()).format("YYYYMMDD");

function Relation() {
  const [relationship, setRelationship] = useState({});
  const { isLoading, data } = useQuery("analysisRelation", () =>
    getAnalysisRelation(date)
  );

  useEffect(() => {
    if (!isLoading) {
      setRelationship(data?.data?.summary?.relationship);
    }
  }, [isLoading, data]);

  return (
    <Container>
      <RelationItems>
        {relationship
          ? Object.entries(relationship).map(([key, value]) => {
              return (
                <RelationItem key={key}>
                  <RelationImg src={value?.thumbnail} />
                  <RelationLabel>{key}</RelationLabel>
                  <RelationContents>
                    <RelationName>{value?.score}</RelationName>

                    <RelationTexts>
                      {value?.topic.map(({ name, count }) => {
                        return (
                          <RelationText key={name}>
                            {name}: {count}
                          </RelationText>
                        );
                      })}
                    </RelationTexts>
                  </RelationContents>
                </RelationItem>
              );
            })
          : null}
      </RelationItems>
    </Container>
  );
}

export default Relation;
