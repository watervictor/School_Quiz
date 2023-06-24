import React from "react";
import styled from "styled-components";
import { GlobalContext } from "../Data/Global";

const LandingPage = () => {
  const data = [
    {
      id: 1,
      question: "3 + 9",
      answer: 12,
      a: 12,
      b: 2,
      c: 6,
      d: 7,
    },
    {
      id: 2,
      question: "3 + 0",
      answer: 12,
      a: 12,
      b: 2,
      c: 6,
      d: 7,
    },
    {
      id: 3,
      question: "3 + 8",
      answer: 12,
      a: 12,
      b: 2,
      c: 6,
      d: 7,
    },
    {
      id: 4,
      question: "3 + 1",
      answer: 12,
      a: 12,
      b: 2,
      c: 6,
      d: 7,
    },
    {
      id: 5,
      question: "3 + 2",
      answer: 12,
      a: 12,
      b: 2,
      c: 6,
      d: 7,
    },
    {
      id: 6,
      question: "3 + 3",
      answer: 12,
      a: 12,
      b: 2,
      c: 6,
      d: 7,
    },
  ];

  const fn = (value: number) => {
    const question = data.filter((e) => e.id === value);
    return question;
  };
  const allow = React.useContext(GlobalContext);
  console.log("all", allow?.questiondata);
  console.log("data1", fn(2));
  React.useEffect(() => {
    console.log("data", fn(allow?.questiondata));
  }, []);
  const [answering, setAnswering] = React.useState(false);
  const check = () => {
    setAnswering(!answering);
  };

  return (
    <div>
      <Container>
        {fn(1).map((props: any) => (
          <Main>
            <Holder>
              <Card>{props?.question}</Card>
              <Circle />
              <CircleII />
              <CircleIII />
            </Holder>
            <BottomCard>
              <CircleIV onClick={check}>Check</CircleIV>
              <But>
                <div>
                  {answering ? (
                    <Butt bg={props.a === props.answer ? "green" : "red"}>
                      {props.a}
                    </Butt>
                  ) : (
                    <div>
                      <Butt bg="grey">{props.a}</Butt>
                    </div>
                  )}
                </div>
                <div>
                  {answering ? (
                    <Butt bg={props.b === props.answer ? "green" : "red"}>
                      {props.b}
                    </Butt>
                  ) : (
                    <div>
                      <Butt bg="grey">{props.b}</Butt>
                    </div>
                  )}
                </div>
              </But>
              <But>
                <div>
                  {answering ? (
                    <Butt bg={props.c === props.answer ? "green" : "red"}>
                      {props.c}
                    </Butt>
                  ) : (
                    <div>
                      <Butt bg="grey">{props.c}</Butt>
                    </div>
                  )}
                </div>
                <div>
                  {answering ? (
                    <Butt bg={props.d === props.answer ? "green" : "red"}>
                      {props.d}
                    </Butt>
                  ) : (
                    <div>
                      <Butt bg="grey">{props.d}</Butt>
                    </div>
                  )}
                </div>
              </But>
              <CircleV>Done</CircleV>
            </BottomCard>
          </Main>
        ))}
      </Container>
    </div>
  );
};

export default LandingPage;

const CircleV = styled.div`
  position: absolute;
  right: 13%;
  border-radius: 50%;
  z-index: 2;
  background: rgba(225, 225, 225, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 15px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    background-color: green;
  }
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`;

const CircleIV = styled.div`
  position: absolute;
  left: 13%;
  border-radius: 10px;
  z-index: 2;
  background: rgba(225, 225, 225, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 15px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    background-color: green;
  }
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`;

const CircleIII = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(17px);
  -webkit-backdrop-filter: blur(17px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  position: absolute;
  bottom: -10px;
  right: 200px;
  z-index: -100;
  transform: rotate(45deg);
`;
const CircleII = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  background: rgba(225, 225, 225, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  border: 1px solid rgba(255, 255, 255, 0.18);

  position: absolute;
  top: 68px;
  right: -40px;
  z-index: -100;
`;

const Circle = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 100%;

  background: rgba(225, 225, 225, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  /* border-radius: 10px; */
  border: 1px solid rgba(255, 255, 255, 0.18);

  position: absolute;
  top: -48px;
  left: -40px;
  z-index: -100;
`;

const Butt = styled.div<{ bg: string }>`
  margin: 20px;
  background-color: ${({ bg }) => bg};
  padding: 20px 28px;
`;

const But = styled.div`
  display: flex;
`;

const BottomCard = styled.div`
  background-color: #213a5a;
  height: 200px;
  position: relative;
  width: 85%;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  /* position: relative; */
`;

const Holder = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 10px;
  text-overflow: break-word;
  z-index: 100;
  position: relative;

  background: rgba(255, 255, 255, 0.05);
  /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 14.5px );
-webkit-backdrop-filter: blur( 14.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 ); */

  margin-bottom: 50px;

  /* background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
position: relative;
z-index: 10;  */
`;

const Card = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 10px;
  text-overflow: break-word;
  z-index: 100;
  position: absolute;

  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(14.5px);
  -webkit-backdrop-filter: blur(14.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-weight: 700;
  font-size: 25px;
`;

const Main = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  background: rgb(82, 150, 228);
  background: linear-gradient(
    0deg,
    rgba(82, 150, 228, 1) 50%,
    rgba(43, 101, 193, 1) 100%,
    rgba(47, 110, 211, 1) 100%
  );
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
`;

/* background: rgba(255, 255, 255, 0.15);
box - shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop - filter: blur(14.5px);
-webkit - backdrop - filter: blur(14.5px);
border - radius: 10px;
border: 1px solid rgba(255, 255, 255, 0.18); */
