// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
	size: yup
		.string()
		.required('Please select size.')
		.oneOf(
			['x-large', 'large', 'medium', 'small', 'personal'],
			'Size is required'
		),
	sauce: yup
		.string()
		.required('Email is required')
		.oneOf(['original-red', 'garlic-ranch', 'bbq-sauce', 'spinach-alfredo']),
	toppings: yup
		.boolean()
		.oneOf(
			[
				'pepperoni',
				'sausage',
				'canadian-bacon',
				'spicy-italian',
				'grilled-chicken',
				'onions',
				'green-pepper',
				'diced-tomatos',
				'black-olives',
				'roasted-garlic',
				'artichoke-hearts',
				'three-cheese',
				'pineapple',
				'extra-cheese',
			],
			'At least one topping is required'
		),
	substitute: yup.boolean(),
	instructions: yup.string(''),
});

export default formSchema;
