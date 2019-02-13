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
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField'

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

  const handleChangeConstClass = event => {
    setConstClass(event.target.value)
  }

  const handleChangeCategory = event => {
    setCategory(event.target.value)
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
    </Layout>
  )
}

export default SearchForm
