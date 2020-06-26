import React from "react";
import {
  MoreVert as MoreVertIcon,
  Share as ShareIcon,
} from "@material-ui/icons";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Button,
  IconButton,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

const ContentCard = (props) => {
  const classes = useStyles();
  const { avatarSrc, title, subtitle, description, imgSrc } = props;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarSrc} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia className={classes.media} image={imgSrc} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
};

export default ContentCard;
