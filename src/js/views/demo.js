import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import AddContact from "./addcontact";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<AddContact />
			<br />
			<Link to="/">
				<a>Back home</a>
			</Link>
		</div>
	);
};
