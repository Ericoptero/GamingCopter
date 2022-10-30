import { Container, Wrapper, SearchInput, Table } from "./styles";

export function GamesTable () {
  return (
    <Container>
      <Wrapper>
        <SearchInput type="text" placeholder="Table search" />

        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Status</th>
              <th>Platform</th>
              <th>Priority</th>
              <th>Started</th>
              <th>Finished</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rune Factory 4</td>
              <td>Beat</td>
              <td>3DS</td>
              <td>Low</td>
              <td>22/09/2022</td>
              <td>22/11/2022</td>
            </tr>
            <tr>
              <td>Rune Factory 4</td>
              <td>Beat</td>
              <td>3DS</td>
              <td>Low</td>
              <td>22/09/2022</td>
              <td>22/11/2022</td>
            </tr>
            <tr>
              <td>Rune Factory 4</td>
              <td>Beat</td>
              <td>3DS</td>
              <td>Low</td>
              <td>22/09/2022</td>
              <td>22/11/2022</td>
            </tr>
          </tbody>
        </Table>
      </Wrapper>
    </Container>
  )
}