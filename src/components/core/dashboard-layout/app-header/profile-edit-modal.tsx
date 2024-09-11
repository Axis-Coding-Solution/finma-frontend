import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/_ui/dialog";
import { Button, FloatingInput, ReactSelect } from "@/components/ui";
import { useModal } from "@/utils/hooks";
import { Pencil } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { FORM_MODE } from "@/utils/constants";
import { UploadImage } from "@/pages/components/common";
import { useUpdateProfileMutation } from "@/api/hooks";
import { createFormData, errorToast, successToast } from "@/utils";

const statusOptions = [
  { label: "💡 Brainstorming Ideas", value: "💡 Brainstorming Ideas" },
  { label: "🔍 Proofing the Concept", value: "🔍 Proofing the Concept" },
  { label: "📅 Updating the Roadmap", value: "📅 Updating the Roadmap" },
  { label: " 🌐 Exploring New Markets", value: " 🌐 Exploring New Markets" },
  { label: "💬 Chatting with Mentors", value: "💬 Chatting with Mentors" },
  { label: "📝 Writing User Stories", value: "📝 Writing User Stories" },
  { label: "🎨 Designing a New XP", value: "🎨 Designing a New XP" },
  { label: "🔧 Building a New Feature", value: "🔧 Building a New Feature" },
  {
    label: "🚧 Building the Infrastructure",
    value: "🚧 Building the Infrastructure",
  },
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

const stageOptions = [
  {
    value: "I have a great idea and am looking to explore its potential",
    label: "I have a great idea and am looking to explore its potential",
  },
  {
    value: "I'm eager to start a business but need guidance to get started",
    label: "I'm eager to start a business but need guidance to get started",
  },
  {
    value: "I'm developing a startup and working on its launch",
    label: "I'm developing a startup and working on its launch",
  },
  {
    value:
      "My startup is up and running, and I'm focused on scaling and growing it",
    label:
      "My startup is up and running, and I'm focused on scaling and growing it",
  },
  {
    value: "I've started multiple businesses and aim to keep innovating",
    label: "I've started multiple businesses and aim to keep innovating",
  },
  {
    value: "I'm focused on developing cutting-edge technology solutions",
    label: "I'm focused on developing cutting-edge technology solutions",
  },
  {
    value:
      "I excel at spotting market opportunities and crafting success strategies",
    label:
      "I excel at spotting market opportunities and crafting success strategies",
  },
  {
    value:
      "I'm driven by creating social or environmental impact through my ventures",
    label:
      "I'm driven by creating social or environmental impact through my ventures",
  },
  {
    value: "I excel at turning creative ideas into innovative business models",
    label: "I excel at turning creative ideas into innovative business models",
  },
  {
    value: "I'm committed to pioneering startup success in my community",
    label: "I'm committed to pioneering startup success in my community",
  },
];

type OptionType = { value: string; label: string };

interface UserData {
  profilePicture: string | null;
  status: OptionType | null;
  firstName: string;
  lastName: string;
  email?: string;
  role: "innovator" | "mentor" | "expert";
  entrepreneurType: OptionType | null;
}

interface ProfileEditModalProps {
  userData: UserData;
  updateUser?: (user: any) => void;
}

const makeDefaultValues = (userData: UserData) => ({
  firstName: userData.firstName,
  lastName: userData.lastName,
  role: userData.role,
  entrepreneurType: userData.entrepreneurType,
  status: userData.status,
  profilePicture: userData.profilePicture,
});

const ProfileEditModal = ({ userData, updateUser }: ProfileEditModalProps) => {
  const modal = useModal();
  const { mutateAsync } = useUpdateProfileMutation();
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: FORM_MODE,
    defaultValues: makeDefaultValues(userData),
  });

  const onSubmitHandler = async (values: UserData) => {
    try {
      values = {
        ...values,
        profilePicture:
          typeof values.profilePicture === "string"
            ? null
            : values.profilePicture,
      };
      const formData = createFormData(values);
      const res = await mutateAsync(formData);
      if (updateUser) updateUser(res.data);
      modal.close();
      successToast(res.message);
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  const image = watch("profilePicture");

  const handleOpenChange = (open: boolean) => {
    setValue("profilePicture", userData.profilePicture, {
      shouldValidate: true,
    });
    modal.setShow(open);
  };
  return (
    <Dialog modal={modal.show} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <span
          role="button"
          className="min-w-8 h-8 flex justify-center items-center bg-secondary-dark/40 rounded-full p-1"
        >
          <Pencil size={18} className="text-success-dark" />
        </span>
      </DialogTrigger>
      <DialogContent>
        <form
          className="p-5 flex flex-col 2xl:gap-10 gap-6"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div className="flex items-center gap-6">
            <UploadImage
              control={control}
              errors={errors}
              image={image}
              register={register}
              name="profilePicture"
              variant="profile"
            />
            <div className="w-full">
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <ReactSelect
                    label="Status"
                    options={statusOptions}
                    placeholder=""
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="bg-info-light rounded 2xl:p-5 p-4 flex flex-col gap-8">
            <h6 className="text-info text-lg font-medium capitalize">
              {userData.role}
            </h6>
            <div className="grid grid-cols-2 gap-5">
              <Controller
                control={control}
                name="firstName"
                render={({ field }) => (
                  <FloatingInput
                    className="bg-transparent"
                    type="text"
                    label="First Name"
                    {...field}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <FloatingInput
                    className="bg-transparent"
                    type="text"
                    label="Last Name"
                    {...field}
                  />
                )}
              />
            </div>
            <FloatingInput
              className="bg-transparent"
              type="email"
              label="Email"
              value={userData.email}
              readOnly
            />
            <Controller
              name="entrepreneurType"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  options={stageOptions}
                  label="Entrepreneurial Profile"
                  placeholder=""
                  {...field}
                />
              )}
            />
          </div>
          <div className="flex items-center justify-between gap-4 2xl:mt-5 mt-3">
            <DialogClose asChild>
              <Button
                disabled={isSubmitting}
                variant="outline"
                className="w-full"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Update
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileEditModal;
