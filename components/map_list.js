import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Divider, List, ListItem, ListItemAvatar, ListItemText, ListSubheader } from '@material-ui/core'
import { blue, indigo, red } from '@material-ui/core/colors'

const styledBy = (property, mapping) => props => mapping[props[property]]

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    height: '80vh',
    backgroundColor: theme.palette.background.paper,
    overflowY: 'scroll'
  },
  inline: {
    display: 'inline',
  },
  list: {
    backgroundColor: styledBy('color', {
      red: red[500],
      redLight: red[600],
      blue: blue[500],
      blueLight: blue[600],
      indigo: indigo[500],
    }),
  },
  listText: {
    color: 'white !important',
  }
}))

function ColoredList (props) {
  const { color, ...other } = props
  const classes = useStyles(props)
  return <List className={classes.list} {...other} />
}

ColoredList.propTypes = {
  color: PropTypes.string.isRequired,
}

function MapList ({ pointList }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {pointList.map((cat, index) =>
        <ColoredList component="nav" key={index} dense color={cat.color}>
          <ListSubheader disableGutters style={{color: 'white'}}>{cat.name}</ListSubheader>
          <Divider/>
          {cat.points.map((point, index) =>
            <React.Fragment key={index}>
              <ListItem button alignItems="flex-start">
                <ListItemText disableTypography primary={point.name} className={classes.listText}/>
              </ListItem>
              <Divider/>
            </React.Fragment>
          )}
        </ColoredList>
      )}
    </div>
  )
}

export default MapList