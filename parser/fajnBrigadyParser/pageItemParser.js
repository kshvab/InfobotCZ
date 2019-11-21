var request = require('request');
const cheerio = require('cheerio');
const bot = require('../../src/bot');
const p_IsItemInDb = require('./helpers/p_IsItemInDb');

function pageItemParser([location, pageItemUrl]) {
  return new Promise(function(resolve, reject) {
    if (!pageItemUrl || !pageItemUrl.length) {
      resolve(null);
      return null;
    }
    p_IsItemInDb(pageItemUrl).then(res => {
      if (res) resolve(null);
      else {
        console.log(pageItemUrl);
        request(encodeURI(pageItemUrl), function(error, response, body) {
          if (error) {
            console.log(error);
            console.log(response);
            //reject(error);
            resolve(null);
          }

          let categorieCZ = pageItemUrl
            .slice(36)
            .slice(0, pageItemUrl.slice(36).indexOf('/'));

          let categorie = 'other';
          if (categorieCZ == 'manualni') categorie = 'manual';
          if (categorieCZ == 'administrativa') categorie = 'administration';
          if (categorieCZ == 'obchod-sluzby') categorie = 'services';

          let $ = cheerio.load(body, { decodeEntities: false });

          let title = $('h1').text();

          let phoneNumber = $('.phone').text();

          if (!phoneNumber || !phoneNumber.length) resolve(null);

          let phoneName = $('.telefon-jmeno').text();

          let idInzeratu = $('.id-inzeratu')
            .text()
            .slice(13);

          let informaceOPracovnimMiste = $('.main-wrapper p')
            .eq(0)
            .text();

          let pozadueme = $('.main-wrapper p')
            .eq(1)
            .text();

          let nabizime = $('.main-wrapper p')
            .eq(2)
            .text();

          let postDetailsTds = $('.post-details td');
          let postDetailsTdsArr = [];
          for (let i = 0; i < postDetailsTds.length; i++) {
            postDetailsTdsArr.push(postDetailsTds.eq(i).text());
          }

          let postDetailsArr = [];

          for (let i = 0; i < postDetailsTdsArr.length; i++) {
            if (!postDetailsTdsArr[i].indexOf('Termín'))
              postDetailsTdsArr[i] = 'Termín:';

            if (!postDetailsTdsArr[i].indexOf('pracoviště:'))
              postDetailsTdsArr[i] = 'Pracoviště:';

            if (!postDetailsTdsArr[i].indexOf('Telefon:'))
              postDetailsTdsArr[i] = '';

            if (
              postDetailsTdsArr[i].length &&
              postDetailsTdsArr[i].indexOf(':') ==
                postDetailsTdsArr[i].length - 1
            ) {
              postDetailsArr.push({
                fieldName: postDetailsTdsArr[i],
                fieldValue: postDetailsTdsArr[i + 1]
              });
            }
          }

          let fushkaMsg = '';

          fushkaMsg += '<b>🧰 ' + title + '</b>\n\n';

          fushkaMsg += '<b>✅ Informace o pracovním místě</b>\n';
          fushkaMsg += informaceOPracovnimMiste + '\n\n';

          fushkaMsg += '<b>✅ Požadujeme</b>\n';
          fushkaMsg += pozadueme + '\n\n';

          fushkaMsg += '<b>✅ Nabízíme</b>\n';
          fushkaMsg += nabizime + '\n\n';

          fushkaMsg += '<b>✅ Info</b>\n';
          for (let i = 0; i < postDetailsArr.length; i++) {
            fushkaMsg += `<b>${postDetailsArr[i].fieldName}</b> <i>${postDetailsArr[i].fieldValue}</i>\n`;
          }

          fushkaMsg += `\n👤 Contact: <i>${phoneName}</i>\n`;
          fushkaMsg += `☎️ Telefon: <i>${phoneNumber}</i>`;

          let text = fushkaMsg;

          let fushkaObj = {
            source: 'fajnBrigady',
            sourceUrl: pageItemUrl,
            idInzeratu,
            categorie,
            location,
            text
          };

          resolve(fushkaObj);
        });
      }
    });
  });
}

module.exports = pageItemParser;
