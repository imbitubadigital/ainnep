import * as S from './styles'
import { Card } from './Card'
import { data } from './data'

export function ServicesCards(): JSX.Element {
  return (
    <S.Container>
      <header>
        <h3>Serviços da AINNEP a sua disposição</h3>
        <p>
          Em tempos difíceis como os que passamos hoje, acreditamos que é ainda
          mais necessário o cuidado da mente e oferecemos nossa estrutura,
          profissionais e serviços a você
        </p>
      </header>
      <S.Content>
        {data.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </S.Content>
    </S.Container>
  )
}
