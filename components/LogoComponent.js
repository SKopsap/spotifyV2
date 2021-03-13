function Logo(src, title) {
  return /*html*/ `
    <div class="mb-2 mt-3 p-4">
      <a href="/"><img src="${src}" alt="${title}"></a>
    </div> 
    `
}

export { Logo }
