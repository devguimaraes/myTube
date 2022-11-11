/* eslint-disable react/button-has-type */
import { React, useState } from 'react';
import { StyledRegisterVideo } from './styles';

// Whiteboarding
// Custom Hook
function useForm(propsDoForm) {
	const [values, setValues] = useState(propsDoForm.initialValues);

	return {
		values,
		handleChange: ({ evento }) => {
			console.log(evento.target);
			const { value } = evento.target;
			const { name } = evento.target;
			setValues({
				...values,
				[name]: value,
			});
		},
		clearForm() {
			setValues({});
		},
	};
}

export default function RegisterVideo() {
	const formCadastro = useForm({
		initialValues: { titulo: 'Frost punk', url: 'https://youtube..' },
	});
	const [formVisivel, setFormVisivel] = useState(false);
	/*
    ## O que precisamos para o form funcionar?
    - pegar os dados, que precisam vir do state
        - titulo
        - url do vídeo
    - precisamos ter um onSubmit do nosso form
    - Limpar o formulário após o Submit
    */

	return (
		<StyledRegisterVideo>
			<button className="add-video" onClick={() => setFormVisivel(true)}>
				+
			</button>
			{/* Ternário */}
			{/* Operadores de Curto-circuito */}
			{formVisivel ? (
				<form
					onSubmit={(evento) => {
						evento.preventDefault();
						console.log(formCadastro.values);

						setFormVisivel(false);
						formCadastro.clearForm();
					}}
				>
					<div>
						<button
							type="button"
							className="close-modal"
							onClick={() => setFormVisivel(false)}
						>
							X
						</button>
						<input
							placeholder="Titulo do vídeo"
							name="titulo"
							value={formCadastro.values.titulo}
							onChange={formCadastro.handleChange}
						/>
						<input
							placeholder="URL"
							name="url"
							value={formCadastro.values.url}
							onChange={formCadastro.handleChange}
						/>
						<button type="submit">Cadastrar</button>
					</div>
				</form>
			) : (
				false
			)}
		</StyledRegisterVideo>
	);
}
