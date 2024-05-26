// Single Responsibility - display the chat messages and user connection interactions to the user

import Message from "@src/types/Message";
import MessageComponent from "@src/components/ChatRoom/MessageFlow/Message";

// interface MessageFlowProps {}

const messages: Message[] = [
  {
    id: "1234",
    message: "Yo, wassup",
    sender: "bingus2008",
    timestamp: new Date(),
  },
  {
    id: "1235",
    message: "How's it going?",
    sender: "bingus2008",
    timestamp: new Date(),
  },
  {
    id: "1236",
    message: "toothpick7 has joined the chat!",
    timestamp: new Date(),
    type: "NOTIFICATION",
  },
  {
    id: "1237",
    message: "Nothing much man, how's it with you?",
    sender: "toothpick7",
    timestamp: new Date(),
    type: "SELF_MESSAGE",
  },
  {
    id: "1238",
    message: "toothpick7 has left the chat",
    timestamp: new Date(),
    type: "NOTIFICATION",
  },
  {
    id: "1",
    message:
      "integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla",
    sender: "hgredden0",
    timestamp: new Date(1711299879000),
  },
  {
    id: "2",
    message:
      "consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis",
    sender: "nbolino1",
    timestamp: new Date(1689177997000),
  },
  {
    id: "3",
    message:
      "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue",
    sender: "mleuty2",
    timestamp: new Date(1688103417000),
  },
  {
    id: "4",
    message:
      "duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh",
    sender: "rgrigson3",
    timestamp: new Date(1698018579000),
  },
  {
    id: "5",
    message:
      "lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent",
    sender: "iwhiteoak4",
    timestamp: new Date(1690121022000),
  },
  {
    id: "6",
    message:
      "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper",
    sender: "edouberday5",
    timestamp: new Date(1686006906000),
  },
  {
    id: "7",
    message:
      "nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at",
    sender: "uleet6",
    timestamp: new Date(1702250352000),
  },
  {
    id: "8",
    message:
      "adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum",
    sender: "rworlidge7",
    timestamp: new Date(1689902425000),
  },
  {
    id: "9",
    message:
      "imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus",
    sender: "gglas8",
    timestamp: new Date(1706249382000),
  },
  {
    id: "10",
    message:
      "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis",
    sender: "pdaine9",
    timestamp: new Date(1715105544000),
  },
];

const MessageFlow = () => {
  return (
    <>
      <div className="flex flex-col p-2 gap-2 rounded-md drop-shadow-sm bg-white grow overflow-y-auto mb-auto">
        {messages.map(chat => (
          <MessageComponent message={chat} key={chat.id} />
        ))}
      </div>
    </>
  );
};

export default MessageFlow;
