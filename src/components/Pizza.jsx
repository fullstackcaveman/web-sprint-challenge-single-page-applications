import React, { useState } from 'react';
import PizzaForm from './PizzaForm';

const initialFormErrors = {
	size: '',
	sauce: '',
	toppings: '',
	substitute: '',
	instructions: '',
	name: '',
};

const initialFormValues = {
	size: '',
	sauce: '',
	toppings: '',
	substitue: '',
	instructions: '',
	name: '',
};

const initialPizza = {
	size: '',
	sauce: '',
	toppings: '',
	substitute: '',
	instructions: '',
	name: '',
};
const initialDisabled = true;

const Pizza = () => {
	const [formValues, setFormValues] = useState(initialFormValues);
	const [disabled, setDisabled] = useState(initialDisabled);

	console.log(formValues.toppings);

	const inputChange = (name, value) => {
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<div>
			<PizzaForm
				values={formValues}
				// submit={formSubmit}
				change={inputChange}
				disabled={disabled}
				// errors={formErrors}
			/>
		</div>
	);
};

export default Pizza;
