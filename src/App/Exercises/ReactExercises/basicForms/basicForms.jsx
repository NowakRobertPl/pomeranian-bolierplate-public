import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import './style.css';

{
  /* 2 sposób importu => musimy dodać wszystkie importy dot. walidacji.

import {object, string, required} from yup

const schema = object({
  adress: string().required(),
  itd...
})
*/
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1${str} character`;
};

const schemaValidationValues = {
  passwordMinValue: 5,
};

const schemaValidation = {
  required: 'Pole jest wymagane',
  email: 'Podaj poprawny E-mail',
  boolean: 'To Pole musi być zaznaczone',
  password: {
    required: 'Hasło jest wymagane',
    confirmRequired: 'Potwierdź hasło',
    samePassword: 'Hasło musi być identyczne',
    minValue: 5,
    min: `Hasło z mniejszą ilością niż ${schemaValidationValues.passwordMinValue} znaków?, proszę Cię`,
    getCharacterValidationError: (str) => {
      return `Twoje hasło musi zawierać przynajmniej 1 ${str}`;
    },
  },
};

const schema = yup.object({
  address: yup.string().required(schemaValidation.required),
  eMail: yup
    .string()
    .email(schemaValidation.email)
    .required(schemaValidation.required),
  isAddonChecked: yup
    .boolean(schemaValidation.boolean)
    .required(schemaValidation.required),
  isEnvChecked: yup.boolean(schemaValidation.boolean),
  isGitCheck: yup.boolean(schemaValidation.boolean),
  isNewsletterChecked: yup.boolean(schemaValidation.boolean),
  isTermsChecked: yup
    .boolean(schemaValidation.boolean)
    .required(schemaValidation.required)
    .oneOf([true], 'Trzeba akceptować regulamin.'),
  name: yup.string().required(schemaValidation.required),
  nick: yup.string().required(schemaValidation.required),
  notes: yup.string(),
  password: yup
    .string()
    .required()
    .min(5)
    .matches(
      /[0-9]/,
      schemaValidation.password.getCharacterValidationError('cyfrę')
    )
    .matches(
      /[a-z]/,
      schemaValidation.password.getCharacterValidationError('małą literę')
    )
    .matches(
      /[A-Z]/,
      schemaValidation.password.getCharacterValidationError('dużą literę')
    ),
  //   // use oneOf to match one of the values inside the array.
  //   // use "ref" to get the value of passwrod.
  password2: yup
    .string()
    .required(schemaValidation.password.required)
    .oneOf([yup.ref('password')], schemaValidation.password.samePassword),
  paymentMethod: yup.string().required(),
  phonenr: yup
    .string()
    .required(schemaValidation.required)
    .matches(phoneRegExp, 'Phone number is not valid'),

  productType: yup.string().required(schemaValidation.required),
  registerAcc: yup.boolean().required(schemaValidation.required),
});

export function Exercise() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data, 'dane w formularzu');

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="section">
            <h2>Zamówienie produktu</h2>
            <div>
              <label htmlFor="productType">Wybierz kurs*</label>
              <select {...register('productType', { required: true })}>
                <option value="front-end">Kurs front-end</option>
                <option value="back-end">Kurs back-end</option>
                <option value="Kurs UX/UI">Kurs UX/UI</option>
              </select>
              {errors.productType?.message}
            </div>
            <div>
              <label htmlFor="paymentMethod">Wybierz formę płatności*</label>
              <input value="Blik" type="radio" {...register('paymentMethod')} />
              <span>Blik</span>
              <input
                value="paypal"
                type="radio"
                {...register('paymentMethod')}
              />
              <span>Paypal</span>
              <input
                value="transfer"
                type="radio"
                {...register('paymentMethod')}
              />
              <span>Przelew tradycyjny</span>
            </div>
            {errors.paymentMethod?.message}
          </div>
          <div>
            <label htmlFor="orderInformations">
              Opcje dodatkowe do zamówienia*
            </label>
            <div>
              <input
                name="orderInformations"
                type="checkbox"
                {...register('isEnvChecked')}
              />
              <span>Ustawienie środowiska</span>
            </div>
            <div>
              <input
                name="orderInformations"
                type="checkbox"
                {...register('isGitCheck')}
              />
              <span>Intro do GitHub</span>
            </div>
            <div>
              <input
                name="orderInformations"
                type="checkbox"
                {...register('isAddonChecked')}
              />
              <span>Materiały dodatkowe</span>
            </div>
          </div>
          <div>
            <h1>DANE DO REALIZACJI ZAMÓWIENIA</h1>
            <div>
              <label htmlFor="name">Imię i nazwisko*</label>
              <input
                id="name"
                placeholder="Podaj Imię i nazwisko"
                {...register('name')}
              />
              {/* {errors.name?.message} */}
              {errors.name?.message}
            </div>
            <div>
              {' '}
              <label htmlFor="nick">Twój pseudonim*</label>
              <input
                id="nick"
                placeholder="Zaproponuj pseudonim"
                {...register('nick')}
              />
              {errors.nick?.message}
            </div>
            <div>
              <label htmlFor="address">Adres do wysyłki*</label>
              <input
                id="address"
                placeholder="Wpisz adres dostawy"
                {...register('address')}
              />
              {errors.address?.message}
            </div>
            <div>
              <label htmlFor="email">Adres e-mail*</label>
              <input
                id="email"
                type="email"
                placeholder="Wpisz swój adres e-mail"
                {...register('eMail')}
              />
              {errors.eMail?.message}
            </div>
            <div>
              {' '}
              <label htmlFor="phonenr">Podaj numer telefonu*</label>
              <input
                id="phonenr"
                placeholder="Tutaj wpisz numer telefonu"
                {...register('phonenr')}
              />
              {errors.phonenr?.message}
            </div>
            <div>
              {' '}
              <label htmlFor="notes">Dodatkowe uwagi do zamówienia</label>
              <textarea
                id="notes"
                placeholder="Jeśli masz jakieś, wpisz uwagi do zamówienia"
                {...register('notes')}
              />
            </div>

            <div>
              <h2>ZAKŁADANIE KONTA</h2>
              <div>
                {' '}
                <label htmlFor="registerAcc">
                  Chcę założyć konto razem z zamówieniem
                </label>
                <input
                  name="registerAcc"
                  type="checkbox"
                  {...register('registerAcc')}
                />
                <span>Akceptuję regulamin*</span>
              </div>
              <div>
                {' '}
                <label htmlFor="phonenr">Podaj numer telefonu*</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Wpisz hasło"
                  {...register('password')}
                />
                {errors.password?.message}
              </div>
              <div>
                {' '}
                <label htmlFor="password2">Powtórz hasło:*</label>
                <input
                  id="password2"
                  type="password"
                  placeholder="Powtórz hasło"
                  {...register('password2')}
                />
                {errors.password2?.message}
              </div>
              <div>
                <h1>ZGODY I NEWSLETTER</h1>
              </div>
              <div>
                <label htmlFor="terms">
                  Realizując zamówienie, akceptujesz regulamin naszego sklepu
                </label>
                <div>
                  <input
                    name="terms"
                    type="checkbox"
                    {...register('isTermsChecked')}
                  />
                  <span>Akceptuję regulamin</span>
                </div>
                {errors.isTermsChecked?.message}
              </div>
              <div>Dołącz do naszego newslettera</div>
            </div>
          </div>

          <label htmlFor="newsletter">
            Dołącz do naszego newslettera z promocjami dla naszych klientów
          </label>

          <input
            name="newsletter"
            type="checkbox"
            {...register('isNewsletterChecked')}
          />
          <span>Zapisz się do newslettera.</span>
        </div>
        <button type="submit">Składam zamówienie</button>
      </form>
    </section>
  );
}
