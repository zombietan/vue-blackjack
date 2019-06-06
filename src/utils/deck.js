export default () => {
  const deck = [];
  ['spade', 'club', 'diamond', 'heart'].forEach(suit => {
    Array.from(Array(13), (_, i) => ++i).forEach(number => {
      deck.push({suit, number, hide: false})
    })
  })

  return deck;
}