import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
const Gato = (props) => {
	let [aparecer, setAparecer] = useState("d-none");
	let [ganador, setGanador] = useState("");

	useEffect(() => {
		let aux = props.tablero2;
		if (
			(aux[0][0] == "X" && aux[0][1] == "X" && aux[0][2] == "X") ||
			(aux[1][0] == "X" && aux[1][1] == "X" && aux[1][2] == "X") ||
			(aux[2][0] == "X" && aux[2][1] == "X" && aux[2][2] == "X") ||
			(aux[0][0] == "X" && aux[1][1] == "X" && aux[2][2] == "X") ||
			(aux[0][2] == "X" && aux[1][1] == "X" && aux[2][0] == "X") ||
			(aux[0][0] == "X" && aux[1][0] == "X" && aux[2][0] == "X") ||
			(aux[0][1] == "X" && aux[1][1] == "X" && aux[2][1] == "X") ||
			(aux[0][2] == "X" && aux[1][2] == "X" && aux[2][2] == "X")
		) {
			setAparecer("d-block");
			console.log("GANADOR");
			setGanador("X");
		} else if (
			(aux[0][0] == "O" && aux[0][1] == "O" && aux[0][2] == "O") ||
			(aux[1][0] == "O" && aux[1][1] == "O" && aux[1][2] == "O") ||
			(aux[2][0] == "O" && aux[2][1] == "O" && aux[2][2] == "O") ||
			(aux[0][0] == "O" && aux[1][1] == "O" && aux[2][2] == "O") ||
			(aux[0][2] == "O" && aux[1][1] == "O" && aux[2][0] == "O") ||
			(aux[0][0] == "O" && aux[1][0] == "O" && aux[2][0] == "O") ||
			(aux[0][1] == "O" && aux[1][1] == "O" && aux[2][1] == "O") ||
			(aux[0][2] == "O" && aux[1][2] == "O" && aux[2][2] == "O")
		) {
			setAparecer("d-block");
			console.log("GANADOR");
			setGanador("O");
		} else {
			console.log("Aun no hay ganador");
		}
	});
	const cambiarTurno = () => {
		let aux = props.tablero2;
		if (aux[0][0] === "X" || aux[0][0] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[0][0] = props.turnoActual;

			props.setTablero(aux);

			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno1 = () => {
		let aux = props.tablero2;
		if (aux[0][1] === "X" || aux[0][1] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[0][1] = props.turnoActual;
			props.setTablero(aux);
			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno2 = () => {
		let aux = props.tablero2;
		if (aux[0][2] === "X" || aux[0][2] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[0][2] = props.turnoActual;
			props.setTablero(aux);
			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno3 = () => {
		let aux = props.tablero2;
		if (aux[1][0] === "X" || aux[1][0] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[1][0] = props.turnoActual;

			props.setTablero(aux);

			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno4 = () => {
		let aux = props.tablero2;
		if (aux[1][1] === "X" || aux[1][1] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[1][1] = props.turnoActual;
			props.setTablero(aux);
			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno5 = () => {
		let aux = props.tablero2;
		if (aux[1][2] === "X" || aux[1][2] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[1][2] = props.turnoActual;
			props.setTablero(aux);
			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno6 = () => {
		let aux = props.tablero2;

		if (aux[2][0] === "X" || aux[2][0] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[2][0] = props.turnoActual;

			props.setTablero(aux);

			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno7 = () => {
		let aux = props.tablero2;
		if (aux[2][1] === "X" || aux[2][1] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[2][1] = props.turnoActual;
			props.setTablero(aux);
			props.alternarTurno(...props.turno2);
		}
	};
	const cambiarTurno8 = () => {
		let aux = props.tablero2;
		if (aux[2][2] === "X" || aux[2][2] === "O") {
			console.log("No puedes poner un valor aqui");
		} else {
			aux[2][2] = props.turnoActual;
			props.setTablero(aux);
			props.alternarTurno(...props.turno2);
		}
	};
	const volverAJugar = () => {
		let aux = [
			["???", "???", "???"],
			["???", "???", "???"],
			["???", "???", "???"],
		];
		setAparecer("d-none");

		props.setTablero(aux);
	};
	const irAlLogin = () => {
		props.setDesaparecer("d-block");
		props.setAparecerTic("d-none");
		setAparecer("d-none");
		volverAJugar();
	};

	return (
		<div
			className={
				"col-10 contenedorChico bg-dark p-3 " + props.aparecerTic
			}>
			<div className={aparecer}>
				<h1 className="h1 text-center">
					?? {ganador == "X" ? props.nombre1 : props.nombre2} ES
					GANAD@R! {ganador}
				</h1>
				<button
					className="btn btn-danger my-2 mx-2"
					onClick={volverAJugar}>
					Quiero volver a jugar!
				</button>
				<button
					className="btn btn-primary my-2 mx-2"
					onClick={irAlLogin}>
					Ir al login!
				</button>
			</div>
			<div className="row justify-content-center">
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100 border-top-0 border-left-0"
						onClick={cambiarTurno}>
						{props.tablero[0][0]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100 border-top-0"
						onClick={cambiarTurno1}>
						{props.tablero[0][1]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100 border-top-0 border-right-0"
						onClick={cambiarTurno2}>
						{props.tablero[0][2]}
					</button>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100 border-left-0"
						onClick={cambiarTurno3}>
						{props.tablero[1][0]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button className="btnTicTac w-100" onClick={cambiarTurno4}>
						{props.tablero[1][1]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100 border-right-0"
						onClick={cambiarTurno5}>
						{props.tablero[1][2]}
					</button>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100 border-left-0 border-bottom-0"
						onClick={cambiarTurno6}>
						{props.tablero[2][0]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100 border-bottom-0"
						onClick={cambiarTurno7}>
						{props.tablero[2][1]}
					</button>
				</div>
				<div className="col-3 m-0 p-0">
					<button
						className="btnTicTac w-100 border-bottom-0 border-right-0"
						onClick={cambiarTurno8}>
						{props.tablero[2][2]}
					</button>
				</div>
			</div>
			<button className="btn btn-success mt-5" onClick={volverAJugar}>
				Resetear
			</button>
		</div>
	);
};

Gato.propTypes = {
	aparecerTic: PropTypes.string,
	setDesaparecer: PropTypes.string,
	turnoActual: PropTypes.string,
	turno2: PropTypes.string,
	nombre1: PropTypes.string,
	nombre2: PropTypes.string,
	tablero: PropTypes.array,
	setTablero: PropTypes.func,
	alternarTurno: PropTypes.func,
	setTurno: PropTypes.func,
	setAparecerTic: PropTypes.func,
	asignarTurno: PropTypes.func,
	tablero2: PropTypes.array,
};

export default Gato;
