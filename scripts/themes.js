const btnChangeTheme = document.querySelector("[data-btn-change-theme]")
const mobileBgImg = document.querySelector("[data-mobile-bg-img]")
const desktopBgImg = document.querySelector("[data-desktop-bg-img]")
const changeThemeIcon = document.querySelector("[data-change-theme-icon]")

let theme = ""


const root = document.documentElement

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setLightTheme()
    theme = "light"
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    setDarkTheme()
    theme = "dark"
}

// :root {
//     --background: hsl(235, 21%, 11%);
//     --to-do-text-finished: hsl(233, 14%, 35%);
//     --to-do-background: hsl(235, 24%, 19%);
//     --text-color-1: hsl(234, 39%, 85%);
//     --text-color-2: hsl(236, 33%, 92%);
//     --actions-text: hsl(233, 14%, 35%);
//     --check-background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
//     --accent-text-color: hsl(220, 98%, 61%);
// }

// ### Light Theme

// - Very Light Gray: hsl(0, 0%, 98%)
// - Very Light Grayish Blue: hsl(236, 33%, 92%)
// - Light Grayish Blue: hsl(233, 11%, 84%)
// - Dark Grayish Blue: hsl(236, 9%, 61%)
// - Very Dark Grayish Blue: hsl(235, 19%, 35%)


btnChangeTheme.addEventListener("click", () => {
    changeTheme()
    
})

function changeTheme() {
    if(theme === "light") {
        setDarkTheme()
        theme = "dark"
    }else {
        setLightTheme()
        theme = "light"
    }
    
}

function setLightTheme() {
    root.style.setProperty("--background", "hsl(236, 33%, 92%)")
    root.style.setProperty("--to-do-background", "hsl(0, 0%, 98%)")
    root.style.setProperty("--actions-text", "hsl(236, 9%, 61%)")
    root.style.setProperty("--todo-text", "hsl(235, 19%, 35%)")
    root.style.setProperty("--to-do-text-finished", "hsl(233, 11%, 84%)")
    root.style.setProperty("--btn-hover", "hsl(235, 19%, 35%)")
    mobileBgImg.src = "images/bg-mobile-light.jpg"
    desktopBgImg.src = "images/bg-desktop-light.jpg"
    changeThemeIcon.src = "images/icon-moon.svg"
}

function setDarkTheme() {
    root.style.setProperty("--background", "")
    root.style.setProperty("--to-do-background", "")
    root.style.setProperty("--actions-text", "")
    root.style.setProperty("--todo-text", "")
    root.style.setProperty("--to-do-text-finished", "")
    root.style.setProperty("--btn-hover", "")
    mobileBgImg.src = "images/bg-mobile-dark.jpg"
    desktopBgImg.src = "images/bg-desktop-dark.jpg"
    changeThemeIcon.src = "images/icon-sun.svg"


}



