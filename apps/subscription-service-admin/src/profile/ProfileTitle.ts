import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "phone";

export const ProfileTitle = (record: TProfile): string => {
  return record.phone?.toString() || String(record.id);
};
