import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

/**
 * Root layout rendered for every route. Provides the shared header and
 * footer, with <Outlet /> rendering the matched route element in between.
 * Does not restrict content width; each page uses the shared Container
 * (80vw desktop / 88vw tablet / 92vw mobile).
 */
export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
