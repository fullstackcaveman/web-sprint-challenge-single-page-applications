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
	instructions: yup
		.string()
		.required('Please enter your name')
		.min(2, 'Name must be at least 2 characters'),
});

export default formSchema;
