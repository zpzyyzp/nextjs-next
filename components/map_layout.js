import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import MainMapBlock from './map_block'
import MapList from './map_list'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

const pointList = [
  {
    name: '文化財被害',
    color: 'blue',
    points: [{
      name: '熊本城',
      cat: '文化財被害',
      lat: 32.806186,
      lng: 130.705834,
      slug: 'kumamoto'
    }, {
      name: '阿蘇神社',
      cat: '文化財被害',
      lat: 32.947987,
      lng: 131.115884,
      slug: 'aso-shrine'
    }],
  }, {
    name: '自然災害',
    color: 'red',
    points: [
      {
        name: '阿蘇大橋',
        cat: '自然災害',
        lat: 32.883508,
        lng: 130.988861,
        slug: 'aso-bridge'
      }, {
        name: '京都大学火山研究センター',
        cat: '自然災害',
        lat: 32.885481,
        lng: 131.006536,
        slug: 'aso-volcanological-laboratory'
      }, {
        name: '東海大阿蘇キャンパス',
        cat: '自然災害',
        lat: 32.891415,
        lng: 130.99531,
        slug: 'u-tokai-aso'
      }, {
        name: '草千里展望所',
        cat: '自然災害',
        lat: 32.884977,
        lng: 131.050319,
        slug: 'kusasenri'
      }]
  }, {
    name: '住宅被害',
    color: 'indigo',
    points: [
      {
      name: '益城町（宮園)',
      cat: '住宅被害',
      lat: 32.793952,
      lng: 130.814604,
      slug: 'Mashiki-Miyazono'
    }, {
      name: '益城町（惣領）',
      cat: '住宅被害',
      lat: 32.78472,
      lng: 130.802458,
      slug: 'Mashiki-Soryo'
    }, {
      name: '益城町（木山・寺迫）',
      cat: '住宅被害',
      lat: 32.789728,
      lng: 130.818026,
      slug: 'Mashiki-Kiyama'
    }, {
      name: '西原村（小森大切畑）',
      cat: '住宅被害',
      lat: 32.84367,
      lng: 130.927194,
      slug: 'Nishihara-mura-Ogirihata'
    }, {
      name: '南阿蘇村（高野台）',
      cat: '住宅被害',
      lat: 32.885051,
      lng: 131.001148,
      slug: 'Minamiaso-Takanodai'
    }, {
      name: '南阿蘇村（河陽）',
      cat: '住宅被害',
      lat: 32.883508,
      lng: 130.991061,
      slug: 'Minamiaso-Kawayo'
    }, {
      name: '熊本市（南区近見）',
      cat: '住宅被害',
      lat: 32.765998,
      lng: 130.688420,
      slug: 'Kumamoto-Minami-Ward-Chikami'
    }, {
      name: '熊本市（健軍商店街）',
      cat: '住宅被害',
      lat: 32.777534,
      lng: 130.761242,
      slug: 'Kumamoto-Kengun'
    }]
  }, {
    name: '活断層',
    color: 'blueLight',
    points: [
      {
      name: '益城町（福原）',
      cat: '活断層',
      lat: 32.781809,
      lng: 130.836115,
      slug: 'Mashiki-Fukuhara'
    }, {
      name: '益城町（上陳　堂園）',
      cat: '活断層',
      lat: 32.804403,
      lng: 130.858835,
      slug: 'Mashiki-Dozono-Kamijin'
    }, {
      name: '益城町（杉堂）',
      cat: '活断層',
      lat: 32.814174,
      lng: 130.872613,
      slug: 'Mashiki-Sugido'
    }, {
      name: '西原村（大切畑ダム）',
      cat: '活断層',
      lat: 32.841458,
      lng: 130.931600,
      slug: 'Oogirihata-Dam'
    }, {
      name: '西原村（河原）',
      cat: '活断層',
      lat: 32.816772,
      lng: 130.882729,
      slug: 'Greenhill-Kawahara'
    }]
  }, {
    name: '公共施設被害',
    color: 'redLight',
    points: [{
      name: '阿蘇くまもと空港',
      cat: '公共施設被害',
      lat: 32.835596,
      lng: 130.855551,
      slug: 'Kumamoto-Airport'
    }]
  }]

function MainMapLayout ({layout = 'left', classes = styles}) {
  return (
    <div className={classes.root}>
      <Grid
        container
        direction={layout === 'left'? 'row' : 'row-reverse'}
        spacing={16}
      >
        <Grid item xs={8} sm={8}>
          <Paper className={classes.paper}>
            <MainMapBlock pointList={pointList} zoom={11}/>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Paper className={classes.paper}>
            <MapList pointList={pointList}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainMapLayout
