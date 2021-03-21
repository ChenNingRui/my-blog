import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArticlePage from '../pages/ArticlePage';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function SimpleList(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    let { data } = props;

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <ListItem alignItems="flex-start" button onClick={handleClick}>
                <ListItemAvatar>
                    <Avatar alt={data.title} src={process.env.PUBLIC_URL + data.media} />
                </ListItemAvatar>
                <ListItemText
                    primary={data.title + " - " + data.type}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {data.date + " - "}
                            </Typography>
                            {data.outline}
                        </React.Fragment>
                    }
                />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem className={classes.nested}>
                        <React.Fragment>
                            <ArticlePage content={data.content} />
                        </React.Fragment>
                    </ListItem>
                </List>
            </Collapse>
        </div >
    );
}
