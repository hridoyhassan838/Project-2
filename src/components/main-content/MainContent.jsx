export default function MainContent({ children }) {
  return (
    <main
      role="main"
      aria-label="Main content"
      className="
        max-w-7xl
        mx-auto
        w-full
        bg-white
        px-4
      "
    >
      {children}
    </main>
  );
}