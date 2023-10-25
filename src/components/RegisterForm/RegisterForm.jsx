import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/authorization/operations';
import { selectIsLoggedIn } from '../redux/authorization/selectors';
// import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectIsLoggedIn);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.name.value);
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    console.log(name);

    form.reset();
  };

  return (
    <form
      //   className={css.form}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label
      //   className={css.label}
      >
        Username
        <input type="text" name="name" />
      </label>
      <label
      //   className={css.label}
      >
        Email
        <input type="email" name="email" />
      </label>
      <label
      //   className={css.label}
      >
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
