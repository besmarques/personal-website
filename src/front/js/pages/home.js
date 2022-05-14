import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import  Hero  from "../component/hero.jsx";
import  SobreMim  from "../component/sobreMim.jsx";
import  Projectos  from "../component/projectos.jsx";
import  Certificacoes  from "../component/certificacoes.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
		teste
		<Hero />
		<SobreMim />
		<Projectos />
		<Certificacoes />
		</>
	);
};
