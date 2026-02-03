export default function Layout({ children }) {
  return (
    <div>
      <header>Header / Navigation</header>
      <main>{children}</main>
    </div>
  );
}