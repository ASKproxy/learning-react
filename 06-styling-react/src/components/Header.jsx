import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex items-center mt-8 mb-16 flex-col">
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p
        style={{
          textAlign: "left",
        }}
      >
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
