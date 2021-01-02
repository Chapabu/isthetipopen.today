import { FunctionalComponent, h } from "preact";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const App: FunctionalComponent = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <p>Content</p>
      </main>
      <Footer />
    </div>
  );
};
