import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProjectCard(props) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            {console.log()}
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.Image}
                    alt={props.Name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {props.Name}
                    </Typography>
                    <Typography style={{ display: 'flex', justifyContent: 'space-evenly' }} variant="body2" color="text.secondary">
                        {props.Tech.map((ele) => { return (<p>{ele}</p>) })}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
