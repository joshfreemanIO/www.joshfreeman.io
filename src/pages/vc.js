/* eslint-disable react/jsx-one-expression-per-line, max-len */
import React from 'react'
import styled from 'styled-components'
import OpenGraph from '@components/OpenGraph'
import VCPng from './vc/vc.png'

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
  font-size: 120px !important;
  justify-content: justify;
  justify-content: space-around;
  display: flex;
`

const Red = styled.span`
  color: red;
  font-size: inherit;
`

const Black = styled.span`
  color: black;
  font-size: inherit;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 24px;
  max-width: 780px;
  margin: 0 auto;
  font-family: "Open Sans", "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-size: 21px;
`

const Bold = styled.span`
  font-weight: bold;
`

const Heart = () => <Red>♥</Red>
const Diamond = () => <Red>♦</Red>
const Club = () => <Black>♣</Black>
const Spade = () => <Black>♠</Black>

const suits = suit => {
  switch (suit) {
    case 'heart':
      return <Heart />
    case 'diamond':
      return <Diamond />
    case 'club':
      return <Club />
    case 'spade':
      return <Spade />
    default:
      return null
  }
}

const color = suit => {
  if (suit === 'heart' || suit === 'diamond') {
    return 'red'
  }
  return 'black'
}

const Card = styled(({ rank, suit }) => (
  <span style={{ color: color(suit) }}>
    <span>{rank}</span>
    <span style={{ fontSize: 24 }}>{suits(suit)}</span>
  </span>
))`
  font-size: 24px
`

const Attribution = styled.p`
  margin-top: 37px;
