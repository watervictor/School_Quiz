import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../assets/log.png"
import { NavLink, useNavigate } from "react-router-dom";

import {Allquestion} from "../Utils/Question"



const StartTest = () => {
	const [email, setEmail] = useState<string>("");
	console.log(Allquestion);

	const [aquestion, SetQuestion] = useState("")

	const GetAQuestion = (id: any) =>{
const test = Allquestion.filter((el: any) => el?.id === id).map((el) => el?.Question).toString();
SetQuestion(test)
	}
	console.log(GetAQuestion);
	

	return (
		<div>
			<Container>
				<Wrapper>	
					<First>
							<NavLink to="/">
						<LogoHold>
							<Logo
								alt="image"
								src={img1} />
						</LogoHold>
							</NavLink>
						<SignUpHold>
							<h1>Start Quiz!!</h1>
							<div>
								By Clicking the <strong>Start Quiz Button,</strong> we believe you have listen to the instructors
								 and you are to some extent Perfectly clear with it.
								<br />
								<br />
							<h2>All the Best!!!</h2>
							</div>
						
						</SignUpHold>
					</First>
					<Second>

						<Desc>
							<h2> Goodluck on the session!!</h2>
						</Desc>
						{/* <Input
								value={email}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setEmail(e.target.value.toLowerCase());
								}}
								placeholder='Please enter your selected number '
								type='text'
							/> */}

						<Input
								// value={aquestion}
								onChange={(e) => {
									setEmail(e.target.value)
								}}
								placeholder='Please enter your selected number '
								type='text'
							/>
							
							<NavLink to="/questions">
							<Button
								cursor={email !== "" ? "" : "value"}
								bg={email !== "" ? "" : "value"}
									>
									Start Quiz
								</Button>
							</NavLink>
							
						
					</Second>
				</Wrapper>
			</Container>
		</div>
	);
};

export default StartTest;

const Desc = styled.div`
	li {
		display: flex;
		list-style: none;
		margin-bottom: 10px;
		margin-right: 13px;
	}

	h2 {
		font-weight: 700;
		font-size: 14px;
		text-transform: uppercase;
		margin-bottom: 10px;
		margin-top: 20px;
	}

	p {
		margin-top: 0px;
	}

	display: flex;
	align-items: center;
	flex-direction: column;
`;


const Button = styled.button<{bg: string, cursor: string}>`
	width: 200px;
	height: 50px;
	margin-bottom: 20px;
	border: none;
	outline: none;
	border-radius: 5px;
	/* background-color: purple; */
	background-color: ${({bg}) => bg ? "silver" : "purple"};
	color: white;
	font-family: Poppins;
	text-transform: uppercase;
	font-weight: 500;
	cursor: ${({cursor}) => cursor ? "not-allowed" : "pointer"};
font-size:18px;

	@media screen and (max-width: 960px) {
		width: 300px;
	}
`;

const Input = styled.input`
	width: 400px;
	height: 50px;
	margin-bottom: 20px;
	border: 1px solid silver;
	outline: 0px;
	border-radius: 5px;
	padding-left: 20px;
	transition: all 340ms;
font-family: Poppins;
	:focus{
		outline: 1px solid purple;
		border: 1px solid purple;
	}

	::placeholder{
		font-family: Poppins;
		color: silver
	}

	@media screen and (max-width: 960px) {
		width: 300px;
	}
`;

const SignUpHold = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 400px;
	height: 400px;
	flex-direction: column;
	margin-left: 50px;
	margin-top: 50px;
	
	h1 {
		font-weight: 500;
		margin: 0;
		text-transform: uppercase;
		font-size:25px;
		font-weight: bold;
		margin-bottom: 10px;
	}
	h2 {
		font-weight: 500;
		margin: 0;
		text-transform: uppercase;
		font-size:20px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	p {
		margin-left: 13px;
		margin-right: 13px;
		width: 600px;
		@media screen and (max-width: 960px) {
			width: 300px;
		}
	}

	span {
		color: blue;
		text-decoration: underline;
	}

	div {
	margin-bottom: 10px;
	}
`;

const LogoHold = styled.div`
	width: 200px;
	height: 70px;
	margin-left: 30px;
`;

const Logo = styled.img`
	height: 200px;
	/* width:300px; */
	object-fit: contain;
	margin-top: 10px;
`;



const Second = styled.div`
	height: 500px;
margin-left: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const First = styled.div`
	margin-right: 50px;
	height: 500px;
	display: flex;
	flex-direction: column;
`;

const Wrapper = styled.div`
	width: 80%;
	margin: 100px 0px 0px 0px;
	border-radius: 10px;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	box-shadow: 1px 1px 10px 1px rgba(218, 218, 218, 0.9);
	/* background-color: red; */
	height: 75vh;
`;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: poppins;
	/* background-color: red; */
`;
