import { Container } from "./styles";

export function Footer () {
  const actualYear = new Intl.DateTimeFormat('pt-BR', { year: "numeric" }).format();

  return (
    <Container>GamingCopter {actualYear}. 🚁</Container>
  );
}