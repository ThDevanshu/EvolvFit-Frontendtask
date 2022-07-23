export default function UserInfo({
  userID,
  userName,
  userEmail,
  userProfileImage,
}) {
  return (
    <div className="flex gap-6">
      <div className="user-profile-image">
        <div>
          <img
            src={userProfileImage}
            alt="user-profile-image"
            height={50}
            width={50}
          />
        </div>
      </div>
      <div>
        <div className="user-name">
          <h1 className="text-[#FFFFFF] font-black text-xl">{userName}</h1>
        </div>
        <div className="user-email">
          <h1 className="text-[#FFFFFF] font-thin text-sm">{userEmail}</h1>
        </div>
      </div>
    </div>
  );
}
