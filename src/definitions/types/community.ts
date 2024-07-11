export type CommunityTypes = {
  id: string;
  name: string;
  profilePicture: string;
  role: string;
  status: string;
  communityGoals: {
    goals: string[];
    more: number;
  };
  entrepStage: string;
};
