import './styles.css';
import { ReactComponent as Cookie } from '../../Images/cookie.svg';

export const CookieBanner = () => {
  const handleCookiesPermission = () => {
    // console.log('check');
    // if (localStorage.getItem('cookiesPermission')) return;
    localStorage.setItem('cookiesPermission', true);
  };

  const cookiesInLocalStorage = () => {
    // console.log(!!localStorage, '!!localStorage');
    // console.log(!localStorage, '!localStorage');
    if (localStorage.getItem('cookiesPermission') === 'true') return true;
    if (!!localStorage.getItem('cookiesPermission')) return false;
  };

  return (
    <>
      {!cookiesInLocalStorage() && (
        <div className="cookieWrapper">
          <div className="cookieContent">
            <Cookie className="cookieIcon" />
            <h4>Pozwól na plikie Cookies</h4>
            <p>
              Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
              działanie strony i pomagają nam świadczyć usługi na najwyższym
              poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
              tych plików i przejść do strony lub dostosować Pozwól na pliki
              cookies Nasza strona korzysta z ciasteczek, które umożliwiają
              poprawne działanie strony i pomagają nam świadczyć usługi na
              najwyższym poziomie. Możesz zaakceptować wykorzystanie przez nas
              wszystkich tych plików i przejść do strony lub dostosować użycie
              do swoich referencji. W tym celu kliknij przycisk po prawej
              stronie “dopasuj zgody”, aby następnie wybrać te które odpowiadają
              Twoim indywidualnym preferencjom. W porządku Dopasuj Zgody
            </p>
          </div>
          <div className="cookiePermissions">
            <button
              onClick={handleCookiesPermission}
              className="permissions_accept"
            >
              W porzadku
            </button>
            <button className="permissions_reject">Dopasuj zgody</button>
          </div>
        </div>
      )}
    </>
  );
};
