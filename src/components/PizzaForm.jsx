import React, { useState } from 'react';

const PizzaForm = () => {
	const [price, setPrice] = useState('10');

	const onChange = (e) => {
		const { name, value } = e.target;
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('click');
	};

	return (
		<div className='pizza-flex'>
			<div className='form-container'>
				<header className='pizza-form'>
					<h1>Create Your Masterpiece</h1>
					<img src='../images/Pizza.jpg' alt='' />
				</header>
				<form onSubmit={onSubmit}>
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
							<select name='pizza-size'>
								<option value='select'>-- Please Select --</option>
								<option value='x-large'>X-Large</option>
								<option value='large'>Large</option>
								<option value='medium'>Medium</option>
								<option value='small'>Small</option>
								<option value='x-small'>X-Small</option>
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
								<label htmlFor='original-red'>
									<input type='radio' name='original-red' />
									Original Red
								</label>
							</div>
							<div>
								<label htmlFor='garlic-ranch'>
									<input type='radio' name='garlic-ranch' />
									Garlic Ranch
								</label>
							</div>
							<div>
								<label htmlFor='bbq-sauce'>
									<input type='radio' name='bbq-sauce' />
									BBQ Sauce
								</label>
							</div>
							<div>
								<label htmlFor='spinach-alfredo'>
									<input type='radio' name='spinach-alfredo' />
									Spinach Alfredo
								</label>
							</div>
						</div>
					</div>

					{/* Toppings Options */}
					<div className='toppings'>
						<div>
							<h3>Add Toppings</h3>
							<p>Choose up to 10</p>
						</div>
						<div className='toppings-input'>
							{/* Left Column */}
							<div className='left-column'>
								<div className='pepperoni-check'>
									<label htmlFor='pepperoni'>
										<input type='checkbox' name='pepperoni' />
										Pepperoni
									</label>
								</div>
								<div className='sausage-check'>
									<label htmlFor='sausage'>
										<input type='checkbox' name='sausage' />
										Sausage
									</label>
								</div>
								<div className='canadian-bacon-check'>
									<label htmlFor='canadian-bacon'>
										<input type='checkbox' name='canadian-bacon' />
										Canadian Bacon
									</label>
								</div>
								<div className='spicy-italian-check'>
									<label htmlFor='spicy-italian'>
										<input type='checkbox' name='spicy-italian' />
										Spicy Italian Sausage
									</label>
								</div>
								<div className='grilled-chicken-check'>
									<label htmlFor='grilled-chicken'>
										<input type='checkbox' name='grilled-chicken' />
										Grilled Chicken
									</label>
								</div>
								<div className='onions-check'>
									<label htmlFor='onions'>
										<input type='checkbox' name='onions' />
										Onions
									</label>
								</div>
								<div className='green-pepper-check'>
									<label htmlFor='green-pepper'>
										<input type='checkbox' name='green-pepper' />
										Green Pepper
									</label>
								</div>
							</div>
							{/* Right Column */}
							<div className='right-column'>
								<div className='diced-tomatos-check'>
									<label htmlFor='diced-tomatos'>
										<input type='checkbox' name='diced-tomatos' />
										Diced Tomatos
									</label>
								</div>
								<div className='black-olives-check'>
									<label htmlFor='black-olives'>
										<input type='checkbox' name='black-olives' />
										Black Olives
									</label>
								</div>
								<div className='roasted-garlic-check'>
									<label htmlFor='roasted-garlic'>
										<input type='checkbox' name='roasted-garlic' />
										Roasted Garlic
									</label>
								</div>
								<div className='artichoke-hearts-check'>
									<label htmlFor='artichoke-hearts'>
										<input type='checkbox' name='artichoke-hearts' />
										Artichoke Hearts
									</label>
								</div>
								<div className='three-cheese-check'>
									<label htmlFor='three-cheese'>
										<input type='checkbox' name='three-cheese' />
										Three Cheese
									</label>
								</div>
								<div className='pineapple-check'>
									<label htmlFor='pineapple'>
										<input type='checkbox' name='pineapple' />
										Pineapple
									</label>
								</div>
								<div className='extra-cheese-check'>
									<label htmlFor='extra-cheese'>
										<input type='checkbox' name='extra-cheese' />
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
							<label htmlFor='gluten-free'>
								<input type='checkbox' name='gluten-free' />
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
								name='special-instructions'
								onChange={onChange}
							/>
						</div>
					</div>
					{/* Price Calculator */}
					<div className='calculator'>
						<div className='quantity'>QUANTITY SELECTOR</div>
						<div className='total'>
							<div>
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
