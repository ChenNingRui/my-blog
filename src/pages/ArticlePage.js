import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    media: {
        height: 150,
    },
});

export default function ArticlePage(props) {
    const classes = useStyles();
    let { content } = props;

    let contentHandle = (data) => {
        let components = [];
        for (let i = 0, length = data.length; i < length; i++) {
            let item = data[i];
            if (item.type === "p") {
                components.push(<p key={i}>{item.data}</p>);
            }
            else if (item.type === "img")
                components.push(
                    <div key={i}>
                        <img src={process.env.PUBLIC_URL + item.src} alt={item.alt} width={item.width} height={item.height} />
                        <br />
                    </div>
                );
            else if (item.type === "hyperlink")
                components.push(
                    <div key={i}>
                        <Link color={item.color} href={item.herf} > {item.str}</Link >
                        <br />
                    </div>
                );
        }
        return components;
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                {contentHandle(content)}
            </CardContent>
        </Card>
    );
}
