import Layout from '../components/MyLayout'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300,
    maxWidth: 500,
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
})

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const ConstClass = [
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

const category = [
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

function getStyles (name, that) {
  return {
    fontWeight:
      that.state.name.indexOf(name) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium,
  }
}

function SearchForm1 () {
  const [name, setName] = useState([]);
  const [constClass, setConstClass] = useState([]);
  const [category, setCategory] = useState([]);

  const classes = useStyles();
}

class SearchForm extends React.Component {
  state = {
    name: [],
    ConstClass: [],
    category: [],
  }

  handleChangeConstClass = event => {
    this.setState({ ConstClass: event.target.value })
  }

  handleChangeCategory = event => {
    this.setState({ category: event.target.value })
  }

  handleChangeMultiple = event => {
    const { options } = event.target
    const value = []
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    this.setState({
      name: value,
    })
  }

  render () {
    const { classes } = this.props

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
              value={this.state.ConstClass}
              onChange={this.handleChangeConstClass}
              input={<Input id="ConstClass"/>}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {ConstClass.map(ConstClass => (
                <MenuItem key={ConstClass} value={ConstClass}>
                  <Checkbox checked={this.state.ConstClass.indexOf(ConstClass) > -1}/>
                  <ListItemText primary={ConstClass}/>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category">カテゴリー</InputLabel>
            <Select
              multiple
              value={this.state.category}
              onChange={this.handleChangeCategory}
              input={<Input id="category"/>}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {category.map(category => (
                <MenuItem key={category} value={category}>
                  <Checkbox checked={this.state.category.indexOf(category) > -1}/>
                  <ListItemText primary={category}/>
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
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(SearchForm)
