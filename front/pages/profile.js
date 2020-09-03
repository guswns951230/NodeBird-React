import AppLayout from "../components/AppLayout";
import Head from 'next/head';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Node Bird | Profile</title>
      </Head>
      <AppLayout><div>My Profile</div></AppLayout>
    </>
  );
};

export default Profile;