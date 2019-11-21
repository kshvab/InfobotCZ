//-------------- This Promis returns arr of page items links ------------//
var request = require('request');
const cheerio = require('cheerio');

function pageListParser(location, pageListUrl) {
  //console.log(pageListUrl);
  return new Promise(function(resolve, reject) {
    request(pageListUrl, function(error, response, body) {
      //console.log(error);
      //console.log(response);
      //console.log(response);

      console.log('--------------------------------------------------');

      if (error) {
        console.log(error);
        reject(error);
      }

      var $ = cheerio.load(body, { decodeEntities: false });

      let listIdArr = [];

      for (let i = 0; i < $('.post-grey').length; i++) {
        listIdArr.push(
          $('.post-grey')
            .eq(i)
            .attr('id')
        );
      }

      for (let i = 0; i < $('.post-blue').length; i++) {
        listIdArr.push(
          $('.post-blue')
            .eq(i)
            .attr('id')
        );
      }

      let listUrlsArr = [];
      listIdArr.forEach(item => {
        let link = $(`#${item} a`).attr('href');
        listUrlsArr.push(link);
      });
      resolve([location, listUrlsArr]);
    });
  });
}

module.exports = pageListParser;
