type GameStatus = 'Não iniciado' | 'Jogando' | 'Não finalizado' | 'Joguei o suficiente' | 'Finalizado' | 'Desisti' | 'Lista de desejos';

interface GameListData {
  id: string;
  name: string;
  platform: string;
  status: GameStatus;
  priority: 'Baixo' | 'Médio' | 'Alto' | null;
  rating: number;
  averageRating: number;
  releaseDate: string;
  dateAdded: string;
  dateFinished: string;
  notes: string;
}

export const data: GameListData[] = [
  {
    id: '123abc',
    name: 'Rune Factory 4 Special',
    platform: 'Nintendo Switch',
    status: 'Finalizado',
    priority: null,
    rating: 4,
    averageRating: 4.5,
    releaseDate: '2020-12-12T00:00:00:000Z',
    dateAdded: '2020-12-12T00:00:00:000Z',
    dateFinished: '2020-12-12T00:00:00:000Z',
    notes: 'Gostei muito, meu Rune Factory predileto, porém os gráficos apenas foram escalados, ainda parecem sprites das versões de DS.'
  },
  {
    id: '234abc',
    name: 'Rune Factory 4 Special',
    platform: 'Nintendo Switch',
    status: 'Finalizado',
    priority: null,
    rating: 4,
    averageRating: 4.5,
    releaseDate: '2020-12-12T00:00:00:000Z',
    dateAdded: '2020-12-12T00:00:00:000Z',
    dateFinished: '2020-12-12T00:00:00:000Z',
    notes: 'Gostei muito, meu Rune Factory predileto, porém os gráficos apenas foram escalados, ainda parecem sprites das versões de DS.'
  },
  {
    id: '345abc',
    name: 'Rune Factory 4 Special',
    platform: 'Nintendo Switch',
    status: 'Finalizado',
    priority: null,
    rating: 4,
    averageRating: 4.5,
    releaseDate: '2020-12-12T00:00:00:000Z',
    dateAdded: '2020-12-12T00:00:00:000Z',
    dateFinished: '2020-12-12T00:00:00:000Z',
    notes: 'Gostei muito, meu Rune Factory predileto, porém os gráficos apenas foram escalados, ainda parecem sprites das versões de DS.'
  }
]