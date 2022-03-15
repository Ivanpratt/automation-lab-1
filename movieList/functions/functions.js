const {By} = require('selenium-webdriver')


module.exports = {

    addMovies: async (driver) => {

    let inputfield = await driver.findElement(By.xpath('//input'))

    await inputfield.sendKeys('The Bartmon\n')
    await inputfield.sendKeys('The Bartmon\n')
    await inputfield.sendKeys('The Bartmon\n')

    },

    deleteMovie: async (driver) => {

        let firstMovie = await driver.findElement(By.xpath("//*")).click()

    },

    greyMovie: async (driver) => {

        let firstMovie = await driver.findElement(By.xpath("//span")).click()

    }

    
    
}


