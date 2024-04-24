// components/Layout.js
const Layout = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      <header>
        {/* <h1 className="text-3xl font-bold">College Event Portal</h1> */}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
