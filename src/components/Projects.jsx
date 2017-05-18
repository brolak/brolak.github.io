import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'https://epicplugins.com/wp-content/uploads/2016/12/notify-me-add-on.png',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://technikfaultier.files.wordpress.com/2010/01/ipad-notify-me.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://www.mobigyaan.com/images/stories/Tablets/Apple/ipad-2-india-notify-me.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://1.bp.blogspot.com/_3N0VetpYvQE/SxJdtPnI5yI/AAAAAAAAAx4/5uJeeRuBKOU/w1200-h630-p-k-nu/Harry_Potter_and_the_Half_Blood_Prince_1.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://media-cache-ec0.pinimg.com/736x/90/5c/a7/905ca76e504569164e864e47ef738173.jpg',
    title: 'Hats',
    author: 'Hans',
  },
];

const Projects = () => (
	<MuiThemeProvider muiTheme={theme}>
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
  </MuiThemeProvider>
);

export default Projects;