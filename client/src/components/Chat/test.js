import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "40vh",
    height: "80vh",
    background: "transparent",
    display: "flex",
    flexDirection: "column"
  },
  messageContainer: {
    margin: "2px 5px 0px 5px",
    display: "flex",
    justifyContent: "flex-start"
  }
});

const TIME_TO_DISAPPEAR = 1500;

const FadeCard = ({ message }) => {
  const { messageContainer } = useStyles();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, TIME_TO_DISAPPEAR);
  }, []);

  return (
    <div>
      <Fade when={visible}>
        <Box className={messageContainer}>
          <p> {message} </p>
        </Box>
      </Fade>
    </div>
  );
};

const MessageContainer = ({ messages }) => {
  const { container } = useStyles();

  return (
    <div className={container}>
      {messages &&
        messages.map((message, idx) => (
          <FadeCard key={idx} message={message} />
        ))}
    </div>
  );
};

export default MessageContainer;