import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const AddTask = ({ onAdd, formTexts }) => {
	const onSubmit = data => {
		onAdd(data);

		resetField('text');	
		resetField('day');	
		resetField('reminder');	
	};
	const { register, resetField, handleSubmit, formState: {errors} } = useForm({defaultValues: {text: '', day: '', reminder: false}}); 
	return (
		<div className={`form-container ${errors.text && errors.day ? 'form-container-error' : ''}`}>
			<form className='add-form' onSubmit={handleSubmit(onSubmit)}>
				{formTexts.controls.map(formText => (
				<div key={formText.id} className={`form-control ${formText.type === 'checkbox' ? 'form-control-check' : ''}`}>
					<label className={errors[formText.field] ? 'error' : ''}>{formText.label}</label>
					<input 
						className={errors[formText.field] ? 'input-error' : ''}
						type={formText.type} 
						placeholder={formText.text} 
						{...register(formText.field, formText.registerOptions)} 
					/>
					<span className={`input-prompt ${errors[formText.field] ? 'error': ''}`}>{formText.prompt}</span>
				</div>
				))}

				<input type='submit' className='btn btn-block' value={formTexts.submission.text} />
				{Object.keys(errors).length !== 0 && <span className='submit-error'>{formTexts.submission.prompt}</span>}
			</form>
		</div>
	);
};

AddTask.propTypes = {
	onAdd: PropTypes.func.isRequired,
	formTexts: PropTypes.shape({
		controls: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			type: PropTypes.string.isRequired,
			field: PropTypes.string.isRequired,
			registerOptions: PropTypes.object.isRequired,
			label: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			prompt: PropTypes.string.isRequired		
		})).isRequired,
		submission: PropTypes.shape({
			id: PropTypes.number.isRequired,
			label: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			prompt: PropTypes.string.isRequired		
		}).isRequired		
	}).isRequired
};

export default AddTask;
