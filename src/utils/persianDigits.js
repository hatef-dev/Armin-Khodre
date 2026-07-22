const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

export function toPersianDigits(str) {
  return String(str).replace(/\d/g, (digit) => persianDigits[digit])
}

export function convertElementToPersianDigits(el) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false)
  let node
  while ((node = walker.nextNode())) {
    node.textContent = toPersianDigits(node.textContent)
  }
}