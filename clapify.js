var input = document.querySelector('#input')
var emoji = document.querySelector('#emoji')
var output = document.querySelector('#output')
var subtitle = document.querySelector('#subtitle')

var subtitleText = 'Use emoji to emphasize your point'

function clapifyWords(text, emoji) {
  return text.replace(/\s+/g, emoji)
}

function clapifyChars(word, emoji) {
  return clapifyWords(word.split('').join(' '), emoji)
}

function clapify(text, emoji) {
  return text.indexOf(' ') === -1
    ? clapifyChars(text, emoji)
    : clapifyWords(text, emoji)
}

function onEdit() {
  var content = input.value.trim()
  var chr = emoji.value || '�'
  output.innerText = clapify(content, chr)
  subtitle.innerText = subtitleText.replace(/\s+/g, chr)
}

input.addEventListener('input', onEdit)
emoji.addEventListener('input', onEdit)

onEdit()
