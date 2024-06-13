import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatContact } from "./chat-contact";

const contacts = [
  {
    avatar: "https://example.com/avatar1.jpg",
    name: "John Doe",
    designation: "Software Engineer",
    message: "Hey, how are you doing?",
    lastReceived: "2024-06-12T10:30:00Z",
    newCount: 2,
  },
  {
    avatar: "https://example.com/avatar2.jpg",
    name: "Jane Smith",
    designation: "Project Manager",
    message: "Can you review the latest document?",
    lastReceived: "2024-06-12T14:45:00Z",
    newCount: 5,
  },
  {
    avatar: "https://example.com/avatar3.jpg",
    name: "Alice Johnson",
    designation: "UI/UX Designer",
    message: "The new design draft is ready.",
    lastReceived: "2024-06-11T09:20:00Z",
    newCount: 1,
  },
  {
    avatar: "https://example.com/avatar4.jpg",
    name: "Bob Brown",
    designation: "Data Scientist",
    message: "Can you look at the new dataset?",
    lastReceived: "2024-06-10T16:30:00Z",
    newCount: 4,
  },
  {
    avatar: "https://example.com/avatar5.jpg",
    name: "Carol White",
    designation: "HR Manager",
    message: "Don't forget the meeting tomorrow.",
    lastReceived: "2024-06-12T11:15:00Z",
    newCount: 0,
  },
  {
    avatar: "https://example.com/avatar6.jpg",
    name: "David Wilson",
    designation: "Marketing Specialist",
    message: "Here's the latest campaign report.",
    lastReceived: "2024-06-11T13:40:00Z",
    newCount: 3,
  },
  {
    avatar: "https://example.com/avatar7.jpg",
    name: "Emma Davis",
    designation: "Business Analyst",
    message: "The analysis report is complete.",
    lastReceived: "2024-06-09T12:25:00Z",
    newCount: 6,
  },
  {
    avatar: "https://example.com/avatar8.jpg",
    name: "Frank Miller",
    designation: "Product Manager",
    message: "We need to discuss the product roadmap.",
    lastReceived: "2024-06-12T17:50:00Z",
    newCount: 1,
  },
  {
    avatar: "https://example.com/avatar9.jpg",
    name: "Grace Lee",
    designation: "QA Engineer",
    message: "Testing has been completed successfully.",
    lastReceived: "2024-06-10T08:15:00Z",
    newCount: 0,
  },
  {
    avatar: "https://example.com/avatar10.jpg",
    name: "Henry Martinez",
    designation: "DevOps Engineer",
    message: "The deployment pipeline is ready.",
    lastReceived: "2024-06-12T19:05:00Z",
    newCount: 7,
  },
];

export const ChatSidebar = () => {
  return (
    <div className="px-1">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="px-3 rounded-full border-foreground"
        >
          All
        </Button>
        <Button variant="outline" className="px-3 border-foreground">
          Experts
        </Button>
        <Button variant="outline" className="px-3 border-foreground">
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
