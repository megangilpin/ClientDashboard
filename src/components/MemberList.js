import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { formatDate } from '../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  memberList: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

function MemberList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // Open/closes Member list dropdown
  const handleClick = () => {
    setOpen((preState) => !preState);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Members" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.members.length > 0 ? (
            props.members.map((member) => (
              <React.Fragment key={member.id}>
                <ListItem
                  key={member.id}
                  className={classes.memberList}
                  alignItems="flex-start"
                >
                  <ListItemText primary={member.name} />
                  <Typography variant="caption" display="block">
                    {` ${member.title} - ${member.phone_number}`}
                  </Typography>
                  <Typography variant="caption" display="block">
                    {` Start Date - ${formatDate(member.created_at)}`}
                  </Typography>
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))
          ) : (
            <ListItem> No members exist</ListItem>
          )}
        </List>
      </Collapse>
    </List>
  );
}

export default MemberList;
