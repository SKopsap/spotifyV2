import { Card } from '../components/CardComponent.js'

function Section(title, data) {
  function cardList() {
    return `
      ${data.map((data) => `${Card(data)}`).join('')}
    `
  }

  return /*html*/ `
    <section class="mt-3">
      <h2 class="text-white mb-3">${title}</h2>
      <div class="row flex-nowrap">
        ${cardList()}
      </div>
    <section>
  `
}

export { Section }
