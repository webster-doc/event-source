const smartGrid = require('smart-grid');

/**
 * SmartGird generator function
 */
function generateSmartGrid(done) {
  smartGrid('./src/common/style', {
    outputStyle: 'scss', // less || scss || sass || styl
    columns: 12, // number of grid columns
    offset: '10px', // offset for one side of column px || % || rem
    mobileFirst: true, // mobileFirst ? 'min-width' : 'max-width'
    container: {
      maxWidth: '1920px', // max-width оn very large screen
      fields: '20px', // secure fields on mobile
    },
    breakPoints: {

      //Desktop
      desktop_xl: {
        width: '1920px'
      },
      desktop_lg: {
        width: '1601px'
      },
      desktop_md: {
        width: '1441px'
      },
      desktop_sm: {
        width: '1367px'
      },
      desktop_xs: {
        width: '1201px'
      },

      //Table
      table_xl: {
        width: '1025px',
        fields: '80px'
      },
      table_lg: {
        width: '961px'
      },
      table_md: {
        width: '769px'
      },
      table_sm: {
        width: '641px'
      },
      table_xs: {
        width: '541px'
      },

      //Mobile
      mobile_xl: {
        width: '481px'
      },
      mobile_lg: {
        width: '421px'
      },
      mobile_md: {
        width: '381px'
      },
      mobile_sm: {
        width: '341px'
      },
      mobile_xs: {
        width: '320px'
      }

      /*
      We can create any quantity of break points.

      some_name: {
          width: 'Npx',
          fields: 'N(px|%|rem)',
          offset: 'N(px|%|rem)'
      }
      */
    }
  });
  console.log('smart-grid redy');
}

generateSmartGrid();