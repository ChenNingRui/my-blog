import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import CardActions from '@material-ui/core/CardActions';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import data from '../resource/introduction.json';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    media: {
        height: 150,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={process.env.PUBLIC_URL + "/" + data.background}
                title="Contemplative Reptile"
            />
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} src={process.env.PUBLIC_URL + "/" + data.avatar}>
                        {data.name}
                    </Avatar>
                }
                title={data.name}
                subheader={data.motto}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {data.introduction_title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {data.introduction}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="youtube" href={data.youtube}>
                    <YouTubeIcon />
                </IconButton>
                <IconButton aria-label="fb" href={data.fb}>
                    <FacebookIcon />
                </IconButton>
                <IconButton aria-label="Ins" href={data.ins}>
                    <InstagramIcon />
                </IconButton>
                <IconButton aria-label="linkin" href={data.linkin}>
                    <LinkedInIcon />
                </IconButton>
            </CardActions >
        </Card>
    );
}
