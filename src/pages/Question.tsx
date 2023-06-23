import styled from "styled-components";

const Question = () => {
  return (
    <Container>
      <Circle1 />
      <Circle2 />
      <Main>
        <Query>Who was the first person to ... ?</Query>
        <Options>
          <WrapOptions>
            <FirstPairOptions>
              <Option></Option>
              <Option></Option>
            </FirstPairOptions>
            <SecondPairOptions></SecondPairOptions>
          </WrapOptions>
        </Options>
      </Main>
      <Answer></Answer>
    </Container>
  );
};

export default Question;

const FirstPairOptions = styled.div`
  display: flex;
  gap: 10px;
`;
const SecondPairOptions = styled.div``;
const WrapOptions = styled.div``;
const Option = styled.div`
  width: 50%;
  height: 100px;
  background-color: red;
`;
// const Selector = styled.input``;
const Options = styled.div`
  width: 100%;
  height: fit-content;
`;
const Query = styled.div`
  text-align: center;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0077ff86;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  font-size: 18px;
  color: white;
  gap: 30px;
  padding: 40px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
const Answer = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  right: 18%;
  bottom: 25%;
`;
const Circle1 = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  right: 18%;
  top: 5%;
`;
const Circle2 = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  left: 18%;
  bottom: 5%;
`;
