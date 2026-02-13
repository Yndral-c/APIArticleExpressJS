const ArticleService = require('./articleService');

test('Tester ???', async() => {

    const testResult = await ArticleService.getAll();

    expect(testResult.code).toBe("200")
})

test('Tester créer un article', async() => {
    const testResult = await ArticleService.createArticle({title: "Test Unitaire", desc:"Test Unitaire", auth:"author", imgPath: "imgPath"});
    expect(testResult.code).toBe("200")
})

test('Tester update un article', async() => {
    const testResult = await ArticleService.modifiedArticle({id: "1", title: "Test Unitaire", desc:"Test Unitaire", auth:"author", imgPath: "imgPath"});
    expect(testResult.code).toBe("200")
})