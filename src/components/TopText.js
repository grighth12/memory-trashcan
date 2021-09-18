export default function TopText({ $target, text = '' }) {
  const $topText = document.createElement('p')
  $topText.className = 'TopText'
  $topText.textContent = text

  $target.appendChild($topText)
}
