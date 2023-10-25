import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { register } from '../redux/authorization/operations';
// import { selectIsLoggedIn } from '../redux/authorization/selectors';
// import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  // const name = useSelector(selectIsLoggedIn);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    console.log({ name, email, password }, 'signupform');

    dispatch(register({ name, email, password }));

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
