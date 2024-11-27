function typeEffect(lines, speed, delayBetweenLines) {
    let currentLine = 0

    function typeLine() {
        if (currentLine < lines.length) {
            let text = lines[currentLine]
            let index = 0

            function type() {
                if (index < text.length) {
                    process.stdout.write(text[index])
                    index++
                    setTimeout(type, speed)
                } else {
                    process.stdout.write('\n')
                    currentLine++
                    setTimeout(typeLine, delayBetweenLines)
                }
            }
            type()
        }
    }
    typeLine()
}


const lirik = [
    "Sudah Adakah yang Gantikanku",
    "yang khawatirkanmu setiap waktu",
    "yg cerita tentang apapun sampai hal hal tak perlu",
    "kalau bisa jangan buru buru",
    "kalau bisa jangan ada dulu"
]

typeEffect(lirik, 150, 1000)