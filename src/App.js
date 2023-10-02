import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { Home } from "./components/home-page/Home";
import { Login } from "./components/login-page/Login";
import { Register } from "./components/register-page/Register";
import { Create } from "./components/create-page/Create";
import { Catalog } from "./components/catalog-page/Catalog";
import { Edit } from "./components/edit-page/Edit";
import { Details } from "./components/details-page/Details";
import { Search } from "./components/search-page/Search";
import { Footer } from "./components/footer/Footer";
import AuthContextProvider from "./context/AuthContext";
import { Logout } from "./components/logout/Logout";
import AuthGards from "./util/AuthGards";
import ErrorBoundary from "./error-boundary/ErrorBoundary";
import MusicContextProvider from "./context/MusicContext";
import RouteGards from "./util/RouteGards";
import { NotFound } from "./components/not-found/NotFound";


function App() {
  return (
    <>
      <AuthContextProvider >
        <ErrorBoundary >
          <Navigation />
          <MusicContextProvider >
            <Routes >
              <Route path="/" element={<Home />} ></Route>
              <Route path="/login" element={<AuthGards><Login /> </AuthGards>} ></Route>
              <Route path="/logout" element={<Logout />} ></Route>
              <Route path="/register" element={<AuthGards><Register /> </AuthGards>} ></Route>
              <Route path="/create" element={<RouteGards > <Create /> </RouteGards>} ></Route>
              <Route path="/catalog" element={<Catalog />} ></Route>
              <Route path="/edit/:id" element={<RouteGards > <Edit /> </RouteGards>} ></Route>
              <Route path="/details/:id" element={<Details />} ></Route>
              <Route path="/search" element={<Search />} ></Route>
              <Route path="/*" element={<NotFound />} ></Route>
            </Routes>
          </MusicContextProvider>
        </ErrorBoundary >
      </AuthContextProvider>
      <Footer />
    </>
  );
}

export default App;
