async function animateHeader(){
    const karolTylenda = 'I\'m Karol Tylenda'
    const javaDeveloper = 'Java Developer'

    let h1Text = document.getElementById('home-h1')
    let h6Text = document.getElementById('home-h6')

    while (true) {
        for (let i = 0; i < karolTylenda.length; i++) {
            h1Text.innerHTML += karolTylenda.charAt(i)
            await sleep(100)
        }
        for (let i = 0; i < javaDeveloper.length; i++) {
            h6Text.innerHTML += javaDeveloper.charAt(i)
            await sleep(150)
        }

    await sleep(2000)
        h1Text.innerHTML = ''
        h6Text.innerHTML = ''
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

animateHeader();