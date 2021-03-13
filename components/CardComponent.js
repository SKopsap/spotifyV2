const cssDefaults = {
  width: '210px',
  height: '300px'
}

function Card({ title = '', cover_big = '' }, css = cssDefaults) {
  console.log(`title: ${title}`)
  return /*html*/ `
    <div style="max-width: ${css.width}; height: ${css.height}; background-color: #161616; position: relative; cursor: pointer; border-radius: 0.4rem;" class="d-flex flex-column m-1 card p-3 text-left">
     <img style="max-width: 100%" src="${cover_big}" alt="${title}" />
     <div class="mt-3">
      <h6 class="text-white truncate">${title}</h6>
      <p style="font-size: 0.9rem; font-weight: 500" class="text-white text-muted line-clamp">${title}</p>
     </div>
    </div>
  `
}

export { Card }
