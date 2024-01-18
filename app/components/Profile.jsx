const Profile = () => {
  return (
    <div className="flex gap-2 items-center mt-4">
      <img
        alt="profile"
        className="w-20"
        src="https://imagedelivery.net/tqC70bVt8T6GtQUXNsa2-g/743efd57-1c7a-4ea5-402b-ec349ceae400/public"
      />
      <span>
        <h2 className="text-2xl font-bold">gaurav</h2>
        <h6 className="text-gray-600/70 text-sm font-medium">
          zapp.bio/gauravweb
        </h6>
      </span>
    </div>
  );
};

export default Profile;
