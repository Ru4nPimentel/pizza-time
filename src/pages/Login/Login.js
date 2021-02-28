import React from 'react';

import Banner from '../../components/Banner/Banner';
import './Login.scss';
import srcBanner from '../../assets/img/banner3.jpg';
import FormLogin from '../../petterns/FormLogin/FormLogin';
import UserContext from '../../context/UseContext';

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
];

const Login = ({ history }) => {
  const context = React.useContext(UserContext);

  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {}),
  );

  function handleSubmit(event) {
    event.preventDefault();
    if (form.nome !== '' && form.senha !== '') {
      context.setLogin(form.nome);
      history.push('/pedido');
    } else {
      alert('preencha os campos');
    }
  }

  return (
    <main className="container-full Login">
      <section>
        <Banner srcBanner={srcBanner} customBanner={true} />
        <div className="formLoginbox">
          <h1 className="titleCuston">Login</h1>
          <FormLogin
            form={form}
            setForm={setForm}
            formFields={formFields}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>
    </main>
  );
};

export default Login;
