import React from "react";
import Head from "next/head";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {

  const followingList = [{nickname: "상빈"}, {nickname: "다현"}, {nickname: "콩이"}]
  const followerList = [{nickname: "상빈"}, {nickname: "다현"}, {nickname: "콩이"}]

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        {/* <FollowingList header="팔로잉 목록" data={followingList} /> */}
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
