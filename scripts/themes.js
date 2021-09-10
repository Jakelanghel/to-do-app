class Themes {
    constructor() {
        this.theme = null
        this.mobileBgImg = document.querySelector("[data-mobile-bg-img]")
        this.desktopBgImg = document.querySelector("[data-desktop-bg-img]")
        this.changeThemeIcon = document.querySelector("[data-change-theme-icon]")
        this.root = document.documentElement
    }

    setDarkTheme() {
        this.root.style.setProperty("--background", "")
        this.root.style.setProperty("--to-do-background", "")
        this.root.style.setProperty("--actions-text", "")
        this.root.style.setProperty("--todo-text", "")
        this.root.style.setProperty("--to-do-text-finished", "")
        this.root.style.setProperty("--btn-hover", "")
        this.mobileBgImg.src = "images/bg-mobile-dark.jpg"
        this.desktopBgImg.src = "images/bg-desktop-dark.jpg"
        this.changeThemeIcon.src = "images/icon-sun.svg"
    }

    setLightTheme() {
        this.root.style.setProperty("--background", "hsl(236, 33%, 92%)")
        this.root.style.setProperty("--to-do-background", "hsl(0, 0%, 98%)")
        this.root.style.setProperty("--actions-text", "hsl(236, 9%, 61%)")
        this.root.style.setProperty("--todo-text", "hsl(235, 19%, 35%)")
        this.root.style.setProperty("--to-do-text-finished", "hsl(233, 11%, 84%)")
        this.root.style.setProperty("--btn-hover", "hsl(235, 19%, 35%)")
        this.mobileBgImg.src = "images/bg-mobile-light.jpg"
        this.desktopBgImg.src = "images/bg-desktop-light.jpg"
        this.changeThemeIcon.src = "images/icon-moon.svg"
    }

    getPreferedTheme() {
        // Check for users prefered color scheme
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.setDarkTheme() // Set to dark mode
            this.theme = "dark" // set theme variable to dark
        }

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            this.setLightTheme()
            this.theme = "light"

        }
    }

    changeTheme() {
        // Check if user is currently using light or dark mode
        if(this.theme === "light") {
            // If currently in light mode switch to darkmode
            this.setDarkTheme() 
            this.theme = "dark"
        }else {
            // If currently in dark mode switch to light
            this.setLightTheme() 
            this.theme = "light"
    }
    }
}