import React from 'react'
import { type inputProps } from '../../types/types';

export const Input = ({
    field,
    Label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea,
}: inputProps) => {
    const handleValueChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        onChangeHandler(e.currentTarget.value, field);
    };

    const handleInputBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        onBlurHandler(e.currentTarget.value, field);
    };

    return (
        <>
            <div className="auth-from-label">
                <span>{Label}</span>
            </div>
            {textarea ? (
                <textarea
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleInputBlur}
                    rows={5}
                    style={{ maxWidth: "400px" }}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleInputBlur}
                />
            )}
            <span className="auth-form-validation-message">
                {showErrorMessage && validationMessage}
            </span>
        </>
    );
};
