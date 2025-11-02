import React, { useState } from "react";
import {
  passwordValidationMessage,
  validatePassword,
} from "../../../shared/validators";
import { Input } from "../../../shared/components";
import type { updatePasswordFormState, InputDefinition } from "../../../types/types";
import { usePasswordChange } from "../../../shared/hooks";



const inputs: InputDefinition[] = [
  {
    field: "password",
    label: "Current password",
    validationMessage: passwordValidationMessage,
    type: "password",
  },
  {
    field: "newPassword",
    label: "New password",
    validationMessage: passwordValidationMessage,
    type: "password",
  },
];

export const PasswordSettings = () => {
  const [formState, setFormState] = useState<updatePasswordFormState>({
    password: {
      isValid: false,
      showError: false,
      value: "",
    },
    newPassword: {
      isValid: false,
      showError: false,
      value: "",
    },
  });

  const { changePassword } = usePasswordChange(); 

  const handleInputValueChange = (value: string, field: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field as keyof updatePasswordFormState],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (
    value: string,
    field: string
  ) => {
    const isValid = validatePassword(value);

    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field as keyof updatePasswordFormState],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const isSubmitButtonDisabled =
    !formState.password.isValid || !formState.newPassword.isValid;

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    changePassword(formState.password.value, formState.newPassword.value);
  };

  return (
    <form className="settings-form">
      {inputs.map((input) => (
        <Input
          key={input.field}
          field={input.field}
          Label={input.label}
          value={formState[input.field].value}
          onBlurHandler={handleInputValidationOnBlur}
          onChangeHandler={handleInputValueChange}
          showErrorMessage={formState[input.field].showError}
          validationMessage={input.validationMessage}
          type={input.type}
        />
      ))}
      <button disabled={isSubmitButtonDisabled} onClick={handleFormSubmit}>
        Save changes
      </button>
    </form>
  );
};
