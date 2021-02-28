import React from 'react';
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
import InputCustom from '../../components/InputCustom/InputCustom';

import './FormLogin.scss';

const FormLogin = ({ form, setForm, formFields, handleSubmit }) => {
  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit} className="FormLogin">
      {formFields.map(({ id, label, type }) => {
        return (
          <React.Fragment key={id}>
            <InputCustom
              id={id}
              label={label}
              type={type}
              value={form[id]}
              onChange={handleChange}
            />
          </React.Fragment>
        );
      })}
      <ButtonCustom>Entrar</ButtonCustom>
    </form>
  );
};

export default FormLogin;
