import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [{ nickname: '강현준' }, { nickname: '븅신' }, { nickname: '빡대가리' }];
  const followingList = [{ nickname: '강현준' }, { nickname: '븅신' }, { nickname: '빡대가리' }];

  return (
    <>
      <Head>
        <title>Node Bird | Profile</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;