import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatContact } from "./chat-contact";
import {
  userAvatar1Image,
  userAvatar2Image,
  userAvatar3Image,
  userAvatar4Image,
  userAvatar5Image,
} from "@/assets/images";
import { getMessages } from "@/api/http";
import { useQuery } from "@tanstack/react-query";


const contacts = [
  {
    avatar: userAvatar1Image,
    name: "John Doe",
    designation: "Software Engineer",
    message: "Hey, how are you doing?",
    lastReceived: "5 min",
    newCount: 3,
  },
  {
    avatar: userAvatar2Image,
    name: "Jane Smith",
    designation: "Project Manager",
    message: "Can you review the latest document?",
    lastReceived: "10 min",
    newCount: 5,
  },
  {
    avatar: userAvatar3Image,
    name: "Alice Johnson",
    designation: "UI/UX Designer",
    message: "The new design draft is ready.",
    lastReceived: "30 min",
    newCount: 12,
  },
  {
    avatar: userAvatar4Image,
    name: "Bob Brown",
    designation: "Data Scientist",
    message: "Can you look at the new dataset?",
    lastReceived: "1 day",
  },
  {
    avatar: userAvatar5Image,
    name: "Carol White",
    designation: "HR Manager",
    message: "Don't forget the meeting tomorrow.",
    lastReceived: "2 days",
  },
  {
    avatar: userAvatar1Image,
    name: "David Wilson",
    designation: "Marketing Specialist",
    message: "Here's the latest campaign report.",
    lastReceived: "1 month",
  },
  {
    avatar: userAvatar2Image,
    name: "Emma Davis",
    designation: "Business Analyst",
    message: "The analysis report is complete.",
    lastReceived: "3 month",
  },
  {
    avatar: userAvatar3Image,
    name: "Frank Miller",
    designation: "Product Manager",
    message: "We need to discuss the product roadmap.",
    lastReceived: "4 month",
  },
  {
    avatar: userAvatar4Image,
    name: "Grace Lee",
    designation: "1 year",
    message: "Testing has been completed successfully.",
    lastReceived: "5 min",
  },
  {
    avatar: userAvatar5Image,
    name: "Henry Martinez",
    designation: "DevOps Engineer",
    message: "The deployment pipeline is ready.",
    lastReceived: "10 min",
  },
];

export const ChatSidebar = () => {
  const { data } = useQuery({
    queryFn: getMessages,
    queryKey: ["Messages"],
  });

  console.log(data)
  return (
    <div className="px-1">
      <div className="flex items-center gap-2">
        <Button variant="dark" rounded>
          All
        </Button>
        <Button variant="outline" size="sm">
          Experts
        </Button>
        <Button variant="outline" size="sm">
          Innovators
        </Button>
      </div>
      <div className="mt-4">
        <Input type="text" />
      </div>
      <div className="divide-y divide-border rounded-2xl bg-accent py-4 mt-4">
        {contacts.map((contact, index) => (
          <ChatContact {...contact} key={index} />
        ))}
      </div>
    </div>
  );
};
