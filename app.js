let dadjokenum = Math.floor(Math.random() * 5)
const mixedm = () => {
    
    switch (dadjokenum) {
        case 0:
           return "My very first project was a dad j0ke gen3rator that us3s 4ll 3 languages &#40;html, js, and css&#41;"
        case 1:
           return "MY VERY FIRST PROJECT WAS A DAD JOKE GENERATOR THAT USES ALL 4 LANGUAGES HTML JAVASCRIPT AND CSS"
        case 2:
            return "My very first project was a dad joke generator that uses hypertext markup language, javascript and finally cascading style sheet"
        case 3:
            return "My vEry fIRst prOjEcT wAs a DAd jOke GEnerAtOr that uses HTML CSS AND JS"
        case 4:
           	return "My very first project was a dad hkoe generator that uses all 3 main website building languages: HTML, CSS and JS"
        default: 
            return "How do you make seven even? Take away the s";
    }
}
document.getElementById("placewhere").innerHTML = mixedm()