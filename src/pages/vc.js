/* eslint-disable react/jsx-one-expression-per-line, max-len */
import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  display: inline-block;
  font-size: 45px;
  justify-self: flex-end;
  line-height: 61px;
  margin-top: 20px;
  margin-bottom: 40px;
  position: relative;
  text-align: center;
`

const Cards = styled.div`
  height: 100px;
  line-height: 100px;
  font-size: 120px;
  justify-content: justify;
  justify-content: space-around;
  display: flex;
`

const Red = styled.span`
  color: red;
`

const Black = styled.span`
  color: black;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 24px;
  max-width: 780px;
  margin: 0 auto;
`

const Bold = styled.span`
  font-weight: bold;
`

const Heart = () => <Red>♥</Red>
const Diamond = () => <Red>♦</Red>
const Club = () => <Black>♣</Black>
const Spade = () => <Black>♠</Black>


const Page = () => (
  <Main>
    <Cards>
      <Spade />
      <Club />
      <Diamond />
      <Heart />
    </Cards>

    <Title>Vietnamese Cards (Tiến lên)</Title>

    <h2>Objective</h2>

    <p>The objective of the game is to empty your hand. The player who empties their hand first wins, and play continues until all other players have gone out.</p>

    <h2>Setup</h2>

    <p>The game is played with a standard deck of cards with 2-4 people. Shuffle the cards and evenly deal the cards to each player. Keep your cards secret.</p>
    <p>The person with the lowest ranked card (usually the 3<Spade />) begins play.</p>
    <p>When starting a new game, the losing player shuffles and deals the cards.</p>

    <h2>Gameplay</h2>

    <p>A game is composed of multiple rounds. During a round, the starting player will play a combination of cards from their hand. Each successive player must play a combination of cards of the same type <em>and</em> of a higher rank for their turn. The rank of a combination is determined by the highest ranked card in that combination.</p>
    <p>If a player cannot or chooses not to play in their turn, they verbally pass. Players who pass during their turn cannot play a combination until the current round ends and the next round has begun.</p>
    <p>The last player remaining in a round wins the round and starts the next round with their choice with a new combination of cards.</p>

    <h2>Card Rank</h2>

    <p>All cards are ranked by numerical value then by suit. Number rank precedes suit rank, so a 5<Spade /> is higher than a 4<Heart />. In VC, the 3<Spade /> is the lowest ranked card, and the 2<Heart /> the highest.</p>

    <p>Number ranking: 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A, 2</p>
    <p>Suit Ranking: <Spade /> <Club /> <Diamond /> <Heart /></p>

    <h2>Standard Combinations</h2>

    <p><Bold>Singles</Bold> – Any single card of any rank. In the case of a 5<Club />, the 5<Diamond /> and 5<Heart /> are of a higher rank, whereas the 5<Spade /> is not. Any card with a 6 or above is of a higher rank.</p>
    <p><Bold>Pairs</Bold> - Any pair of cards of the same numerical rank. In the case of a 5<Spade />5<Diamond /> pair, the 5<Club />5<Heart /> is of a higher rank. Any pair of 6s or above is a higher rank.</p>
    <p><Bold>Three-of-a-Kind</Bold> - Any three cards of the same numerical rank. Only a three-of-a-kind with a higher numerical rank can beat a three-of-a-kind.</p>
    <p><Bold>Straights</Bold> - A sequence of three or more cards in ascending numerical rank. 2s may not be included in a standard straight. A round of straights must use the same number of cards in sequence as when the round began.</p>
    <p>In the case of a 3<Club />4<Diamond />5<Club />, the straight 3<Spade />4<Spade />5<Diamond /> or 3<Spade />4<Spade />5<Heart /> is of higher rank. Any straight like 4 5 6 and higher is of higher rank.</p>

    <h2>Special Combinations</h2>

    <p>Special combinations can only be played under certain cicumstances. Once a special combination is played, only another special combination of the same type and higher rank may be played for the remainder of the round.</p>
    <p><Bold>Tong</Bold> – a sequence of three pairs, such as 5<Spade />5<Club />6<Diamond />6<Heart />7<Spade />7<Club />. When in a round of singles, this may be used to beat a single 2. It can only be defeated by a tong of higher rank.</p>
    <p><Bold>Super Tong</Bold> – a sequence of 4 pairs, such as 5<Spade />5<Club />6<Diamond />6<Heart />7<Spade />7<Club />8<Diamond />8<Heart />. When in a round of doubles, this may be used to beat a pair of 2s.</p>
    <p><Bold>Bomb/Four-of-a-Kind</Bold> – Four cards of the same suit, such as 5<Spade />5<Club />5<Diamond />5<Heart /></p>

    <h2>Automatic Wins</h2>

    <p>If dealt certain combinations, play them immediately. Congratulations, you won.</p>
    <p><Bold>Four-of-a-kind-of-Twos</Bold> – 2<Spade /> 2<Club /> 2<Diamond /> 2<Heart /></p>
    <p><Bold>Dragon</Bold> – A straight from any 3 to any 2, for example 3<Club /> 4 5 6 7 8 9 10 J Q K A 2<Club /></p>
    <p><Bold>Super Dragon</Bold> – A straight from 3<Spade /> to 2<Heart />, such as 3<Spade /> 4 5 6 7 8 9 10 J Q K A 2<Heart />. The only hand that can beat a Dragon. You should retire.</p>

    <Cards>
      <Spade />
      <Club />
      <Diamond />
      <Heart />
    </Cards>

  </Main>
)


export default Page
