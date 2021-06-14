import * as S from './styles'

export function Presentation(): JSX.Element {
  return (
    <S.Container>
      <S.Left>
        <S.Item type="button">
          <h5>A sua disposição</h5>
          <p>Contato direto com profissionais, prático seguro e acessível</p>
        </S.Item>
        <S.Item type="button" checked>
          <h5>Sistema pratico</h5>
          <p>Todo sistema foi pensado em tornar a sua experiencia agradável</p>
        </S.Item>
        <S.Item type="button">
          <h5>Transparência</h5>
          <p>
            Você fica sabendo de toda movimentação e investimentos da AINNEP
          </p>
        </S.Item>
        <S.Item type="button">
          <h5>Mais benefícios</h5>
          <p>
            Além de consultas com pscicologos a AINNEP dispoe, outros serviços.
            Consulte-nos!
          </p>
        </S.Item>
      </S.Left>
      <S.Right>
        <S.ContentRight>
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            src={'https://www.youtube.com/embed/s2T1imvFePM'}
            frameBorder="0"
          />
        </S.ContentRight>
      </S.Right>
    </S.Container>
  )
}
