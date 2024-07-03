import { Button } from "@/components/ui/button";
// import angryemoji from "@/assets/svgs/angry-emoji.svg"
import { MoneyEmoji } from "@/assets/svgs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SquarePen} from "lucide-react";
const statusOptions = [
  {label:"💡 Brainstorming Ideas", value: "💡 Brainstorming Ideas" },
  { label: "🔍 Proofing the Concept", value: "🔍 Proofing the Concept" },
  { label: "📅 Updating the Roadmap", value: "📅 Updating the Roadmap" },
  { label: " 🌐 Exploring New Markets", value: " 🌐 Exploring New Markets" },
  { label: "💬 Chatting with Mentors", value: "💬 Chatting with Mentors" },
  { label: "📝 Writing User Stories", value: "📝 Writing User Stories" },
  { label: "🎨 Designing a New XP", value: "🎨 Designing a New XP" },
  { label: "🔧 Building a New Feature", value: "🔧 Building a New Feature" },
  { label: "🚧 Building the Infrastructure", value: "🚧 Building the Infrastructure" },
  { label: "💻 Hard Coding in...", value: "💻 Hard Coding in..." },
  { label: "🛠️ Fixing Bugs", value: "🛠️ Fixing Bugs" },
  { label: "🛡️ Securing the Backend", value: "🛡️ Securing the Backend" },
  { label: "🚀 Preparing for Launch", value: "🚀 Preparing for Launch" },
  { label: "🎯 Hitting Milestones", value: "🎯 Hitting Milestones" },
  { label: "🛒 Enhancing Checkout Flow", value: "🛒 Enhancing Checkout Flow" },
  { label: "📣 Spreading the Word", value: "📣 Spreading the Word" },
  { label: "👥 Networking Away", value: "👥 Networking Away" },
  { label: "🤝 Making Deals", value: "🤝 Making Deals" },
  { label: "🎤 Interviewing Customers", value: "🎤 Interviewing Customers" },
  { label: "📈 Analyzing User Data", value: "📈 Analyzing User Data" },
  { label: "📅 Planning the Roadmap", value: "📅 Planning the Roadmap" },
];
const StatusModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span role="button">
          <SquarePen size={14} className="text-muted-foreground" />
        </span>
      </DialogTrigger>
      <DialogContent className="md:w-96 w-auto">
        <DialogHeader>
          <DialogTitle className="text-left ">Status Update</DialogTitle>
        </DialogHeader>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent side="bottom" className="h-52">
            {statusOptions.map((item) => (
              <SelectItem key={item.value} value={item.value}>
               {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex items-center justify-between gap-4">
          <Button variant="outline" className="w-full">
            Cancel
          </Button>
          <Button variant="secondary" className="w-full">
            Update
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default StatusModal;
