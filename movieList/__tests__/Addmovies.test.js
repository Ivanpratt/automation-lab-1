const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const {addMovies, deleteMovie, greyMovie} = require('../functions/functions')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')

})

afterAll(async () => {
    await driver.quit()
})

test(`tests to add a movie`, async () => {
    await addMovies(driver)

    await driver.sleep(1000)
})


test(`tests to delete a movie`, async () => {
    await deleteMovie(driver)

    await driver.sleep(1000)
})

test(`tests to grey a movie`, async () => {
    await greyMovie(driver)

    await driver.sleep(1000)
})