`

const Page = () => (
  <Main>
    <Cards>
      <Spade />
      <Club />
      <Diamond />
      <Heart />
    </Cards>

    <Title>Vietnamese Cards (Tiến lên)</Title>

    <p>Considered national game of Vietnam, VC is best played with 4 players. </p>

    <h2>Objective</h2>

    <p>The objective of the game is to empty your hand. The player who empties their hand first wins, and play continues until all other players have gone out.</p>

    <h2>Setup</h2>

    <p>The game is played with a standard deck of cards with 2-4 people. Shuffle the cards and evenly deal the cards to each player. Keep your cards secret.</p>
    <p>The person with the lowest valued card (usually the <Card rank={3} suit="spade" />) begins play.</p>
    <p>When starting a new game, the losing player shuffles and deals the cards.</p>

    <h2>Gameplay</h2>

    <p>A game is composed of multiple rounds. During a round, the starting player will play a combination of cards from their hand. Each successive player must play a combination of cards of the same type <em>and</em> of a higher value for their turn. The value of a combination is determined by the highest valued card in that combination.</p>
    <p>If a player cannot or chooses not to play in their turn, they verbally pass. Players who pass during their turn cannot play a combination until the current round ends and the next round has begun.</p>
    <p>The last player remaining in a round wins the round and starts the next round with their choice with a new combination of cards.</p>

    <h2>Card Values</h2>

    <p>All cards are valued by numerical rank, then by suit. Number rank precedes suit rank, so a <Card rank={5} suit="spade" /> is of a higher value than a <Card rank={4} suit="heart" />. In VC, the <Card rank={3} suit="spade" /> is the lowest valued card, and the <Card rank={2} suit="heart" /> the highest.</p>

    <p>Number Valuing: 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A, 2</p>
    <p>Suit Valuing: <Spade /> <Club /> <Diamond /> <Heart /></p>

    <h2>Standard Combinations</h2>

    <p><Bold>Singles</Bold> – Any single card of any value. In the case of a <Card rank={5} suit="club" />, the <Card rank={5} suit="diamond" /> and <Card rank={5} suit="heart" /> are of a higher value, whereas the <Card rank={5} suit="spade" /> is not. Any card with a 6 or above is of a higher value.</p>
    <p><Bold>Pairs</Bold> - Any pair of cards of the same numerical value. In the case of a <Card rank={5} suit="spade" />&nbsp;<Card rank={5} suit="diamond" /> pair, the <Card rank={5} suit="club" />&nbsp;<Card rank={5} suit="heart" /> is of a higher value. Any pair of 6s or above is a higher value.</p>
    <p><Bold>Three-of-a-Kind</Bold> - Any three cards of the same numerical value. Only a three-of-a-kind with a higher numerical value can beat a three-of-a-kind.</p>
    <p><Bold>Straights</Bold> - A sequence of three or more cards in ascending numerical value. 2s may not be included in a standard straight. A round of straights must use the same number of cards in sequence as when the round began.</p>
    <p>In the case of a <Card rank={3} suit="club" />&nbsp;<Card rank={4} suit="diamond" />&nbsp;<Card rank={5} suit="club" />, the straight <Card rank={3} suit="spade" />&nbsp;<Card rank={4} suit="spade" />&nbsp;<Card rank={5} suit="diamond" /> or <Card rank={3} suit="spade" />&nbsp;<Card rank={4} suit="spade" />&nbsp;<Card rank={5} suit="heart" /> is of higher value. Any straight like 4 5 6 and above is of higher value.</p>

    <h2>Special Combinations</h2>

    <p>Special combinations can only be played under certain cicumstances. Once a special combination is played, only another special combination of the same type and higher value may be played for the remainder of the round.</p>
    <p><Bold>Tong</Bold> – a sequence of three pairs, such as <Card rank={5} suit="spade" />&nbsp;<Card rank={5} suit="club" />&nbsp;<Card rank={6} suit="diamond" />&nbsp;<Card rank={6} suit="heart" />&nbsp;<Card rank={7} suit="spade" />&nbsp;<Card rank={7} suit="club" />. When in a round of singles, this may be used to beat a single 2. It can only be defeated by a tong of higher value.</p>
    <p><Bold>Super Tong</Bold> – a sequence of 4 pairs, such as <Card rank={5} suit="spade" />&nbsp;<Card rank={5} suit="club" />&nbsp;<Card rank={6} suit="diamond" />&nbsp;<Card rank={6} suit="heart" />&nbsp;<Card rank={7} suit="spade" />&nbsp;<Card rank={7} suit="club" />&nbsp;<Card rank={8} suit="diamond" />&nbsp;<Card rank={8} suit="heart" />. When in a round of doubles, this may be used to beat a pair of 2s.</p>
    <p><Bold>Bomb/Four-of-a-Kind</Bold> – Four cards of the same suit, such as <Card rank={5} suit="spade" />&nbsp;<Card rank={5} suit="club" />&nbsp;<Card rank={5} suit="diamond" />&nbsp;<Card rank={5} suit="heart" /></p>

    <h2>Automatic Wins</h2>

    <p>If dealt certain combinations, play them immediately. Congratulations, you won.</p>
    <p><Bold>Four-of-a-kind-of-Twos</Bold> – <Card rank={2} suit="spade" />&nbsp;<Card rank={2} suit="club" />&nbsp;<Card rank={2} suit="diamond" />&nbsp;<Card rank={2} suit="heart" /></p>
    <p><Bold>Dragon</Bold> – A straight from any 3 to any 2, for example <Card rank={3} suit="club" />&nbsp;4&nbsp;5&nbsp;6&nbsp;7&nbsp;8&nbsp;9&nbsp;10&nbsp;J&nbsp;Q&nbsp;K&nbsp;A&nbsp;<Card rank={2} suit="club" /></p>
    <p><Bold>Super Dragon</Bold> – A straight from <Card rank={3} suit="spade" /> to <Card rank={2} suit="heart" />, such as <Card rank={3} suit="spade" />&nbsp;4&nbsp;5&nbsp;6&nbsp;7&nbsp;8&nbsp;9&nbsp;10&nbsp;J&nbsp;Q&nbsp;K&nbsp;A&nbsp;2<Heart />. The only hand that can beat a Dragon. You should retire.</p>

    <Cards>
      <Spade />
      <Club />
      <Diamond />
      <Heart />
    </Cards>

    <Attribution>Sean Wen and Andrew Ho taught me VC while living together in San Antonio. If you eat food, take an afternoon to visit <a href="https://instagram.com/pinchboilhouse" target="_blank" rel="noopener noreferrer">@PinchBoilHouse</a>–you won&apos;t be disappointed.</Attribution>

    <OpenGraph
      title="Vietnamese Cards (Tiến lên)"
      description="The unofficial national card game of Vietnam, best played with 4 players"
      ogImage={{ publicURL: VCPng }}
      ogImageAlt="The Dragon: The Vietnamese Card Combination"
      path="/vc"
      tags="card games,vietnamese cards"
      date="2019-03-08"
    />
  </Main>
)


export default Page
