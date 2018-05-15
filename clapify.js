var input = document.querySelector('#input')
var emoji = document.querySelector('#emoji')
var output = document.querySelector('#output')
var subtitle = document.querySelector('#subtitle')

var subtitleText = 'Use emoji to emphasize your point'

function onEdit () {
  var content = input.value.trim()
  var chr = emoji.value || '�'
  output.innerText = content.split(content.indexOf(' ') > -1 ? ' ' : '').join(chr)
  subtitle.innerText = subtitleText.replace(/\s+/g, chr)
}

input.addEventListener('input', onEdit)
emoji.addEventListener('input', onEdit)

onEdit()
