import React, { useState } from 'react';
import PizzaForm from './PizzaForm';
import axios from 'axios';
import formSchema from '../validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
	size: '',
	sauce: '',
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
	name: '',
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

console.log(initialFormValues.toppings);

const Pizza = () => {
	const [pizza, setPizza] = useState(initialPizza);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(initialDisabled);

	const postNewPizza = (newPizza) => {
		axios
			.post('https://reqres.in/', newPizza)
			.then((res) => {
				setPizza([res.data, ...pizza]);
			})
			.catch((err) => {
				console.log(err);
			});
		setFormValues(initialFormValues);
		console.log(pizza);
	};

	const inputChange = (name, value) => {
		// yup
		// 	.reach(formSchema, name)
		// 	.validate(value)
		// 	.then(() => {
		// 		setFormErrors({ ...formErrors, [name]: '' });
		// 	})
		// 	.catch((err) => {
		// 		setFormErrors({ ...formErrors, [name]: err.errors[0] });
		// 	});

		setFormValues({ ...formValues, [name]: value });
	};

	const formSubmit = () => {
		const newPizza = formValues;
		console.log(newPizza);
		// {
		// 	size: formValues.size,
		// 	sauce: [
		// 		'original-red',
		// 		'garlic-ranch',
		// 		'bbq-sauce',
		// 		'spinach-alfredo',
		// 	].filter((sauce) => formValues[sauce]),
		// 	toppings: [
		// 		'pepperoni',
		// 		'sausage',
		// 		'canadianbacon',
		// 		'spicyItalian',
		// 		'grilledChicken',
		// 		'onions',
		// 		'greenPepper',
		// 		'dicedTomatos',
		// 		'blackOlives',
		// 		'roastedGarlic',
		// 		'artichokeHearts',
		// 		'threeCheese',
		// 		'pineapple',
		// 		'extraCheese',
		// 		'glutenFree',
		// 	].filter((topping) => formValues[topping]),
		// 	substitute: formValues.substitute,
		// 	instructions: formValues.instructions,
		// 	name: formValues.name,
		// };
		postNewPizza(newPizza);
		console.log(newPizza);
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
