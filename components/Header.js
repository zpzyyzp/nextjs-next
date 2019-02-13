import React from 'react'
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Button } from '@material-ui/core'
import teal from '@material-ui/core/colors/teal'
import Hidden from '@material-ui/core/Hidden'

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <div>
        <img src="https://www.kumamoto-archive.jp/wp-content/uploads/logo.png" alt="熊本地震デジタルアーカイブ" height="75px"/>
        <Hidden smUp>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon/>
          </IconButton>
        </Hidden>
        <Link href="/">
          <Button color="inherit">ホーム</Button>
        </Link>
        <Link href="/about">
          <Button color="inherit">About</Button>
        </Link>
        <Link href="/detailed-search">
          <Button color="inherit">詳細検索</Button>
        </Link>
        <Link href="/search">
          <Button color="inherit">詳細検索2</Button>
        </Link>
        <Link href="/map">
          <Button color="inherit">地図</Button>
        </Link>
      </div>
    </Toolbar>
  </AppBar>
)

Header.primary = teal[500]

export default Header
