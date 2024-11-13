import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const EmojiMessage = ( {addEmoji}: {addEmoji:any} ) => {

  return <Picker data={data} onEmojiSelect={addEmoji}   />;
};

export default EmojiMessage;
