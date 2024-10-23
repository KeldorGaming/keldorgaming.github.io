const DELAY = 3 * 60 * 1000 // 3 minutes
const SHOW_TIME = 13000

const panels = document.getElementsByClassName("panel")
let current = -1
const version = "0.1"

const next = () => {
	fetch("version.txt")
		.then(r => r.text())
		.then(t => {
			if (version != t) {
				console.log("Found new version, reloading")
				window.location.reload(true)
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