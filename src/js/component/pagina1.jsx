import React from "react";

const PaginaOne = () => {
	return (
		<div className="Container">
			<span>Escoge tu Figurita</span>
			<div className="Cajita-Input">
				<input
					type="text"
					className=""
					placeholder="Jugador 1 Username"
				/>
				<input
					type="text"
					className=""
					placeholder="Jugador 2 Username"
				/>
			</div>
			<div className="GrupoBotones">
				<button className="Boton-O">O</button>
				<button className="Boton-X">X</button>
			</div>
		</div>
	);
};
export default PaginaOne;
