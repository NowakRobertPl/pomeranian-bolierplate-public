import React from 'react';

import { useForm } from 'react-hook-form';

import './style.css';

export function Exercise() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data, 'dane w formularzu');

  console.log(watch('example'), 'watch and how it works');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* sekcja 1 */}
      <div>
        <h2>Zamówienie produktu</h2>
        <div>
          <select {...register('productType')}>
            <option value="frontend">kurs front-end</option>
            <option value="backend">kurs backend-end</option>
            <option value="ux/ui">kurs UX/UI</option>
          </select>
          {errors.productType && <span></span>}
        </div>

        <div>
          <label htmlFor="paymentMethod">Wybierz formę płatności</label>
          <div>
            <input type="radio" {...register('paymentMethod')} />
            <span>blik</span>
            <input type="radio" {...register('paymentMethod')} />
            <span>paypal</span>
            <input type="radio" {...register('paymentMethod')} />
            <span>przelew tradycyjny</span>
          </div>
          {errors.paymentMethod && <span>Nazwisko jest wymagane!</span>}
        </div>

        <div>
          <label htmlFor="orderInformations">
            Opcje dodatkowe do zamówienia
          </label>
          <div>
            <input
              name="orderInformations"
              type="checkbox"
              {...register('isEnvChecked')}
            />
            <span>ustawienie środowiska</span>
          </div>

          <div>
            <input
              name="orderInformations"
              type="checkbox"
              {...register('isGithubChecked')}
            />
            <span>intro do github</span>
          </div>

          <div>
            <input
              name="orderInformations"
              type="checkbox"
              {...register('isAdditionalDataChecked')}
            />
            <span>materiały dodatkowe</span>
          </div>
        </div>
      </div>

      {/* sekcja 2 */}
      <div>
        <h2>Dane do realizacji zamówienia</h2>
        <div>
          <label htmlFor="name">Imię i nazwisko*</label>
          <input
            id="name"
            type="name"
            placeholder="wpisz swoje imię i nazwisko"
            {...register('name', { required: true })}
          />
          {errors.name && <span>Nazwisko jest wymagane!</span>}
        </div>

        <div>
          <label htmlFor="nickname">Twój pseudonim*</label>
          <input
            id="nickname"
            placeholder="wpisz swój pseudonim"
            {...register('nickname', { required: true })}
          />
          {errors.nickname && <span></span>}
        </div>

        <div>
          <label htmlFor="address">Adres do wysyłki*</label>
          <input
            id="address"
            type="address"
            placeholder="adres, na który mamy wysłać zamówienie"
            {...register('address', { required: true })}
          />
          {errors.address && <span></span>}
        </div>

        <div>
          <label htmlFor="email">Adres e-mail*</label>
          <input
            id="email"
            type="email"
            placeholder="jan.kowalski@gmail.com"
            {...register('email', { required: true })}
          />
          {errors.email && <span></span>}
        </div>

        <div>
          <label htmlFor="phone">Numer kontaktowy*</label>
          <input
            id="phone"
            type="telephone"
            placeholder="+47 888 888 888"
            {...register('phone', { required: true })}
          />
          {errors.phone && <span></span>}
        </div>

        <div>
          <label htmlFor="description">Dodatkowe uwagi do zamówienia</label>
          <textarea
            id="description"
            placeholder="jeśli masz jakieś uwagi, wpisz je tutaj..."
            {...register('description')}
          />
          {errors.description && <span></span>}
        </div>
      </div>

      {/* sekcja 3 */}
      <div>
        <h2>Zakładanie konta</h2>
        <div>
          <label htmlFor="createAccount">
            Chcę założyć konto razem z zamówieniem
          </label>
          <div>
            <input
              name="createAccount"
              type="checkbox"
              {...register('isCreateAccountChecked')}
            />
            <span>ustawienie środowiska</span>
          </div>
        </div>

        <div>
          <label htmlFor="password">Dodatkowe uwagi do zamówienia</label>
          <input
            type="password"
            id="password"
            placeholder="wpisz hasło"
            {...register('password')}
          />
          {errors.password && <span></span>}
        </div>

        <div>
          <label htmlFor="confirmPassword">Powtórz hasło</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="wpisz swoje hasło ponownie"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && <span></span>}
        </div>
      </div>

      {/* sekcja 4 */}
      <div>
        <h2>Zgody i newsletter</h2>
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
            <span>akceptuję regulamin*</span>
          </div>
          {errors.isTermsChecked && <span></span>}
        </div>

        <div>
          <label htmlFor="newsletter">
            Dołącz do naszego newslettera z promocjami dla naszych klientów
          </label>
          <div>
            <input
              name="newsletter"
              type="checkbox"
              {...register('isNewsletterChecked')}
            />
            <span>ustawienie środowiska</span>
          </div>
        </div>
      </div>

      <button type="submit">składam zamówienie</button>
    </form>
  );
}
