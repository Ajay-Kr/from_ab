const cheerio = require('cheerio');

async function getHtml() {
  try {
    const url = 'https://www.goal.com/en/news';

    const fetched = await (await fetch(url)).text();
    
    return fetched;

  } catch (error) {
    console.log(error.message)
  }
} 

async function getData() {
  const response = await getHtml();
  const selectTool = cheerio.load(response);
  const newsArray = selectTool('article.component-card.card_card__c3b2f');
      
  const result = [];

  newsArray.each((i, news) => {
    const imgSrcset = selectTool(news).find('div a span img').attr('srcset');
    const newsImgSrc = imgSrcset.substring(0, imgSrcset.indexOf(' '));
    const newsHead = selectTool(news).find('.title.h5 span').text();
    const newsTeaser = selectTool(news).find('.content-body p').text();
    
    result.push({newsImgSrc, newsHead, newsTeaser})
  });

  return result;
}

module.exports = getData;