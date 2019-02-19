import Layout from '../components/MyLayout'
import React, {useState} from 'react';
import classNames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField'
import 'date-fns';
import getDaysInMonth from 'date-fns/getDaysInMonth'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import Grid from '@material-ui/core/Grid';
import jaLocale from 'date-fns/locale/ja';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  grid: {
    width: '60%',
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const constClasses = [
  '会議資料',
  '施策資料',
  '写真',
  '映像',
  'チラシ',
  'ポスター',
  '新聞',
  '書籍・雑誌',
  'その他',
]

const categories = [
  '被害',
  '防災',
  '支援',
  '行政',
  '医療',
  '報道',
  '復興',
  '産業',
  '学校',
  '生活',
]


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function SearchForm () {
  const classes = useStyles();
  const theme = useTheme();
  const [constClass, setConstClass] = useState([]);
  const [category, setCategory] = useState([]);
  const [date, setDate] = useState(new Date());
  const [days, setDays] = useState(getDaysInMonth(date));

  const handleChangeConstClass = event => {
    setConstClass(event.target.value)
  }

  const handleChangeCategory = event => {
    setCategory(event.target.value)
  }

  const handleChangeDate = date => {
    let tmp = new Date(date)
    setDate(tmp)
    setDays(getDaysInMonth(tmp))
  }

  const handleChangeYear = year => {
    let tmp = new Date(date)
    tmp.setFullYear(year.target.value)
    setDate(tmp)
    setDays(getDaysInMonth(tmp))
  }

  const handleChangeMonth = month => {
    let tmp = new Date(date)
    tmp.setMonth(month.target.value)
    setDate(tmp)
    setDays(getDaysInMonth(tmp))
  }

  const handleChangeDay = day => {
    let tmp = new Date(date)
    tmp.setDate(day.target.value)
    setDate(tmp)
  }

  const openPicker = e => {

  }

  return (
    <Layout>
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-search"
            label="フリーワード"
            type="search"
            className={classes.textField}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="ConstClass">資料分類</InputLabel>
          <Select
            multiple
            value={constClass}
            onChange={handleChangeConstClass}
            input={<Input id="ConstClass"/>}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {constClasses.map(constName => (
              <MenuItem key={constName} value={constName} style={getStyles(constName, constClass, theme)}>
                <Checkbox checked={constClass.indexOf(constName) > -1}/>
                <ListItemText primary={constName}/>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="category">カテゴリー</InputLabel>
          <Select
            multiple
            value={category}
            onChange={handleChangeCategory}
            input={<Input id="category"/>}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {categories.map(cat => (
              <MenuItem key={cat} value={cat}>
                <Checkbox checked={category.indexOf(cat) > -1}/>
                <ListItemText primary={cat}/>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-search"
            label="文書識別No."
            type="search"
            className={classes.textField}
          />
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale} className={classes.textField}>
            <DatePicker
              label="日付"
              value={date}
              format='yyyy年MM月dd日'
              onChange={handleChangeDate}
/*              adornmentPosition="start"
              showTodayButton="true"
              todayLabel="今日"*/
            />
          </MuiPickersUtilsProvider>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Year</InputLabel>
          <Select
            value={date.getFullYear()}
            onChange={handleChangeYear}
            inputProps={{
              name: 'year',
              id: 'year',
            }}
          >
            <MenuItem value={2014}>2014</MenuItem>
            <MenuItem value={2015}>2015</MenuItem>
            <MenuItem value={2016}>2016</MenuItem>
            <MenuItem value={2017}>2017</MenuItem>
            <MenuItem value={2018}>2018</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Month</InputLabel>
          <Select
            value={date.getMonth()}
            onChange={handleChangeMonth}
            inputProps={{
              name: 'month',
              id: 'month',
            }}
          >
            <MenuItem value={0}>1</MenuItem>
            <MenuItem value={1}>2</MenuItem>
            <MenuItem value={2}>3</MenuItem>
            <MenuItem value={3}>4</MenuItem>
            <MenuItem value={4}>5</MenuItem>
            <MenuItem value={5}>6</MenuItem>
            <MenuItem value={6}>7</MenuItem>
            <MenuItem value={7}>8</MenuItem>
            <MenuItem value={8}>9</MenuItem>
            <MenuItem value={9}>10</MenuItem>
            <MenuItem value={10}>11</MenuItem>
            <MenuItem value={11}>12</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Day</InputLabel>
          <Select
            value={date.getDate()}
            onChange={handleChangeDay}
            inputProps={{
              name: 'day',
              id: 'day',
            }}
          >
            {Array(days).fill(1).map((x, i) => <MenuItem value={i + 1}>{i + 1}</MenuItem>)}
          </Select>
        </FormControl>
        <Button onClick={openPicker}> Open picker </Button>
      </div>
    </Layout>
  )
}

export default SearchForm
