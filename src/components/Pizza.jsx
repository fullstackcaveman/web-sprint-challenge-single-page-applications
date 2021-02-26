import React, { useState } from 'react';
import PizzaForm from './PizzaForm';
import formSchema from '../validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
	size: '',
	sauce: 'originalRed',
	pepperoni: false,
	sausage: false,
	canadianbacon: false,
	spicyItalian: false,
	grilledChicken: false,
	onions: false,
	greenPepper: false,
	dicedTomatos: false,
	blackOlives: false,
	roastedGarlic: false,
	artichokeHearts: false,
	threeCheese: false,
	pineapple: false,
	extraCheese: false,
	glutenFree: false,
	instructions: '',
};
const initialFormErrors = {
	size: '',
	sauce: '',
	toppings: '',
	substitute: '',
	instructions: '',
};
const initialPizza = [];
const initialDisabled = true;

const Pizza = () => {
	const [pizza, setPizza] = useState(initialPizza);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(initialDisabled);

	const inputChange = (name, value) => {
		setFormValues({ ...formValues, [name]: value });
	};

	const formSubmit = () => {
		// const newPizza = {
		// 	size: formValues.size,
		// 	sauce: [
		// 		'original-red',
		// 		'garlic-ranch',
		// 		'bbq-sauce',
		// 		'spinach-alfredo',
		// 	].filter((sauce) => formValues[sauce]),
		// 	toppings: formValues.toppings,
		// 	substitute: formValues.substitute,
		// 	instructions: formValues.instructions,
		// };

		console.log('click');
	};

	return (
		<div>
			<PizzaForm
				values={formValues}
				submit={formSubmit}
				change={inputChange}
				disabled={disabled}
				errors={formErrors}
			/>
		</div>
	);
};

export default Pizza;
