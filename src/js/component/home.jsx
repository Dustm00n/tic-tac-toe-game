import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import PaginaOne from "./pagina1.jsx";

//create your first component
const Principal = () => {
	return (
		<>
			<h1>Hola Mundo</h1>
			<PaginaOne />
		</>
	);
};

export default Principal;
