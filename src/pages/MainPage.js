import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Card from '../components/Card';
import Grid from '@material-ui/core/Grid';
import ListItem from '../components/ListItem';
import articles from "../resource/articles.json";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    card: {
        width: '100%',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function MainPage(props) {
    const classes = useStyles();
    let [components, setComponents] = useState([]);

    let { selection } = props;

    let dataHandle = (data, selection) => {
        setComponents([]);
        for (let i = 0, length = data.length; i < length; i++) {
            let item = data[i];
            if (selection === "All") {
                setComponents(oldArray => [...oldArray, <div key={i}>
                    < ListItem data={item} />
                    <Divider variant="inset" component="li" />
                </div>]);
            }
            if (selection === item.type) {
                setComponents(oldArray => [...oldArray, <div key={i}>
                    < ListItem data={item} />
                    <Divider variant="inset" component="li" />
                </div>]);
            }
        }
    }

    useEffect(() => {
        dataHandle(articles, selection);
    }, [selection]);

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card className={classes.card} />
                </Grid>
                <Grid item xs={12}>
                    <List className={classes.root}>
                        {components}
                    </List>
                </Grid>
            </Grid>
        </div>
    );
}
