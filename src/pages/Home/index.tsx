import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HomeContainer,
  HomeImage,
  HomeIntro,
  HomeItem1,
  HomeItem2,
  HomeItem3,
  HomeItem4,
  HomeItems,
  HomeTitle,
  HomeTitle1,
  HomeTitle2,
} from './styles'
import { CoffeeList } from './Components/CoffeeList'

export function Home() {
  return (
    <HomeContainer>
      <HomeIntro>
        <HomeTitle>
          <HomeTitle1>
            Encontre o café perfeito para qualquer hora do dia
          </HomeTitle1>
          <HomeTitle2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </HomeTitle2>
        </HomeTitle>
        <HomeItems>
          <HomeItem1>
            <p>
              <ShoppingCart size={16} color="#FAFAFA" weight="fill" />
            </p>
            Compra simples e segura
          </HomeItem1>
          <HomeItem2>
            <p>
              <Timer size={16} color="#FAFAFA" weight="fill" />
            </p>
            Entrega rápida e rastreada
          </HomeItem2>
          <HomeItem3>
            <p>
              <Package size={16} color="#FAFAFA" weight="fill" />
            </p>
            Embalagem mantém o café intacto
          </HomeItem3>
          <HomeItem4>
            <p>
              <Coffee size={16} color="#FAFAFA" weight="fill" />
            </p>
            O café chega fresquinho até você
          </HomeItem4>
        </HomeItems>
        <HomeImage>
          <img src="Imagem.png" alt="" />
        </HomeImage>
      </HomeIntro>
      <CoffeeList />
    </HomeContainer>
  )
}
