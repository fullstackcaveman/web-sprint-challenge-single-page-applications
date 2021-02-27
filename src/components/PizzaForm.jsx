import React, { useState } from 'react';

const PizzaForm = (props) => {
	const { values, submit, change, disabled, errors } = props;

	const [price, setPrice] = useState('10');
	const [quantity, setQuantity] = useState('1');

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		const valueToUse = type === 'checkbox' ? checked : value;
		change(name, valueToUse);
	};

	console.log(values);

	return (
		<div className='pizza-flex'>
			<div className='form-container'>
				<header className='pizza-form'>
					<h1>Create Your Masterpiece</h1>
					<img src='../images/Pizza.jpg' alt='' />
				</header>
				<form onSubmit={submit}>
					<div>
						<h2>Build Your Pizza Below</h2>
					</div>
					{/* Size Options */}
					<div className='size'>
						<div>
							<h3>Choice of Size</h3>
							<p>* Required</p>
						</div>
						<div className='size-input'>
							<div className='error'>{errors.size}</div>
							<select onChange={onChange} value={values.size} name='size'>
								<option value=''>-- Please Select --</option>
								<option value='x-large'>X-Large</option>
								<option value='large'>Large</option>
								<option value='medium'>Medium</option>
								<option value='small'>Small</option>
								<option value='personal'>Personal Size</option>
							</select>
						</div>
					</div>
					{/* Sauce Options */}
					<div className='sauce'>
						<div>
							<h3>Choice of Sauce</h3>
							<p>* Required</p>
						</div>
						<div className='sauce-input'>
							<div>
								<label>
									<input
										type='radio'
										name='sauce'
										value='originalRed'
										onChange={onChange}
										checked={values.sauce === 'originalRed' || ''}
									/>
									Original Red
								</label>
							</div>
							<div>
								<label htmlFor='garlic-ranch'>
									<input
										type='radio'
										name='sauce'
										value='garlicRanch'
										onChange={onChange}
										checked={values.sauce === 'garlicRanch' || ''}
									/>
									Garlic Ranch
								</label>
							</div>
							<div>
								<label htmlFor='bbq-sauce'>
									<input
										type='radio'
										name='sauce'
										value='bbqSauce'
										onChange={onChange}
										checked={values.sauce === 'bbqSauce' || ''}
									/>
									BBQ Sauce
								</label>
							</div>
							<div>
								<label htmlFor='spinach-alfredo'>
									<input
										type='radio'
										name='sauce'
										value='spinachAlfredo'
										onChange={onChange}
										checked={values.sauce === 'spinachAlfredo' || ''}
									/>
									Spinach Alfredo
								</label>
							</div>
						</div>
					</div>

					{/* Toppings Options */}
					<div className='errors'>{errors.toppings}</div>
					<div className='toppings'>
						<div>
							<h3>Add Toppings</h3>
							<p>Choose up to 10</p>
						</div>
						<div className='toppings-input'>
							{/* Left Column */}
							<div className='left-column'>
								<div className='pepperoni-check'>
									<label>
										<input
											type='checkbox'
											name='pepperoni'
											onChange={onChange}
											checked={values.pepperoni}
										/>
										Pepperoni
									</label>
								</div>
								<div className='sausage-check'>
									<label>
										<input
											type='checkbox'
											name='sausage'
											onChange={onChange}
											checked={values.sausage || ''}
										/>
										Sausage
									</label>
								</div>
								<div className='canadian-bacon-check'>
									<label>
										<input
											type='checkbox'
											name='canadianBacon'
											onChange={onChange}
											checked={values.canadianBacon || ''}
										/>
										Canadian Bacon
									</label>
								</div>
								<div className='spicy-italian-check'>
									<label>
										<input
											type='checkbox'
											name='spicyItalian'
											onChange={onChange}
											checked={values.spicyItalian || ''}
										/>
										Spicy Italian Sausage
									</label>
								</div>
								<div className='grilled-chicken-check'>
									<label>
										<input
											type='checkbox'
											name='grilledChicken'
											onChange={onChange}
											checked={values.grilledChicken || ''}
										/>
										Grilled Chicken
									</label>
								</div>
								<div className='onions-check'>
									<label>
										<input
											type='checkbox'
											name='onions'
											onChange={onChange}
											checked={values.onions || ''}
										/>
										Onions
									</label>
								</div>
								<div className='green-pepper-check'>
									<label>
										<input
											type='checkbox'
											name='greenPepper'
											onChange={onChange}
											checked={values.greenPepper || ''}
										/>
										Green Pepper
									</label>
								</div>
							</div>
							{/* Right Column */}
							<div className='right-column'>
								<div className='diced-tomatos-check'>
									<label>
										<input
											type='checkbox'
											name='dicedTomatos'
											onChange={onChange}
											checked={values.dicedTomatos || ''}
										/>
										Diced Tomatos
									</label>
								</div>
								<div className='black-olives-check'>
									<label>
										<input
											type='checkbox'
											name='blackOlives'
											onChange={onChange}
											checked={values.blackOlives || ''}
										/>
										Black Olives
									</label>
								</div>
								<div className='roasted-garlic-check'>
									<label>
										<input
											type='checkbox'
											name='roastedGarlic'
											onChange={onChange}
											checked={values.roastedGarlic || ''}
										/>
										Roasted Garlic
									</label>
								</div>
								<div className='artichoke-hearts-check'>
									<label>
										<input
											type='checkbox'
											name='artichokeHearts'
											onChange={onChange}
											checked={values.artichokeHearts || ''}
										/>
										Artichoke Hearts
									</label>
								</div>
								<div className='three-cheese-check'>
									<label>
										<input
											type='checkbox'
											name='threeCheese'
											onChange={onChange}
											checked={values.threeCheese || ''}
										/>
										Three Cheese
									</label>
								</div>
								<div className='pineapple-check'>
									<label>
										<input
											type='checkbox'
											name='pineapple'
											onChange={onChange}
											checked={values.pineapple || ''}
										/>
										Pineapple
									</label>
								</div>
								<div className='extra-cheese-check'>
									<label>
										<input
											type='checkbox'
											name='extraCheese'
											onChange={onChange}
											checked={values.extraCheese || ''}
										/>
										Extra Cheese
									</label>
								</div>
							</div>
						</div>
					</div>
					{/* Substitue */}
					<div className='substitute'>
						<div>
							<h3>Choice of Substitute</h3>
						</div>
						<div className='substitute-options'>
							<label htmlFor='glutenFree'>
								<input
									type='checkbox'
									name='glutenFree'
									onChange={onChange}
									checked={values.glutenFree}
								/>
								Gluten Free Crust (+ $1.00)
							</label>
						</div>
					</div>
					{/* Special Instructions */}
					<div className='special-instructions'>
						<div>
							<h3>Special Instructions</h3>
						</div>
						<div className='instructions-input'>
							<input
								type='text'
								name='instructions'
								onChange={onChange}
								value={values.instructions}
								placeholder='Enter Instructions'
							/>
						</div>
					</div>
					{/* Price Calculator */}
					<div className='submit'>
						<div className='name'>
							<input
								type='text'
								name='name'
								value={values.name}
								onChange={onChange}
								placeholder='Enter name'
							/>
						</div>
						<div className='total'>
							<div>
								{/* <button type='submit' disabled={disabled}> */}
								<button type='submit'>Add to Order</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PizzaForm;
