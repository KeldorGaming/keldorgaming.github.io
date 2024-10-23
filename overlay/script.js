const DELAY = 3 * 60 * 1000 // 3 minutes
const SHOW_TIME = 13000

const panels = document.getElementsByClassName("panel")
let current = -1
let version = ""

const next = () => {
	fetch("version.txt")
		.then(r => {
			console.log(r)
			if (version == "") {
				version = r
			} else if (version != r) {
				window.location.reload()
			}
		})
	
	current = (current + 1) % panels.length
	let panel = panels[current]
	panel.style = 'right: 0';
	
	setTimeout(() => {
		panel.style = '';
	}, SHOW_TIME)
}

let interval = setInterval(next, DELAY)
next()